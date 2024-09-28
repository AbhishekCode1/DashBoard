import { useState } from 'react';
import { useUserStore } from '../store/userStore';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userStore = useUserStore();
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    await userStore.signIn({ email, password });
    if (userStore.isAuthenticated) {
      navigate('/dashboard');
    }
  };

  return (
    <form onSubmit={handleSignIn} className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md">
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mt-4">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border rounded"
        />
      </div>
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        Sign In
      </button>
    </form>
  );
};

export default SignInPage;
