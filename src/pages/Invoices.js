import InvoicesHeader from "../components/invoicesHeader/InvoicesHeader";
import InvoiceRow from "../components/invoiceRow/InvoiceRow";

import { useState } from 'react';

import '../pages/pagesStyle/invoices.scss'

const Invoices = () =>{

    let [arrOfNames, setArrOfNames] = useState(['Mursal', 'Ahmed', 'MMA Trucking', 'Taliso', 'Taliso Expess', ])
    const [visibleData, setVisibledata] = useState(arrOfNames)

    const searchEmp = (items, term) =>{
        if(term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    const onUpdateSearch = (term) =>{
        console.log(term)
        setVisibledata(searchEmp(arrOfNames, term))
    }

    return(
    <>
        <div className="clients__search">
            <input type="text" placeholder='Search by Client Name' onChange={e => onUpdateSearch(e.target.value)}/>
            <button>New Invoice</button>
        </div>
        <table className="invoices">
            <InvoicesHeader/>
            <tbody>
                <tr>
                {
                    visibleData.map((item, i)=>{
                        return (
                            <InvoiceRow name={item} key={i}/>
                        )
                    })
                }

                </tr>
            </tbody>
        </table>
    </>

    )
}

export default Invoices;