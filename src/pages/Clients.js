
import ClientsRow from '../components/clientsRow/ClientsRow';
import {GoTriangleLeft, GoTriangleRight} from 'react-icons/go'

import './pagesStyle/clients.scss'
import { useState } from 'react';

const Clients = () =>{
    let [arrOfNames, setArrOfNames] = useState(['Mursal', 'Ahmed', 'MMA Trucking', 'Taliso'])
    const [visibleData, setVisibledata] = useState(arrOfNames)
    const [term, setTerm] = useState('')

    const searchEmp = (items, term) =>{
        if(term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    const onUpdateSearch = (term) =>{
        setTerm(term)
        console.log(term)
        setVisibledata(searchEmp(arrOfNames, term))
    }

    return(
        <div className="clients">
            <div className="clients__title">Clients</div>
            <div className="clients__search">
                <input type="text" placeholder='Search by Client Name' onChange={e => onUpdateSearch(e.target.value)}/>
                <button>New Client</button>
            </div>
            <div className="clients__top">
                <div className="clients__top-name">Name</div>
                <div className="clients__top-email">Email</div>
                <div className="clients__top-address">Address</div>
                <div className="clients__top-phone">Phone</div>
            </div>

            <div className='clients__buttons'>
                <button className='button__prev clients__button' disabled><GoTriangleLeft/>Prev</button>
                <button className='button__next clients__button' disabled>Next<GoTriangleRight/></button>
            </div>
        </div>
    )
}

export default Clients;