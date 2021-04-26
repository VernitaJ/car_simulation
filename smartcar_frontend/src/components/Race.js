import { ReactComponent } from "react";
import React, { useState, useEffect } from "react";
import Controller from "./Controller";
import "./Race.css";

const Race = () => {
  return (
    <div>
      <div className="race-screen">Stream will go here</div>
      <Controller />
    </div>
  );
};

export { Race };
