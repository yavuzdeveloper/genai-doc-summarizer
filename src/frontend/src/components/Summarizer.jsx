import { useState } from "react";
import axios from "axios";

import "../App.css";

function Summarizer() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (!file) return;
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = event => {
      setText(event.target.result);
    };
    reader.readAsText(file, "UTF-8");
  };

  const handleSubmit = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setSummary("");
    try {
      const res = await axios.post("http://localhost:8080/summarize", { text });
      setSummary(
        res.data.summary_text || res.data.summary || "No summary returned."
      );
    } catch (error) {
      console.error("API error:", error);
      setSummary("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setText("");
    setFileName("");
    setSummary("");
  };

  return (
    <div className="container">
      <h1>🧠 AI Document Summarizer</h1>

      <label htmlFor="file-upload" className="file-upload-label">
        📎 {fileName || "Upload a .txt file"}
      </label>
      <input
        id="file-upload"
        type="file"
        accept=".txt"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      <div className="textarea-wrapper">
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          rows={10}
          placeholder="Enter or paste your document here..."
        />
        {text && (
          <button
            className="clear-button"
            onClick={handleClear}
            title="Clear text"
          >
            ×
          </button>
        )}
      </div>

      <div className="button-row">
        <button onClick={handleSubmit} disabled={loading || !text.trim()}>
          {loading ? (
            <>
              <div className="spinner" /> Summarizing...
            </>
          ) : (
            "Summarize"
          )}
        </button>
      </div>

      {!loading && summary && (
        <div style={{ color: "green", marginTop: 10 }}>
          ✅ Summary generated successfully
        </div>
      )}

      {summary && (
        <div style={{ marginTop: 30 }}>
          <h2>Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default Summarizer;
