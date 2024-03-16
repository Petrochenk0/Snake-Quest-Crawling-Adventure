import { useDispatch } from 'react-redux';
import { saveKey } from './store/gameSlice';
import Board from './components/Board';
import Status from './components/Status';

function App() {
  const dispatch = useDispatch();
  const keyDownHandler = (event: any) => {
    dispatch(saveKey(event.key));
  };
  return (
    <div className="App" onKeyDownCapture={keyDownHandler}>
      <Board />
      <Status />
    </div>
  );
}

export default App;
