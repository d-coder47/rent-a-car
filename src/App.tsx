import MuiTheme from "./MuiTheme";
import AppRoutes from "./routes/routes";
import "./App.css";
import "./i18n/config";
import { CarProvider } from "./context/CarContext";

function App() {
  return (
    <CarProvider>
      <MuiTheme>
        <AppRoutes />
      </MuiTheme>
    </CarProvider>
  );
}

export default App;
