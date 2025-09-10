import "./App.css";
import { AppRoute } from "./routes/AppRoute";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { store } from "./redux/store";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <AppRoute />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
