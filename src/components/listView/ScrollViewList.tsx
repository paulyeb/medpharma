import React from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';

interface ScrollViewListProps extends ScrollViewProps {}

const ScrollViewList = ({ children, ...props }: ScrollViewListProps) => {
  return <ScrollView {...props}>{children}</ScrollView>;
};

export default ScrollViewList;
