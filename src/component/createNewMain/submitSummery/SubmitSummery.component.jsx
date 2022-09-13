import { useEffect } from 'react'

function SubmitSummery({ data }) {

    useEffect(() => console.warn("all Data =>",data), [])
    
    return (
        <div className="summery" >
            <h2>המודעה שלך נוספה בהצלחה</h2>
            {/* <h3>פרטי המודעה: </h3> */}
            {/* <div className='content'>
            {data && Object.keys(data).map((key, i) => <div key={i}>
                {key} :
                {data[key] && Object.keys(data[key]).map((elKey, index) => <div key={index}>
                    {elKey} : {data[key][elKey]}
                    </div>)}
            </div>)}
            </div> */}
        </div>
    )
}

export default SubmitSummery

