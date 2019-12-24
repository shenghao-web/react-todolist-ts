import React from 'react'
import ListTile from './compnents/ListTitle'
import { Todo } from './App'

interface Iprops {
    title: string
    list: Array<Todo>,
    onChangeTodoState: (id:number) => (e?:React.ChangeEvent<HTMLInputElement>) => void
}

 class TodoList extends React.Component<Iprops>{
     render(){
         const count = this.props.list.length
         const { onChangeTodoState } = this.props
         return (
            <>
                <ListTile title={this.props.title} count={count} />
                <ul className="todo-list-box">
                    {
                        this.props.list.map(todo =>{
                            return (
                                <li className="todo-item"  key={todo.id}>
                                    <input
                                        type="checkbox"
                                        checked={todo.isFinish}
                                        onChange={onChangeTodoState(todo.id)}
                                    />
                                    {todo.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </>
         )
     }
 }

 export default TodoList