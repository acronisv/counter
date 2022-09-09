import {Button} from "./Button";
import style from './Counter.module.css'
import {useEffect, useState} from "react";

type CounterPropsType = {
    minValue: number
    maxValue: number
    reset: boolean
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
                : <input value={value} className={className} type="text"/>
            }
            <div className={style.counterButtonGroup}>
                <Button name={"inc"} callback={incButton} disabled={!props.reset}/>
                <Button name={"reset"} callback={resetButton} disabled={props.reset}/>
            </div>
        </div>
    )
}