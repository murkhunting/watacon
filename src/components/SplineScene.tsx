import { useCallback } from 'react';
import Spline from '@splinetool/react-spline';
import type { Application } from '@splinetool/runtime';

type SplineSceneProps = {
  scene: string;
};

export default function SplineScene({ scene }: SplineSceneProps) {
  const onLoad = useCallback((spline: Application) => {
    const { renderer, scene: splineScene } = spline;
    renderer.setClearColor(0x000000, 0);
    splineScene.background = null;
    const canvas = renderer.domElement;
    canvas.style.background = 'transparent';
  }, []);

  return (
    <Spline
      scene={scene}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
      onLoad={onLoad}
    />
  );
}
