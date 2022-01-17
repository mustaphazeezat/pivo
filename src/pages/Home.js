import React, { useState } from 'react'

const Home = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div className='main-wrapper'>
            <button type='button' onClick={()=>setCounter(counter + 1)}>Click me</button>
            <p>You have clicked the button {counter} times. </p>
        </div>
    )
}

export default Home
