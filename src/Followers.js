import axios from "axios";
import React from "react"



class Followers extends React.Component {
    state = {
        followers: [],
    };

    componentDidMount(){
        axios.get("https://api.github.com/users/jessejohns-1/followers")
        .then((res) => {
           this.setState({
               followers: res.data
           })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        return(
            <div className="usercards">
              
               {this.state.followers.map((user) => {
                   return (
                       <div className="daddy">
                            <div className="boxes">
                           <h2>{user.login}</h2>
                           </div>
                           <div className="boxes">
                    <img src={user.avatar_url} alt="img"/>
                    </div>
                    <div className="boxes1"><a href={`${user.html_url}`}>
                    <div><button class="glow-on-hover2" type="button">{user.repos_url}</button></div>
                    </a>
                    </div>
                    </div>
                    )
               })}
            </div>
        )
    }
}

export default Followers;
