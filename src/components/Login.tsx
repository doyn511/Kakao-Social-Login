import { KAKAO_AUTH_URL } from "../apis/oAuth";

export default function Login() {
  const onClickLoginBtn = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <>
      <button onClick={onClickLoginBtn}>
        <img src="../public/kakao_btn.png" alt="카카오로그인" />
      </button>
    </>
  );
}
