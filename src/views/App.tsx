import React from 'react';
import Header from './Header'
import '../styles/index.css';

interface Iprops {

}

interface IState {
  inputValue: string
}

export default class App extends React.Component<Iprops,IState>{
  state = {
    inputValue: ''
  }
  handleInputValueChange = (inputValue:string) => {
    this.setState({
      inputValue
    })
  }
  handleKeyEnter = () => {

  }
  render(){
    return (
      <Header
        inputValue={this.state.inputValue}
        onInputValueChange={this.handleInputValueChange}
        onKeyEnter={this.handleKeyEnter}
      />
    )
  }
}