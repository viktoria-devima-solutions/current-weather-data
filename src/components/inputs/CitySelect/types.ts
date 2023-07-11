export interface ICitySelectProps {
  value?: string;
  onChange: (newValue: string) => void;
  setDebouncedSearch: (search: string) => void;
  debouncedDelay?: number;
}
