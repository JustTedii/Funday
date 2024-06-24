import { useState, useEffect } from 'react';
import supabase from '../config/supabaseClient';
import '../styles/dashboardStyle.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error('Error fetching user:', error);
      } else {
        setUser(data.user);
        console.log('user', data.user);
      }
    };

    getUser();
  }, []);

  return (
    <div className="content">
      {user ? <p>Welcome, {user.email}!</p> : <p>Loading user information...</p>}
    </div>
  );
};

export default Dashboard;
