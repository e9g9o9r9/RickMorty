import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import DrawerAppBar from "src/components/UI/DrawerAppBar/DrawerAppBar";
import { HomeWrapper } from "./style";

const Home = () => {

  return (
    <HomeWrapper>
      <DrawerAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </HomeWrapper>
  );
};

export default Home;
