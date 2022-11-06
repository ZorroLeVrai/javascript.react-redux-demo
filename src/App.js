import './App.css';
import configureStore from './store/configureStore';
import Counterc from './components/Counterc';
import { Provider } from 'react-redux';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Counterc/>
    </Provider>
  );
}

export default App;
