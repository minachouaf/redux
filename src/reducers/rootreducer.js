const initstate={
    count:0
}
const reducer=(state=initstate,action)=>{
    if(action.type==='increment')
    {
        return {count:state.count+1};
        
    }
    else if(action.type==='decrement')
    {
        return {count:state.count-1};
    }
    else{
        return state;
    }

}
export default reducer;