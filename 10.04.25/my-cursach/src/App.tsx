
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import ResetPasswordForm from "../components/ResetPasswordForm";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/sign-in" element={<AuthPage />} />
                <Route path="/sign-up" element={<AuthPage />} />
                <Route path="/reset-password" element={<ResetPasswordForm />} />
                <Route path="*" element={<AuthPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
