import "./App.css";
import React, { useState } from "react";
import { marked } from "marked";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Docs from "./Docs";

const App = () => {
  const [code, setCode] = useLocalStorage();
  const [compiled, setCompiled] = useState(marked.parse(code));
  const [showMarkdown, setShowMarkdown] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const [showDocs, setShowDocs] = useState(false);
  const openMD = () => {
    console.log(0);
    setShowMarkdown(true);
    setShowPreview(false);
    setShowDocs(false);
  };

  const openPreview = () => {
    console.log(0);
    setShowMarkdown(false);
    setShowPreview(true);
    setShowDocs(false);
  };
  const openDocs = () => {
    setShowMarkdown(false);
    setShowPreview(false);

    setShowDocs(true);
  };
  const handleChange = (e) => {
    setCode(e.target.value);
    setCompiled(marked.parse(e.target.value));
  };

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={openMD} className={showMarkdown ? "active" : ""}>
            MarkDown
          </button>
          <button onClick={openPreview} className={showPreview ? "active" : ""}>
            Preview
          </button>
          <button onClick={openDocs} className={showDocs ? "active" : ""}>
            Docs
          </button>
        </div>
        {showMarkdown && (
          <div>
            <textarea onChange={handleChange} value={code} />
          </div>
        )}
        {showPreview && (
          <div>
            <textarea value={compiled} readOnly />
          </div>
        )}
        {showDocs && <Docs />}
      </div>
    </>
  );
};

export default App;
