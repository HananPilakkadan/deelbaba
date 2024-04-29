import Router from "./app/router";
import { MantineProvider, Text } from "@mantine/core";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router />
    </MantineProvider>
  );
}

export default App;
