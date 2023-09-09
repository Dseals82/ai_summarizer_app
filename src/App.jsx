import Hero from "./components/Hero/Hero";
import Demo from "./components/Demo/Demo";
import "./App.css";

const App = () => {
  return (
    <main>
      <div>
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;
