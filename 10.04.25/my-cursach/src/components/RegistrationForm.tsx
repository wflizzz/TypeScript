import React, { useState } from "react";

const RegistrationForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Пароли не совпадают!");
            return;
        }
        alert("Вы успешно зарегистрировались!");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm text-gray-600 mb-1">E-mail</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Введите e-mail"
                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-yellow-400"
                />
            </div>
            <div>
                <label className="block text-sm text-gray-600 mb-1">Пароль</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Введите пароль"
                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-yellow-400"
                />
            </div>
            <div>
                <label className="block text-sm text-gray-600 mb-1">Подтвердите пароль</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Подтвердите пароль"
                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-yellow-400"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-yellow-400 text-white py-2 rounded-md shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105"
            >
                Регистрация
            </button>
        </form>
    );
};

export default RegistrationForm;
