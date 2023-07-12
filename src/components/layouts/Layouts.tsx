import EmptyLayout from './EmptyLayout';
import MainLayout from './MainLayout';

export const Layouts = {
  Main: MainLayout,
  Empty: EmptyLayout,
};

export type LayoutKeys = keyof typeof Layouts;
