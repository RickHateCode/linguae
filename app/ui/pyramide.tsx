"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../sub-ui/navbar-menu";
import { cn } from "../lib/cn";
import Image from 'next/image';

export function Pyramid() {
  return (
    <div className="pyramid-loader">
      <div className="wrapper">
       <span className="side side1"></span>
       <span className="side side2"></span>
       <span className="side side3"></span>
       <span className="side side4"></span>
       <span className="shadow"></span>
      </div>  
    </div>
  );
}