"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/dom/navbar";
import PageView from "@/components/views/pageView";
const Scene = dynamic(() => import("@/components/canvas/Scene"), {
  ssr: false,
});

const Layout = ({ children }) => {
  const ref = useRef();
  const [load, setLoad] = useState(false);
  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: " 100%",
        height: "100%",
        overflow: "auto",
        touchAction: "auto",
      }}
    >
      <PageView />
      <Navbar />
      {children}
      <Scene
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
        }}
        eventSource={ref}
        eventPrefix="client"
      />
    </div>
  );
};

export { Layout };
