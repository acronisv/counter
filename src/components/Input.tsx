import React, {ChangeEvent} from 'react';

type InputTypeProps = {
    value: number
    type: "text" | "number"
    callback: (event:ChangeEvent<HTMLInputElement>)=>void
    className?: string
}

export const Input = (props:InputTypeProps) => {
    const inputHandler = (event:ChangeEvent<HTMLInputElement>) => {
        props.callback(event)
    }
    return (
        <input value={props.value} type={props.type} onChange={inputHandler} className={props.className}/>
    );
};