import {Layout} from "./components/Layout";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main";
// import {ItemsList} from "./components/ItemsList";
import WesternLogo from './icons/western-union.svg'
import RiaLogo from './icons/ria-money.svg'
import PayPalLogo from './icons/paypal.svg'
import MoneyGram from './icons/money-gram.svg'
import ItemPage from "./components/ItemPage";

const iconsArray = [RiaLogo, MoneyGram, WesternLogo, PayPalLogo]
const item = {
    title: 'Диски AMG 20',
    price: '800$',
    photo: 'https://www.alloyhub.com/wp-content/uploads/2022/06/DSC_0990-scaled.jpg'
};

    function App() {
  return (
    <>
    <Layout>
        <Header />
        <Main>
            <ItemPage item={item}/>
            {/*<ItemsList />*/}
        </Main>
        <footer className='footer'>
            {iconsArray.map(item => <img src={item} className='footerIcons' alt='#'/>)}
        </footer>
    </Layout>
    </>
  );
}

export default App;
