import { Component } from 'react'
import styles from './Task.module.css'

class Task extends Component {

    constructor(props) {
        super(props)
        this.state = {
            noteEdited: null,
            noteDone: null
        }
    }

    onEditTask = (i) => {
        this.setState(prevState => {

            // If edit button is clicked the second time (on Done) it will pass the same id
            // It that happens - set noteEdited back to null
            if (prevState.noteEdited === i)
                return { noteEdited: null }
            else {
                return { noteEdited: i }
            }
        })
    }



    render(){
        const { id, task, editTask, deleteTask, doneTask } = this.props;
        let taskText;

        // Comparing state id with map id
        if (this.state.noteEdited === id) {
            taskText = <input type="text" value={task} onChange={(e) => editTask(e, id)} />
        } else {
            taskText = <span>{task}</span>
        }

        return (
            <li className={styles.Note}>
                <input type="checkbox" name={task} id={task} onClick={() => doneTask(id)} />
                {taskText}
                <button onClick={() => this.onEditTask(id)}>
                    {this.state.noteEdited === id ? "Done" : "Edit"}
                </button>
                <button onClick={() => deleteTask(id)}>X</button>
            </li>
        )
    }

}

export default Task;