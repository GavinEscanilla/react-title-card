const { useState } = React
const  App = () => {
    return (
        <div>
            <h1>React title card</h1>
        </div>
    )
}
const TitleCard = () => {
    const [name,setname] = useState('')
    const[color,setColor] = useState('')
    return(  
        <div id="}
            <h1>React title card</h1>
        </div>
    )
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);