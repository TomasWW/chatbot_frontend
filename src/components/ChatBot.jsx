import React, { useState, useRef, useEffect } from "react";
import { Box, TextField, Button, List, ListItem, Paper } from "@mui/material";

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const listRef = useRef(null);

  // Scroll automático al último mensaje
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    // Mensaje del usuario
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");

    // Simulación de respuesta del bot
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Respuesta del bot: " + input },
      ]);
    }, 500);
  };

  return (
    <Box display="flex" flexDirection="column" flexGrow={1}>
      <List
        ref={listRef}
        style={{
          flexGrow: 1,
          overflowY: "auto",
          marginBottom: "1rem",
          paddingRight: "0.5rem",
        }}
      >
        {messages.map((msg, index) => (
          <ListItem
            key={index}
            style={{
              justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
            }}
          >
            <Paper
              style={{
                padding: "0.6rem 1rem",
                backgroundColor: msg.sender === "user" ? "#b2ebf2" : "#dcedc8", // usuario: celeste pastel, bot: verde pastel
                color: "#3e2723", // texto marrón oscuro
                borderRadius: "12px",
                maxWidth: "75%",
                wordWrap: "break-word",
              }}
            >
              {msg.text}
            </Paper>
          </ListItem>
        ))}
      </List>

      <Box display="flex" gap={1}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Escribe un mensaje..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            backgroundColor: "#fff8e1", // input color marrón pastel claro
            borderRadius: "8px",
          }}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <Button
          variant="contained"
          style={{ backgroundColor: "#00796b", color: "#ffffff" }} // botón verde pastel
          onClick={handleSend}
        >
          Enviar
        </Button>
      </Box>
    </Box>
  );
}

export default ChatBot;
