import { theme } from "@/coreUi";
import { Box, Container, Paper, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/system";

export default function Home() {
  return (
    <Box sx={{
      display: 'flex',
      width: '100vw',
      justifyContent: "center",
      alignItems: "center",
      height: '100vh',
      background: "linear-gradient(to bottom, #003840, #02A676)",
      overflow: 'hidden',

    }}>
      <Paper elevation={10} sx={{
      display: 'flex',
      width: '85vw',
      height: '85vh',
      backgroundColor: "white",
      borderRadius: 10
      }}>
        <Box sx={{
          display: 'flex',
          width: '100vw',
          height: '20vh',
          justifyContent: "center",
        }}>
          <Typography sx={{
            fontFamily: "Chewy, cursive",
            fontSize: 42,
            fontWeight: "bold",
            textAlign: "center"
          }}>
            Gerador de imagens
          </Typography>
        </Box>
      </Paper>
    </Box>

  );
}
