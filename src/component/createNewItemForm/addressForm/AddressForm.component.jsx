import { useState } from 'react'
import './AddressForm.style.scss'

import TitleSubForm from '../titleSubForm/TitleSubForm.component'
import CustomInput from '../../customInput/CustomInput.component'
import CustomCheckbox from '../../customCheckbox/CustomCheckBox.component'
import ButtonSubmitForm from '../buttonsSubmitForm/ButtonsSubmitForm.component'
import { useRef } from 'react'
import { useEffect } from 'react'
 
function AddressForm({ index, open , getClass, submit, onClick, returnToIndex}) {

    const formRef = useRef()
    const [illegalData, setIllegalData] = useState([]) 
    const [isStreet, setIsStreet] = useState(false)
    const required = [0, 1, 2, 4, 5, 6]
    
    const onStreetChange = (event) => {
        if (event.target.value !== '') setIsStreet(true)
        else setIsStreet(false)
    }
    
    const checkValidation = (data) => {
        const illegals = []
        required.map((i) => {
            if ( formRef.current[i].value == '' && !illegals.includes(formRef.current[i].id))
               illegals.push(formRef.current[i].id)
           // debugger
        })
        setIllegalData(illegals)
        
       // console.log("illigal", illegals, illegals.length)
        
        return illegals.length === 0
    }


    const submitTo = (indexToMove) => {
         if (indexToMove >= 0)
            if (!checkValidation())
                return
            
        const data = {}
        for (let i = 0; i < 5; i++) {
            data[formRef.current[i].id] = formRef.current[i].value 
        }
        //console.log("data=>", data)
        if (illegalData.length === 0) submit({ address: data }, +index + indexToMove)
    }

    return (
        <div className={'address_form '+ getClass(index)} onClick={()=>onClick(index)}>
            <TitleSubForm index={index} title="כתובת הנכס" isCompleted={open > index} />
            {open == index && <div className='inner_content'>
                <label className='sub_title'>סימנו עבורך את שדות החובה. שלא נפספס פרט חשוב</label>
                <form ref={formRef}>
                    <CustomInput
                        title="סוג הנכס"
                        id="type"
                        placeholder="דירה או אולי פנטהאוז?"
                        required
                        isLegal={ !illegalData.includes("type")}
                        dropDownData={["בית", "דירה"]}
                    />
                    <CustomInput
                        title="מצב הנכס"
                        required
                        id="status"
                        isiIllegal={!illegalData.includes("status")}
                        placeholder='משופץ? חדש מקבלן?'
                        dropDownData={["משןפץ", "חדש מקבלן", "חדש (נכס בן 5 שנים)"]}
                    />
                    <CustomInput
                        title="ישוב"
                        placeholder='איפה נמצא הנכס?'
                        required
                        id="city"
                        onChange = {onStreetChange}
                        isLegal={!illegalData.includes("city")}
                    />
                    <CustomInput
                        disabled={!isStreet}
                        title="רחוב"
                        id="street"
                        placeholder='הכנסת שם הרחוב'
                        info="המידע הזה מגיע מגוף ממשלתי, אם הרחוב שלך לא מופיע, מומלץ לבחור רחוב קרוב אליך"
                    />
                   
                        <label className="not-found-address">לא מצאת את הרחוב?</label>
                    <CustomInput
                        title="מס' בית"
                        required
                        disabled={ !isStreet}
                        
                        id="house"
                        isLegal={!illegalData.includes("house")}
                    />
                        <div className='row'>
                        <CustomInput
                            title="קומה"
                            required
                            disabled={ !isStreet}
                            
                            id="floor"
                            isLegal={!illegalData.includes("floor")}
                        />
                        <CustomInput
                            title='סה"כ קומות בבניין '
                            required
                            disabled={ !isStreet}
                            
                            id="sumFloors"
                            isLegal={!illegalData.includes("sumFloors")}
                        />
                            <CustomCheckbox title="על עמודים" disabled={ !isStreet}/>
                        </div>
                    <CustomInput
                        disabled
                            title="שכונה"
                            info="המידע הזה מגיע מגוף ממשלתי ולא ניתן לשינוי"                            
                            id="neighbor"
                        />
                    <CustomInput
                        disabled
                            id="area"

                            title="אזור מכירה"
                            info="המידע הזה מגיע מגוף ממשלתי ולא ניתן לשינוי"
                        />
                    <CustomCheckbox
                        disabled={ !isStreet}
                            id="emailUpdate"
                            title='אני רוצה לקבל עדכון חודשי במייל עם הערכת שווי מעודכנת עבור הנכס, עסקאות באזור והצעות מקצועיות מיועצי נדל"ן'
                        />
                <ButtonSubmitForm submitForm={submitTo} returnToIndex={  open != returnToIndex ? null : returnToIndex }/>
                </form>
            </div>}
           

        </div>
    )
}

export default AddressForm
