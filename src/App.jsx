import React from "react";
import { AppRoute } from "./routes/sections";
import { AuthProvider } from "./context/AuthContext";
const App = () => {
  return (
    <div>
      <AuthProvider>
        <AppRoute />
      </AuthProvider>
    </div>
  );
};

export default App;
