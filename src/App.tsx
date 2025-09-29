import Header from './components/header';
import Terminal from './components/terminal';
import Projects from './components/projects';
import './App.scss';
import Contact from './components/contact';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Terminal />
      </main>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;