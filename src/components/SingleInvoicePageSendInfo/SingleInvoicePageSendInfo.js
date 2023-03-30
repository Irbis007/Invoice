

import { useState } from 'react'
import './singleInvoicePageSendInfo.scss'

const SingleInvoicePageSendInfo = ({sendInfo}) =>{
    let data = {
        title: '',
        namePlaceholder: '',
        emailPlaceholder:'',
        id: ''
    }
    let clazze = {}
    if(sendInfo === 'from'){
        data = {
            title: 'From',
            namePlaceholder: 'Bussines Name',
            emailPlaceholder: 'name@bussines.com',
            id: 'bussines'
        }
        clazze = {'display': 'block'}
    } else if(sendInfo === 'to'){
        data = {
            title: 'To',
            namePlaceholder: 'Client Name',
            emailPlaceholder: 'name@client.com',
            id: 'client'
        }
        clazze = {'display': 'none'}
    }

    return(
        <div className="invoice__from">
            <div className="from__title">{data.title}</div>
            <form className='invoice__from-form'>
                <label htmlFor={`${data.id}-name`}>Name</label>
                <input type="text" id={`${data.id}-name`} className="invoice__from-name" placeholder={data.namePlaceholder}/>
                <label htmlFor={`${data.id}-email`}>Email</label>
                <input type="text" id={`${data.id}-email`} className="invoice__from-email" placeholder={data.emailPlaceholder}/>
                <label htmlFor={`${data.id}-address`}>Address</label>
                <input type="text" id={`${data.id}-address`} className="invoice__from-address" placeholder='Street'/>
                <input type="text" id={`${data.id}-address`} className="invoice__from-address" placeholder='City, State'/>
                <input type="text" id={`${data.id}-address`} className="invoice__from-address" placeholder='Zip'/>
                <label htmlFor={`${data.id}-phone`}>Phone</label>
                <input type="text" id={`${data.id}-phone`} className="invoice__from-phone" placeholder='(123) 456 789'/>
                <label htmlFor={`${data.id}-BSphone`} style={clazze}>Business Number</label>
                <input type="text" id={`${data.id}-BSphone`} style={clazze} className="invoice__from-BSphone" placeholder='E.g 123-45-6789'/>
            </form>
        </div>
    )
}

export default SingleInvoicePageSendInfo;