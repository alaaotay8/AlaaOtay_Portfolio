declare module 'aos'
{
  export interface AOSOptions {
    duration?: number;
    once?: boolean;
    offset?: number;
    easing?: string;
    delay?: number;
    anchorPlacement?: string;
    disable?: boolean | string[];
  }

  export function init(options?: AOSOptions): void;

  export function refresh(): void;

  export function refreshHard(): void;

  export function update(): void;
}