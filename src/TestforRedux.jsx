import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./Context/CreateSlice"
 


function TestforRedux() {
    let count = useSelector((state)=> state.counter.value) ;
    let dispatch = useDispatch()

  return (
    <div>
      <h2>Test {count}</h2>
      <button onClick={()=>dispatch(increment())} className="btn btn-danger mx-2">increase</button>
      <button onClick={()=>dispatch(decrement())} className="btn btn-danger">decrease</button>
    </div>
  )
}

export default TestforRedux
