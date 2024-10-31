import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignInPage from "./pages/SignUpPage/CreateAccount"
import LoginPage from "./pages/gigLogin/LoginPage"
import HomePage from "./pages/seeker/HomePage/HomePage"
import GigPool from "./pages/seeker/gigPool/GigPool"
import GigJournal from "./pages/seeker/gigJournal/GigJournal"
import GigTracker from "./pages/seeker/gigTracker/GigTracker"
import ProviderRegistration from "./pages/ProvidersRegiatration/UserRegistration"
import SeekerRegistration from "./pages/SeekerRegistration/UserRegistration"
import UserRegistration from "./pages/ProviderRegistration/UserRegistration"
import GigPost from "./pages/Providers/GigPost/GigPost"
import GigList from './pages/Providers/YourGig/GigList';
import SeekerProfile from "./pages/seeker/gigUserProfile/ProfilePage"

import ProfileChanger from "./pages/ProfileChanger/UserRegistration"
import ChangePassword from './pages/ChangePassword/ChangePassword';
import axios from 'axios'
import ProfileHeader from './pages/seeker/gigUserProfile/ProfileComponents/ProfileHeader';
import ProfilePage from './pages/seeker/gigUserProfile/ProfilePage';
import GigConfirmation from './pages/seeker/GigConfirmations/GigConfirmation.tsx';
import PersonDetails from './pages/Providers/YourGig/PersonDetails/GigList.jsx'


axios.defaults.baseURL = process.env.AXIOS_URL || 'http://localhost:5001';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/gigpool/:id' element={<GigPool />} />
          <Route path='/gigjournal/:id' element={<GigJournal />} />
          <Route path='/gigtracker/:id' element={<GigTracker />} />
          <Route path='/gigPost/:id' element={<GigPost />} />
          <Route path='/seekerRegistration' element={<SeekerRegistration/>}/>
          <Route path='/providerRegistration' element={<ProviderRegistration/>}/>
          <Route path='/seekerprofile/:id' element={<SeekerProfile/>}/>
          <Route path='/yourgig/:id' element={<GigList/>}/>
          <Route path='/yourgig/:id/:jobId' element={<PersonDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
