import Modal from './Modal'
import Time from './Time'
import { useState } from 'react'

export default function CustomTime({ setTime, checked}) {
    const [click, setClick] = useState(false)

    const action = (time, format) => {
        setTime(time, format)
        setClick(false)
    }

    return (
        <div className="w-full">
            <Modal state={click} type='time' action={action}/>
            <button onClick={() => setClick(true)} className="w-full">
                <Time time="Set" format="Custom" onChange={()=>{}} checked={checked}/>
            </button>
        </div>
    )
}