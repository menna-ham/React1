import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/react-fontawesome/index.js';
import 'jquery/dist/jquery.min.js';
import $ from 'jquery'
import MainLayout from './MainLayout/MainLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Portfolio from './Protfolio/Portfolio';
import About from './About/About';
import Contact from './Contact/Contact';
import HeaderSec from './HeaderSec/HeaderSec';
import NotFound from './NotFound/NotFound';


function App() {
  let routes = createBrowserRouter([
    {path:'/',element:<MainLayout/>,children:[

      {index:true, element:<HeaderSec/>},
      {path:'/portfolio', element:<Portfolio/>},
      {path:'/about', element:<About/>},
      {path:'/contact', element:<Contact/>},
      {path:'*', element:<NotFound/>},
    
    ]}
  ])

  return (
    <div className="App">

      <RouterProvider router={routes}/>

    </div>
  );
}

export default App;
