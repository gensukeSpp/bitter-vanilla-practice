import { render } from "react-dom";
// import { createRoot } from 'react-dom/client';

// コンポーネント読み込み
import App from "./components/App";
import './components/reset.css';
import './components/global.css';
 
const root = document.createElement("div");
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.className = "container";
document.body.appendChild(root);

// root.render(<App />);
render(<App />, root);
