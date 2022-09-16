import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import bola from '../assets/imgs/bola.png'

export const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <p>descubre tu pasión</p>
                <button>Comprar ahora</button>
            </div>
            <div className='footer_contact'>
                <img src={ bola } alt='bola' />
                <p>
                    <BsInstagram/>
                    <FaFacebookF/>
                </p>
                <p>© DEV. All Rights Reserved. <ins>Privacy Policy</ins>, <ins>Terms & Conditions</ins></p>
            </div>
        </footer>
    )
}
