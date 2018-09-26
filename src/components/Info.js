import React,{Component} from 'react'
import axios from 'axios'

class Info extends Component {
    state = {}
    componentDidMount(){
        let {username} = this.props 
        axios.get(`https://api.github.com/users/${username}`)
        .then(res=>{
            this.setState({user:res.data})
        })
    }
    render(){
    let user = this.state.user;
    console.log(user);
    
    let userMap = user?(
        <div>
            <img src={user.avatar_url} alt="" className="img-circle icon" /><br />
            <div className="text-center info"><a href={user.html_url}>{user.login}</a></div>
            <div className="text-center info"><strong>Followers : </strong>{user.followers}</div>
            <div className="text-center info"><strong>Following : </strong>{user.following}</div>
            <div className="text-center info"><strong>Public Repos : </strong>{user.public_repos}</div>
            <div className="text-center info">{user.public_gists?user.public_gists:''}</div><br/>

        </div>
    ):(
        <div className="text-center">
            Loading...
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