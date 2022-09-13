import { useState } from 'react'
import './CustomCheckbox.style.scss'

function CustomCheckbox({ title, info, required, checked, disabled, linkedText, link, onChange}) {

    return (
        <div className={'checkbox '+ (disabled? ' disabled ' : '') + (link? ' linked_text ' : '')} >
           
            <input type="checkbox" id={title} value={title} checked={ checked } onChange={onChange} />
            <label htmlFor={title}>
                {title}
                {link && linkedText && <a href={link}>{ linkedText}</a>}
                {required && '*'}
            </label> 
            {info && <p>{info}</p>}
        </div>
    )
}

export default CustomCheckbox
