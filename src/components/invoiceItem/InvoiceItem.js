
import { useState } from 'react'
import {GrFormClose} from 'react-icons/gr'
import './invoiceItem.scss'

const InvoiceItem = () =>{
    const [rateValue, setRateValue] = useState()
    const [qtyValue, setQtyValue] = useState()

    // if (/[a-zа-яё]/i.test(inputText)){
    //     containsLetters(inputText);
    // } else {
    //     doesNotContainLetters(inputText);
    // }
    
    return (
        <div className="invoice__item">
            <button className="invoice__item-delete"><GrFormClose /></button>
            <input type="text" className="invoice__item-title invoice__item-input" placeholder='Item descrioption'/>
            <textarea type="text" className="invoice__item-descr invoice__item-input" placeholder='Additional details'></textarea>
            <input type="text" className="invoice__item-rate  invoice__item-input" placeholder='0.00' value={rateValue} onChange={e => setRateValue(e.target.value)}/>
            <input type="text" className="invoice__item-qty   invoice__item-input" placeholder='0' value={qtyValue} onChange={e => setQtyValue(e.target.value)}/>
            <div className="invoice__item-amount">$0.00</div>
        </div>
    )
}

export default InvoiceItem;