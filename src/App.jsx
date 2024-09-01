import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/About";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Event from "./pages/Event";
import EventDetails from "./pages/EventDetails/EventDetails"
import FilterEvent from "./pages/FilterEvent/FilterEvent";



function App() {

  return (
    <>
     
      <Router>
      <RootLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/event" element={<Event />} />
        <Route path="/findevent" element={<FilterEvent />} />
        <Route path="/event/:id" element={<EventDetails/>}/>
        <Route path="/blog/:aID" element={<Blog />} />
        
       
       
        <Route path="/login" element={<Login />}/>
        
      </Routes>
      </RootLayout>
    </Router>
      
    </>
  )
}

export default App
