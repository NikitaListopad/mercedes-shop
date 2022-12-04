import {Layout} from "./components/Layout";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main";
import {ItemsList} from "./components/ItemsList";
import {ReactComponent as WesternLogo} from './icons/western-union.svg'
import {ReactComponent as RiaLogo} from './icons/ria-money.svg'
import {ReactComponent as PayPalLogo} from './icons/paypal.svg'

function App() {
  return (
    <div>
    <Layout>
        <Header />
        <Main>
            <ItemsList />
        </Main>
        <footer className='footer'>
            <svg viewBox="0 0 48 48" height="56" width="40">
                <path fill="#e1e1e1" d="M36.817 14.654c.464-2.956-.003-4.967-1.602-6.789C33.455 5.859 30.275 5 26.206 5h-11.81a1.69 1.69 0 00-1.669 1.426L7.809 37.612a1.014 1.014 0 001.001 1.172h7.291l-.503 3.191A.887.887 0 0016.474 43h6.146c.728 0 1.347-.529 1.46-1.248l.06-.312 1.158-7.342.075-.406a1.478 1.478 0 011.46-1.248h.919c5.954 0 10.616-2.419 11.978-9.415.569-2.923.275-5.363-1.23-7.078a5.874 5.874 0 00-1.683-1.297"></path>
                <path fill="#a4a4a4" d="M36.817 14.654c.464-2.956-.003-4.967-1.602-6.789C33.455 5.859 30.275 5 26.206 5h-11.81a1.69 1.69 0 00-1.669 1.426L7.809 37.612a1.014 1.014 0 001.001 1.172h7.291l1.832-11.614-.057.364a1.685 1.685 0 011.663-1.427h3.466c6.806 0 12.135-2.765 13.692-10.761.046-.237.085-.466.12-.692"></path>
                <path fill="#a4a4a4" d="M17.898 27.534a1.685 1.685 0 011.663-1.427h3.466c11.878 0 13.184-8.52 13.813-11.453-.393-.208-2.227-1.209-6.199-1.209h-9.258c-.227 0-1.173.105-1.46 1.248l-2.025 12.841z"></path>
            </svg>
            <WesternLogo />
            <RiaLogo />
            <PayPalLogo />
        </footer>
    </Layout>
    </div>
  );
}

export default App;
