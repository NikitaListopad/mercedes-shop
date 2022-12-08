import {Navigation} from "./Navigation";
import logo from '../../icons/logo.png'
import banner from '../../icons/header.jpeg'

export const Header = () => {
    return (
        <header className='header'>
            <div className='headerTop'>
                <div className="logo">
                    <img srcSet={logo} alt="Logo"/>
                </div>
                <Navigation />
            </div>
            <section className='headerImage'>
                <img srcSet={banner} alt="Mercedes"/>
            </section>
        </header>
    )
}