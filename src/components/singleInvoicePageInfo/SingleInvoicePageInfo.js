import { useEffect, useState } from 'react'
import Calendar from 'react-calendar'

import './singleInvoicePageInfo.scss'
import 'react-calendar/dist/Calendar.css';

const SingleInvoicePageInfo = () =>{
    const [valueDate, onChangeData] = useState(`${new Date()}`.slice(3, 16))
    const [inputDateValue, setInputDateValue] = useState(false)
    useEffect(()=>{
        setInputDateValue(inputDateValue?inputDateValue:valueDate)
    }, [])

    const onSelectDate = (value) =>{
        onChangeData(value);
        setInputDateValue(`${value}`.slice(3, 16));
        document.querySelector('.calendar').style.display = 'none';
        
    }
    const onOpenCalendar = () =>{
        document.querySelector('.calendar').style.display = 'block';
    }

    return (
        <>
            <div className="invoice__info">
                <input type="text" className="invoice__input-number"/>
                <label htmlFor="gsd" className='label__date'>
                    <input type="text" id="start" className='start'  value={inputDateValue} onChange={(e) => setInputDateValue(e.target.value)} onClick={onOpenCalendar}/>
                    <div className="calendar" style={{'display': 'none'}}>
                        <Calendar onChange={(value) => {onSelectDate(value)}} value={valueDate} />
                    </div>
                </label>
            </div>
            <div className="invoice__line">
                <div className="invoice__line-description">desciption</div>
                <div className="invoice__line-rate">rate</div>
                <div className="invoice__line-qty">qty</div>
                <div className="invoice__line-amount">amount</div>

            </div>
        </>
    )
}

export default SingleInvoicePageInfo;