import React from "react";
import "./projectpage.css";
import { Topbar } from '../../component/navBar/topbar.js';
import { Cards } from '../../component/dashboardCards/cards.js';

class Projectpage extends React.Component {
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


export { Projectpage };