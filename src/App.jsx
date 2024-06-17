import { DragDropContext } from 'react-beautiful-dnd';
import FlowBuilder from './components/FlowBuilder';
import './index.css';

function App() {
  return (
    <div className="App">
      <div className=" bg-slate-300 flex justify-end">
      <button className=" text-blue-600 bg-white border border-blue-600 px-4 py-1.5 mr-4 my-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors">Save Changes</button>
      </div>
      <FlowBuilder />
    </div>
  );
}

export default App;
