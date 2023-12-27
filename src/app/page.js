// "use client";
import LatestProduct from "@/components/ui/LatestProduct/LatestProduct";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import { Grid } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
         <LatestProduct/>
        </Grid>
        <Grid item xs={4}>
          <Sidebar/>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
