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
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
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
ƒ    </BrowserRouter>

  );
}

export default App;
