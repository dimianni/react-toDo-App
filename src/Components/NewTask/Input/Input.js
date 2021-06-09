import styles from './Input.module.scss'

const Input = ({ onInputFunction }) => {
    return (
        <input type="text" onChange={onInputFunction} className={styles.Input} placeholder="Your new task..." />
    )
}

export default Input;