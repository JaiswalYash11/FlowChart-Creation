import * as actionTypes from './actions'

const initialState = {
    isEntryComplete: false,
    circleNo: 0,
    triangleNo: 0,
    squareNo: 0,
    edgeNo: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.HANDLE_COMPONENTS :
            const edgeNumber = state.circleNo + state.triangleNo + state.squareNo
            return {
                ...state,
                isEntryComplete: true,
                edgeNo: edgeNumber === 0 ? 0 : edgeNumber - 1,
            };
        case actionTypes.CREATE_NEW_HANDLER :
            return {
                ...state,
                isEntryComplete: false,
                circleNo: 0,
                squareNo: 0,
                triangleNo: 0,
                edgeNo: 0
            };
        case actionTypes.UPDATE_CIRCLE_NO :
            return {
                ...state,
                circleNo: parseInt(action.val)
            }
        case actionTypes.UPDATE_SQUARE_NO :
            return {
                ...state,
                squareNo: parseInt(action.val)
            }
        case actionTypes.UPDATE_TRIANGLE_NO :
            return {
                ...state,
                triangleNo: parseInt(action.val)
            }
        default:
            return state;
    }
};

export default reducer