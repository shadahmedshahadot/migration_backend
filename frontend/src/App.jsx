import { Link } from 'react-router-dom';
import './App.css';
import { getFormLocaleStorage } from './utils/localeStoratge';
import { removeUser } from './utils/authservice';

function App() {
  const userInfo = getFormLocaleStorage("accessToken");

  const handleLogout = () => {
    removeUser(); 
  };

  return (
    <div>
      <div className="bg-gray-100">
        <div className="container mx-auto">
          <div className="flex py-2 justify-between items-center">
            <h1 className="text-5xl font-light">LOGO</h1>
            {userInfo ? (
              <Link
              className='text-red-600 font-bold'
                to="/"
                onClick={(e) => {
                  e.preventDefault(); 
                  handleLogout();
                  window.location.href = "/";
                }}
              >
                Logout
              </Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </div>
      </div>
      <h1 className="text-2xl text-center font-bold">Welcome to Dashboard</h1>
    </div>
  );
}

export default App;
