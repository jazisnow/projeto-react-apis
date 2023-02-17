import { Router } from "./Routes/Router";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalState } from "./Contexs/GlobalState";

function App() {
  return (
    <ChakraProvider>
      <GlobalState>
        <Router />
      </GlobalState>
    </ChakraProvider>
  );
}

export default App;
