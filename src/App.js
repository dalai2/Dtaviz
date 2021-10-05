import Graph from './components/Graph'
import Header from './components/Header'
import GlobalStyle from './components/styles/Global'
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header>
        <h1>Holi</h1>
      </Header>
      <Graph/>
    </div>
  );
}

export default App;
