import React from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {CounterSettings} from "./components/CounterSettings";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="Counter-wrap">
                    <CounterSettings/>
                    <Counter/>
                </div>
            </header>
        </div>
    );
}

export default App;
