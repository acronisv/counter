import {Button} from "./Button";
import style from './Counter.module.css'
import {ChangeEvent, useEffect, useState} from "react";

type CounterSettingsPropsType = {
    minValue: number
    maxValue: number
    defineMinValue: (val: number) => void
    defineMaxValue: (val: number) => void
    setReset: (state: boolean) => void
    error: boolean
    setError: (val: boolean) => void
}


export const CounterSettings = (props: CounterSettingsPropsType) => {

    const [min, setMin] = useState<number>(JSON.parse(localStorage.getItem('minValue') || '0'))
    const [max, setMax] = useState<number>(JSON.parse(localStorage.getItem('maxValue') || '0'))
    const [disabled, setDisabled] = useState<boolean>(false)

    const setValues = () => {
        localStorage.setItem('minValue', JSON.stringify(min))
        localStorage.setItem('maxValue', JSON.stringify(max))
        props.defineMinValue(min)
        props.defineMaxValue(max)
        props.setReset(true)
    }

    const onChangeMinInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        isNaN(+e.currentTarget.value) ? console.log('nono') : setMin(+e.currentTarget.value)
        if (+e.currentTarget.value >= 0 && +e.currentTarget.value < max) {
            setDisabled(false)
            props.setError(false)
        } else {
            setDisabled(true)
            props.setError(true)
        }
    }

    const onChangeMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        isNaN(+e.currentTarget.value) ? console.log('nono') : setMax(+e.currentTarget.value)
        if (+e.currentTarget.value > min) {
            setDisabled(false)
            props.setError(false)
        } else {
            setDisabled(true)
            props.setError(true)
        }
    }

    return (
        <div className={style.counterWrapper}>
            <div className={style.counterInputGroup}>
                <div className={style.counterInputRow}>
                    <span>max value:</span>
                    <input
                        value={max}
                        type="number"
                        onChange={onChangeMaxInputHandler}
                        className={props.error ? style.error : ''}
                    />
                </div>
                <div className={style.counterInputRow}>
                    <span>start value:</span>
                    <input
                        value={min}
                        type="number"
                        onChange={onChangeMinInputHandler}
                        className={props.error ? style.error : ''}
                    />
                </div>
            </div>
            <div className={style.counterButtonGroup}>
                <Button name={"set"} callback={setValues} disabled={disabled}/>
            </div>
        </div>
    )
}