import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import ErrorBoundary from './ErrorBoundary';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Social from './components/Social';
import Upload from './components/Upload';
import ForYou from './components/ForYou';

import Landing from './components/Landing';
import View from './components/View';
import Chat from './components/Chat';
import {Helmet} from 'react-helmet'


function App() {
  return (
    <ErrorBoundary>
    <div className="App">
    <Helmet>
                <meta charSet="utf-8" />
                <title>FanFusion</title>
                <link rel="canonical" href="https://pre-healthx.web.app" />
                <meta name="description" content="" />
            </Helmet>
      <BrowserRouter>
      <Routes>
      <Route path='/chat' element={(<><Header /><Chat /><Footer /></>
        )} 
        />
      <Route path='/view' element={(<><Header /><View /><Footer /></>
        )} 
        />
      <Route path='/for-you' element={(<><Header /><ForYou /><Footer /></>
        )} 
        />
      <Route path='/upload' element={(<><Header /><Upload /><Footer /></>
        )} 
        />
      <Route path='/social' element={(<><Header /><Social /><Footer /></>
        )} 
        />
      <Route path='/landing' element={(<><Header /><Landing /><Footer /></>
        )} 
        />
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
