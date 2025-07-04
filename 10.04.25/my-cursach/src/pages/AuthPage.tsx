import { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";


const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-200">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6">
                <div className="flex justify-center mb-6">
                    <button
                        className={`px-4 py-2 w-1/2 font-semibold ${
                            isLogin ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
                        } rounded-l-lg transition hover:bg-blue-600`}
                        onClick={() => setIsLogin(true)}
                    >
                        Вход
                    </button>
                    <button
                        className={`px-4 py-2 w-1/2 font-semibold ${
                            !isLogin ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
                        } rounded-r-lg transition hover:bg-blue-600`}
                        onClick={() => setIsLogin(false)}
                    >
                        Регистрация
                    </button>
                </div>
                {isLogin ? <LoginForm /> : <RegistrationForm />}
            </div>
        </div>
    );
};

export default AuthPage;
