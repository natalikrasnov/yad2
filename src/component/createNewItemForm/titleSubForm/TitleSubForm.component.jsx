import { useState } from 'react'
import './TitleSubForm.style.scss'

function TitleSubForm({ title, index, isCompleted }) {


    return (
        <div className="title-sub_form ">
            <label className={'index '+(isCompleted && ' completed_index')}>
                {
                    !isCompleted
                        ?
                        index
                        :
                        <span>&#10004;</span>
                }
            </label>
            <label className='title'>{title}</label>
            {isCompleted &&
                <label className='edit'>
                    &#x270F;
                </label>}
        </div>            
    )
}

export default TitleSubForm
