import { useSelector, useDispatch } from "react-redux";
// import { DelayedMultiply } from "./reduxStore/Store/Slices/multiplierSlice.js";
import { fetchdata } from "./reduxStore/Store/Slices/apiTestSlice.js";

const App = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.apitester);

  const handleFetch = () => {
    dispatch(fetchdata());
  };

  return (
  <div style={{ padding: '20px' }}>
      <button onClick={handleFetch} disabled={status === 'loading'}>
        {status === 'loading' ? 'Loading...' : 'Fetch Posts'}
      </button>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;