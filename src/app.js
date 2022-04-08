import React from "react";
import ReactDom from 'react-dom'

const App = () => {
    return (<h1>This is basic react!</h1>);
}


ReactDom.render(<App />,document.querySelector(".container"));