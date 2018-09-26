import React, {Component} from 'react'
import Info from './Info'

class Form extends Component{
    state = {
        players : [
            {
                data : false,
                content : '',
                id:1
            },
            {
                data : false,
                content : '',
                id:2
            }
        ],
        battle:false
    }

    handleChange = (e)=>{
        var players = this.state.players.filter(player=>{
            return Number(player.id) !== Number(e.target.id)
        })
        players.push({
            data : false,
            content : e.target.value,
            id : Number(e.target.id)
        })
        this.setState({
            players : players
        });
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        var temp = this.state.players.find(player=>{
            return Number(e.target.id) === Number(player.id)
        })        
        var players = this.state.players.filter(player=>{
            return Number(player.id) !== Number(e.target.id)
        })
        players.push({
            data : true,
            content : temp.content,
            id : Number(e.target.id)
        })
        this.setState({
            players : players
        });
    }
    handleReset = (id)=>{
        var players = this.state.players.filter(player=>{
            return Number(player.id) !== Number(id)
        })
        players.push({
            data : false,
            content : "",
            id : id
        })
        this.setState({
            players : players
        });
    }
    handleBattle = ()=>{
        this.setState({
            battle:true
        })
    }
    render(){
        let player1 = this.state.players.find(player=>{
            return Number(player.id) === 1
        })
        let player2 = this.state.players.find(player=>{
            return Number(player.id) === 2
        })
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            {!player1.data?(
                            <form onSubmit={this.handleSubmit} id="1">
                            <strong><h2 className="text-center">Player 1</h2></strong>
                            <input id = "1" type="text" onChange={this.handleChange} value={player1.content} className="form-control"/>
                            <button type="button" className="btn forBtn" id="1" onClick={this.handleSubmit}>Submit</button>
                            </form>
                            ):(
                                <div>
                                <Info username={player1.content} battle={this.state.battle}/>
                                <button className="btn btn-warning reset" onClick={()=>{this.handleReset(1)}}>RESET</button>    
                                </div>
                            )}
                            
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            {!player2.data?(
                            <form onSubmit={this.handleSubmit} id="2">
                            <strong><h2 className="text-center">Player 2</h2></strong>
                            <input id = "2" type="text" onChange={this.handleChange} value={player2.content} className="form-control"/>
                            <button type="button" className="btn forBtn" id="2" onClick={this.handleSubmit}>Submit</button>
                            </form>
                            ):(
                                <div>
                                <Info username={player2.content} battle={this.state.battle}/>
                                <button className="btn btn-warning reset" onClick={()=>{this.handleReset(2)}}>RESET</button>    
                                </div>
                                )}
                        </div>
                    </div>
                    {(player1.data && player2.data)?(<button className="btn battleButton" onClick={this.handleBattle}>Battle</button>):(<div></div>)}
                </div>
            </div>
        )
    }
}

export default Form