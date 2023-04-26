import React from 'react';
import './App.css';
import { Dashboard } from './pages/dashboard/dashboard.js';
import { Projectpage } from './pages/projectpage/projectpage';
import { Resourcespage } from './pages/resourcespage/resourcespage';
import { Chatpage } from './pages/chatpage/chatpage';
import ProfilePage from './pages/profilepage/profilepage';

function App() {
  return (
    <div>
      <ProfilePage />
    </div>
  );
}

export default App;
