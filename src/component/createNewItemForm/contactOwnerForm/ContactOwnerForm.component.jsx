import { useState, useRef } from 'react'
import './ContactOwnerForm.style.scss'

import TitleSubForm from '../titleSubForm/TitleSubForm.component'
import ButtonSubmitForm from '../buttonsSubmitForm/ButtonsSubmitForm.component'
import CustomInput from '../../customInput/CustomInput.component'
import CustomCheckbox from '../../customCheckbox/CustomCheckbox.component'
import GetMultiContacts from './MultiContacts.component'

function ContactOwnerForm({ index, open  , submit, onClick, getClass, returnToIndex }) {
    
    const formRef = useRef()
    const [illegalData, setIllegalData] = useState([]) 

    const required = [0,1, 3]
    
    const checkValidation = (data) => {
        const illegals = []
        required.map((i) => {
            if ( (formRef.current[i].value == '' && !formRef.current[i].checked ) && !illegals.includes(formRef.current[i].id))
               illegals.push(formRef.current[i].id)
        })
        setIllegalData(illegals)
        
        //console.log("illigal", illegals, illegals.length)
        
        return illegals.length === 0
    }


    const submitTo = (indexToMove) => {
       // console.log(formRef)
        if(!checkValidation()) return

        const data = {}
        data[formRef.current[0].id] = formRef.current[0].value 
        data[formRef.current[1].id] = formRef.current[1].value 
        data[formRef.current[2].id] = formRef.current[2].value 
        data[formRef.current[3].id] = formRef.current[3].checked 
        data[formRef.current[4].id] = formRef.current[4].checked 

        
        //console.log("data=>", data)
        if (illegalData.length === 0) submit({ contact: data } , +index + indexToMove)
    }

    return (
        <div className={"contact-owner_form "+ getClass(index)} onClick={()=>onClick(index)}>
            <TitleSubForm index={index} title=" פרטים ליצירת קשר "  isCompleted={open > index} />
            {index == open && <>
                <label className='info_title'>רגע לפני שמפרסמים את המודעה, נבדוק שפרטי הקשר נכונים</label>
                <form className='content' ref={formRef}>
                    
                    <CustomInput
                        title="שם איש קשר"
                        required
                        id="contactName"
                        isLegal={!illegalData.includes("contactName")}
                    />
                    <CustomInput
                        title="טלפון ראשי"
                        required
                        type="phone"
                        id="contactPhone"
                        isLegal={!illegalData.includes("contactPhone")}
                    />
                    < GetMultiContacts/>
                    <CustomInput
                        title='דוא"ל' 
                        id="email"
                    />
                    <div className='row'>
                    <CustomCheckbox
                        required
                        title="קראתי ואישרתי את "
                        linkedText="התקנון"
                        
                        link="https://www.yad2.co.il/eula"
                    />
                    </div>
                    <CustomCheckbox
                        title="אשמח לקבל עדכונים, הצעות או טיפים לשיפור המודעה שלי לפרטי החשבון או לפרטי המודעה"
                    />
                    <ButtonSubmitForm
                        submitForm={submitTo}
                        justContinue
                        continueTitle="המשך לבחירת מסלול"
                        returnToIndex={  open != returnToIndex ? null : returnToIndex }
                    />
                </form>
             </>}        
        </div>
       
    )
}

export default ContactOwnerForm
