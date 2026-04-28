/// <reference types="react-scripts" />
declare namespace JSX { interface IntrinsicElements { [e: string]: any; } }

declare module '*.css' {
  const content: any;
  export default content;
}
