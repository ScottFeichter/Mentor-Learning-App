import { useState } from 'react';
import Explaining from './Explain';
import './ExplainGroup.css';

export default function ExplainingGroup({ concepts, unitKey, children }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitAll = () => {
    console.log('Explaining Submit All:', {
      key: unitKey,
      concepts,
      timestamp: new Date().toISOString(),
    });
    setSubmitted(true);
  };

  const btn = (
    <button
      className={`explaining-submit-all${submitted ? ' disabled' : ''}`}
      onClick={handleSubmitAll}
      disabled={submitted}
    >
      {submitted ? 'Submitted' : 'Submit All'}
    </button>
  );

  return (
    <div className="explaining-group">
      <div className="explaining-submit-all-top">{btn}</div>

      {children}

      {concepts.map((concept, i) => (
        <Explaining
          key={concept}
          concept={concept}
          conceptNumber={i + 1}
          recordingKey={`${unitKey || 'default'}--${concept.slice(0, 40)}`}
        />
      ))}

      <div className="explaining-submit-all-bottom">{btn}</div>
    </div>
  );
}
