import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Mobile from './Pages/Mobile.jsx'
import './index.css'

const isMobile = () => window.innerWidth <= 768;

const RootComponent = () => {
  return isMobile() ? <Mobile /> : <App />;
};
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RootComponent />
  
)
