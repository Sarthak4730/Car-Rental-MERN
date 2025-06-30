import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import AllCars from "./pages/AllCars";
import MyBookings from "./pages/MyBookings";
import CarDetails from "./pages/CarDetails";
import Hero from "./components/Hero";

function App() {
  return <>
    <Navbar />
    <Hero />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cars' element={<AllCars />} />
      <Route path='/bookings' element={<MyBookings />} />
      <Route path='/car-details/:id' element={<CarDetails />} />
    </Routes>
  </>;
}

export default App;