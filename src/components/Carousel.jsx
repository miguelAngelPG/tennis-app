import Pelota from 'assets/imgs/Pelota-tenis.png'
import Pelota2 from 'assets/imgs/Pelota-tenis2.png'
import Raqueta from 'assets/imgs/Raqueta.png'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'

export const Carousel = () => {
    return (
        <section className="carousel_section">
            <div className='carousel_container'>
                <span className='arrow left'><FaLessThan/></span>
                <div className='carousel_item'>
                    <img src={Pelota} alt='Pelota'/>
                    <div className='carousel_info'>
                        <p>Wilson Championship Extra Duty Tennis Balls, 3-pk</p>
                        <p>$22.09</p>
                    </div>
                </div>
                <div className='carousel_item'>
                    <img src={Pelota2} alt='Pelota2' />
                    <div className='carousel_info'>
                        <p>Wilson starter 3 balls</p>
                        <p>$24.69</p>
                    </div>
                </div>
                <div className='carousel_item'>
                    <img src={Raqueta} alt='Raqueta' />
                    <div className='carousel_info'>
                        <p>Wilson tour slam lite tennis racquet</p>
                        <p>$24.95</p>
                    </div>
                </div>
                <span className='arrow right'><FaGreaterThan/></span>
            </div>
            <button>ver todos</button>
        </section>
    )
}
