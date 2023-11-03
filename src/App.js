import logo from './logo.svg';
import './App.css';
// import Dashboard from './pages/Dashboard';
import DashboardLayout from './layout/dashboardLayout';
import Invoice from './pages/Invoice';


function App() {
  return (
    <DashboardLayout>
      <Invoice />
    </DashboardLayout>
  );
}

export default App;
