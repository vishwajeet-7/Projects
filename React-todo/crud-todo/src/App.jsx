import './App.css';
import {Routes,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Index from './Crud/Index';

function App() {
  return (
    <div className="App">
      <h1>Crud Todo</h1>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Index/>}/>
      </Routes>
      <Index/>
    </div>
  );
}

export default App;
