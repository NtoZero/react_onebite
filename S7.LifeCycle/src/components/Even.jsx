import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    console.log("Even Component Mounted!");

    // return에 포함된 것은 클린업, 정리함수
    return () => {
      console.log("Even Component unmounted!");
    };
  }, []); // 의존성 배열이 비어있으므로 렌더링 시에 최초 실행
  return <div>짝수입니다.</div>;
};

export default Even;
