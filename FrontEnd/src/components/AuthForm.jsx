import React from "react";
import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";

const AuthForm = () => {
  const data = useActionData();
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const navigation = useNavigation();
  const isSubmitting = navigation.state == "submitting";
  return (
    <section className="postForm-main login-form">
      <div>
        <h3>{isLogin ? "Login to your account" : "Create an account"}</h3>
      </div>
      {/* {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((error) => (
            <li key={error}>{error}</li>
          ))}{" "}
        </ul>
      )} */}
      {data && data.message && <p>{data.message}</p>}
      <Form method={"post"} className="postForm">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
          {data && data.errors && <span>{data.errors.email}</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
          {data && data.errors && <span>{data.errors.password}</span>}
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting" : isLogin ? "Login" : "Create"}
        </button>
      </Form>
      {isLogin ? (
        <p className="loginAndRegister">
          Don't have an account?{" "}
          <Link to={"/auth?mode=signup"}>Register here!</Link>
        </p>
      ) : (
        <p className="loginAndRegister">
          Already have an account?{" "}
          <Link to={"/auth?mode=login"}>Login here!</Link>
        </p>
      )}
    </section>
  );
};

export default AuthForm;
