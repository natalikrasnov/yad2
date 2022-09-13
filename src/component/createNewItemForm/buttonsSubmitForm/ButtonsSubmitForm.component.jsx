import './ButtonsSubmitForm.style.scss'

function ButtonSubmitForm({continueTitle, returnToIndex, submitForm, justContinue, justReturn}) {

    const onBack = (e) => {
        e.preventDefault()
        submitForm(-2)
    }

    const onContinue = (e) => {
        e.preventDefault()
        submitForm(returnToIndex? returnToIndex : 0)
    }

    const getContinueTo = () => {
        if(continueTitle) return continueTitle
        if (returnToIndex) return `חזור לשלב ${returnToIndex}`
        return 'להמשיך לשלב הבא'
    }

    return (
        <div className='buttons'>
            {!justContinue && <button onClick={onBack}>
                חזרה
            </button>}
            {!justReturn && <button onClick={onContinue} className='continue'>
                {getContinueTo()} 
            </button> }  
        </div>
    )
}

export default ButtonSubmitForm
