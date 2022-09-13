import { useState } from 'react'
import TitleSubForm from '../titleSubForm/TitleSubForm.component'
import './CategoryForm.style.scss'

import {category} from '../../../data/svg'
import SubCategoryForm from './SubCategory.component'
import { useEffect } from 'react'

const locale = {
    sale: 'מכירה',
    rent: 'השכרה', 
    roommate: 'שותפים',
    commercial: 'מסחרי'
}
function CategoryForm({ index, open , submit, onClick, getClass}) {

    const [selectedCategory, setSelectedCategory] = useState(null)

    const select = (key) => {
        setSelectedCategory(key)
        submit({category: key}, index)
    }

    useEffect(() => {
        if(open == index) setSelectedCategory(null)
    }, [open])

    const getTitle = () => {
        switch (selectedCategory) {
            case 'sale':
                return 'אני רוצה למכור נכס'
            case 'rent':
                return 'אני רוצה לשכור נכס'
            case 'roommate':
                return "אני מחפש שותף"
            case 'commercial':
                return " אני רוצה לפרסם נכס מסחרי"
            default :
                return 'באיזו קטגוריה נפרסם היום?'
        }
    }

    return (
        <div className={'category_form '+getClass(index)} onClick={()=>onClick(index)} >
            <TitleSubForm index={index} title={getTitle()} isCompleted={open > index} />
            {open == index && <div className='all_categories'>
                {
                    Object.keys(category).map((key, i) =>
                        <SubCategoryForm key={i} keyData={key} select={select} localKey={locale[key]} />
                    )
                }
                
            </div>}
            
        </div>
    )
}

export default CategoryForm
