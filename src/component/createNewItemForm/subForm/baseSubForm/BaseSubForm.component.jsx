import TitleSubForm from '../titleSubForm/TitleSubForm.component'
import './CategoryForm.style.scss'


function BaseSubForm({ index, open , onClick, getClass, children}) {

    return (
        <div className={'category_form '+getClass()} onClick={()=>onClick(index)} >
            <TitleSubForm index={index} title={getTitle()} isCompleted={open > index} />
            {open == index && children}
        </div>
    )
}

export default BaseSubForm
