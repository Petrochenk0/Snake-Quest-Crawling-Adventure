import { useSelector, useDispatch } from 'react-redux';
import {
  changeStatus,
  moveSnake,
  setDirection,
  checkApple,
  checkGameover,
} from '../store/gameSlice';
import { useRef } from 'react';

function Status() {
  const status = useSelector((store: any) => store.game.status);
  const dispatch = useDispatch();

  let timer = useRef<number | null>(null);
  const update = () => {
    dispatch(moveSnake());
    dispatch(setDirection());
    dispatch(checkApple());
    dispatch(checkGameover());
  };
  const startTimer = () => (timer.current = setInterval(() => update(), 200));
  const stopTimer = () => clearInterval(timer.current!);

  const clickHandler = () => {
    if (status === 'Restart') {
      window.location.reload();
      return;
    }
    if (status !== 'Pause') startTimer();
    else stopTimer();
    dispatch(changeStatus());
  };

  return (
    <div className="Status">
      <button className="start-button" onClick={clickHandler}>
        {status}
      </button>
    </div>
  );
}

export default Status;
