export {};

declare global {
  interface Window {
    fbq: (
      event: 'init' | 'track' | string,
      name?: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

declare const fbq: (
  event: 'init' | 'track' | string,
  name?: string,
  params?: Record<string, unknown>
) => void;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _fbq = fbq;