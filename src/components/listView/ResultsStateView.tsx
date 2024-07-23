import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Sizes } from '../../utils';
// import { EmptyAnimation, ErrorAnimation } from '../animations';
import { Loading, LoadingProps } from '../loadingIndicator';
import { Logger, LoggerProps } from '../log';
import { NoReviews, NoSearch } from '../svgs';

export interface ResultsStateViewProps extends LoggerProps {
  location?: string;
  loading?: boolean;
  totalData?: number;
  error?: any;
  errorLogOption?: LoggerProps;
  loadingOptions?: LoadingProps;
}

const ResultsStateView = ({
  location,
  loading,
  loadingOptions,
  totalData,
  error,
  errorLogOption,
  ...props
}: ResultsStateViewProps) => {
  let title: string;
  let subtitle: string;
  let graphic: React.ReactNode;

  switch (location) {
    case 'reviews':
      title = 'No Reviews Yet';
      subtitle = 'You do not have any reviews at this time!';
      graphic = <NoReviews />;
      break;
    case 'search':
      title = 'No Result Found';
      subtitle = 'We can’t find any item matching your search';
      graphic = <NoSearch />;
      break;
    default:
      title = 'No Result Found';
      subtitle = '';
  }

  if ((totalData || 0) > 0) return null;
  return (
    <View style={styles.container}>
      {loading ? <Loading {...loadingOptions} /> : null}

      {!loading && totalData === 0 && !error ? (
        <Logger title={title} graphic={graphic} subtitle={subtitle} {...props} />
      ) : null}

      {!loading && error ? (
        <Logger
          title="An error occured"
          subtitle="Something happened. Please try again later."
          // graphic={<ErrorAnimation size={40} />}
          {...errorLogOption}
        />
      ) : null}
    </View>
  );
};

export default ResultsStateView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: Sizes.padding,
  },
});
