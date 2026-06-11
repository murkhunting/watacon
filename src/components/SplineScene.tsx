import Spline from '@splinetool/react-spline/next';

type SplineSceneProps = {
  scene: string;
};

export default function SplineScene({ scene }: SplineSceneProps) {
  return <Spline scene={scene} />;
}
