import { useState } from 'react'
import './Accessibility.style.scss'

function Accessibility() {
    const [isOpen, setIsOpen] = useState(false)

    const open = () => {
     //   setIsOpen(true)
    }
    return (
        <div className="accessibility">
            {
                isOpen ?
                    <div className='icon' onClick={open}></div>
                :
                    <div>
                    </div>
            }
        </div>
    )
}

export default Accessibility
