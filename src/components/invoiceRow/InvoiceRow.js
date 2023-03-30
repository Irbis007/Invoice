
import {BsThreeDotsVertical} from 'react-icons/bs'
import { Link } from 'react-router-dom'

import './invoiceRow.scss'

const InvoiceRow = ({name}) =>{

    return(
        <td className="invoice__row">
            <Link to={'invoiceId'} className="invoice__row">
                <div className="invoice__row-number">inv 1</div>
                <div className="invoice__row-name">{name}</div>
                <div className="invoice__row-date">mar 22, 2023</div>
                <div className="invoice__row-balance">$400</div>
                <button className="invoice__row-button"><BsThreeDotsVertical/></button>
            </Link>
        </td>
    )
}

export default InvoiceRow