import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { decrement, increment, selectCount } from "./counterSlice";

export function Counter() {
  const value = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>Counter: {value}</div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
