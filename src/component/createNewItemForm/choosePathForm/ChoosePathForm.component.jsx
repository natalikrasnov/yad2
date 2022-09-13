import { useState } from 'react'
import './ChoosePathForm.style.scss'

import TitleSubForm from '../titleSubForm/TitleSubForm.component'
import CustomCheckbox from '../../customCheckbox/CustomCheckbox.component'
import Plane from './plane/Plane.component'

function ChoosePathForm({ index, open , getClass, submit, onClick}) {

    const submitTo = () => {
        submit()
    }

    return (
        <div className={"choose-path_form "+  getClass(index)} onClick={()=>onClick(index)}>
            <TitleSubForm index={index}  title=" בחירת מסלול " isCompleted={open > index} />
            {open == index && <div className='inner_content'>
                <h4>זהו, אנחנו בסוף. לנו נשאר לשמור את המודעה שלך, לך נשאר לבחור את מסלול הפרסום.</h4>
                <div className='line'></div>
                <h4>באיזה מסלול לפרסם את המודעה? זה הרגע לבלוט מעל כולם</h4>
                <h4 className='bit'> חדש! משדרגים בקליק עם    
                    <img src='https://assets.yad2.co.il/personal/images/general/bit.png'></img>
                </h4>
                <div className='row'>
                    <Plane
                        title="בסיסי"
                        image="https://assets.yad2.co.il/personal/images/payment/rocket_Free.svg"
                        price="חינם"
                        days="120"
                        color="black"
                        pros={["מודעה רגילה"]}
                        cons={["הקפצה אוטומטית לחסכון בזמן"]}
                        submit={ submitTo }

                    />
                    <Plane
                        submit={ submitTo }
                        isRecommended
                        title="למכור מהר!"
                        image="https://assets.yad2.co.il/personal/images/payment/rocket_VIP.svg"
                        price="199 ₪"
                        days="28"
                        color="yellow"
                        pros={["חשיפה ראשונה לגולשים במיקום עליון ובצבע צהוב", "חיסכו זמן עם הקפצה אוטומטית", "הופעה לפני מודעות רגילות", "מסלול זה מייצר יותר חשיפות ופניות!"]}
                    />
                    <Plane
                        title="מודגשת"
                        image="https://assets.yad2.co.il/personal/images/payment/rocket_Bold.svg"
                        price="99 ₪"
                        days="28"
                        color="red"
                        pros={["מודעה מודגשת בצבע ורוד", "הקפצה אוטומטית לחסכון בזמן", "הופעה לפני מודעות רגילות"]}
                        submit={ submitTo }
                    />
                    
                </div>
                
                <CustomCheckbox
                    title="אני מאשר קבלת דיוור פרסומי הקשור למודעה שפרסמתי באתר יד 2 (להסרה - יש להוריד את הסימון בתיבה)"
                />
            </div>
            }
        </div>
    )
}

export default ChoosePathForm
