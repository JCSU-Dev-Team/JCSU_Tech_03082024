import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import ErrorBoundary from './ErrorBoundary';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <ErrorBoundary>
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/signup' element={(<><Signup /></>
        )} 
        />
      <Route
        path='/login'
        element={(
          <>
          <Login />
          <Footer/>
          </>
        )} 
        />
    <Route
        path='/'
        element={(
          <>
          <Header />
          <Home/>
          <Footer/>
          </>
        )} 
        />
        </Routes></BrowserRouter>
    </div>
    </ErrorBoundary>
  );
}

export default App;
