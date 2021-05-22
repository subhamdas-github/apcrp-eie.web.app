import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AdminNavigation from './AdminNavigation';
// import SideNavPage from './SideNavPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error404 from './Error404';


ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Error404 />, document.getElementById('root'));
// ReactDOM.render(<AdminNavigation/>, document.getElementById('form'));
// ReactDOM.render(<SideNavPage/>, document.getElementById('sidenav'));