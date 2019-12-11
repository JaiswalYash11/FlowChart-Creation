import React from 'react'
import Window from "./Components/Window";
import Shape from "./Components/Shape";
import Triangle from "./Figures/Triangle";
import Circle from "./Figures/Circle";
import Square from "./Figures/Square";
import * as actionTypes from './Store/actions'
import {connect} from 'react-redux'


class MainWrapper extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <main className="flexbox">
                    <Window id='window-1' className='window' style={{marginRight: 20}}>
                        <p style={{
                            width: '100%',
                            fontSize: 20,
                            textAlign: 'center',
                            color: 'cornflowerblue',
                            paddingTop: 20
                        }}> Component Listings </p>
                        {!this.props.isEntryComplete && <div style={{paddingTop: 20}}>
                            <div style={{with: '100%'}}>
                                <p style={{color: 'cornflowerblue', paddingLeft: 10}}> Number of Circles -
                                    <span style={{paddingLeft: 35}}>
                                <input type="number" value={this.props.circleNo}
                                       onChange={(e) => this.props.updateCircleNo(e.target.value)}/>
                            </span></p>

                            </div>
                            <div style={{with: '100%'}}>
                                <p style={{color: 'cornflowerblue', paddingLeft: 10}}> Number of Squares -
                                    <span style={{paddingLeft: 29}}>
                                <input type="number" value={this.props.squareNo}
                                       onChange={(e) => this.props.updateSquareNo(e.target.value)}/>
                            </span>
                                </p>
                            </div>
                            <div style={{with: '100%'}}>
                                <p style={{color: 'cornflowerblue', paddingLeft: 10}}>Number of Triangles -
                                    <span style={{paddingLeft: 20}}>
                                <input type="number" value={this.props.triangleNo}
                                       onChange={(e) => this.props.updateTriangleNo(e.target.value)}/>
                            </span>
                                </p>
                            </div>
                            <p style={{marginTop: 20, textAlign: 'center', paddingBottom: 30}}>
                                <input type="button"
                                       value={'Create Components'}
                                       onClick={() => this.props.handleComponents()}
                                />
                            </p>
                        </div>}
                        {this.props.isEntryComplete &&
                        <p style={{marginTop: 20, textAlign: 'center', paddingBottom: 30}}>
                            <input type="button"
                                   value={'Create New'}
                                   onClick={() => this.props.createNewHandler()}
                                   style={{marginTop: 20}}
                            />
                        </p>}
                        {this.props.isEntryComplete &&
                        [...Array(this.props.triangleNo)].map((e, i) => <div>
                            <Shape
                                key={i}
                                id='triangle'
                                draggable='true'
                                className='shape'
                            >
                                <Triangle/>
                            </Shape>
                            <div style={{paddingBottom: 20}}/>
                        </div>)}
                        {this.props.isEntryComplete &&
                        [...Array(this.props.circleNo)].map((e, i) => <div>
                            <Shape
                                key={i}
                                id='circle'
                                draggable='true'
                                className='shape'
                            >
                                <Circle/>
                            </Shape>
                            <div style={{paddingBottom: 20}}/>
                        </div>)}
                        {this.props.isEntryComplete &&
                        [...Array(this.props.squareNo)].map((e, i) => <div>
                            <Shape
                                key={i}
                                id='square'
                                draggable='true'
                                className='shape'
                            >
                                <Square/>
                            </Shape>
                            <div style={{paddingBottom: 20}}/>
                        </div>)}
                        {this.props.isEntryComplete &&
                        [...Array(this.props.edgeNo)].map((e, i) => <div>
                            <Shape
                                key={i}
                                id='line'
                                draggable='true'
                                className='shape'
                            >
                                <div className="edge"/>
                            </Shape>
                            <div style={{paddingBottom: 20}}/>
                        </div>)}
                    </Window>
                    <Window
                        id='window-2'
                        className='window'
                    >
                        <p style={{
                            width: '100%',
                            fontSize: 20,
                            textAlign: 'center',
                            color: 'cornflowerblue',
                            paddingTop: 20,
                            paddingBottom: 20
                        }}> Window Area </p>

                    </Window>
                </main>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isEntryComplete: state.isEntryComplete,
        circleNo: state.circleNo,
        triangleNo: state.triangleNo,
        squareNo: state.squareNo,
        edgeNo: state.edgeNo,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        handleComponents: () => dispatch({type: actionTypes.HANDLE_COMPONENTS}),
        createNewHandler: () => dispatch({type: actionTypes.CREATE_NEW_HANDLER}),
        updateCircleNo: (val) => dispatch({type: actionTypes.UPDATE_CIRCLE_NO, val: val}),
        updateTriangleNo: (val) => dispatch({type: actionTypes.UPDATE_TRIANGLE_NO, val: val}),
        updateSquareNo: (val) => dispatch({type: actionTypes.UPDATE_SQUARE_NO, val: val})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainWrapper)