import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { storeUserInfo } from '../utils/authservice';



const Login = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:9000/api/auth/user/login-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (data?.success) {
            toast.success(data?.message)
            storeUserInfo(data?.data?.accessToken)
            navigate('/')
        } else {
            toast.error(data?.message)
        }
        

      
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-semibold text-gray-800">
                    Login
                </h2>
                <form onSubmit={onSubmitHandler}>
                    {/* Email Input */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-left text-sm font-medium text-gray-600"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>
                    {/* Password Input */}
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-left text-sm font-medium text-gray-600"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>
                    {/* Remember Me and Forgot Password */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember-me"
                                className="w-4 h-4 text-blue-500 rounded focus:ring-0"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 text-sm text-gray-600"
                            >
                                Remember me
                            </label>
                        </div>
                        <a
                            href="#"
                            className="text-sm text-blue-500 hover:underline"
                        >
                            Forgot password?
                        </a>
                    </div>
                    <p className="py-2">
                        If you have no account, please{' '}
                        <Link className="text-blue-600" to="/register">
                            Register
                        </Link>
                    </p>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
