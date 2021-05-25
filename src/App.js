import './App.css';
import styled from 'styled-components'
import Header from './components/Header'
import Wrapper from './components/Wrapper'
import Options from './components/Options'
import Rules from './components/Rules'

function App() {
  return (
    <AppStyled>
      <Wrapper>
        <div className="app-content">
          <Header />
          <Options />
          <Rules />
        </div>  
      </Wrapper>
    </AppStyled>
  );
}

const AppStyled = styled.main`
  background-image: radial-gradient(circle at top, #1F3757 20%, #131537 100%);
  color: white;
  font-family: 'Barlow Semi Condensed', sans-serif;
  .app-content{
    min-height: 100vh;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
    padding: 2em;
  }
  

`;


export default App;
