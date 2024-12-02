// index.js
import { StrictMode,  } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';

// import IconButton from '@mui/material/IconButton';
// import { Brightness4, Brightness7 } from '@mui/icons-material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#D86707',
    },
    secondary: {
      main: '#000000',
    },
  },
});

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#90caf9',
//     },
//     secondary: {
//       main: '#ffffff',
//     },
//   },
// });

function RootApp() {
  const queryClient = new QueryClient()
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleTheme = () => {
  //   setIsDarkMode((prevMode) => !prevMode);
  // };

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="top-right"  
        expand={true}
        richColors
        toastOptions={{
          classNames: {
            toast: "bg-main",
            title: "text-white",
            description: "text-white",
          },
      }}/> 
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {/* <IconButton
        onClick={toggleTheme}
        color="inherit"
        style={{ position: 'fixed', zIndex: "100", bottom: 16, right: 16 }}
      >
        {isDarkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton> */}
      <App />
    </ThemeProvider>
    </QueryClientProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootApp />
  </StrictMode>,
);
