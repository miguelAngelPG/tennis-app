import Logo from 'assets/imgs/Logo.png'

export const Hero = () => {
    return (
        <>
            <span>Envios gratis en todo mexico</span>
            <section className='hero_sectition'>
                <nav>
                    <ul>
                        <li>Productos</li>
                        <li><img src={ Logo } alt='Logo'/></li>
                        <li>Contacto</li>
                    </ul>
                </nav>
                <div className='hero_container'>
                    <h1>El mejor deporte</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the 
                        printing and typesetting industry.
                    </p>
                    <button>Comprar Ahora</button>
                </div>
            </section>
        </>
    )
}
