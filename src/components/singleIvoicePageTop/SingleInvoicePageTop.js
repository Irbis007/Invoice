
import { useState, useRef } from 'react';
import {BiImage} from 'react-icons/bi'
import {GrFormClose} from 'react-icons/gr'


import './singleInvoicePageTop.scss'
const SingleInvoicePageTop = () =>{
    const [image, setImage] = useState(false)
    const ref = useRef()


    const handleMouseEnter = () => {
        if(image){
            ref.current.style.display = "block" 
        } else {
            ref.current.style.display = "none" 
        }
    }
    const handleMouseLeave = () => {
        ref.current.style.display = "none" 
    }
    

    return(
        <div className="invoice__page-top">
            <input type="text" className="invoice__page-invoice_num" placeholder='Invoice'/>
            <div className="invoice__page-form_wrapper" onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <form className="invoice__page-drop_zone" onClick={() => document.querySelector(".invoice__page-input_file").click()}>
                    <input type="file" name="myFile" accept='image/*' className='invoice__page-input_file' hidden
                    onChange={({target: {files}}) =>{
                        if(files){
                            setImage(URL.createObjectURL(files[0]))
                        }
                    }}/>
                    {image ? <img src={image} alt={image} width={70} height={70}/> : <BiImage size={35} color={'#777'}/>}
                </form>

                <div className={"delete__logo "} ref={ref} style={{'display': 'none'}} onClick={()=> setImage(false)}><GrFormClose size={20}/></div>
            </div>
        </div>
    )
}

export default SingleInvoicePageTop;