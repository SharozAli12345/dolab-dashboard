import logo from './logo.svg';
import Dashboard from './pages/Dashboard';
import DashboardLayout from './layout/dashboardLayout';
import Invoice from './pages/Invoice';
import Balance from './pages/Balance';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import AddBeneficiary from './pages/Dashboard/Benificiary/addBenificiary';
import Beneficiaries from './pages/Dashboard/Benificiary/beneficiaries';
import TransactionDetails from './pages/Transactions/transactionDetails';
import TransactionsHistory from './pages/Transactions/transactionHistory';
import BusinessPlans from './pages/Plans/businessPlans';
import Profile from './pages/Profile';
import AccountConfirmation from './pages/Account/accountConfirmation';


function App() {
  
  return (
   <DashboardLayout>
       <AccountConfirmation /> 
   </DashboardLayout>
  );
}

export default App;
