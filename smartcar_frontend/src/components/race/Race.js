import { ReactComponent } from "react";
import React, { useState, useEffect } from "react";
import Controller from "./Controller";
import "./Race.css";
import Camera from "../camera/Camera";
//import Canvas from "../camera/CanvasReactExample";

const Race = () => {
  return (
    <div>
      <div className="race-screen">
        <Camera />
      </div>
      <Controller />
    </div>
  );
};

export { Race };
