import React from "react";
import axios from "axios";


class GitUser extends React.Component{
    
    state = {
        gitpeople: [],
    };

    componentDidMount(){
        axios
        .get("https://api.github.com/users/jessejohns-1")
        .then ((res) => {
            this.setState({
                gitpeople: res.data,
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }




    render(){
        return(
            <div className="daddycool">
                 <img src={this.state.gitpeople.avatar_url} alt="img" />
                <div className="box">
                <h2>Name:{this.state.gitpeople.login}</h2>
                </div>
                <div className="box">
                <h2>Created At:{this.state.gitpeople.created_at}</h2>
                </div>
                <div className="box">
                <h2>Last Updated:{this.state.gitpeople.updated_at}</h2>
                </div>
                <div className="box">
                <h2>Followers:{this.state.gitpeople.followers}</h2>
                </div>
                <div className="box">
                <h2>Following:{this.state.gitpeople.following}</h2>
                </div>
                <div className="box">
                <h2>Public-Repos:{this.state.gitpeople.public_repos}</h2>
                </div>
                
            </div>
            
        )
    }
}



export default GitUser