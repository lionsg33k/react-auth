import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/About/About";
import { HomePage } from "./pages/Home/Home";
import { Header } from "./layouts/Header";
import { useState } from "react";
import { Profile } from "./pages/Profile/Profile";

const App = () => {

  const [profile, setProfile] = useState([
    {
      userName: "a",
      userEmail: "a",
      password: "a",
      image: "image", // Include the image in the user object
    }
  ])


  return (
    <>


      <Header />

      <Routes>

        <Route path="/" element={<HomePage profile={profile} setProfile={setProfile} />} />
        <Route path="/signup" element={<AboutPage profile={profile} setProfile={setProfile} />} />
        <Route path="/profile/:id" element={<Profile profile={profile} setProfile={setProfile} />} />

      </Routes>


    </>

  );
}

export default App;
