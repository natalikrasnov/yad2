import { useRef } from 'react'
import { useState } from 'react'
import './UploadImage.style.scss'

function UploadImage({ id,title, placeholder, type, info, required, disabled, onChange}) {

    const [image, setImage] = useState(null)
    const [imageRotate, setImageRotate] = useState(0)

    const imgRef = useRef(null)
   
    const GetTypeImage = () => {
        switch (type) {
            case 'video':
                return <div className='video-icon' ><svg xmlns="http://www.w3.org/2000/svg" fill='rgba(0, 0, 0, 0.5)' viewBox="0 0 600 450">
                    <path style={{margin: 'auto'}} d="M558.8 99.64c-10.59-5.484-23.37-4.76-33.15 2.099l-102.8 72.04c-7.25 5.062-9 15.05-3.938 22.28C423.1 203.3 433.9 205 441.2 200L544 128v255.9L441.2 312c-7.266-5.047-17.22-3.312-22.28 3.938c-5.062 7.234-3.312 17.22 3.938 22.28l102.8 71.98c5.5 3.844 11.94 5.786 18.38 5.786c5.047 0 10.12-1.203 14.78-3.625C569.4 406.8 576 395.1 576 383.1V128C576 116 569.4 105.2 558.8 99.64zM320 64H64C28.65 64 0 92.65 0 128v256c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128C384 92.65 355.3 64 320 64zM352 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V128c0-17.64 14.36-32 32-32h256c17.64 0 32 14.36 32 32V384z" />
                </svg></div>
            default:
                return <label className='plus-icon'>+</label>;
        }
    }

    const addImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            const img = URL.createObjectURL(event.target.files[0])
            setImage(img)
            onChange(img, id)
        }
            
    }

    const rotateImage = () => {
        // if(imageRotate == 360) setImageRota
        te(0)
        imgRef.current.style.rotate = imageRotate + 90 + 'deg'
        setImageRotate(imageRotate + 90)
        
    }

    return (
        <>
        <div className={'upload-image '+ (disabled ? ' disabled ' : '')+(title? ' main_frame ' : '')}>
                {title && <label className='title'>{title}</label>}
                <input type="file" className='upload-image_input' onChange={addImage} />
                {image&&<div className='image_actions'>
                      <button className='trash' onClick={()=>setImage(null)}>&#128465;</button>
                    <button className='rotate' onClick={rotateImage}>&#8634;</button>
                </div>}
                {image && <div className='image'>
                  
                    {type != 'video' ? <img className='img' src={image} ref={imgRef} /> : <div>הסרטון עלה, אפשר להמשיך בפרסום</div>}
                </div>}
                <div className='content' >
                    <GetTypeImage />
                    <label>{placeholder}</label>
                    
                </div>
               
            </div>
            {info && <p>{info}</p>}
        </>
    )
}

export default UploadImage
