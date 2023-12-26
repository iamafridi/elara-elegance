import { getCurrentDateTime } from "@/utils/getCurrentDate";
import { Box, Container, Typography } from "@mui/material";

const Header = () => {

    const currentDate = getCurrentDateTime()

    return (
        <Box className = "w-full text-center my-5">
            <Container>
            <Typography variant="body2" color="white" textAlign="center" className="my-2" >Explore The World Of Fashion </Typography>
            <Typography  textAlign="center" >{currentDate} </Typography>
 
            </Container>
        </Box>
    );
};

export default Header;