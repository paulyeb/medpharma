import React, { useMemo } from 'react';
import { FlatList, FlatListProps } from 'react-native';

import ThemeView from '../View/ThemeView';
import { useColors } from '../../utils';

type ScrollViewType<T> = T;

export type ListViewProps<T = any> = {
  title?: string | React.ReactNode;
  customScrollComponent?: any;
  children?: any;
  ListHeaderComponent?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ComponentType<any>
    | null
    | undefined;
} & ScrollViewType<T>;

function ListView<T = FlatListProps<any>>(props: ListViewProps<T>) {
  const { title, ListHeaderComponent, customScrollComponent, ...rest } = props;
  const c = useColors();
  const CC = useMemo(() => customScrollComponent || FlatList, [customScrollComponent]);

  return (
    <ThemeView
      component={
        <CC
          indicatorStyle={c.color as any}
          ListHeaderComponent={
            <>
              {title}
              {ListHeaderComponent}
            </>
          }
          {...rest}
          estimatedItemSize={50}
        />
      }
    />
  );
}

export default ListView;
