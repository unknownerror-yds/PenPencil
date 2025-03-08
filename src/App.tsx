import "./App.css";
import AllRoute from "./Routes/AllRoutes";

import LandingPage from "./Views/LandingPage";

function App() {
  return (
    <div className="flex h-screen w-screen">
      <div className="p-4 w-full h-full overflow-hidden">
        <LandingPage />
        <AllRoute />
      </div>
    </div>
  );
}

export default App;
