import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilterContextProvider } from "./context/filter-context";
import { Home } from "./pages/Home";

const client = new QueryClient();
function App() {
  return (
    <div className="w-full bg-gray-900">
      <FilterContextProvider>
        <QueryClientProvider client={client}>
          <Home />
        </QueryClientProvider>
      </FilterContextProvider>
    </div>
  );
}

export default App;
