import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {CounterSettings} from "./components/CounterSettings";

function App() {
    let [minValue, setMinValue] = useState<number>(JSON.parse(localStorage.getItem('minValue')||'0'))
    let [maxValue, setMaxValue] = useState<number>(JSON.parse(localStorage.getItem('maxValue')||'0'))
    let [error, setError] = useState<boolean>(false)
    let [reset, setReset] = useState<boolean>(true)

    const defineMinValue = (val:number) => {
        setMinValue(val)
    }

    const defineMaxValue = (val:number) => {
        setMaxValue(val)
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="Counter-wrap">
                    <CounterSettings minValue={minValue}
                                     maxValue={maxValue}
                                     defineMinValue={(val)=>defineMinValue(val)}
                                     defineMaxValue={(val)=>defineMaxValue(val)}
                                     setReset={setReset}
                                     error={error}
                                     setError={setError}
                    />
                    <Counter  minValue={minValue}
                              maxValue={maxValue}
                              reset={reset}
                              setReset={setReset}
                              error={error}
                    />
                </div>
            </header>
        </div>
    );
}

export default App;
