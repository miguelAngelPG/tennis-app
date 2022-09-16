import Banda from 'assets/imgs/Banda.png'
import PictureAside from 'assets/imgs/Picture.png'
import Pelota from 'assets/imgs/Pelota-tenis.png'
import Pelota2 from 'assets/imgs/Pelota-tenis2.png'
import Raqueta from 'assets/imgs/Raqueta.png'

export const Products = () => {
    return (
        <section className='products_section'>
            <aside>
                <img src={ PictureAside } alt='PictureAside' />
            </aside>
            <article>
                <div className='products_item'>
                    <img src={Pelota2} alt='Pelota2'/>
                    <p>Wilson starter 3 balls</p>
                </div>
                <div className='products_item'>
                    <img src={Raqueta} alt='Raqueta'/>
                    <p>Wilson tour slam lite tennis racquet</p>
                </div>
                <div className='products_item'>
                    <img src={Pelota} alt='Pelota'/>
                    <p>Wilson Championship Extra Duty Tennis Balls, 3-pk</p>
                </div>
                <div className='products_item'>
                    <img src={Banda} alt='Banda'/>
                    <p>Nike Swoosh wristbands</p>
                </div>
            </article>
        </section>
    )
}
