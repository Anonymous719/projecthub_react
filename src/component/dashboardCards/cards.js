import React from "react";
import "./cards.css";

function Cards(type){
    if(type === "Progress"){
        return (
            <div class = 'cardsBox'>
                <div class = 'progress_title'>
                <h1>{type}</h1>
                <h1>Members  04</h1>
                </div>
                <hr />
                <div class = 'progress_members'>
                    <div class = 'progress_scores'>
                        <div class = 'progress_namebar'><p><pre>Name 1  </pre></p>
                        <hr /></div>
                        <p>60%</p>
                    </div>
                    <div class = 'progress_scores'>
                        <div class = 'progress_namebar'><p><pre>Name 2  </pre></p>
                        <hr /></div>
                        <p>30%</p>
                    </div>
                    <div class = 'progress_scores'>
                        <div class = 'progress_namebar'><p><pre>Name 3  </pre></p>
                        <hr /></div>
                        <p>80%</p>
                    </div>
                    <div class = 'progress_scores'>
                        <div class = 'progress_namebar'><p><pre>Name 4  </pre></p>
                        <hr /></div>
                        <p>45%</p>
                    </div>
                </div>
            </div>
    
        );
    }else if(type === "ToDo"){
        return (
            <div class = 'cardsBox'>
                <div class = 'todo_title'>
                    <h1>{type}</h1>
                    <h1>YY:MM:DD</h1>
                </div>
                <hr />
                <div class = 'todo_list'>
                    <div class = 'todo_task'>
                        <p>Task 1 </p>
                        <p>YY:MM:DD</p>
                    </div>
                    <div class = 'todo_task'>
                        <p>Task 2 </p>
                        <p>YY:MM:DD</p>
                    </div>
                    <div class = 'todo_task'>
                        <p>Task 3 </p>
                        <p>YY:MM:DD</p>
                    </div>
                    <div class = 'todo_task'>
                        <p>Task 4 </p>
                        <p>YY:MM:DD</p>
                    </div>
                </div>
            </div>
    
        );
    }else if(type === "Resources"){
        return (
            <div class = 'cardsBox'>
                <h1>{type}</h1>
                <hr />
            </div>
    
        );
    }else if(type === "Discussion"){
        return (
            <div class = 'cardsBox'>
                <h1>{type}</h1>
                <hr />
                <div class='discussion_message'>

                </div>
            </div>
    
        );
    }else{
        return (
            <div></div>
        )
    } 
}

export {Cards};