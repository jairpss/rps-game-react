import './App.css';
import styled from 'styled-components'
import Header from './components/Header'
import Wrapper from './components/Wrapper'

function App() {
  return (
    <AppStyled>
      <Wrapper>
         <Header />
      </Wrapper>
    </AppStyled>
  );
}

const AppStyled = styled.main`
  background-image: radial-gradient(circle at top, #1F3757 20%, #131537 100%);
  color: white;
  font-family: 'Barlow Semi Condensed', sans-serif;

  background: #111f43;
  min-height: 100vh;
  padding: 2em;

`;


export default App;
