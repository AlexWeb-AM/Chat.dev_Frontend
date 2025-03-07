import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { RootState, AppDispatch } from '../store/store';
import { toast } from 'react-toastify';
import { loginUser } from '../slices/authSlice';
import { useState } from 'react';

export const LoginForm = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { isLoading } = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    try {
      const response = await dispatch(loginUser({ email, password })).unwrap();
      toast.success("Login successful");
      localStorage.setItem("userEmail", email);
      localStorage.setItem("routeId",response.user.routeId)
      navigate(`/user/${response.user.routeId}/`);
    } catch (err: any) {
      toast.error(err?.message || "Login failed");
    }
  };

  

    return (
        <div className='login_div flex justify-center items-center h-screen w-1/2'>
            <form onSubmit={handleSubmit} className="form_div w-formWidth rounded-xl h-80 bg-black flex items-center pt-5 flex-col">
                <h3 className="mb-4 mt-2 mr-36 text-3xl font-semibold w-40">Login</h3>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" required  />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required  />
                <button type='submit' className="text-full-10 mt-3 h-11 bg-white rounded-xl text-black font-semibold text-lg" disabled={isLoading}>Login</button>
                <h4 className="mt-4 mr-12 text-gray-600">Don't have an account? <Link to='/' className="text-white underline">Sign Up</Link></h4>
            </form>
        </div>
    )
}
