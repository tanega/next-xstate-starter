"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Copyright from "@/components/CopyRight/Copyright";
import ProTip from "@/components/ProTip/ProTip";

const Home = (): JSX.Element => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI - Next.js example using App Router in TypeScript
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
};

export default Home;
