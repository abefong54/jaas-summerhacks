import React from 'react';
import './header.css';
    

class dashboard extends React.Component{
    render(){
        return(
            <div>
                <h1> Header </h1>
                <button type="submit"> Settings </button>
                <button type="submit"> Logout </button>
            </div>
        )
    }
}

export default dashboard;