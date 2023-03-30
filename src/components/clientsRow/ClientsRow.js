import { Link } from 'react-router-dom'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import './clientsRow.scss'

const ClientsRow = ({name}) =>{


    return(
        <div className="clients__row">
            <Link to={'/clientId'}>
                <div className="clients__row-name">{name}</div>
                <div className="clients__row-email">mursla@gmail.com</div>
                <div className="clients__row-address">NY new york</div>
                <div className="clients__row-phone">(123) 456 78</div>
                <div className="clients__row-options"><BiDotsVerticalRounded/></div>
            </Link>
        </div>
    )
}

export default(ClientsRow)