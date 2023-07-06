import type { ChangeEvent } from 'react';

export interface IDebouncedTextFieldProps {
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setDebouncedSearch: (search: string) => void;
  debouncedDelay?: number;
}
