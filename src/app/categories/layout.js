import CategoryList from "@/components/ui/CategoryList/CategoryList";
import { Box, Grid } from "@mui/material";
import React from "react";

const CategoriesLayout = ({children}) => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <CategoryList></CategoryList>
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CategoriesLayout;
