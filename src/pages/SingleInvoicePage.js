

import SingleInvoicePageTop from '../components/singleIvoicePageTop/SingleInvoicePageTop';
import SingleInvoicePageSendInfo from '../components/SingleInvoicePageSendInfo/SingleInvoicePageSendInfo';
import SingleInvoicePageInfo from '../components/singleInvoicePageInfo/SingleInvoicePageInfo';
import InvoiceItem from '../components/invoiceItem/InvoiceItem';
import './pagesStyle/singleInvoicePage.scss';

const SingleInvoicePage = () =>{


    return(
        <div className="invoice__page">
            <SingleInvoicePageTop/>
            <div className="send__info">
                <SingleInvoicePageSendInfo sendInfo={'from'}/>
                <SingleInvoicePageSendInfo sendInfo={'to'}/>
            </div>
            <SingleInvoicePageInfo/>
            <InvoiceItem/>
            <InvoiceItem/>
            <InvoiceItem/>
            <InvoiceItem/>
        </div>
    )
}


export default SingleInvoicePage;