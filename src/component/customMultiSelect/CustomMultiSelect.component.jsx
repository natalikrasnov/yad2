import { useState } from 'react'
import './CustomMultiSelect.style.scss'

function CustomMultiSelect({ title, data, info, required, disabled, defaultSelected = [], onChange}) {
    const [currentSelected, setCurrentSelected] = useState(defaultSelected)


    const elementSelected = (index) => {
        if (!currentSelected.includes(index)) setCurrentSelected([...currentSelected, index])
        else setCurrentSelected([...currentSelected.filter(el => el !== index)])
        onChange(data.filter((el,i)=>currentSelected.includes(i)))
    }

    return (
        <div className={'multi-select ' + (disabled ? ' disabled' : '')}>
            <label className='title'>{title}{ required && '*'  }</label>
            <div className='content'>
                {data.map((item, index) => 
                    <label
                        onClick={()=>elementSelected(index)}
                        key={index}
                        className={"multi-select_item " + (currentSelected.includes(index) ? "selected" : '')}
                    >
                        {item}
                    </label>
                )}
            </div>
            {info && <p>{ info }</p>}
        </div>
    )
}

export default CustomMultiSelect
