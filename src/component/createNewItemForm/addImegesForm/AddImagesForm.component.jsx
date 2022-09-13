import { useState , useRef} from 'react'
import './AddImagesForm.style.scss'

import TitleSubForm from '../titleSubForm/TitleSubForm.component'
import ButtonSubmitForm from '../buttonsSubmitForm/ButtonsSubmitForm.component'
import UploadImage from '../../uploadImage/UploadImage.component'

function AddImagesForm({ index, open, submit, onClick, getClass ,returnToIndex}) {
    
     const [images, setImages] = useState(Array(11))
    const formRef = useRef()

    const submitTo = (indexToMove) => {

        console.log("data=>", images)
       submit({ images } , +index + indexToMove)
    }

    const addImage = (urlImage, id) => {
        images[id] = urlImage
        setImages(images)
    }


    return (
        <div className={"add-images_form "+ getClass(index)} onClick={()=>onClick(index)}>
            <TitleSubForm index={index} title=" תמונות וסרטונים" isCompleted={open > index} />
            {index == open && <form className='images-content' ref={formRef}>
                <p>
                    ידעת שמודעות עם תמונות ברורות מקבלות פי 10 יותר פניות?<br></br>
                    לא להסס להעלות לפה תמונות (אפשר עד 10 + וידאו) ולהבליט את הצדדים הטובים ביותר של הנכס
                    
                </p>
                <div className='row border-bottom'>
                    <UploadImage
                        id="1"
                        type="video"
                        placeholder="העלאת סרטון"
                        onChange={addImage}
                    />
                    <UploadImage
                        id="2"
                        title="תמונה ראשית"
                        placeholder="העלאת תמונה"
                        onChange={addImage}
                    />
                </div>
                <h2>תמונות שיופיעו בגוף המודעה</h2>
                <div className='row'>
                    <UploadImage placeholder="העלאת תמונה" id="3"
                        onChange={addImage}/>
                    <UploadImage placeholder="העלאת תמונה" id="4"
                        onChange={addImage}/>
                    <UploadImage placeholder="העלאת תמונה" id="5" 
                        onChange={addImage}/>
                     <UploadImage placeholder="העלאת תמונה" id="6"
                        onChange={addImage}/>
                    <UploadImage placeholder="העלאת תמונה" id="7"
                        onChange={addImage}/>
                    <UploadImage placeholder="העלאת תמונה" id="8"
                        onChange={addImage}/>
                    <UploadImage placeholder="העלאת תמונה" id="9"
                        onChange={addImage}/>
                    <UploadImage placeholder="העלאת תמונה" id="10"
                        onChange={addImage}/>
                    <UploadImage placeholder="העלאת תמונה" id="11"
                        onChange={addImage}/>
                </div>
                <ButtonSubmitForm submitForm={submitTo} returnToIndex={  open != returnToIndex ? null : returnToIndex }/>
                </form>
            }
        </div>
    )
}

export default AddImagesForm
