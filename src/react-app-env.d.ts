/// <reference types="react-scripts" />
declare module '*.css' { const c: any; export default c; }
declare namespace JSX {
  interface IntrinsicElements { [e: string]: any; }
}
