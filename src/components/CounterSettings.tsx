import {Button} from "./Button";
import style from './Counter.module.css'
import {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {counterStateType, setMaxValueAC, setMinValueAC} from "../state/counter-reducer";
import {setActiveAC, setErrorAC, setResetAC} from "../state/counter-reducer";

export const CounterSettings = () => {
    const dispatch = useDispatch()
    let counter = useSelector<AppRootStateType, counterStateType>(state => state.counter)
    const [disabled, setDisabled] = useState<boolean>(true)

    const setValues = () => {
        dispatch(setResetAC(true))
        dispatch(setActiveAC(true))
    }

    const onChangeMinInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setActiveAC(false))
        dispatch(setMinValueAC(+e.currentTarget.value))
        if (+e.currentTarget.value >= 0 && +e.currentTarget.value < counter.maxValue) {
            dispatch(setErrorAC(false))
            setDisabled(false)
        } else {
            dispatch(setErrorAC(true))
            setDisabled(true)
        }
    }

    const onChangeMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setActiveAC(false))
        dispatch(setMaxValueAC(+e.currentTarget.value))
        if (+e.currentTarget.value > counter.minValue && counter.minValue >= 0) {
            dispatch(setErrorAC(false))
            setDisabled(false)
        } else {
            dispatch(setErrorAC(true))
            setDisabled(true)
        }
    }

    return (
        <div className={style.counterWrapper}>
            <div className={style.counterInputGroup}>
                <div className={style.counterInputRow}>
                    <span>max value:</span>
                    <input
                        value={counter.maxValue}
                        type="number"
                        onChange={onChangeMaxInputHandler}
                        className={counter.error ? style.error : ''}
                    />
                </div>
                <div className={style.counterInputRow}>
                    <span>start value:</span>
                    <input
                        value={counter.minValue}
                        type="number"
                        onChange={onChangeMinInputHandler}
                        className={counter.error ? style.error : ''}
                    />
                </div>
            </div>
            <div className={style.counterButtonGroup}>
                <Button name={"set"} callback={setValues} disabled={disabled}/>
            </div>
        </div>
    )
}