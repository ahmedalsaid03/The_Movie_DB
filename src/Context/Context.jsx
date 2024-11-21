import { createContext } from "react";

export let counterContext = createContext(0);

 export default function CounterContextProvider(props){
    const [count, setCount] = useState()
return <counterContext.Provider value={{count}}>
    {props.children}
</counterContext.Provider>
}