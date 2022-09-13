import { useState } from 'react'
import './CustomInput.style.scss'

import AddPhoneModal from '../modals/addPhoneNumber/AddPhoneModal.component';
import { useRef } from 'react';

function CustomInput({ title, placeholder, dropDownData, info, required, disabled, type, id, isLegal = true, onChange}) {
    
    const [openDropDown, setOpenDropDown] = useState(false)
    const [openTypeModal, setOpenTypeModal] = useState(false)
    
    const inputRef = useRef(null)

    const openDropDownIfIs = () => {
        if (dropDownData && dropDownData.length > 0) setOpenDropDown(!openDropDown)
        else setOpenDropDown(false)
    }

    const getDataFromModal = (value) => {
        setOpenTypeModal(false)
        inputRef.current.value = value
    }

    const itemSelected = (text) => {
        inputRef.current.value = text
          setOpenDropDown(false)
    }

    return (
        <>
            {openTypeModal && <AddPhoneModal closeModal={setOpenTypeModal} onSubmit={ getDataFromModal} />}
        <div className={'input ' + (disabled ? ' disabled' : '')}>
            
            <label className='input '>
                {title}{required && '*'}
                    <input
                        className={!isLegal ? 'illegal' : ''}
                        placeholder={placeholder}
                        onClick={openDropDownIfIs}
                        ref={inputRef}
                        id={id}
                        onChange={onChange}
                        type={type}
                    />
                {type === 'phone' && <label className='open-modal_button' onClick={()=> setOpenTypeModal(true)}>+</label>}
            </label>
            {dropDownData && dropDownData.length >= 0 && <span className='extend_arrow'> &#711; </span>}
            {openDropDown &&
                <div className='dropdown'>
                    {dropDownData.map((text, i) =>
                        <label key={i} onClick={()=>itemSelected(text)}>{text}</label>
                    )}
                </div>
            }
            {info && <p>{info}</p>}
        </div>
    </>)
}

export default CustomInput
