import React from 'react';
import ReactDOM from 'react-dom';

// import App from './todo';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();




const Header=()=>{
    return(
        <div>
            <table border = '1'>
            <tr>
                <th width ="24%">Detailes</th>
                <th width ="25%">deadline</th>
                <th width ="25%">important</th>
                <th width ="24%">done</th>
            </tr>
            </table>
        </div>
    )
}
const Print = (props) => {
    return (
        <div>
            <table border = '1'>
            <tr>
                <td width ="25%">{props.line.Details}</td>
                <td width ="26%">{props.line.deadline}</td>
                <td width ="27%">{props.line.important}</td>
                <td width ="25%">{props.line.done}</td>
            </tr>
            </table>
        </div>
    )
}

const Printall = (props) => {
        return (
            props.toDoList.map(line =><Print line={line}/>)
        )
}

export const App = () => {
    const toDoList = [
        {
            Details: "sara",
            deadline: "1.2",
            important: "important",
            done: "V"
        },
        {
             Details: "rivka",
            deadline: "3.4",
            important: "",
            done: "X"
        },
        {
            Details: "rachel",
            deadline: "5.6",
            important: "important",
            done: "V"
        },
        {
            Details: "lea",
            deadline: "7.8",
            important: "",
            done: "X"
            },
        
    ];
    return (
        <div style={{margin:'15%'}}>
        <br/>
        <br/>
            <h1>My Task board:</h1>
            <br/>
            <Header/>
            <Printall toDoList={toDoList}/>
        </div>   
        );
    };
ReactDOM.render(<App />, document.getElementById("root"));
