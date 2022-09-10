import style from './Counter.module.css'

type ButtonPropsType = {
    name: string,
    callback: () => void
    disabled?: boolean
}

export const Button = (props: ButtonPropsType) => {
    const {disabled, callback, name} = props

    const onClickButtonHandler = () => {
        callback()
    }

    return (
        <button disabled={disabled}
                className={style.counterButton}
                onClick={onClickButtonHandler}>
            {name}
        </button>
    )
}