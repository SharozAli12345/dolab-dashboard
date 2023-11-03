import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import DashboardLayout from './layout/dashboardLayout';

function App() {
  return (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  );
}

export default App;
