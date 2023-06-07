import Container from 'components/Container';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { FavoritesProvider } from 'contexts/useFavoritesContext';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Container>
        <FavoritesProvider>
          <Outlet />
        </FavoritesProvider>
      </Container>
      <Footer />
    </>
  );
}

export default App;
