import React from "react";
import Info from "./components/info"
import Form from "./components/form"
import User from "./components/user"
import ReactDOM from 'react-dom';
import {Route,Link} from 'react-router-dom'
import './App.css'

class App extends React.Component {

  exid () {
    if(true){
      window.location.assign('http://localhost:3000/user/');
    }
    else {
      window.location.assign('http://localhost:3000/');
    }
 }


  onclick () {
        window.location.assign('http://localhost:3000/form/');
      }

	render() {

        return (
          <div >
           <nav  >
             <ul>
               <li>
                  <a><Link to="/" className="active" exact >Главная страница</Link></a>
               </li>
               <li disabled={false}>
                  <a><Link to="/user" onClick={(e)=>this.exid(false)}>Пользователь</Link></a>
               </li>
               <li>
                  <a><Link to="/info">Информация</Link></a>
               </li>
            </ul>
           </nav>


           <hr/>
           <div className="nav">
                   <Route  className="glav" path="/" exact  render={()=><button className="button1" onClick={(e) => this.onclick(e)}>Авторизация </button>} />
                   <Route path="/info" exct component={Info}/>
                   <Route path="/form" exact component={Form}/>
                   <Route path="/user" exact component={User}/>
          </div>

          </div>

		);
	}

}
export default App;
