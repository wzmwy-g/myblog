import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const goError = () => {
    navigate("/error", { replace: true });
  };
  return (
    <>
      <div>
        Login Page
        <button onClick={goError}> go error</button>
      </div>
    </>
  );
}

export default Login;
