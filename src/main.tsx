import { createRoot } from "react-dom/client";
import WearablePreview from "./WearablePreview";
import "./style.css";
function App() {
  return (
    <>
      <header className="lab-header">
        <a
          href="https://rishitpradhan.com"
          aria-label="Rishit Pradhan portfolio"
        >
          rp<span>•</span>
        </a>
        <a href="https://rishitpradhan.com">Rishit Pradhan ↗</a>
      </header>
      <main className="standalone-main">
        <span className="eyebrow">SIGNALS → INTERFACES</span>
        <h1>Wearable Signal Lab</h1>
        <p className="standalone-intro">
          Make a stream of numbers feel understandable.
        </p>
        <div className="experiment-wrap">
          <WearablePreview />
        </div>
        <p className="standalone-note">
          A Drip-inspired interface experiment using simulated data. No device
          connection or medical interpretation.
        </p>
      </main>
      <footer className="lab-footer">
        <span>Built by Rishit Pradhan</span>
        <a href="https://rishitpradhan.com/projects/drip/">
          Portfolio context ↗
        </a>
      </footer>
    </>
  );
}
createRoot(document.getElementById("root")!).render(<App />);
