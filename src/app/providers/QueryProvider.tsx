'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

interface QueryProvider {
  children: ReactNode;
}

export default function ReactQueryProvider({ children }: QueryProvider) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
