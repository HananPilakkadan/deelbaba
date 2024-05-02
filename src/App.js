import Router from "./app/router";
import { MantineProvider, Text } from "@mantine/core";
import ScrollToTop from "./common/constants/scrollTop";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router />
    </MantineProvider>
  );
}

export default App;
