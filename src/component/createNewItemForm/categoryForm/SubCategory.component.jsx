import { useState } from 'react'
import TitleSubForm from '../titleSubForm/TitleSubForm.component'
import './CategoryForm.style.scss'

import {category} from '../../../data/svg'

function SubCategoryForm({keyData, select, localKey}) {

    const GetSvg = () => {
        switch (keyData) {
            case "sale":
                return <category.sale />
            case "rent":
                return <category.rent />
            case "roommate":
                return <category.roommate />
            case "commercial":
                return <category.commercial/>
        }
        
    }

    return (
        <div className='category' id={keyData} onClick={()=>select(keyData)}>
            <GetSvg />
            <label className='category_name'>{localKey ? localKey : keyData}</label>
        </div>
    )
}

export default SubCategoryForm
