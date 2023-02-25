import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";

import {
  ListPlants,
  ListSites,
  CreatePlant,
  CreateSite,
  SinglePlant,
  SingleSite
} from '../components/index'
import { fetchSitesAsync, selectSites } from "../features/siteFeatures/ListSitesSlice";
import { fetchPlantsAsync, selectPlants } from "../features/plantFeatures/ListPlantsSlice";
import { me } from "../store";

import LandingPage from "../components/landingPage/LandingPage";
import AuthForm from "../components/auth/AuthForm";
import PageNotFound from "../components/PageNotFound";
import ContactUs from "../components/footer/ContactUs";
import AboutUs from "../components/footer/AboutUs";
import Home from "../components/home/Home";


const AppRoutes = () => {
    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state) => !!state.auth.me.id);
    const isAdmin = useSelector((state) => state.auth.me.isAdmin);

    useEffect(() => {
        dispatch(me());
      }, [dispatch]);

  return (
    <>
    {/* IF LOGGED IN ROUTES */}
    {isLoggedIn ? (
      <Routes>
        <Route path="/" element={<Home/>} />

        {/* My Account Page */}
        {/* <Route path="/my-account" element={<MyAccount />} /> */}

          {/* Plant Routes */}
          {/* <Route path="/products/:id" element={<SingleProductView />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/confirmation" element={<Confirmation />} /> */}
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>

          {/* ADMIN ROUTES */}
          {/* {isAdmin ? (
            <Route path="/admin" element={<AdminPage />} />
          ) : (
            <Route element={<MainPage userId={userId} isLoggedIn={isLoggedIn} user={user}/>} />
          )}
          {isAdmin ? (
            <Route
              path="/admin/products/edit/:productId"
              element={<UpdateProduct />}
            />
          ) : null}
          {isAdmin ? (
            <Route
              path="/admin/products/addProduct"
              element={<AddProduct />}
            />
          ) : null}
          {isAdmin ? (
            <Route
              path="/admin/user/:userId"
              element={<UserAccount />}
            />
          ) : null} */}

        {/* PAGE NOT FOUND */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    ) : (
      // NOT LOGGED IN ROUTES
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route
          path="/login"
          element={<AuthForm name="login" displayName="Login" />}
        />
        <Route
          path="/signup"
          element={<AuthForm name="signup" displayName="Sign Up" />}
        />
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/AboutUs" element={<AboutUs/>}></Route>
        {/* PAGE NOT FOUND */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    )}
  </>
  )
}

export default AppRoutes


