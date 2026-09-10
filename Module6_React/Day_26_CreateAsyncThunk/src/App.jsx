import { useSelector, useDispatch } from "react-redux";
// import { DelayedMultiply } from "./reduxStore/Store/Slices/multiplierSlice.js";
// import { fetchdata } from "./reduxStore/Store/Slices/apiTestSlice.js";
import {counter} from "./reduxStore/Store/Slices/counterSlice.js"

const App = () => {
  const dispatch = useDispatch();
  const { count, status, error } = useSelector((state) => state.counter);

  const handleCount = () => {
    dispatch(counter({countby : Number(15)}));
  };

  return (
  <div style={{ padding: '20px' }}>
      <button onClick={handleCount} disabled={status === 'loading'}>
        {status === 'loading' ? 'Counting....' : 'Count'}
      </button>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {/* <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul> */}

      <h1>
        Count is : {count}
      </h1>
    </div>
  );
};

export default App;