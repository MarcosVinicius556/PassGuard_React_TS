import { BrowserRouter } from 'react-router-dom';
import RouteConfig from './routes/RouteConfig';
import Header from './components/Header';
import Footer from './components/Footer';

//Styles
import { BodyContent, MainSection } from './styles/Global';

function App() {

  return (
    <>
      <BodyContent>
        <Header />
        <MainSection>
          <BrowserRouter>
            <RouteConfig />
          </BrowserRouter>
        </MainSection>
        <Footer />
      </BodyContent>
    </>
  )
}

export default App
