import OrgDetails from "./OrgDetails";
import Organization from "./Organization";
import Passcode from "./Passcode";
import RegisterAndLogin from "./RegisterAndLogin";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function PasswordLogin() {
    return (
      
      <BrowserRouter>
        <Routes>
            
          <Route path="/" element={<RegisterAndLogin />} />
          <Route path="/passcode" element={<Passcode />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="`/organization?orgId=${selectedOrganization}`" element={<Organization />} />


        </Routes>
      </BrowserRouter>
    );
  }
  
  export default PasswordLogin;