

import './pagesStyle/singleClientPage.scss'

const SingleClientPage = () =>{

    return (
        <div className="client__page">
            <div className="client__page-title">Mursal Naleye</div>
            <form className='client__page-form'>
                <label htmlFor="client-name">Name</label>
                <input type="text" id='client-name' className="client__page-name client__page-input" placeholder='Client Name'/>
                <label htmlFor="client-email">Email</label>
                <input type="text" id='client-email' className="client__page-email client__page-input" placeholder='name@client.com'/>
                <label htmlFor="client-address">Address</label>
                <input type="text" id='client-address' className="client__page-address client__page-input" placeholder='Street'/>
                <input type="text" id='client-address' className="client__page-address client__page-input" placeholder='City, State'/>
                <input type="text" id='client-address' className="client__page-address client__page-input" placeholder='Zip'/>
                <label htmlFor="client-phone">Phone</label>
                <input type="text" id='client-phone' className="client__page-phone client__page-input" placeholder='(123) 456 789'/>
                <label htmlFor="client-BSphone" >Mobile</label>
                <input type="text" id='client-BSphone' className="client__page-BSphone client__page-input" placeholder='E.g 123-45-6789'/>
            </form>

            <button className="client__remove">Remove Client</button>
            <button className="client__close">Close</button>
        </div>
    )
}

export default SingleClientPage