import { useState } from "react";
import { useNavigate } from "react-router-dom";
import erorrHandling from "../util/errors";
import { request } from "../util/axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      localStorage.setItem("access_token", response.data.data.access_token);
      console.log(response.data);
      nav("")
    } catch (error) {
      erorrHandling(error?.response?.data?.message || error.message);
    }
  };
  return (
    <div className="container" style={{ paddingTop: "10%" }}>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
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

              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
            <br />
          </div>
        </div>
      </div>
  );
}
