import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilterContextProvider } from "./context/filter-context";
import { Home } from "./pages/Home";

const client = new QueryClient();
function App() {
  return (
    <FilterContextProvider>
      <QueryClientProvider client={client}>
        <Home />
      </QueryClientProvider>
    </FilterContextProvider>
  );
}

export default App;
