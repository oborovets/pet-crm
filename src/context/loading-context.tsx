'use client';

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

const LoadingContext = createContext<{
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}>({ loading: false, setLoading: () => {} });

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
      {loading && <div className="global-loader">Loading...</div>}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => useContext(LoadingContext);
