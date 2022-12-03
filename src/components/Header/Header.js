import {Navigation} from "./Navigation";

export const Header = () => {
    return (
        <header className='header'>
            <div className='headerTop'>
                <div className="logo">
                    <img srcSet={'https://mercedes-benz-kiev.com/themes/benz/images/logo-2x.png?1550655820'} alt="Logo"/>
                </div>
                <Navigation />
            </div>
            <section className='headerImage'>
                <img srcSet={'https://img.mercedes-benz-kiev.com/data/main/shini/1.jpeg'} alt="Mercedes"/>
            </section>
        </header>
    )
}