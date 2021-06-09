import styles from './NewTask.module.css'

import Input from './Input/Input'
import AddButton from './Button/Button'


const NewTask = ({ onInputChange, onAddTask }) => {

    return (
        <div className={styles.Together}>
            <Input onInputFunction={onInputChange} />
            <AddButton onClickFunction={onAddTask} />
        </div>
    )

}

export default NewTask;