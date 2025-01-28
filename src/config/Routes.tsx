// import Dashboard from "../LoginDashboard/Dashboarditems/Dashboard";
// import Home from "../HomePage/Home";
// import Mypage from "../LoginDashboard/MypageItems/Mypage";
// import Appearance from "../LoginDashboard/Apperance/Appearance";
// import Activity from "../LoginDashboard/Activity/Activity";
// import Users from "../LoginDashboard/Users/Users";
// import Settings from "../LoginDashboard/Settings/Settings";
// import Pocket from "../LoginDashboard/Pocket/Pocket";
// import WeatherView from "../LoginDashboard/Weather/view";

import { RouteObject } from "react-router-dom";
import Home from "../HomePage/Home";
import Logbutton from "../HomePage/Login";

// export const Routes = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: '/login'} element,
//   { path: "/dashboard", element: <Dashboard /> },
//   { path: "/mypage", element: <Mypage /> },
//   { path: "/appearance", element: <Appearance /> },
//   { path: "/activity", element: <Activity /> },
//   { path: "/users", element: <Users /> },
//   { path: "/settings", element: <Settings /> },
//   { path: "/pocket", element: <Pocket /> },
//   { path: "/weather", element: <WeatherView /> },
// ]);

export default function appRouter(): RouteObject[] {
  return [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Logbutton /> },
  ];
}
