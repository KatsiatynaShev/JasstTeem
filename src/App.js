import React from "react";
import Info from "./components/info"
import Login from "./components/login"
import Profile from "./components/profile"
import Home from "./components/home"
import ReactDOM from 'react-dom';
import {Route,Link} from 'react-router-dom'
import './App.css'

class App extends React.Component {

  exid () {
    if(this.props.formValid){
      window.location.assign('http://localhost:3000/profile/');
    }
    else {
      window.location.assign('http://localhost:3000/login/');
    }
 }

	render() {
        return (
          <div  className="nav">
           <nav  >
             <ul>
               <li>
                  <a><Link to="/" className="active" exact >Главная страница</Link></a>
               </li>
               <li>
                  <a><Link onClick={(e)=>this.exid()}> Пользователь {this.props.username}</Link></a>
               </li>
               <li>
                  <a><Link to="/info">Информация</Link></a>
               </li>
            </ul>
           </nav>


           <hr/>


                   <Route path="/" exact component={Home}/>
                   <Route path="/info" exact component={Info}/>
                   <Route path="/login"  exact component={Login}  />
                   <Route path="/profile" exact component={Profile}  />


          </div>

		);
	}

}
export default App;
