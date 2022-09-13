import './BaseModal.style.scss'

function BaseModal({ closeModal , children}) {

    return (
        <div className='modal_background ' onClick={closeModal}>
            <div className='modal_content' onClick={(e)=> e.stopPropagation()}>
                <button className='close' onClick={closeModal}>X</button>
                {children}
            </div>
        </div>
    )
}

export default BaseModal
