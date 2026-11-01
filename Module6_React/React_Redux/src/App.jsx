
import CounterDisplay from "./components/CounterDisplay";
import CounterButton from "./components/CounterButton";

import Todos from "./components/Todos"

const App = () => {
  return (
    <div>
      <Todos/>
      <CounterDisplay />
      <CounterButton />
    </div>
  )
}

export default App
