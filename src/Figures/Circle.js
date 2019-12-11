import React from 'react'
import '../index.css'

class Circle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            circle: {
                key: '',
                value: ''
            }
        }
    }

    render() {
        return (
            <div className="circle">
                <div style={{position: 'relative', top: 45, left: 10}}>
                    <input type="text" value={this.state.circle.key} onChange={(e) =>
                        this.setState({circle: {...this.state.circle, key: e.target.value}})}/>
                    <input type="text" value={this.state.circle.value} onChange={(e) =>
                        this.setState({circle: {...this.state.circle, value: e.target.value}})}/>
                </div>
            </div>
        )
    }
}

export default Circle