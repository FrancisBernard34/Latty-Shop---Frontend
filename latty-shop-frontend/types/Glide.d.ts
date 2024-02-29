// Glide.d.ts
declare module '@glidejs/glide' {
  export interface Options {
     type?: string;
     startAt?: number;
     perView?: number;
     autoplay?: number;
     animationDuration?: number;
     animationTimingFunc?: string;
     direction?: string;
     hoverpause?: boolean;
     dragThreshold?: number;
     perTouch?: number;
     touchRatio?: number;
     touchAngle?: number;
     keyboard?: boolean;
     focusAt?: string;
     breakpoints?: Record<string, Options>;
     // Adicione outras opções conforme necessário
     arrows?: {
       prev: string;
       next: string;
     };
  }
 
  export default class Glide {
     constructor(selector: string, options?: Partial<Options>);
     mount(): void;
     // Adicione outros métodos conforme necessário
  }
 }
 