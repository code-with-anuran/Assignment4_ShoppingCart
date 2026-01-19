import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes/Route";
import { ContextProvider } from "./hooks/context/ContextProvider";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <ContextProvider>
        <Toaster richColors position="top-right" closeButton />
        <RouterProvider router={Routes} />
      </ContextProvider>
    </>
  );
}

export default App;
