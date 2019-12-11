import React from 'react'
import '../index.css'

class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            square: {
                key: '',
                value: ''
            }
        }
    }

    render() {
        return (
            <div className="square">
                <div style={{position: 'relative', top: 45, left: 10}}>
                    <input type="text" value={this.state.square.key} onChange={(e) =>
                        this.setState({square: {...this.state.square, key: e.target.value}})}/>
                    <input type="text" value={this.state.square.value} onChange={(e) =>
                        this.setState({square: {...this.state.square, value: e.target.value}})}/>
                </div>
            </div>
        )
    }
}

export default Square