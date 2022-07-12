import { CssModules } from "./compornents/CssModules";
import { InlineStyle } from "./compornents/InlineStyle";
import { StyledJsx } from "./compornents/StyledJsx";
import { StyledComponents } from "./compornents/StyledComponents";
import { Emotion } from "./compornents/Emotion.jsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
