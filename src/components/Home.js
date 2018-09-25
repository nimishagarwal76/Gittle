import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <div className="home text-center">
            <h2>Battle with your Friends!!</h2>
            <Link to="/battle"><button className="btn btn-md">Battle</button></Link>
        </div>
    )
}

export default Home;