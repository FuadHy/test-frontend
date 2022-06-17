/*
** Author: Fuad
** github.com/FuadHy
** To: addissoftwares
*/
import './App.css';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import history from './history';
import SideBar from './components/layouts/SideBar'
import Main from './components/layouts/Main'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function App() {
  return (
    // unfortunately we dont need any route, the wrapper is just placed since its on single page.
    <Router history={history}>
      <SideBar />
      <Main />
    </Router>
  );
}

export default App;
