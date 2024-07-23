import React, { useMemo } from 'react';
import { FlatListProps, SafeAreaView, View } from 'react-native';

import ListView, { ListViewProps } from './ListView';
import ResultsStateView, { ResultsStateViewProps } from './ResultsStateView';
import { AnimatedHeader, Header, HeaderProps } from '../header';
import { Loading } from '../loadingIndicator';

interface HeaderOptions extends HeaderProps {
  staticTitle?: React.ReactNode;
}

interface Props<T> {
  listType?: 'large-title' | 'classic';
  headerOptions?: HeaderOptions;
  listViewOptions: ListViewProps<T>;
  children?: any;
  totalData?: number;
  loading?: boolean;
  fetchingMore?: boolean;
  resultStateOptions?: ResultsStateViewProps;
  isRefetching?: boolean;
  error?: any;
  location?: string;
}

function PrimaryListView<ListViewType = FlatListProps<any>>({
  listType,
  headerOptions,
  listViewOptions,
  loading,
  fetchingMore,
  totalData,
  isRefetching,
  resultStateOptions,
  error,
  children,
  location,
}: Props<ListViewType>) {
  listViewOptions.children = children;

  const ResultState = useMemo(
    () => (
      <ResultsStateView
        loading={loading!}
        totalData={totalData!}
        error={error}
        location={location}
        {...resultStateOptions}
      />
    ),
    [loading, totalData, resultStateOptions, error, location],
  );
  const fetchMoreLoading = useMemo(
    () =>
      fetchingMore && !isRefetching && (totalData || 0) > 0 ? (
        <View style={{ marginVertical: 12 }}>
          <Loading />
        </View>
      ) : null,
    [fetchingMore],
  );

  if (listType === 'large-title') {
    return (
      <AnimatedHeader
        headerLeft={headerOptions?.headerLeft}
        headerRight={headerOptions?.headerRight}
        title={headerOptions?.title}
        staticTitle={headerOptions?.staticTitle}
        scrollableView={({ callAnimation, scrollEventThrottle, animatedTitle }) => (
          <ListView<ListViewType>
            title={animatedTitle}
            scrollEventThrottle={scrollEventThrottle}
            onScroll={callAnimation}
            children={children}
            ListEmptyComponent={ResultState}
            ListFooterComponent={fetchMoreLoading}
            {...listViewOptions}
          />
        )}
      />
    );
  }

  return (
    <React.Fragment>
      <Header {...headerOptions} />
      {/* <SafeAreaView style={{ flex: 1 }}> */}
      <ListView<ListViewType>
        children={children}
        ListEmptyComponent={ResultState}
        ListFooterComponent={fetchMoreLoading}
        {...listViewOptions}
      />
      {/* </SafeAreaView> */}
    </React.Fragment>
  );
}

export default PrimaryListView;
