import React from 'react';

import ThemeView from './ThemeView';
import { Header, HeaderProps } from '../header';

interface Props {
  headerOptions?: HeaderProps;
  component?: React.ReactNode;
  children?: any;
}

const NormalView = ({ headerOptions, component, children }: Props) => {
  return (
    <ThemeView
      component={
        <React.Fragment>
          <Header title={headerOptions?.title} showBackButton={true} {...headerOptions} />
          {component || children}
        </React.Fragment>
      }
    />
  );
};

export default NormalView;
