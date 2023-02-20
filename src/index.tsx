import { render } from "react-dom";
// import { createRoot } from 'react-dom/client';

// コンポーネント読み込み
import App from "./components/App";
import './components/global.css';
 
const root = document.createElement("div");
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
document.body.appendChild(root);

// root.render(<App />);
render(<App />, root);
