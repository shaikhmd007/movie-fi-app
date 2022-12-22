import { Box, Typography } from "@mui/material";

//  Footer Sec Start
const Footer = (_) => {
  return (
    <Box pb={0.5}>
      <Typography
        variant="h6"
        align="center"
        backgroundColor="black"
        color="gray"
        opacity="0.2"
      >
        - by shaikh_md.😎
      </Typography>
      <Typography variant="h6" align="right" background="">
        <a
          href=""
          target="_blank"
          rel="noreferrer"
        >
          {/* You Can See the Src Code */}
          💻Github Source Code
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
