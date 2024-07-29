import { useEffect, useMemo, useRef } from 'react';

/**
 * 컴포넌트의 리렌더링에 의해 콜백 함수가 다시 선언되어
 * 해당 콜백 함수를 사용하는 컴포넌트나 훅이 다시 실행되는 상황을 방지합니다.
 *
 * 콜백 함수의 최신 참조를 유지하면서도 동일한 함수 참조를 반환하는 방식으로 동작합니다.
 *
 * Q. 콜백 함수의 참조가 변경되어야 하는 경우는 리렌더링이 필요하지 않는가?
 * A. 리렌더링은 콜백함수가 변경되어서 되는 것이 아니라, 콜백함수가 호출되어 컴포넌트의 상태나 렌더링 결과에 영향을 주는 경우만.
 *    즉, 콜백함수의 참조가 변경되어서 리렌더링이 필요한 것이 아님.
 */
export const useCallbackRef = <T extends (...args: any[]) => any>(callback: T | undefined) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  return useMemo(() => ((...args) => callbackRef.current?.(...args)) as T, []);
};
