import { Routes, Route, Navigate } from "react-router-dom";
import Home from "src/components/Home/Home";
import Characters from "src/components/Characters/Characters";
import Episode from "src/components/Episode/Episode";
import Location from "src/components/Location/Location";
import Character from "src/components/Character/Character";
import ProjectInfo from "src/components/ProjectInfo/ProjectInfo";
import { AppWrapper } from "./style";

const App = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/home" element={<Home />}>
          <Route index element={<ProjectInfo />} />
          <Route path="characters" element={<Characters />} />
          <Route path="characters/:id" element={<Character />} />
          <Route path="episode" element={<Episode />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </AppWrapper>
  );
};

export default App;
