import './App.css';
import Home from './component/Home';
import { Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
 

  return (
    <div className="App">
      
     <Routes>
      
      <Route path='/' element={<Home />}/>
     </Routes>
     <ToastContainer />


    </div>
  );
}

export default App;
