import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function handleFetch<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    credentials: "include",
  });

  if (!response.ok) {
    if (response.status >= 500) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
    throw new Error(`${response.status}: ${await response.text()}`);
  }

  return response.json();
}

export async function apiRequest<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  return handleFetch<T>(url, options);
}

const defaultQueryFn: QueryFunction = async ({ queryKey }) => {
  const url = queryKey[0] as string;
  return handleFetch(url);
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      staleTime: 1000 * 60,
      refetchOnWindowFocus: false,
    },
  },
});
