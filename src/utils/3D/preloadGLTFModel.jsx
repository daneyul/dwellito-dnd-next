import { useGLTF } from "@react-three/drei";

export const preloadGLTFModel = (modelPath) => {
  const { preload } = useGLTF;
  preload(`/models/${modelPath}`);
};