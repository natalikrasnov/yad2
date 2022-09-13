import { useState } from 'react'
import CustomInput from '../../customInput/CustomInput.component'
import BaseModal from '../baseModal/BaseModal.component'
import './AddPhoneModal.style.scss'

function AddPhoneModal({  closeModal , onSubmit}) {
    const [isAddNew, setIsAddNew] = useState(false)
    const [numbers, setNumbers] = useState([])
    const [currentSelect, setCurrentSelect] = useState(null)

    const didCloseModal = () => {
        closeModal(false)
    }

    const addNumber = (e) => {
        e.preventDefault()
       // debugger
        setNumbers([...numbers, e.target[0].value])
    }

    const removeNumber = (number) => { 
        setNumbers(numbers.filter(num=> num!==number))
    }

    
    return (
        <BaseModal closeModal={didCloseModal}>
            <div className='add-phone_modal'>
                <h2>מספרי הטלפון שלך</h2>
                <h4>לאיזה מספר תרצה שיחזירו אלייך?</h4>
                <div className='line'>
                    {!isAddNew ?
                        <label onClick={()=> setIsAddNew(true)} className="add_number">+ הוסף מספר חדש </label>
                        :
                        <form onSubmit={addNumber}>
                            <CustomInput placeholder="הקליקו כאן להוספת מספר חדש" />
                            <button type='submit' className='disable'>הוסף מספר</button>
                        </form>
                    }
                </div>

                {numbers.map((number, index) =>
                    <div
                        className={'line number ' + (number == currentSelect ? 'selected' : '')}
                        key={index}
                        onClick={() => setCurrentSelect(number)}>
                            <span className='radio-button '></span>
                            <label>{number}</label>
                            <button className='remove radio-button' onClick={()=>removeNumber(number)}>-</button>
                    </div>
                )}
                <div className='line'></div>
                
                <button className={'submit ' + (!!currentSelect ? 'select' : '')} onClick={() => onSubmit(currentSelect)} >בחירה</button>

            </div>
        </BaseModal>
    )
}

export default AddPhoneModal
 