// import Page1 from "./components/Page1"
import Page2 from "./components/Page2"

const App = () => {
  return (
    <div>
      {/* <Page1/> */}
      <Page2/>
    </div>
  )
}

export default App


// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import PostsPage from "./PostsPage"; // Your renamed Page1.jsx

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Automatically redirect the home page to page 1 */}
//         <Route path="/" element={<Navigate to="/page/1" replace />} />
        
//         {/* Dynamic route that catches /page/1, /page/2, etc. */}
//         <Route path="/page/:pageNumber" element={<PostsPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;