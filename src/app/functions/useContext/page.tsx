"use client";
import React, { useState } from "react";
import { User } from "./types";
import { DashboardContext } from "./context";
import Dashboard from "./(components)/Dashboard";

const demo = () => {
  const [user] = useState<User>({
    isSubscribed: true,
    name: "you",
  });
  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
};

export default demo;
