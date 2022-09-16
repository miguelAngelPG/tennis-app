import Catalog1 from 'assets/imgs/catalog.png'
import Catalog2 from 'assets/imgs/catalog2.png'
import Catalog3 from 'assets/imgs/catalog3.png'

export const Catalog = () => {
    return (
        <section className="catalog_section">
            <div className='catalog_item'>
                <img src={ Catalog3 } alt='Catalog2' />
                <h6>Raquetas</h6>
            </div>
            <div className='catalog_item'>
                <img src={ Catalog2 } alt='Catalog3' />
                <h6>Pelotas</h6>
            </div>
            <div className='catalog_item'>
                <img src={ Catalog1 } alt='Catalog1' />
                <h6>Accesorios</h6>
            </div>
        </section>
    )
}
