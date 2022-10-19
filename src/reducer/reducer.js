
const initialState = {
    list:[]
};
const todoReducer = (state = initialState,action)=>{
    switch(action.type){
        case "ADD":
            const{id,data} = action.payload
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                    id:id,
                    data:data
                    }
            ]
            }
         case "DELETE_ONE":
            // const newList = 
            return{
                ...state,
                list:state.list.filter((elem) => elem.id !== action.id)
            }
            
            default:return state;
        }
}
export default todoReducer;
