import Spline from '@splinetool/react-spline';

type SplineSceneProps = {
  scene: string;
};

export default function SplineScene({ scene }: SplineSceneProps) {
  return <Spline scene={scene} style={{ width: '100%', height: '100%' }} />;
}
