import React from 'react';
import { Txt } from '../text';
import { useColors } from '../../utils';

const HeaderSubTitle = ({ content }: { content: React.ReactNode }) => {
  const c = useColors();
  return (
    <Txt
      style={{
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      }}
      align="center"
      light
      color={c.subHeading}
      size={16}>
      {content}
    </Txt>
  );
};

export default HeaderSubTitle;
