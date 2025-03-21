const { useState } = React
const  App = () => {
    return (
        <div id="container">
            <h1>React title card</h1>
            <div id="cards">
            <TitleCard name="React" color="blue"/>
            <TitleCard name="Angular" color="red"/>
            <TitleCard name="vue" color="green"/>
        </div>
        </div>
    )
}
const TitleCard = ({name, color}) => {
    
    return(  
        <div id={name}  className="card" style={{backgroundColor:color}}>
            <h1>{name}</h1>
        </div>
    )
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);