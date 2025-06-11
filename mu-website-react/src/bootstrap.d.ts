declare module 'bootstrap/dist/js/bootstrap.bundle.min.js' {
  export * from 'bootstrap';
}

declare global {
  interface Window {
    bootstrap: {
      Carousel: {
        new(element: Element, options?: {
          interval?: number;
          touch?: boolean;
          ride?: string;
          pause?: boolean | string;
        }): any;
        getInstance(element: Element): any;
      };
    };
  }
} 