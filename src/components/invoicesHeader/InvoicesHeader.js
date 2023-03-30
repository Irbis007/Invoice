
import {MdKeyboardArrowDown} from 'react-icons/md'

import './invoicesHeader.scss'

const InvoicesHeader = () =>{

    return(
        <thead>
            <tr className='invoices__header'>
                <th className="invoices__header-title">Invoice</th>
                <th className="invoices__header-client">Client</th>
                <th className="invoices__header-date">Date <MdKeyboardArrowDown/></th>
                <th className="invoices__header-balance">Balance Due</th>
            </tr>
        </thead>
    )
}

export default InvoicesHeader;