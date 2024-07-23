import React from 'react';

import List, { ListProps } from './List';
import { useColors } from '../../utils';

interface Props extends ListProps {
  danger?: boolean;
}

const AList = ({ divider = true, dividerColor, danger, rounded, icon, title, ...props }: Props) => {
  const c = useColors();
  dividerColor = dividerColor || c.borderColor2;

  return (
    <List
      titleStyle={
        danger
          ? {
              color: c.danger,
            }
          : null
      }
      // containerStyle={{ marginHorizontal: 0 }}
      divider={divider}
      dividerColor={dividerColor}
      rounded={rounded}
      title={title}
      icon={icon}
      chevron={false}
      {...props}
    />
  );
};

export default AList;
