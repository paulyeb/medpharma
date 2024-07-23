import React from 'react';

import KeyboardAvoidView from './KeyboardAvoidView';
import { HeaderProps } from '../header';
import { HeaderButton } from '../header/Header';
import { SecondaryListView } from '../listView';
import { Txt } from '../text';

interface Props {
  component?: any;
  onSubmitPress?: () => void;
  headerOptions?: HeaderProps;
  children?: any;
  buttonOptions?: {
    disabled?: boolean;
  };
}

const FormEditView = ({
  component,
  onSubmitPress,
  headerOptions,
  buttonOptions,
  children,
}: Props) => {
  return (
    <KeyboardAvoidView>
      <SecondaryListView
        headerOptions={{
          ...headerOptions,
          headerRight: (
            <HeaderButton
              component={({ color, size }) => (
                <Txt size={size} color={color} weight="bold" t="Done" />
              )}
              {...buttonOptions}
            />
          ),
        }}>
        {component || children}
      </SecondaryListView>
    </KeyboardAvoidView>
  );
};

export default FormEditView;
