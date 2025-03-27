import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import Landing from "./pages/user/Landing";
import Adverts from "./pages/user/Adverts";
import SingleAd from "./pages/user/SingleAd";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./pages/dashboard/Overview";
import CreateAd from "./pages/dashboard/CreateAd";
import VendorAds from "./pages/dashboard/VendorAds";
import EditProduct from "./pages/dashboard/EditProduct";
import SingleProduct from "./pages/dashboard/SingleProduct";
import VendorProfile from "./pages/dashboard/VendorProfile";
import ProfileUpdate from "./pages/dashboard/ProfileUpdate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<Landing />} />
          <Route path="adverts" element={<Adverts />} />
          <Route path="adverts/:id" element={<SingleAd />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index={true} element={<Overview />} />
          <Route path="create-ad" element={<CreateAd />} />
          <Route path="ads" element={<VendorAds />} />
          <Route path="edit-ad/:id" element={<EditProduct />} />
          <Route path="single-product" element={<SingleProduct />} />
          <Route path="vendor-profile" element={<VendorProfile />} />
          <Route path="profile-update" element={<ProfileUpdate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
