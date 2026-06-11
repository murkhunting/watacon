import { type ComponentProps } from 'react';
import Spline from '@splinetool/react-spline';

type SplineSceneProps = {
  scene: string;
} & ComponentProps<typeof Spline>;

export default function SplineScene({ scene, ...props }: SplineSceneProps) {
  return (
    <Spline
      scene={scene}
      style={{ width: '100%', height: '100%' }}
      {...props}
    />
  );
}
