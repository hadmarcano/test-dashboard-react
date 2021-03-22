import React, { createContext, useState, useEffect } from "react";

export const dashboardContext = createContext();

const DashboardContextProvider = ({ children }) => {
  const [content, setContent] = useState("home");

  useEffect(() => console.log("Se actualizo el estado"), []);

  const changePage = () => {
    if (content === "report") {
      setContent("home");
    } else if (content === "home") {
      setContent("report");
    }
  };

  return (
    <dashboardContext.Provider value={{ content, changePage }}>
      {children}
    </dashboardContext.Provider>
  );
};

export default DashboardContextProvider;
