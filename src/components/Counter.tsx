import {Button} from "./Button";
import style from './Counter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {setResetAC} from "../state/status-reducer";
import {counterStateType, incValueAC} from "../state/counter-reducer";

export const Counter = () => {
    const dispatch = useDispatch()
    let counter = useSelector<AppRootStateType, counterStateType>(state => state.counter)

    const incButton = () => {
        if (counter.count < counter.maxValue) {
            dispatch(incValueAC())
            if (counter.count + 1 === counter.maxValue) {
                dispatch(setResetAC(false))
            }
        }
    }

    const resetButton = () => {
        dispatch(setResetAC(true))
    }

    let className = counter.count === counter.maxValue && counter.active
        ? `${style.counterInput} ${style.counterInputEnd}`
        : !counter.active || counter.error
            ? `${style.counterInput} ${style.counterInputDefault}`
            : style.counterInput

    let inputValue = counter.error
        ? 'Incorrect value'
        : counter.active
            ? counter.count
            : 'Enter values and press set'

    return (
        <div className={style.counterWrapper}>
            <input value={inputValue} className={className} type="text"/>
            <div className={style.counterButtonGroup}>
                <Button name={"inc"}
                        callback={incButton}
                        disabled={counter.active
                            ? !counter.reset
                            : true}
                />
                <Button name={"reset"}
                        callback={resetButton}
                        disabled={counter.active
                            ? counter.reset
                            : true}
                />
            </div>
        </div>
    )
}
