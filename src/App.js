import React from "react";
import "./App.css";
import Loading from "./Loading/Loading";
import Dashboard_1 from "./Dashboard_1/Dashboard_1";

function App() {
  const [loading, setLoading] = React.useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 3000);
  return (
    <div>
      {!loading && <Loading />}
      {loading && <Dashboard_1 />}
    </div>
  );
}

export default App;
