import React from 'react';
import Header from './Header'
import '../styles/index.css';
import TodoList from './TodoList'
import Container from './compnents/Container'

export interface Todo {
  id: number,
  name: string,
  isFinish: boolean
}

interface Iprops {}

interface IState {
  inputValue: string,
  todoList: Array<Todo>
}

export default class App extends React.Component<Iprops,IState>{
  state = {
    inputValue: '',
    todoList: []
  }
  handleInputValueChange = (inputValue:string) => {
    this.setState({
      inputValue
    })
  }
  handleKeyEnter = () => {
    if(!this.state.inputValue) return
    const todo = { id: new Date().getTime(), name: this.state.inputValue, isFinish: false }
    this.setState({
      todoList: [ ...this.state.todoList, todo],
      inputValue: ''
    })
  }
  handleChangeTodoState = (id: number) => () =>{
    const index:number = this.state.todoList.findIndex((item:Todo) => item.id === id)
    const target:Todo = this.state.todoList[index] as Todo
    target.isFinish = !target.isFinish
    index !== 1 && this.setState({
      todoList: this.state.todoList.fill(target,index,index+1)
    })
  }
  render(){
    const paddingList = this.state.todoList.filter((item:Todo):boolean => !item.isFinish)
    const overedList = this.state.todoList.filter((item:Todo):boolean => item.isFinish)
    return (
      <React.Fragment>
        <Header
          inputValue={this.state.inputValue}
          onInputValueChange={this.handleInputValueChange}
          onKeyEnter={this.handleKeyEnter}
        />
        <Container>
          <TodoList title="正在进行" list={paddingList} onChangeTodoState={this.handleChangeTodoState}/>
          <TodoList title="已经完成" list={overedList} onChangeTodoState={this.handleChangeTodoState}/>
        </Container>
      </React.Fragment>
    )
  }
}