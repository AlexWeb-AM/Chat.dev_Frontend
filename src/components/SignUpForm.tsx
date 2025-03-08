import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerUser } from '../slices/authSlice';
import { RootState, AppDispatch } from '../store/store';

export const SignUpForm = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const { isLoading } = useSelector((state: RootState) => state.auth);

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const validateForm = (): boolean => {
        const errors: string[] = [];

        if (!name) {
            errors.push('Name is required');
        }
        if (!email) {
            errors.push('Email is required');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.push('Email is not valid');
        } else if (email.slice(-10) !== '@gmail.com') {
            errors.push('Email must be gmail.com');
        }

        if (!password) {
            errors.push('Password is required');
        } else if (password.length < 6) {
            errors.push('Password must be at least 6 characters');
        } else if (!/[0-9]/.test(password)) {
            errors.push('Password must contain a number');
        }

        if (!confirmPassword) {
            errors.push('Retry Password is required');
        } else if (confirmPassword !== password) {
            errors.push('Retry Password does not match');
        }

        errors.forEach((error) => toast.error(error));
        return errors.length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            await dispatch(registerUser({ name, email, password })).unwrap();
            toast.success('Successfully Signed');

            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');

            navigate('/login');
        } catch (error: any) {
            if (error?.message) {
                toast.error(error.message);
            } else {
                toast.error('An unexpected error occurred');
            }
        }
    };

    return (
        <div className="signup_div flex justify-center items-center h-screen w-1/2">
            <form
                className="form_div w-formWidth rounded-xl h-formHeight bg-black flex items-center pt-5 flex-col"
                onSubmit={handleSubmit}
            >
                <h3 className="mb-4 mt-2 mr-36 text-3xl font-semibold w-40">Sign Up</h3>
                <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <input
                    type="password"
                    placeholder="Retry Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => {
                        setConfirmPassword(e.target.value);
                    }}
                />
                <button
                    className="text-full-10 mt-3 h-11 bg-white rounded-xl text-black font-semibold text-lg"
                    disabled={isLoading}
                >
                    Sign Up
                </button>
                <h4 className="mt-4 mr-12 text-gray-600">
                    Already have an account.{' '}
                    <Link to="/login" className="text-white underline ">
                        Login
                    </Link>
                </h4>
            </form>
        </div>
    );
};
