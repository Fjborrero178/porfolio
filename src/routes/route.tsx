import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../components/navbar";
import App from "../App";

const RoutesComponent = () => (
  <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element = {<App/>}/>                                               
    </Routes>
  </BrowserRouter>
);

export default RoutesComponent;