import { useRef } from 'react'
import { useState, useContext } from 'react'

import AboutItemForm from '../createNewItemForm/aboutItemForm/AboutItemForm.component'
import AddImagesForm from '../createNewItemForm/addImegesForm/AddImagesForm.component'
import AddressForm from '../createNewItemForm/addressForm/AddressForm.component'
import CategoryForm from '../createNewItemForm/categoryForm/CategoryForm.component'
import ChoosePathForm from '../createNewItemForm/choosePathForm/ChoosePathForm.component'
import ContactOwnerForm from '../createNewItemForm/contactOwnerForm/ContactOwnerForm.component'
import PaymentsForm from '../createNewItemForm/paymentsForm/PaymentsForm.component'
import SubmitSummery from './submitSummery/SubmitSummery.component'

import { CreateNewItemContext } from '../../context/CreateNewItem.context'
import {addItemAction } from '../../actions/CreateNewItem.action'

import './CreateNewMain.style.scss'

function CreateNewMain() {

    const displayRef = useRef(null)
    const [currentOpen, setCurrentOpen] = useState(1)
    const [lastOpen, setLastOpen] = useState(1)

    const [displaySummery, setDisplaySummery] = useState(false) 
    const {form, dispatchForm } = useContext(CreateNewItemContext);

    const formSubmitted = (data, index, returnToIndex) => {
        if (!data && !index) {
            setDisplaySummery(true)
            return
        }
        dispatchForm(addItemAction({ ...data, index }))

        if (returnToIndex) setCurrentOpen(lastOpen)
        else { 
            setCurrentOpen(+index + 1)
            if ((+index + 1) > lastOpen) setLastOpen(+index + 1)
        } 
    }

    const edit = (index) => {
        if(index < currentOpen) setCurrentOpen(index)
    }
    

    const getClass = (index) => {
        if (currentOpen < index) return ' disabled'
        if(currentOpen > index) return ' completed'
        return ''
    }

    return (
        <div className="create-new_main" ref={ displayRef }>
            {!displaySummery ? <>
                <CategoryForm index="1 " returnToIndex={ lastOpen } open={currentOpen} submit={formSubmitted} onClick={edit} getClass={ getClass } />
                <AddressForm index="2"  returnToIndex={ lastOpen } open={ currentOpen }  submit={formSubmitted} onClick={ edit }  getClass={ getClass }  />
                <AboutItemForm  index="3" returnToIndex={ lastOpen }  open={ currentOpen  } submit={formSubmitted} onClick={ edit }  getClass={ getClass }  />
                <PaymentsForm  index="4"  returnToIndex={ lastOpen } open={ currentOpen }  submit={formSubmitted} onClick={ edit }  getClass={ getClass } />
                <AddImagesForm  index="5" returnToIndex={ lastOpen } open={ currentOpen }  submit={formSubmitted} onClick={ edit }  getClass={ getClass } />
                <ContactOwnerForm  index="6" returnToIndex={ lastOpen } open={ currentOpen }  submit={formSubmitted} onClick={ edit }  getClass={ getClass } />
                <ChoosePathForm  index="7" returnToIndex={ lastOpen } open={ currentOpen }  submit={formSubmitted} onClick={ edit }  getClass={ getClass } />
            </>
                :
                <SubmitSummery data={ form } />
        }
        </div>
    )
}

export default CreateNewMain
