import React from 'react';
import styles from './App.module.css';



import NewTask from './Components/NewTask/NewTask'
import Task from './Components/Task/Task'




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputTask: '',
      tasks: []
    }
  }

  /*---------------------------------------------------------------------*/
  /* LocalStorage START
  -----------------------------------------------------------------------*/

  componentDidMount() {
    const savedTasks = localStorage.getItem("savedTasks")

    if (savedTasks) {
      this.setState({
        tasks: JSON.parse(savedTasks)
      })
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.tasks !== this.state.tasks) {
      const savedTasks = JSON.stringify(this.state.tasks)
      localStorage.setItem("savedTasks", savedTasks)
    }
  }
  /*---------------------------------------------------------------------*/
  /* LocalStorage END
  -----------------------------------------------------------------------*/

  /*---------------------------------------------------------------------*/
  /* NewTask methods START
  -----------------------------------------------------------------------*/

  onInputChange = (e) => {
    this.setState({
      inputTask: e.target.value
    })
  }

  onAddTask = () => {
    let newTask = this.state.inputTask;

    // NOTE: prevState.tasks.push(newTask) does not work, need to use concat or spread to create a new array version
    // https://stackoverflow.com/questions/41052598/reactjs-array-push-function-not-working-in-setstate
    this.setState(prevState => {
      return { tasks: [...prevState.tasks, newTask] }
    })

  }

  /*---------------------------------------------------------------------*/
  /* NewTask methods END
  -----------------------------------------------------------------------*/

  /*---------------------------------------------------------------------*/
  /* Task methods START
  -----------------------------------------------------------------------*/

  onDeleteTask = (indexToDelete) => {

    let updatedNotes = [...this.state.tasks].filter(
      (task, i) => i !== indexToDelete
    )

    this.setState({ tasks: updatedNotes })
  }

  onEditTask = (e, i) => {
    const currentTasks = [...this.state.tasks]

    currentTasks[i] = e.target.value;

    this.setState({
      tasks: currentTasks
    })
  }

  onDoneTask = (doneIndex) => {
    
    const currentTasks = [...this.state.tasks]

    const doneTask = currentTasks[doneIndex]

    const updatedTasks = currentTasks.filter((task, i) => i !== doneIndex)

    updatedTasks.push(doneTask)

    this.setState({
      tasks: updatedTasks
    })
  }

  /*---------------------------------------------------------------------*/
  /* Task methods END
  -----------------------------------------------------------------------*/



  render() {

    let list;

    if (this.state.tasks !== []) {
      list = this.state.tasks.map((task, i) => {
        return (
          <Task
            key={i}
            id={i} // the map id
            task={task}
            editTask={this.onEditTask}
            deleteTask={this.onDeleteTask}
            doneTask={this.onDoneTask}
          />
        )
      })
    } else {
      list = <div></div>
    }

    console.log(this.state.tasks);

    return (
      <main className={styles.Main}>

        <NewTask onInputChange={this.onInputChange} onAddTask={this.onAddTask} />

        <ul className={styles.List}>
          {list}
        </ul>

      </main>
    )
  }
}

export default App;
