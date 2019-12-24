import React from 'react'


class Container extends React.Component{
    render(){
        return (
            <div className='todo-list-container'>
                {this.props.children}
            </div>
        )
    }
}

export default Container