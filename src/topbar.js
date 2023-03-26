import React from 'react';
import './topbar.css';

class Topbar extends React.Component {
    render(){
        return(
            <div id = 'topbar'>
                <h1 id = 'startlogo'>Project Hub</h1>
                <div id = 'endlinks'>
                    <p>Home</p>
                    <p>Home</p>
                </div>
            </div>
        )
    }
}

export {Topbar}