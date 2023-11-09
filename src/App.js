import React, { useEffect, useState } from "react";
// import Dashboard from './pages/Dashboard';
import DashboardLayout from './layout/dashboardLayout';
import Invoice from './pages/Invoice';
// import Balance from './pages/Balance';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
// import AddBeneficiary from './pages/Dashboard/Benificiary/addBenificiary';
// import Beneficiaries from './pages/Dashboard/Benificiary/beneficiaries';
// import TransactionDetails from './pages/Transactions/transactionDetails';
// import TransactionsHistory from './pages/Transactions/transactionHistory';
// import BusinessPlans from './pages/Plans/businessPlans';
// import Profile from './pages/Profile';
import AccountConfirmation from './pages/Account/accountConfirmation';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('')
  useEffect(() => {
    const scriptUrls = [
      // "vendor/global/global.min.js",
      "vendor/jquery-autocomplete/jquery-ui.js",
      "vendor/chart.js/Chart.bundle.min.js",
      "vendor/jquery-nice-select/js/jquery.nice-select.min.js",
      "vendor/datatables/js/jquery.dataTables.min.js",
      "js/plugins-init/datatables.init.js",
      "vendor/peity/jquery.peity.min.js",
    ]
    if (location?.pathname !== currentPath) {
      console.log(location?.pathname, 'location?.pathname')
      console.log(currentPath, 'currentPath')
      scriptUrls.forEach((scriptUrl) => {
        const script = document.createElement("script");
        script.src = scriptUrl;
        script.async = true;
        document.body.appendChild(script);
      });

    }
    setCurrentPath(location?.pathname)
    return () => {
      scriptUrls.forEach((scriptUrl) => {
        const script = document.querySelector(`[src="${scriptUrl}"]`);
        if (script) {
          script.remove();
        }
      });
    };
  }, [location]);
  return (
    <Routes>
      <Route path="/" exact element={<DashboardLayout>
        <AccountConfirmation />
      </DashboardLayout>} />
      <Route path="/invoice" element={<DashboardLayout>
        <Invoice />
      </DashboardLayout>} />
      <Route path="/login" element={
        <Login />
      } />
      <Route path="/register" element={
        <Register />
      } />
    </Routes>
  );
}

export default App;
