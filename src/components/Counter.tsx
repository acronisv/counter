import {Button} from "./Button";
import style from './Counter.module.css'
import {useState} from "react";

export const Counter = () => {

    let [value, setValue] = useState<number>(0)
    let [disabled, setDisabled] = useState<boolean>(false)

    const incButton = () => {
        if (value < 5) {
            setValue(++value)
            if (value === 5) {
                setDisabled(true)
            }
        }
    }

    const resetButton = () => {
        setValue(0)
        setDisabled(false)
    }

    let className = value === 5 ? `${style.counterInput} ${style.counterInputEnd}` : style.counterInput

    return (
        <div className={style.counterWrapper}>
            <input value={value} className={className} type="text"/>
            <div className={style.counterButtonGroup}>
                <Button name={"inc"} callback={incButton} disabled={disabled}/>
                <Button name={"reset"} callback={resetButton} disabled={!disabled}/>
            </div>
        </div>
    )
}