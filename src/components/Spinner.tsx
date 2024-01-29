import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";

export default function Spinner() {
  const AUTHORIZE_CODE = new URL(window.location.href).searchParams.get("code"); //받아온 인가 코드
  const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const grantType = "authorization_code";

  const navigate = useNavigate();

  //사용자의 토큰을 받아오기 위한 API
  useEffect(() => {
    if (AUTHORIZE_CODE) {
      axios
        .post(
          `${BASE_URL}/token?grant_type=${grantType}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${AUTHORIZE_CODE}`,
          {},
          {
            headers: {
              "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        )
        .then(() => {
          navigate("/complete");
        });
    }
  });

  return (
    <>
      <div>로그인 중...</div>
      <HashLoader color="#36d7b7" />
    </>
  );
}
