import { Grid } from "@mui/material";
import Header from "./components/Header";

const App = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
    </Grid>
  );
};

export default App;
