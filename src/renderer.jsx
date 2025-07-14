import { createRoot } from 'react-dom/client';
import Hello from './components/Hello';
import './index.css'

const App = () => {
    return (
        <div className='bg-slate-800 text-white min-h-screen'>
            <Hello />
        </div>
    )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
