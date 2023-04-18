import React from "react";
import "./dashboard.css";
import { Topbar } from '../../component/navBar/topbar.js';
import { Cards } from '../../component/dashboardCards/cards.js';

class Dashboard extends React.Component {
    render() {
        return (
            <div class = "dashboard">
                <Topbar />
                <div class='dashboardBlocks'>
                    {Cards("Progress")}
                    {Cards("ToDo")}
                    {Cards("Resources")}
                    {Cards("Discussion")}
                </div>
            </div>
        );
    }
}

export { Dashboard };