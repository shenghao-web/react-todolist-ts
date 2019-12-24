import React from 'react'

interface Iprops {
  onInputValueChange: Function,
  onKeyEnter: Function,
  inputValue: string
}

export default class Header extends React.Component<Iprops> {
  handleChange = (event:React.ChangeEvent<HTMLInputElement>): void => {
    this.props.onInputValueChange(event.target.value)
  }
  handleEnter = (event:React.KeyboardEvent<HTMLInputElement>):void => {
    event.keyCode === 13 && this.props.onKeyEnter()
  }
  render(){
    const { inputValue } = this.props
    return (
      <div className="header-box">
        <div className="form-box">
          <label htmlFor="input">Todolist</label>
          <input
            id="input"
            className="header-input"
            type="text"
            value={inputValue}
            onChange={this.handleChange}
            onKeyDown={this.handleEnter}
            placeholder="添加ToDo"
          /> 
        </div>
      </div>
    )
  }
}