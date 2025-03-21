const { useState } = React
const  App = () => {
    return (
        <div>
            <h1>React title card</h1>
        </div>
    )
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);