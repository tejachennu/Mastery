import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateUser } from './slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import OtpVerification from './Pages/OtpVerification';
import Registration from './Pages/Registration';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPassword from './Pages/ForgotPassword';
import { useLocation } from 'react-router-dom';
import "preline/preline";

function App() {

 const location = useLocation();

 useEffect(() => {
   if (window.HSStaticMethods && typeof window.HSStaticMethods.autoInit === 'function') {
     window.HSStaticMethods.autoInit();
   }
 }, [location.pathname]);

   return (
       <div>
     <ToastContainer />
     <Routes>
       <Route path='/' element={<Login/>}/>
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path='/OtpVerification' element={<OtpVerification/>}/>
       <Route path='/register' element={<Registration/>}/>
       <Route path='/forgotpassword' element={<ForgotPassword/>}/>
     </Routes>
     </div>
          )


}

export default App;


// const App = () => {
//     const [showSuccess, setShowSuccess] = useState(true);
//     const [showError, setShowError] = useState(true);

//     return (
//         <div>
//            {showSuccess && <Alert type="success" message="File has been successfully uploaded." onClose={() => setShowSuccess(false)} />}
//             {showError && <Alert type="error" message="An error occurred while uploading the file." onClose={() => setShowError(false)} />}
//         </div>
//     );
// };

// export default App;
