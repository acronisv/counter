import {Button} from "./Button";
import style from './Counter.module.css'
import {ChangeEvent, useState} from "react";

type CounterSettingsPropsType = {
    minValue: number
    maxValue: number
    defineMinValue: (val: number) => void
    defineMaxValue: (val: number) => void
    setActive: (val: boolean) => void
    setReset: (state: boolean) => void
    error: boolean
    setError: (val: boolean) => void
}


export const CounterSettings = (props: CounterSettingsPropsType) => {

    const [disabled, setDisabled] = useState<boolean>(true)

    const setValues = () => {
        localStorage.setItem('minValue', JSON.stringify(props.minValue))
        localStorage.setItem('maxValue', JSON.stringify(props.maxValue))
        props.defineMinValue(props.minValue)
        props.defineMaxValue(props.maxValue)
        props.setReset(true)
        props.setActive(true)
    }

    const onChangeMinInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setActive(false)
        isNaN(+e.currentTarget.value) ? console.log('nono') : props.defineMinValue(+e.currentTarget.value)
        if (+e.currentTarget.value >= 0 && +e.currentTarget.value < props.maxValue) {
            setDisabled(false)
            props.setError(false)
        } else {
            setDisabled(true)
            props.setError(true)
        }
    }

    const onChangeMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setActive(false)
        isNaN(+e.currentTarget.value) ? console.log('nono') : props.defineMaxValue(+e.currentTarget.value)
        if (+e.currentTarget.value > props.minValue) {
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
                        value={props.maxValue}
                        type="number"
                        onChange={onChangeMaxInputHandler}
                        className={props.error ? style.error : ''}
                    />
                </div>
                <div className={style.counterInputRow}>
                    <span>start value:</span>
                    <input
                        value={props.minValue}
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