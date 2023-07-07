import type { IDebouncedTextFieldProps } from '../DebouncedTextField/types';

export type IUncontrolledDebouncedTextFieldProps = Omit<
  IDebouncedTextFieldProps,
  'search' | 'onSearchChange'
>;
