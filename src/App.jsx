import { Toaster } from 'react-hot-toast';
import FlowBuilder from './components/FlowBuilder';
import Header from './components/header/Header';
import ContextProvider from './context/ContextProvider';
import './index.css';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Header />
        <FlowBuilder />
        <Toaster />
      </ContextProvider>
    </div>
  );
}

export default App;
