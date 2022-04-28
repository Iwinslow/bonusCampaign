import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Invite from "./components/Invite";
import Register from "./components/Register";
import SuccessInvitations from "./components/SuccessInvitations";
import Footer from "./components/Footer";
import NoMatchRoute from "./components/NoMatchRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Invite />} />
        <Route path="/register/invite/:link" element={<Register />} />
        <Route
          path="/successfullinvitations"
          element={<SuccessInvitations />}
        />
        <Route path="*" element={<NoMatchRoute />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
