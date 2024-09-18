import MuiTheme from "./MuiTheme";
import AppRoutes from "./routes/routes";
import "./App.css";
import "./i18n/config";

function App() {
  return (
    <MuiTheme>
      <AppRoutes />
    </MuiTheme>
  );
}

export default App;
