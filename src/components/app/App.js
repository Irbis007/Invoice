import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Invoices,SingleInvoicePage, Clients, SingleClientPage } from '../../pages'

import Header from '../header/haeder'


import './app.scss'

const App = () =>{
    return(
        <Router>
            <div className="app">
                <Header/>
                <div className="container">
                    <main className="main">
                        <Routes>
                            <Route path='/' element={<Invoices/>}/>
                            <Route path='/invoiceId' element={<SingleInvoicePage/>}/>
                            <Route path='/clientId' element={<SingleClientPage/>}/>
                            <Route path='/clients' element={<Clients/>}/>
                        </Routes>
                    </main>
                </div> 
            </div>
        </Router>

    )
   
}

export default App;