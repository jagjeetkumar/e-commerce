 
import './App.css';
import Header from './component/header';
import Banner from './component/banner';
import Featured from './component/featured-products';
import Hometabs from './component/home-tabs';
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Featured />
      <Hometabs />
    </div>
  );
}

export default App;
