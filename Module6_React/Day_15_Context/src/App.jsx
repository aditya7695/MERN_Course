import Layout from "./components/Layout"
import AppProvider from "./context/AppProvider"






const App = () => {

  return (
    <AppProvider>
      <div>
      <h2>Prop Drilling Demo</h2>
      <Layout/>
    </div>
    </AppProvider>
      
  )
}

export default App
