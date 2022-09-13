import { useState } from 'react'
import './Plane.style.scss'


function Plane({ title, image, price, days, cons, pros, color, submit, isRecommended }) {

    return (
        <div className={"plane "}>
            <div className='header' style={{ backgroundColor: `rgba(${color}, 10%)` }}>
                <label>{title}</label>
                {isRecommended && <label className='recommended_label'>מומלץ</label>}
                <img src={ image } />
            </div>
            <label className='price'>{price}</label>
            <label className='time'>{days} ימים</label>
            <button onClick={submit}>בחירה במסלול</button>
            <div className='cons-pros'>
                {pros && pros.map((el, index) => <label key={index} className='pro'> { el } </label>)}
                {cons && cons.map((el, index) => <label key={index} className='cons'> { el } </label>)}
            </div>
        </div>
    )
}

export default Plane
