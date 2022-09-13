import { useState } from 'react'

import CustomInput from '../../customInput/CustomInput.component'

function GetMultiContacts({  }) {
    const [isMultiContact, setIsMultiContacts] = useState(false)
    
    return (
        <div className='add-more-contact'>
            <div className='line'></div>
            {
                isMultiContact && <>
                            <CustomInput
                                title="שם איש קשר"
                                
                            />
                            <CustomInput
                                title="טלפון ראשי"
                        
                        type="phone"
                            />
            </>
            }
             {
                            !isMultiContact
                            ?
                                <label
                                    className='add_contact'
                                    onClick={() => setIsMultiContacts(true)}
                    >
                        <label>+</label>
                        הוספת איש קשר נוסף                         
                                </label>
                                :
                                <label
                                    className='remove_contact'
                                    onClick={() => setIsMultiContacts(false)}
                    >
                       &#128465; ביטול 
                </label>
            }
        </div>
    )
}

export default GetMultiContacts
