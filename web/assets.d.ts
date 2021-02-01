declare module '*.svg' {
  export const ReactComponent: React.ComponentType<
    React.SVGAttributes<SVGElement>
  >;

  const FileUri: string;
  export default FileUri;
}
