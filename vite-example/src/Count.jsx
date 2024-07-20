import {useState, useEffect} from 'react'

function Count() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count}`
        //Cleanup function
        return () => {
            document.title = "hello"
        }
    }, [count])
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <span>{count}</span>
        <Button setCount={setCount}/>
      </div>
  )
}

function Button({setCount}) {
    return (
        <button onClick={() => setCount(prev => prev + 1)}>+</button> 
    )
}

export default Count