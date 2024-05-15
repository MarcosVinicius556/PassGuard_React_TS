import { BrowserRouter } from 'react-router-dom';
import RouteConfig from './routes/RouteConfig';
import Header from './components/Header';
import Footer from './components/Footer';

import { Provider } from 'react-redux';
import passguardStore from './redux/Store';

//Styles
import { BodyContent, MainSection } from './styles/Global';

function App() {

  return (
    <>
      <BodyContent>
          <BrowserRouter>
            <Provider store={passguardStore}>
              <Header />
              <MainSection>
                    <RouteConfig />
              </MainSection>
              <Footer />
            </Provider>
          </BrowserRouter>
      </BodyContent>
    </>
  )
}

export default App
