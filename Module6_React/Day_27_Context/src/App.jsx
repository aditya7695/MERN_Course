
import Layout from './components/Layout'
// import Userpanel from './components/Userpanel'
import AppProvider from './context/AppProvider'
// import Userpanel from './components/Userpanel'



const App = () => {
  return (
    <AppProvider>

    <div>
      <p>Props Drilling Demo</p>
      <Layout/>
      
    </div>
    </AppProvider>
  )
}

export default App
