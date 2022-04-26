import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Invite from "./components/Invite";
import Register from "./components/Register";
import SuccessInvitations from "./components/SuccessInvitations";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/invite" element={<Invite />} />
        <Route path="/register/invite/:link" element={<Register />} />
        <Route
          path="/successfullinvitations"
          element={<SuccessInvitations />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
