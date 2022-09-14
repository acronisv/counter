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
            setValue(value + 1)
            if (value + 1 === props.maxValue) {
                props.setReset(false)
            }
        }
    }

    const resetButton = () => {
        setValue(props.minValue)
        props.setReset(true)
    }

    let className = value === props.maxValue && props.active
        ? `${style.counterInput} ${style.counterInputEnd}`
        : !props.active || props.error
            ? `${style.counterInput} ${style.counterInputDefault}`
            : style.counterInput

    let inputValue = props.error
        ? 'Incorrect value'
        : props.active
            ? value
            : 'Enter values and press set'

    return (
        <div className={style.counterWrapper}>
            <input value={inputValue} className={className} type="text"/>
            <div className={style.counterButtonGroup}>
                <Button name={"inc"}
                        callback={incButton}
                        disabled={props.active
                            ? !props.reset
                            : true}
                />
                <Button name={"reset"}
                        callback={resetButton}
                        disabled={props.active
                            ? props.reset
                            : true}
                />
            </div>
        </div>
    )
}
