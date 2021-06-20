import React, { useRef, useState, useEffect, Suspense } from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Canvas, useLoader, useThree } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ControlsProvider, useControl, } from 'react-three-gui';
import {
  OrbitControls,
  draco,
} from 'drei'
import { EffectComposer, Noise } from 'react-postprocessing'

const Camera = () => {
  const camera = useRef()
  const { aspect, size, setDefaultCamera } = useThree()
  const pixelToThreeUnitRatio = 1
  const planeDistance = 0
  const cameraDistance = 500
  const distance = cameraDistance - planeDistance
  const height = size.height / pixelToThreeUnitRatio
  const halfFovRadians = Math.atan((height / 2) / distance)
  const fov = 2 * halfFovRadians * (180 / Math.PI)

  useEffect(() => void setDefaultCamera(camera.current), [setDefaultCamera])
  return <perspectiveCamera
    ref={camera}
    aspect={aspect}
    fov={fov}
    position={[0, 0, cameraDistance]}
    onUpdate={self => self.updateProjectionMatrix()}
  />
}

function Model(props) {
  return (
    <>
      <mesh{...props}
      >
        <primitive object={useLoader(GLTFLoader, props.url, draco()).scene} />
      </mesh>
    </>
  );
}

function Box() {
  const [show, set] = useState(true);
  const posX = useControl('Pos X', { type: 'number', spring: true });
  const posY = useControl('Pos Y', {
    type: 'number',
  });
  const rotateXY = useControl('Rotation', { type: 'xypad', distance: Math.PI });
  const color = useControl('Material Color', { type: 'color' });
  useControl('Toggle cube', {
    type: 'button',
    onClick: () => set(s => !s),
  });
  return (
    <>
      <mesh
        rotation-x={rotateXY.x}
        rotation-y={rotateXY.y}
        position-x={posX}
        position-y={posY}
      >
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
      {show}
    </>
  );
}

function FrameViewer(props) {
  const fullScreenHandle = useFullScreenHandle();
  // const glow = useControl('glow', {
  //         type: 'number',
  //          distance: 10,
  //          scrub: true,
  //          min: -Infinity,
  //          max: Infinity,
  //          spring: true,
  //       });

  return (
    <>
      <FullScreen handle={fullScreenHandle}>
        <ControlsProvider>
          <Canvas{...props}
            style={{ background: "#292A33", height: "100vh", width: "100%" }}
            pixelRatio={window.devicePixelRatio}
          >
            <Suspense fallback={null}>
              <pointLight position={[30, 49, 10]} />
              <ambientLight intensity={1} />
              <EffectComposer>
                <Noise opacity={0.02} />

                <Model
                  dispose={null}
                  position={[0, 0, 0]}
                  url={props.data.frameFile}
                  scale={[0.2, 0.2, 0.2]}
                />
              </EffectComposer>
            </Suspense>
            <OrbitControls />
          </Canvas>
        </ControlsProvider>
      </FullScreen>
      <button onClick={fullScreenHandle.enter}>
        Enter fullscreen
      </button>
    </>
  );
}

export default FrameViewer;
