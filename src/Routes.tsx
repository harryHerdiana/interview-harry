import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

import BookingPageComponent from "./component/BookingPage/BookingPage";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookingPageComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
