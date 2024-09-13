import { colors } from '@sds/theme';
import { CSSProperties } from 'react';
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';

interface ConfettiProps {
  position: {
    top: number;
    left: number;
  };
  size?: number;
}

export const Confetti = (props: ConfettiProps) => {
  const {
    position: { top, left },
    size = 500,
  } = props;

  const canvasStyles: CSSProperties = {
    width: size,
    height: size,
    zIndex: '3',
    position: 'absolute',
    top,
    left,
  };

  const decorateOptions = (originalOptions: any) => {
    return {
      ...originalOptions,
      particleCount: 100, // 조각 개수 설정
      spread: 100, // 퍼짐 정도 설정
      startVelocity: 50, // 초기 속도 설정
      ticks: 200, // 애니메이션 지속 시간 설정
      origin: { x: 0.5, y: 0.7 }, // 발사 위치 설정
      shapes: ['square', 'circle', 'square'], // 이미지 배열을 shapes로 설정
      gravity: 0.8, // 중력 설정
      scalar: 1.5, // 색종이 크기
      colors: [colors.primary500, colors.quaternary500, colors.secondary500, colors.tertiary500],
    };
  };

  return (
    <Fireworks
      autorun={{ speed: 0.1, duration: 1 }}
      style={canvasStyles}
      decorateOptions={decorateOptions} // 함수 실행을 위해 괄호를 추가
    />
  );
};
