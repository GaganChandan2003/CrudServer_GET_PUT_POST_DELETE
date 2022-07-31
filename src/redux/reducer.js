import { GET_S } from "./types";

let initialState={
 todos:[]
}
const reducer=(state=initialState,{type,payload})=>
{
    switch(type)
    {
        case GET_S:
            {
                return {...state,todos:payload};
            }
        default:
            {
                return state;
            }
    }
}

export default reducer