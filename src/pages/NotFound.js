import { Typography, Box } from "@mui/material";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

// import { Route, Routes } from "react-router-dom";
// import Home from "./Home";

const NotFound = (_) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // 👇️ replace set to true
    navigate('/', { replace: true });
  };

  const BgPosters = {
    height: "89vh",
    width: "100vw",
    backgroundImage: `url("https://cdn.pixabay.com/photo/2017/07/31/01/11/cinema-2556157_1280.jpg") `,
    // backgroundSize: "contain",  
    backgroundRepeat: "no-repeat",
    // color: "white",
    backgroundPosition: "center",
    // backgroundAttachment: "fixed",
    // opacity: ".8",
  };

  return (
    <>
      <Box style={BgPosters}>
        <Button variant="contained" onClick={handleClick} sx={{ margin: "0.5rem" }}>Back</Button >
        <Typography>🔹🔹🔹</Typography>
        <Stack alignItems="center" mb={20}>
          <Typography variant="h4" mt={15} border="2px dashed red">
            Oops!! 🎬Page not found !
          </Typography>
          <Typography>🔙</Typography>
          <Link to="/" variant="body2">
            Go to 🍿home
          </Link>
        </Stack>
        {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}
      </Box>
    </>
  );
};

export default NotFound;
