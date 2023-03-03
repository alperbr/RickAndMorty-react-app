import "./index.css";
import CharactersList from "./features/characters/CharactersList";
import Header from "./components/Header";
function App() {
  return (
    <div className="container">
      <Header />
      <div className="charactersList">
      <CharactersList />
      </div>
    </div>
  );
}

export default App;
