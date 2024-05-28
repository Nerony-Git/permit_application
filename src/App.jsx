import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './components/Login/Login';

const App = () => {
  return (
    <>
      {/* <Header/>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
      </Routes> */}
      
      <Routes>
        <Route path='/' element={<Login/>} />
      </Routes>
    </>
    // <div className="container py-4 px-3 mx-auto">
    //   <h1>Hello, Bootstrap and Vite!</h1>
    //   <button className="btn btn-primary">Primary button</button>
    // </div>
    
  )
}

export default App
