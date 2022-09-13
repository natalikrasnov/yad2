import { useState, useRef } from 'react'
import './PaymentsForm.style.scss'

import TitleSubForm from '../titleSubForm/TitleSubForm.component'
import CustomInput from '../../customInput/CustomInput.component'
import ButtonSubmitForm from '../buttonsSubmitForm/ButtonsSubmitForm.component'
import CustomCheckBox from '../../customCheckbox/CustomCheckbox.component'

function PaymentsForm({ index, open, submit, onClick, getClass, returnToIndex }) {
    const formRef = useRef()
    const curDateRef = useRef()
    
    const [illegalData, setIllegalData] = useState([]) 
    const [enterDateInput, setEnterDateInput] = useState("") 
    const [isDate, setIsDate] = useState(true) 

    const required = [2]
    
    const checkValidation = () => {
        const illegals = []
        required.map((i) => {
            if ( formRef.current[i].value == '' && !illegals.includes(formRef.current[i].id))
               illegals.push(formRef.current[i].id)
        })
        setIllegalData(illegals)
        
        console.log("illigal", illegals, illegals.length)
        
        return illegals.length === 0
    }


    const submitTo = (indexToMove) => {
        console.log(formRef)
        if(!checkValidation()) return

        const data = {}
        data[formRef.current[0].id] = formRef.current[0].value 
        data[formRef.current[1].id] = formRef.current[1].value 
        data[formRef.current[2].id] = formRef.current[2].value 
        data[formRef.current[3].id] = formRef.current[3].value 
        data.enterDate = enterDateInput

        console.log("data=>", data)
        if (illegalData.length === 0) submit({ payment: data } , +index + indexToMove)
    }

    const onDateSelected = (e) => {
        console.log("onDateSelected", e)
        setEnterDateInput(e.target.value)
    }

    const onNowClicked = (e) => {
        console.log("onNowClicked", e)
        if (e.target.checked) {
            setEnterDateInput("now")
        }
        setIsDate(e.target.checked)
    }

    const onAnytimeClicked = (e) => {
        console.log("onAnytimeClicked", e)
        if (e.target.checked) {
            setEnterDateInput("anytime")
        }
        setIsDate(e.target.checked)
    }
    
    return (
        <div className={"payments_form "+ getClass(index)} onClick={()=>onClick(index)}>
            <TitleSubForm index={index} title=" תשלומים, תאריכים ועוד" isCompleted={open > index} />
            {index == open && <form className='about-content' ref={formRef}>
                <div className='row'>
                    <CustomInput
                        id="builtSize"
                        title='מ"ר בנוי'
                        placeholder='כמה מ"ר יש בנכס'
                    />
                    <CustomInput
                        id="gardenSize"
                        title='מ"ר גינה'
                    />
                </div>
                  <CustomInput
                    required
                    title='גודל במ"ר סך הכל'
                    id="sumSize"
                    isiIllegal={!illegalData.includes("sumSize")}
                />
                <CustomInput
                    title='מחיר'
                    placeholder="  סכום מינימלי  100,000                 ₪"
                    leftContent="#"
                    id="price"
                    />
                <div className='row'>
                    <CustomInput  
                        required
                        type="date"
                        id="date"
                        title='תאריך כניסה'
                        placeholder="DD/MM/YYYY"
                        isLegal={enterDateInput != ''}
                        disabled={isDate}
                        onChange={onDateSelected}
                    />
                    <CustomCheckBox
                        title="מיידי"
                        id="date_now"
                        
                        onChange={onNowClicked}
                    />
                     <CustomCheckBox
                        title="גמיש"
                        id="date_anytime"
                        onChange={onAnytimeClicked}
                    />
                </div>
                <ButtonSubmitForm submitForm={submitTo} returnToIndex={  open != returnToIndex ? null : returnToIndex }/>
            </form>}
        </div>
    )
}

export default PaymentsForm
