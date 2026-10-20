import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk';

export default function useKakaoLoader(appkey: string) {
  // [loading, error]
  return useKakaoLoaderOrigin({
    appkey,
    libraries: ['clusterer', 'drawing', 'services'],
  });
}
