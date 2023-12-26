
"use client";
import { getCurrentDateTime } from "@/utils/getCurrentDate";
import { Box, Container, Typography } from "@mui/material";

const Header = () => {

    const currentDate = getCurrentDateTime()

    return (
        <Box className = "w-full text-center my-5">
            <Container>
                
            <Typography variant="h4" color="black" textAlign="center" className="font-bold "  >Elara Elagance </Typography>
            <Typography variant="caption" color="black" textAlign="center" className="my-2  italic"  >Explore The World Of Fashion </Typography>
            <Typography  textAlign="center" >{currentDate} </Typography>
 
            </Container>
        </Box>
    );
};

export default Header;