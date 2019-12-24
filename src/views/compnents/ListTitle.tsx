import React from 'react'

interface Iprops {
    title: string,
    count: Number
}

class ListTitle extends React.Component<Iprops> {
    render(){
        return (
            <h2 className="list-title">
                <div className="title">{this.props.title}</div>
                <div className="count">{this.props.count}</div>
            </h2>
        )
    }
}

export default ListTitle