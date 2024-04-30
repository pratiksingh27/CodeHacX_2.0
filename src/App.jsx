import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/About";
import Blog from "./pages/Blog";
import Login from "./pages/Login";



function App() {

  return (
    <>
     
      <Router>
      <RootLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog/:aID" element={<Blog />} />
        
       
       
        <Route path="/login" element={<Login />}/>
        
      </Routes>
      </RootLayout>
    </Router>
      
    </>
  )
}

export default App
