import { RootStack } from './src/navigation';
import React, { useEffect } from 'react';
import { loadFonts } from './src/utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const queryClient = new QueryClient();
  const [isAppReady, setIsAppReady] = React.useState(false);

  const prepareAppData = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();
      await loadFonts();
      // await app.refresh();
    } catch {
    } finally {
      setIsAppReady(true);
      SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    prepareAppData();
  }, []);

  if (!isAppReady) return null;
  return (
    <QueryClientProvider client={queryClient}>
      <RootStack />
    </QueryClientProvider>
  );
}
