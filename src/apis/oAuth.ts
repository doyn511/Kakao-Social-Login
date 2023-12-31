const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const KAKAO_AUTH_URL = `${BASE_URL}/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
