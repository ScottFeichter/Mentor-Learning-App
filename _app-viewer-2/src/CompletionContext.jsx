import { createContext, useContext, useState, useCallback } from 'react';

const CompletionContext = createContext(null);

const STORAGE_KEY = 'unit-completion';

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

export function CompletionProvider({ children }) {
  const [state, setState] = useState(load);

  const markComplete = useCallback((key) => {
    setState(prev => {
      const next = { ...prev, [key]: true };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const markIncomplete = useCallback((key) => {
    setState(prev => {
      const next = { ...prev };
      delete next[key];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const isComplete = useCallback((key) => !!state[key], [state]);

  return (
    <CompletionContext.Provider value={{ isComplete, markComplete, markIncomplete }}>
      {children}
    </CompletionContext.Provider>
  );
}

export function useCompletion() {
  return useContext(CompletionContext);
}
