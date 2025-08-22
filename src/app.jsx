import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Paper
        elevation={4}
        style={{
          padding: "1.5rem",
          width: "400px",
          height: "600px",
          borderRadius: "20px",
          backgroundColor: "#ffffff", // ventana blanca pastel
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          style={{ fontWeight: "600", color: "#00796b" }} // verde pastel oscuro
        >
          🤖 BotTom
        </Typography>

        <ChatBot />
      </Paper>
    </Box>
  );
}

export default App;
