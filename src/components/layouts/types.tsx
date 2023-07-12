import type { LayoutKeys } from './Layouts';
import type { NextComponentType, NextPage, NextPageContext } from 'next';
import type { AppProps } from 'next/app';

export type MyPage<P = {}, IP = P> = NextPage<P, IP> & {
  Layout?: LayoutKeys;
};
export type MyAppProps = AppProps & {
  Component: NextComponentType<NextPageContext, any, any> & {
    Layout: LayoutKeys;
  };
};
