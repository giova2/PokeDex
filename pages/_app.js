import '../styles/globals.css'

import { QueryClient, QueryClientProvider } from "react-query";
import ErrorBoundary from '../components/ErrorBoundary'
import Error from '../components/Error'

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary FallbackComponent={Error}>
        <Component {...pageProps} />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default MyApp;
