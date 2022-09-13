import { useState } from 'react'
import './Header.style.scss'
import { userData } from '../../../data/userData'

function Header() {

    return (
        <div className="header">
            <img src='https://assets.yad2.co.il/personal/images/general/new_logo_orange.png' />
            <label className='title'>פרסום מודעה חדשה</label>
            <div className='white-space'></div>
            
            <label className='user-name'>
                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="#ff7300cb"
                    height="22px"
                    viewBox="0 -40 500 500">
                    <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" />
                </svg> 
                 {userData.name} 
            </label>
            <label>צור קשר</label>
            <button className='close-form'> יציאה X  </button>
        </div>
    )
}

export default Header
