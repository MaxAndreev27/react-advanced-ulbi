import { createRoot } from 'react-dom/client';
import {Counter} from "./components/Counter";

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
    <div>
        <h1>Welcome to my app</h1>
        <Counter></Counter>
        <button>Send aaa</button>
    </div>
);