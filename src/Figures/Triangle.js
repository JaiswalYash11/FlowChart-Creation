import React from 'react'
import '../index.css'

class Triangle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            triangle: {
                key: '',
                value: ''
            }
        }
    }

    render() {
        return (
            <div className="triangle">
                <div style={{position: 'relative', top: 50, right: 55}}>
                    <input type="text" value={this.state.triangle.key} onChange={(e) =>
                        this.setState({triangle: {...this.state.triangle, key: e.target.value}})}/>
                    <input type="text" value={this.state.triangle.value} onChange={(e) =>
                        this.setState({triangle: {...this.state.triangle, value: e.target.value}})}/>
                </div>
            </div>
        )
    }
}

export default Triangle