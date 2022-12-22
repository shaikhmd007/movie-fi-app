// importing the react and npm pckgs Witth dependency Libarries 

import { useParams } from "react-router-dom";
import { omdb } from "../utils";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Chip, Stack, Typography, IconButton } from "@mui/material";
import axios from "axios";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useLocalStorage from "use-local-storage";
import Button from '@mui/material/Button';

const Detail = (_) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [flag, setFlag] = useState(false);
  const [favourites, setFavourites] = useLocalStorage("favourites", "[]");  // used Local storage for web browser
  const [isFavourite, setFavourite] = useState(false); // chechking if user clicked Bookmark or not

  //
  useEffect(
    (_) => {
      const favs = JSON.parse(favourites);
      if (favs.includes(id)) {
        setFavourite(true);
      } else {
        setFavourite(false);
      }
    },
    [favourites, id]
  );

  const toggleFavourite = (_) => {
    const favs = JSON.parse(favourites);
    if (isFavourite) {
      const idx = favs.indexOf(id);
      favs.splice(idx, 1);
      setFavourite(false);
    } else {
      favs.push(id);
      setFavourite(true);
    }
    setFavourites(JSON.stringify(favs));
  };

  // use effect for tracking the dynamic changes on pgg 
  useEffect(
    (_) => {
      (async (_) => {
        const response = await omdb.get(`?i=${id}&plot=full`);
        if (response.data.Response === "False") {
          navigate("/404");
        } else {
          setData(response.data);
        }
      })();
    },
    [id, navigate]
  );

  useEffect(
    (_) => {
      if (data.Country?.length > 0) {
        (async (_) => {
          const response = await axios.get(
            `https://restcountries.com/v3.1/name/${data.Country}?fullText=true`
          );
          setFlag(response.data[0]?.flags?.svg);
        })();
      }
    },
    [data]
  );

  // Adding A BgIMg with style obj 

  const DetailsBacground = {
    backgroundImage: `url("https://images.pexels.com/photos/14267038/pexels-photo-14267038.jpeg?auto=compress&cs=tinysrgb&w=600") `,
    backgroundSize: "cover",
    color: "white",
    // backgroundRepeat: "repeat - y",
    // width: "100vw",
    // height: "100vh",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    flexWrap: "wrap",
  };
  return (
    <>
      <Box p={5} sx={DetailsBacground}>
        {/* // back Btn to home */}
        <Button variant="outlined" onClick={() => navigate(-1)}>Back</Button>
        <Typography>🔹🔹🔹</Typography>
        <Stack sx={{ flexWrap: "wrap" }}>
          <Stack
            direction="row"
            // spacing={0}
            gap={2}
            sx={{
              flexWrap: "wrap",
            }}
          >

            <img
              src={
                data.Poster !== "N/A"
                  ? data.Poster
                  : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
              }
              alt="Poster"
            />

            <Stack border={1}>
              <Stack margin={1}>

                <Typography
                  variant="h5"
                  color="primary"
                  backgroundColor="black"
                  p={1}
                >
                  {data.Title}
                  &nbsp; &nbsp; &nbsp;
                  <Chip
                    label="Add to Favorite➡️"
                    variant="outlined"
                    color="primary"
                  >
                  </Chip>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={toggleFavourite}
                  >
                    {isFavourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </IconButton>
                </Typography>
                <Typography>Released On - {data.Released}</Typography>
                <Typography variant="h5" mt={3} mb={1}>
                  Crew :
                </Typography>
                <Stack direction="row" gap={1} sx={{ flexWrap: "wrap" }} m={1}>
                  {data.Actors?.split(", ").map((e, i) => {
                    return (
                      <Chip
                        key={i}
                        label={e}
                        variant="outlined"
                        color="primary"
                      />
                    );
                  })}
                </Stack>

                <Stack direction="row" gap={1} sx={{ flexWrap: "wrap" }}>
                  <Typography>Written By :</Typography>
                  {data.Writer?.split(", ").map((e, i) => {
                    return (
                      <Chip
                        key={i}
                        label={e}
                        variant="outlined"
                        color="primary"
                      />
                    );
                  })}
                </Stack>
                <Stack direction="row" m={1} sx={{ flexWrap: "wrap" }}>
                  <Typography>Directed By : </Typography>
                  <Chip
                    label={data.Director}
                    // label="Chip Outlined"
                    color="primary"
                    variant="outlined"
                  />
                </Stack>
                <Stack mt={5} direction="row" spacing={2} alignItems="center">
                  <Typography>Country: </Typography>
                  {flag ? (
                    <img
                      src={flag}
                      height={40}
                      alt="Flag"
                      style={{
                        outline: "1px solid #1976d2",
                        outlineOffset: "2px",
                      }}
                    />
                  ) : (
                    false
                  )}
                  <Typography variant="overline">{data.Country}</Typography>
                </Stack>
              </Stack>
            </Stack>

          </Stack>

          <Typography variant="h4" mt={5} mb={2}>
            Plot 📝:
          </Typography>
          <Typography align="justify">{data.Plot}</Typography>
        </Stack>
      </Box>
    </>
  );
};

export default Detail;
