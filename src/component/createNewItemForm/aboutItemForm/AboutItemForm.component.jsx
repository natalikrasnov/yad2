import { useState, useRef } from 'react'
import './AboutItemForm.style.scss'

import TitleSubForm from '../titleSubForm/TitleSubForm.component'
import CustomInput from '../../customInput/CustomInput.component'
import CustomRadioButton from '../../customRadionButton/CustomRadioButton.component'
import CustomMultiSelect from '../../customMultiSelect/CustomMultiSelect.component'
import ButtonSubmitForm from '../buttonsSubmitForm/ButtonsSubmitForm.component'
import CustomDescriptionInput from '../../customDescriptionInput/CustomDescriptionInput.component'

function AboutItemForm({index, open , submit, onClick, getClass, returnToIndex }) {
    
    const formRef = useRef()
    const [illegalData, setIllegalData] = useState([]) 
    const [parkingInput, setParkingInput] = useState("") 
    const [balconyInput, setBalconyInput] = useState("") 
    const [propertiesInput, setPropertiesInput] = useState("") 
    const [infoInput, setInfoInput] = useState("") 

    const required = [0]
    
    const checkValidation = (data) => {
        const illegals = []
        required.map((i) => {
            if ( formRef.current[i].value == '' && !illegals.includes(formRef.current[i].id))
               illegals.push(formRef.current[i].id)
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
        data[formRef.current[0].id] = formRef.current[0].value 
        data.parking = parkingInput
        data.balcony = balconyInput
        data.properties = propertiesInput
        data.info = infoInput
        
        // console.log("data=>", data)
        if (illegalData.length === 0) submit({ about: data } , +index + indexToMove)
    }

    return (
        <div className={"about-item_form "+ getClass(index)} onClick={()=>onClick(index)}>
            <TitleSubForm index={index} title=" על הנכס " isCompleted={open > index} />
            {index == open && <form className='about-content' ref={formRef}>
                <CustomInput
                    required
                    title="מספר חדרים"
                    placeholder="בחירת מספרי חדרים"
                    dropDownData={[1, 2, 3, 4, 5, 6, 7]}
                    id="roomsNumber"
                    isiIllegal={!illegalData.includes("roomsNumber")}
                />
                <CustomRadioButton
                    title="חניה"
                    data={["ללא", 1, 2, 3]}
                    id="parking"
                    onChange={setParkingInput}
                />
                <CustomRadioButton
                    title="מרפסת"
                    data={["ללא", 1, 2, 3]}
                    id="balcony"
                    onChange={ setBalconyInput }
                />
                <CustomMultiSelect
                    id="properties"
                    title="מאפייני הנכס"
                    onChange={ setPropertiesInput }
                    data={['מיזוג', 'ממ"ד', 'מחסן', 'ריהוט', 'גישה לנכים', 'מעלית', 'מזגן תדיראן', 'יחידת דיור', 'משופצת', 'מטבח כשר', 'דוד שמש', 'סורגים']}
                />
                <CustomDescriptionInput
                    title="מה חשוב לך שידעו על הנכס?"
                    subTitle="פרוט הנכס"
                    info="אין צורך להוסיף מספר טלפון כחלק מהתיאור, בהמשך התהליך יש אזור מסודר לזה"
                    id="info"
                    onChange={setInfoInput}
                    placeholder="זה המקום לתאר את הדברים הבןלטים, למשל,האם נערך שיפוץ בבניין וכו"
                />
                <ButtonSubmitForm submitForm={submitTo} returnToIndex={ open != returnToIndex ? null : returnToIndex } />
            </form>}
        </div>
    )
}

export default AboutItemForm
