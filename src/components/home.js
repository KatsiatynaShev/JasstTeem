import React from "react";
import './home.css'


class Home extends React.Component {
  onclick () {
        window.location.assign('http://localhost:3000/login/');
      }
  render() {
		return (
			<div className="Home">
      <div className="sharl">
			 <p >Любить чтение — это обменивать часы скуки,неизбежные в жизни, на часы большого наслаждения.</p>
       <p>Шарль Луи де Монтескьё</p>
       </div>

       <div className="djordj">
        <p >Не так важно научить детей читать, намного важнее научить детей обдумывать то, что они читают!</p>
        <p>Джордж Карлин</p>
        </div>


      <button className="button1" onClick={(e) => this.onclick(e)}>Авторизация </button>

			</div>
		);
	}
}
export default Home;
