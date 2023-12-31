import { useContext } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const userEmailAndPass = { email, password };
    console.log(userEmailAndPass);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        const lastLoginAt = result?.user?.metadata?.lastSignInTime;
        const userId = result?.user?.uid;
        const user = { email, lastLoginAt, userId };

        // Update last logged in the Database
        fetch("https://coffee-store-server-two-theta.vercel.app/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json)
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Success!",
              text: "User added successfully",
              icon: "success",
              confirmButtonText: "Ok",
            });
          });
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign In now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
