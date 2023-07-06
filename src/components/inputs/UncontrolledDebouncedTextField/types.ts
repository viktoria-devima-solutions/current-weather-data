import type { ChangeEvent } from 'react';

export interface IUncontrolledDebouncedTextFieldProps {
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setDebouncedSearch: (search: string) => void;
  debouncedDelay?: number;
}
