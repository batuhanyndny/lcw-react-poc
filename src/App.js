import './Saas/App.scss';
import Header from './Components/Header/Header';
import Homepage from './Views/Homepage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mx-7 mt-5">
        <Homepage/>
      </div>
    </div>
  );
}

export default App;
