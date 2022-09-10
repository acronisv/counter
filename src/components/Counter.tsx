import {Button} from "./Button";
import style from './Counter.module.css'
import {useEffect, useState} from "react";

type CounterPropsType = {
    minValue: number
    maxValue: number
    reset: boolean
    active: boolean
    setReset: (state: boolean) => void
    error: boolean
}

export const Counter = (props: CounterPropsType) => {

    let [value, setValue] = useState<number>(props.minValue)

    useEffect(() => setValue(props.minValue), [props.minValue, props.maxValue])

    const incButton = () => {
        if (value < props.maxValue) {
            setValue(++value)
            if (value === props.maxValue) {
                props.setReset(false)
            }
        }
    }

    const resetButton = () => {
        setValue(props.minValue)
        props.setReset(true)
    }

    let className = value === props.maxValue ? `${style.counterInput} ${style.counterInputEnd}` : style.counterInput

    return (
        <div className={style.counterWrapper}>
            {props.error
                ? <input value={'Incorrect value'} className={style.counterInputError} type="text"/>
                : props.active ? <input value={value} className={className} type="text"/>
                    : <input value={'Enter values and press set'} className={style.counterInputError} type="text"/>
            }
            {props.active
                ? <div className={style.counterButtonGroup}>
                    <Button name={"inc"} callback={incButton} disabled={!props.reset}/>
                    <Button name={"reset"} callback={resetButton} disabled={props.reset}/>
                </div>
                : <div className={style.counterButtonGroup}>
                    <Button name={"inc"} callback={() => {
                    }} disabled={true}/>
                    <Button name={"reset"} callback={() => {
                    }} disabled={true}/>
                </div>
            }

        </div>
    )
}


// {props.error
//     ? <input value={'Incorrect value'} className={style.counterInputError} type="text"/>
//     : <input value={value} className={className} type="text"/>
// }
// {props.active
//     ? <div className={style.counterButtonGroup}>
//         <Button name={"inc"} callback={incButton} disabled={!props.reset}/>
//         <Button name={"reset"} callback={resetButton} disabled={props.reset}/>
//     </div>
//     : <div className={style.counterButtonGroup}>
//         <Button name={"inc"} callback={()=>{}} disabled={true}/>
//         <Button name={"reset"}callback={()=>{}} disabled={true}/>
//     </div>
// }