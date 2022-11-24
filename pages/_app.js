import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function MyApp({ Component, pageProps }) {
  let theme = createTheme({
    palette: {
      primary: {
        main: "#007C5E",
      },
      secondary: {
        main: "#ED7E1E",
      },
    },
  });

  theme = createTheme(theme, {
    palette: {
      info: {
        main: theme.palette.secondary.main,
      },
    },
  });
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default MyApp;
