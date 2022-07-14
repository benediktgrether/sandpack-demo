import React from 'react';
import './App.css';

import { Sandpack } from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";
import files from "./files.js";
import CodeEditor from './Components/CodeEditor';

function App() {
  return (
    <div className="App">
      <CodeEditor files={files} />
    </div>
  );
}

export default App;