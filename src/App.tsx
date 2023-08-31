import "./App.css";
import { Header } from "./components/Header";
import { LeftBlock } from "./components/LeftBlock";
import { Main } from "./components/Main";
import { RightBlock } from "./components/RightBlock";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <LeftBlock />
        <RightBlock />
      </Main>
    </div>
  );
}

export default App;
