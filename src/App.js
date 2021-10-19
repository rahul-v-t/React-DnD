import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import DragDrop from './components/DragDrop';

function App() {
  return (
    <>
    <DndProvider backend={HTML5Backend} >
        <div>
          <DragDrop />
        </div>
    </DndProvider>
    </>
  );
}

export default App;
