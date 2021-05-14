import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from './private';

import Home from 'pages/home';
import Login from 'pages/login';
import Register from 'pages/register';
import Error404 from 'pages/404';
import PostProduct from 'pages/postProduct';
import Report from 'pages/report';
import Cart from 'pages/cart';
import Follow from 'pages/follow-up';
import Payment from 'pages/payment';
import Vendedor from 'pages/vendedor';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Error404 />} />
      <Route path="/" element={<Home />} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/follow-up" element={<Follow />} />

      <Route path="/payment" element={<Payment />} />

      <PublicRoutes path="/report" redirect="/login" element={<Report />} />
      <PublicRoutes path="/login" redirect="/" element={<Login />} />
      <PublicRoutes path="/register" redirect="/" element={<Register />} />
      
      <PrivateRoutes path="/saller" redirect="/login" element={<Vendedor/>}/>
      <PrivateRoutes path="/post" redirect="/login" element={<PostProduct />} />
    </Routes>
  );
}
