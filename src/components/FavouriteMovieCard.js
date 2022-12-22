import { useEffect, useState } from "react";
import { omdb } from "../utils";
import { Grid, Card, CardMedia, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FavouriteMovieCard = ({ id }) => {
  // UseState hook For Dynamic Data
  const [data, setData] = useState({});
  // used Navigate hoook for Move to another pg
  const navigate = useNavigate();

  // Taking response if the data change 
  useEffect(
    (_) => {
      (async (_) => {
        const response = await omdb.get(`?i=${id}`);
        setData(response.data);
      })();
    },
    [id]
  );

  // func - if Card Clicked it will Nav to Detail pg 
  const clicked = (_) => {
    navigate(`/detail/${id}`);
  };


  // render to UI 
  return (
    <>
      {/* Created Grid For Fav movi card */}
      <Grid item xs={3}>
        <Card>
          <CardActionArea onClick={clicked}>
            <CardMedia
              component="img"
              image={
                data.Poster !== "N/A"
                  ? data.Poster
                  : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
              }
            />

            {/* <CardContent>
              <Typography variant="h2">
                {data.Title}
              </Typography> 
            </CardContent>
              */}
            
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default FavouriteMovieCard;
