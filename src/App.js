
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Routers } from './comp/frontend/routes/Routers';

function App() {
  return (
    <>
     <Routes>
      {
        Routers.map((ele, index)=>{
          return(
            <Route path={ele.path} key={index} element={ele.element}/>
          )
        })
      }
     </Routes>
    </>
  );
}

export default App;
