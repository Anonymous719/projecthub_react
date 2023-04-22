import React from "react";
import "./chatpage.css";
import { chatelement } from '../../component/chatelement/chatelement.js'
import { Topbar } from '../../component/navBar/topbar.js';

class Chatpage extends React.Component {
    render() {
        return (
            <div class="chatpage">
                <Topbar />
                <h1 class='chattitle'>Discussion</h1>
                <hr id='chatdivider' />
                <div class='chat-container'>
                    <div class='chatpagechats'>
                        {chatelement('Ramesh', 'Hello')}
                        {chatelement('Ramesh', 'Test 1')}
                        {chatelement('Ramesh', 'Hello')}
                        {chatelement('Ramesh', 'Hello')}
                    </div>
                    <div class='chatinput'>
                        <input type="text" placeholder="Type your message..." />
                    </div>
                </div>
            </div>
        );
    }
}


export { Chatpage };


