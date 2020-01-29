import React from "react";
import Info from "./components/info"
import Form from "./components/form"
import User from "./components/user"
import book from "./components/book.jpg"
import ReactDOM from 'react-dom';
import {Route,Link} from 'react-router-dom'
import './App.css'

class App extends React.Component {

  exid () {
    if(this.props.formValid){
      window.location.assign('http://localhost:3000/user/');
    }
    else {
      window.location.assign('http://localhost:3000/form/');
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
               <li>
                  <a><Link onClick={(e)=>this.exid()}>Пользователь</Link></a>
               </li>
               <li>
                  <a><Link to="/info">Информация</Link></a>
               </li>
            </ul>
           </nav>


           <hr/>
           <div className="nav">
           
                   <Route path="/" exact  render={()=><button className="button1" onClick={(e) => this.onclick(e)}>Авторизация </button>} />
                   <Route path="/info" exact component={Info}/>
                   <Route path="/form" exact component={Form} />
                   <Route path="/user" exact component={User} />
          </div>

          </div>

		);
	}

}
export default App;
