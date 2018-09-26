import React,{Component} from 'react'
import axios from 'axios'
import Blank from '../images/blank.png'

class Info extends Component {
    state = {}
    componentDidMount(){
        let {username} = this.props 
        axios.get(`https://api.github.com/users/${username}`)
        .then(res=>{
            this.setState({user:{...res.data,score: res.data.followers + res.data.public_repos*2 + res.data.public_gists*3 + res.data.following/2}})
        })
    }
    render(){
    let user = this.state.user;
    console.log(user);
    
    let userMap = user?(
        <div>
            {this.props.battle?(<h1 className="text-center">{user.score}</h1>):(null)}
            <img src={user.avatar_url?user.avatar_url:(Blank)} alt="" className="img-circle icon" /><br />
            <div className="text-center info">@{this.props.username}</div>
            <div className="text-center info"><a href={user.html_url}>{user.login}</a></div>
            <div className="text-center info"><strong>Followers : </strong>{user.followers}</div>
            <div className="text-center info"><strong>Following : </strong>{user.following}</div>
            <div className="text-center info"><strong>Public Repos : </strong>{user.public_repos}</div>
            <div className="text-center info">{user.public_gists?user.public_gists:''}</div><br/>
        </div>
    ):(
        <div className="text-center">
            <h3>Loading...</h3>
        </div>
    )
     
    return (
        <div>
            {userMap}
        </div>
    )
    }
}

export default Info