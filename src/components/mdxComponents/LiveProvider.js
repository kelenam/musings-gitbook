import * as React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import prismTheme from "prism-react-renderer/themes/duotoneDark";


const ReactLiveProvider = ({ code }) => {
  return (
    <LiveProvider theme={prismTheme} code={code}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
};

export default ReactLiveProvider;
