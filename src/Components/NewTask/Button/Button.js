import styles from './Button.module.scss'

const Button = ({ onClickFunction }) => {
    return (
        <button onClick={onClickFunction} className={styles.Button} type="submit">Add</button>
    )
}

export default Button;