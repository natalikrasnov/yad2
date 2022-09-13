import { useRef, useState } from 'react'
import './CustomDescriptionInput.style.scss'

function CustomDescriptionInput({ title, subTitle, info, required, disabled, placeholder, onChange}) {
    const [textLength, setTextLength] = useState(0)
    const inputRef = useRef(null)
    const progressRef = useRef(null)

    const inputChanged = (event) => {
        setTextLength(event.target.value.length)
        onChange(event.target.value)
    }

    const deleteContent = (e) => {
        e.preventDefault()
        inputRef.current.value = ""
        setTextLength(0)
        
    }

    const getProgressText = () => {
        if (textLength == 0) {
            if(progressRef.current) progressRef.current.style.backgroundColor = 'red'
            return 'ממליצים לך בחום להוסיף תיאור'
        } 
        if (textLength > 0 && textLength <= 30) {
            progressRef.current.style.backgroundColor = 'orangered'
            return 'מרגיש לנו שהטקסט שכתבת קצר מידי'
        }
        if (textLength > 30 && textLength <= 60) {
            progressRef.current.style.backgroundColor = 'orange'
            return 'יופי, המודעה הולכת לכיוון נכון'
        }
        if (textLength > 60 && textLength <= 100) {
            progressRef.current.style.backgroundColor = 'yellow'
            return 'עוד ממש קצת וזה שם'
        }
        if (textLength > 100 && textLength <= 130) {
            progressRef.current.style.backgroundColor = 'greenyellow'
            return 'אוטוטו'
        }
        if (textLength > 130) {
            progressRef.current.style.backgroundColor = 'green'
            return 'בול!'
        }
    }

    return (
        <div className={'description-input ' + (disabled ? ' disabled' : '')}>
            <label className='title'>{title}{required && '*'}</label>
            <label className='sub_title'>{subTitle}</label>
            <div className='count_content'>
                <span className='progress-bar'>
                    <label>{getProgressText()}</label>
                    {/* <span className='progress-bar progress-bar_border'> */}
                        <span className='progress-bar progress' style={{width: textLength < 150 ? `${textLength/1.5}%` : '100%'}} ref={progressRef}>
                        {/* </span> */}
                    </span>
                </span>
                
                <label>{textLength}/400</label>
            </div>
           
            <div className='input_content'>
            <textarea
                className='input'
                onInput={inputChanged}
                maxLength="400"
                    ref={inputRef}
                    placeholder={placeholder}
            />
            {textLength > 0 && <button className='delete_content' onClick={deleteContent}>X</button>}
         </div>
            {info && <p >{info}</p>}
        </div>
    )
}

export default CustomDescriptionInput
