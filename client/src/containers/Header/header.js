
import React from 'react';
import './Try.css';

class Header extends React.Component{
    render(){
        return(
                <div className="NavBar header_body">
                    <div className="user">
                        <div className="buttonsHeader">
                        <button className="Settings">Settings</button>
                        <button className="Logout">Log Out</button>
                        </div>
                    
                    <h1>Welcome!</h1>
                        
                    </div>
                </div>
        );
    }
}

export default Header;