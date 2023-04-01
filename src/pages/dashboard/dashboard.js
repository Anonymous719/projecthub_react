import React from "react";
import "./dashboard.css";
import { Topbar } from '../../component/navBar/topbar.js';
import { Cards } from '../../component/dashboardCards/cards.js';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Topbar />
                <div class = 'greetings'>
                    <p>Welcome, Username</p>
                    <div>
                        <p>Ongoing</p>
                        <p>Completed</p>
                    </div>
                </div>
                <hr />
                <div class='dashboardBlocks'>
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
            </div>
        );
    }
}

export { Dashboard };