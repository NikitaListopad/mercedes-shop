import {Layout} from "./components/Layout";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main";
import {ItemsList} from "./components/ItemsList";
import WesternLogo from './icons/western-union.svg'
import RiaLogo from './icons/ria-money.svg'
import PayPalLogo from './icons/paypal.svg'
import MoneyGram from './icons/money-gram.svg'

const iconsArray = [RiaLogo, MoneyGram, WesternLogo, PayPalLogo]

function App() {
  return (
    <>
    <Layout>
        <Header />
        <Main>
            <ItemsList />
        </Main>
        <footer className='footer'>
            {iconsArray.map(item => <img src={item} className='footerIcons' alt='#'/>)}
        </footer>
    </Layout>
    </>
  );
}

export default App;
