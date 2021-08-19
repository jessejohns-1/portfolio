import React from "react"
import Followers from "./Followers";
import GitUser from "./GitUser";
import "./App"

class App extends React.Component{
  
state = {};

componentDidMount() {};

render() {
  return(
    <div><a href="https://github.com/jessejohns-1?tab=repositories">
      <div><button class="glow-on-hover" type="button">My Github</button></div>
      </a>
      <GitUser/>
      <Followers/>
    </div>
  )
}


}
export default App;
