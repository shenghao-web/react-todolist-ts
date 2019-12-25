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
  todoList: Todo[]
}

export default class App extends React.Component<Iprops,IState>{      
  state = {
    inputValue: '',
    todoList: []
  }
  // 输入事件
  handleInputValueChange = (inputValue:string) => {
    this.setState({
      inputValue
    })
  }
  // enter事件
  handleKeyEnter = () => {
    if(!this.state.inputValue) return
    const todo = { id: new Date().getTime(), name: this.state.inputValue, isFinish: false }
    this.setState({
      todoList: [ ...this.state.todoList, todo],
      inputValue: ''
    })
  }
  // 改变状态事件
  handleChangeTodoState = (id: number) => () =>{
    const index:number = this.state.todoList.findIndex((item:Todo) => item.id === id)
    if(index === -1) return
    const target:Todo = this.state.todoList[index]
    target.isFinish = !target.isFinish
    const arr:Array<Todo> = this.state.todoList
    this.setState({
      todoList: arr.fill(target,index,index + 1)
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