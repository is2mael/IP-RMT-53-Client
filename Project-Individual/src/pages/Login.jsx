import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import erorrHandling from "../util/errors";
import { request } from "../util/axios";
import NavbarLogin from "../components/NavbarLogin";

export default function Login() {
  const [email, setEmail] = useState("qwerty@qwerty.com");
  const [password, setPassword] = useState("qwerty");
  const nav = useNavigate();

  const handlingLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await request({
        method: "post",
        url: "/login",
        headers: {},
        data: {
          email,
          password,
        },
      });
      localStorage.setItem("access_token", response.data.access_token);
      console.log(response.data);
      nav("/user/get/private/home");
    } catch (error) {
      erorrHandling(error?.response?.data?.message || error.message);
    }
  };

  async function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);

    try {
      const { data } = await request.post("/login/google", {
        googleToken: response.credential,
      });
      localStorage.setItem("access_token", data.access_token);
      nav("/user/get/private/home");
    } catch (err) {
      console.log(err, "<<< err google login");
    }
  }

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_CLIENT_ID,
      // client_id: import.meta.env.CLIENT_ID,
      callback: handleCredentialResponse,
    });
    window.google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }
    );
    window.google.accounts.id.prompt();
  }, []);

  return (
    <>
      <NavbarLogin />
      <div className="container" style={{ paddingTop: "10%" }}>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            {/* Tambahkan card wrapper dan efek bayangan */}
            <div className="card shadow p-4">
              <h2 className="text-center">Login</h2>
              <form onSubmit={handlingLogin}>
                <div className="mb-3">
                  <label htmlFor="input-email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="input-email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="input-password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="input-password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <button type="submit" className="btn btn-primary px-3">
                    Login
                  </button>
                  <span>- OR -</span>
                  <div className="px-3" id="buttonDiv"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
