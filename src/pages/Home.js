// import * as React from "react";
import useLocalStorage from "use-local-storage";
import FavouriteMovieCard from "../components/FavouriteMovieCard";
import { Box, Chip, Typography } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import Footer from "../components/Footer";

const Home = (_) => {
  // Add To Fav
  const [favourites] = useLocalStorage("favourites", "[]");

  // Background Img Style Obj Here
  const BgPosters = {
    height: "100vh",
    // width: "65.7vw",
    padding: "0rem",
    margin: "1.2rem",
    backgroundImage: `url("https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289__480.jpg") `,
    // backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // color: "black",
    backgroundPosition: "right",
    // backgroundAttachment: "fixed",
    opacity: ".9",
  };

  const handleClick = () => { };

  /*   Render UI*/
  return (
    <>
      <Box style={BgPosters}>
        {/*  Typography For LOGO */}
        <Typography
          variant="h6"
          backgroundColor="#594756 "
          textAlign="left"
          p={1}
          color="white"
          borderBottom="1px dashed"
        >
          Welcome to 🎞️Movie-Fi Collection.
        </Typography>
        {/* Title here */}
        <Typography
          variant="h6"
          backgroundColor="#594756 "
          textAlign="center"
          // p={0.5}
          color="white"
        >
          <Chip
            label="Your 💓favorite Collection!!"
            variant="outlined"
            onClick={handleClick}
          />
        </Typography>

        {/*  Div Section of Home And BookMark List wiil B shown Here... */}

        <Box p={2}>
          <Masonry columns={4} spacing={2}>
            {JSON.parse(favourites).map((e, i) => {
              return <FavouriteMovieCard id={e} key={i} />;
            })}
          </Masonry>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

// exporting this Home page by default

export default Home;
