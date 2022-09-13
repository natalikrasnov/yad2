import { useState } from 'react'
import './CustomRadioButton.style.scss'

function CustomRadioButton({ title, data, info, required, disabled, defaultSelected=0, onChange}) {
    const [currentSelected, setCurrentSelected] = useState(defaultSelected)

    const onSelect = (i) => {
        setCurrentSelected(i)
        onChange(data[i])
    }

    return (
        <div className={'radio-button '+ (disabled ? ' disabled' : '')}>
            <label>{title}{ required && '*'}</label>
            <div className='content'>
                {data.map((el, i) =>
                    <label
                        key={i}
                        onClick={()=>onSelect(i)}
                        className={"item "+(currentSelected == i ? "selected" : "")}
                    >
                        {el}
                    </label>
                )}
            </div>
            {info && <p>{info}</p>}
        </div>
    )
}

export default CustomRadioButton
