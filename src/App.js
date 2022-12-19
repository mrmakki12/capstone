import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route element={<Navigation />} path="/">
        <Route element={<Home />} path="/" />
      </Route>
    </Routes>
  );
};

export default App;
