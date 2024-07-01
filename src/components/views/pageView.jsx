"use client";
import dynamic from "next/dynamic";
import { useFrame } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  Box,
  Sphere,
  Circle,
  Cone,
  Cylinder,
  Tube,
  Ring,
  Tetrahedron,
  Polyhedron,
  Icosahedron,
  Octahedron,
  Dodecahedron,
  Extrude,
  Lathe,
  Shape,
  RoundedBox,
  Line,
  QuadraticBezierLine,
  CubicBezierLine,
  CatmullRomLine,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { motion as motion3d } from "framer-motion-3d";
import { MotionConfig } from "framer-motion";
import * as THREE from "three";
const View = dynamic(
  () => import("@/components/canvas/view").then((mod) => mod.View),
  {
    ssr: false,
    loading: () => (
      <div className="flex fixed bg-gray-200 h-screen w-screen flex-col items-center justify-center">
        <svg
          className="-ml-1 mr-3 h-5 w-5 animate-spin text-black"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    ),
  }
);

function getVariant(pathname) {
  switch (pathname) {
    case "/":
      return "home";
    case "/services":
      return "services";
    case "/work":
      return "work";
    case "/vision":
      return "vision";
    case "/journal":
      return "journal";
    case "/contact":
      return "contact";
    default:
      return "initial";
  }
}

export default function PageView({}) {
  const router = useRouter();
  useEffect(() => {
    console.log("router", router);
  }, [router]);

  return (
    <View className="absolute  h-screen w-full ">
      <directionalLight intensity={10} position={[-10, 100, 0]} />

      <PerspectiveCamera makeDefault position={[0, 0, 50]} zoom={5} />
      <MotionConfig transition={{ duration: 2, ease: [0.6, 0, 0.4, 1] }}>
        <CylinderMesh pathname={router.pathname} />
        <SphereMesh pathname={router.pathname} />
        <OctahedronMesh pathname={router.pathname} />
        <BoxMesh pathname={router.pathname} />
      </MotionConfig>
    </View>
  );
}
const cylinderVariants = {
  initial: {
    x: -2,
    y: 0,
    scaleX: 0.5,
    scaleY: 1,
    scaleZ: 0.5,
    rotateX: 0,
    rotateZ: 0,
    rotateY: 0,
  },
  home: {
    x: 0,
    y: 0,
    scaleX: 0.9,
    scaleY: 0.9,
    scaleZ: 0.9,
    rotateX: 0,
    rotateZ: -3.75,
    rotateY: -0.5,
  },
  services: {
    x: 5,
    y: 0,
    scaleX: 0.5,
    scaleY: 0.5,
    scaleZ: 0.5,
    rotateX: 0,
    rotateZ: -1,
    rotateY: 0.5,
  },
  work: {
    x: 0,
    y: 8,
    scaleX: 0,
    scaleY: 0,
    scaleZ: 0,
    rotateX: 0,
    rotateZ: 0,
    rotateY: 0,
  },
  vision: {
    x: 0,
    y: 0,
    scaleX: 1.35,
    scaleY: 1.35,
    scaleZ: 1.35,
    rotateX: 1.55,
    rotateZ: 0,
    rotateY: 0,
  },
  journal: {
    x: 0,
    y: -8,
    scaleX: 0,
    scaleY: 0,
    scaleZ: 0,
    rotateX: 0,
    rotateZ: 0,
    rotateY: 0,
  },
};
const octahedronVariants = {
  initial: {
    x: 0,
    y: 0,
    scale: 0,
    rotateX: 0,
    rotateZ: 0,
    rotateY: 0,
  },
  services: {
    x: -4,
    y: 4,
    scale: 1,
    rotateX: 0.5,
    rotateZ: -0.2,
    rotateY: 0,
  },
  work: {
    x: 0,
    y: 8,
    scale: 0,
    rotateX: 0,
    rotateZ: 0,
    rotateY: 0,
  },
  vision: {
    x: 0,
    y: 8,
    scale: 0,
    rotateX: 0,
    rotateZ: 0,
    rotateY: 0,
  },
  journal: {
    x: -3.5,
    y: 4,
    scale: 2,

    rotateX: 0.2,
    rotateZ: -0.3,
    rotateY: 0,
  },
};
const boxVariants = {
  initial: {
    x: 0,
    y: 0,
    scaleX: 0,
    scaleY: 0,
    scaleZ: 0,
    rotateX: 0,
    rotateZ: 0,
    rotateY: 0,
  },
  home: {
    x: 0,
    y: 0,

    scaleX: 0,
    scaleY: 0,
    scaleZ: 0,
    rotateX: 0,
    rotateZ: 0,
    rotateY: 0,
  },
  services: {
    x: -3,
    y: -5,
    scaleX: 0.5,
    scaleY: 0.5,
    scaleZ: 0.5,
    rotateX: 0,
    rotateZ: -1,
    rotateY: 0.5,
  },
  work: {
    x: 0,
    y: 0,
    scaleX: 0.6,
    scaleY: 0.6,
    scaleZ: 0.6,
    rotateX: 1,
    rotateZ: -0.5,
    rotateY: -0.6,
  },
  vision: {
    x: 0,
    y: -8,
    scaleX: 0,
    scaleY: 0,
    scaleZ: 0,
    rotateX: 0,
    rotateZ: 0,
    rotateY: 0,
  },
  journal: {
    x: 0,
    y: -8,
    scaleX: 0,
    scaleY: 0,
    scaleZ: 0,
    rotateX: 0,
    rotateZ: 0,
    rotateY: 0,
  },
};

function CylinderMesh({ pathname }) {
  return (
    <motion3d.group
      variants={cylinderVariants}
      initial="initial"
      animate={getVariant(pathname)}
    >
      <Cylinder args={[3, 3, 7, 64, 32]}>
        <meshStandardMaterial color="gray" />
      </Cylinder>
    </motion3d.group>
  );
}
function SphereMesh({ pathname }) {
  return (
    <motion3d.group
      variants={{
        initial: {
          x: 2,
          y: 1.5,
          scale: 2,
        },
        enter: {
          scale: 0,
        },
      }}
      initial="initial"
      animate="enter"
      transition={{ duration: 1, ease: [0.6, 0, 0.4, 1] }}
    >
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial color="gray" />
      </Sphere>
    </motion3d.group>
  );
}
function OctahedronMesh({ pathname }) {
  return (
    <motion3d.group
      variants={octahedronVariants}
      initial="initial"
      animate={getVariant(pathname)}
    >
      <Octahedron scale={0.1} args={[20, 0]}>
        <meshStandardMaterial />
      </Octahedron>
    </motion3d.group>
  );
}
function BoxMesh({ pathname }) {
  return (
    <motion3d.group
      variants={boxVariants}
      initial="initial"
      animate={getVariant(pathname)}
    >
      <Box args={[8, 8, 8, 32, 32, 32]}>
        <meshStandardMaterial color="gray" />
      </Box>
    </motion3d.group>
  );
}
function Mesh1({ pathname }) {
  const material = useRef();
  useFrame(({ clock }) => {
    material.current.distort = Math.sin(clock.getElapsedTime() / 5);
  });
  return (
    <motion3d.mesh
      variants={{
        initial: {
          scale: 0.5,
          x: -5,
        },
        active: {
          scale: 1,
          x: 0,
        },
      }}
      initial="initial"
      animate={pathname === "/work" ? "active" : "initial"}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <MeshDistortMaterial ref={material} distort={1} speed={10} />
    </motion3d.mesh>
  );
}
