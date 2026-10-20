import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk';

export default function useKakaoLoader() {
  const appkey = process.env.NEXT_PUBLIC_KAKAO_KEY;
  if (!appkey) {
    console.error('NEXT_PUBLIC_KAKAO_KEY 환경 변수가 설정되지 않았습니다.');
  }

  useKakaoLoaderOrigin({
    appkey: appkey ?? '',
    libraries: ['clusterer', 'drawing', 'services'],
  });
}
