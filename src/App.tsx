import React, {useEffect, useState} from 'react';
import {Route, Routes, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import './App.css';
import RootLayout from "./layout/RootLayout";
import Home from "./components/Home";

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/personal-portofolio" element={<RootLayout/>}>
                <Route index element={<Home/>} />
            </Route>
        )
    )

  return (
      <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
