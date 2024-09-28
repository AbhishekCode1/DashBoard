import { useState } from "react";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { useUserStore } from "../store/userStore";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userStore = useUserStore();
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    await userStore.signUp({ email, password });
    if (userStore.isAuthenticated) {
      navigate("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSignUp} className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md">
      <FormInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <FormInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button text="Sign Up" type="submit" />
    </form>
  );
};

export default SignUpPage;
