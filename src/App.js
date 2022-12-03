import {Layout} from "./components/Layout";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main";
import {ItemsList} from "./components/ItemsList";

function App() {
  return (
    <div>
    <Layout>
        <Header />
        <Main>
            <ItemsList />
        </Main>
        <footer className='footer'>

        </footer>
    </Layout>
    </div>
  );
}

export default App;
