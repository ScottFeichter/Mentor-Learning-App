import { useState, useEffect } from 'react';
import './Quiz.css';

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function buildQuestions(raw) {
  return shuffle(raw).map(q => ({
    ...q,
    options: shuffle(q.options),
  }));
}

export default function Quiz({ questions: raw, quizId }) {
  const storageKey = `quiz-attempts-${quizId}`;

  const [questions, setQuestions] = useState(() => buildQuestions(raw));
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [attempts, setAttempts] = useState(() => {
    try { return JSON.parse(localStorage.getItem(storageKey)) || []; }
    catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(attempts));
  }, [attempts, storageKey]);

  const handleSelect = (qIdx, option) => {
    if (submitted) return;
    setSelected(prev => ({
      ...prev,
      [qIdx]: prev[qIdx] === option ? undefined : option,
    }));
  };

  const handleSubmit = () => {
    if (submitted) return;
    const results = questions.map((q, i) => ({
      question: q.question,
      selected: selected[i] || null,
      correct: q.answer,
      passed: selected[i] === q.answer,
    }));
    const score = results.filter(r => r.passed).length;
    const total = questions.length;
    const attempt = {
      date: new Date().toLocaleDateString(),
      score: `${score}/${total}`,
      results,
    };
    const updated = [...attempts, attempt];
    setAttempts(updated);
    setSubmitted(true);
    console.log('Quiz submission:', attempt);
  };

  const handleNewAttempt = () => {
    setQuestions(buildQuestions(raw));
    setSelected({});
    setSubmitted(false);
  };

  const latestAttempt = submitted ? attempts[attempts.length - 1] : null;

  return (
    <div className="quiz">

      <div className="quiz-history">
        <p className="quiz-history-title">Attempt History</p>
        <table className="quiz-history-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {attempts.map((a, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{a.date}</td>
                <td>{a.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="quiz-score">Most Recent Score: {attempts.length > 0 ? attempts[attempts.length - 1].score : 'N/A'}</p>
      </div>

      <div className="quiz-top-buttons">
        <button className="quiz-btn quiz-btn-new" onClick={handleNewAttempt}>
          New Attempt
        </button>
        <button className={`quiz-btn quiz-btn-submit${submitted ? ' disabled' : ''}`} onClick={handleSubmit} disabled={submitted}>
          Submit Answers
        </button>
      </div>

      <div className="quiz-questions">
        {questions.map((q, qIdx) => {
          const result = submitted ? latestAttempt.results[qIdx] : null;
          return (
            <div key={qIdx} className={`quiz-question${submitted ? (result.passed ? ' correct' : ' incorrect') : ''}`}>
              <p className="quiz-question-text">{qIdx + 1}. {q.question}</p>
              <div className="quiz-options">
                {q.options.map((opt, oIdx) => {
                  const isSelected = selected[qIdx] === opt;
                  const isCorrect = submitted && opt === q.answer;
                  const isWrong = submitted && isSelected && !isCorrect;
                  return (
                    <div
                      key={oIdx}
                      className={`quiz-option${isSelected ? ' selected' : ''}${isCorrect ? ' reveal-correct' : ''}${isWrong ? ' reveal-wrong' : ''}`}
                      onClick={() => handleSelect(qIdx, opt)}
                    >
                      <span className="quiz-radio-wrap">
                        <span className="quiz-radio-circle" />
                        {isSelected && !submitted && <span className="quiz-check">✓</span>}
                      </span>
                      {opt}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="quiz-bottom-buttons">
        <button className={`quiz-btn quiz-btn-submit${submitted ? ' disabled' : ''}`} onClick={handleSubmit} disabled={submitted}>
          Submit Answers
        </button>
        <button className="quiz-btn quiz-btn-new" onClick={handleNewAttempt}>
          New Attempt
        </button>
      </div>

    </div>
  );
}
