import Organization from "./Organization";
import Passcode from "./Passcode";
import RegisterAndLogin from "./RegisterAndLogin";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from "./sidebar";
import Home from "./Home";
import AccessController from "./AccessController";


function PasswordLogin() {
    return (
      
      <BrowserRouter>
        <Routes>
            
          <Route path="/" element={<RegisterAndLogin />} />
          <Route path="/passcode" element={<Passcode />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/home" element={<Home />} />
          <Route path="/access-control" element={<AccessController />} />

        </Routes>
      </BrowserRouter>
    );
  }
  
  export default PasswordLogin;





