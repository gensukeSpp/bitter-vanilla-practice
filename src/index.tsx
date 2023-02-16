import { render } from "react-dom";
// import { createRoot } from 'react-dom/client';

// コンポーネント読み込み
import App from "./components/App";
import './components/global.css';
 
const root = document.getElementById('root');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App />);

render(<App />, root);
