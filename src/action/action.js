const addData = (data)=>{
    return{
        type:"ADD",
        payload : {
            id:new Date().getTime().toString(),
            data:data
        }
    }
}
const deleteOne = (id)=>{
    return{
        type:"DELETE_ONE",
        id:id
    }
}
export {addData,deleteOne};