import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
//For About page
// import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "19ch",
      "&:focus": {
        width: "29ch",
      },
    },
  },
}));

const Header = (_) => {
  const navigate = useNavigate();

  const keyPressed = (e) => {
    if (e.code === "Enter") {
      const query = e.target.value;
      navigate(`/search?q=${query}`);
      // console.log(query);
    }
  };
  const handleClick = () => {
    // 👇️ replace set to true
    navigate('/About', { replace: true });
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#83cbff",
                // lin: "#1976d2 #04619
                // ",
                background: "linear-gradient(to right bottom, #83cbff, #000)",
                boxShadow: "10px 10px 25px #fffffd",
              }}
            >
              🎞️Movie-Fi
            </Link>
          </Typography>
          <Button variant="" onClick={handleClick}>About</Button >
          {/* <Link to={About}>About</Link> */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Movies,Series,Games,Bio,etc..."
              inputProps={{ "aria-label": "search" }}
              onKeyUp={keyPressed}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </Box>
  );
};

export default Header;
