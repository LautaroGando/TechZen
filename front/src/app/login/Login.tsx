// Vendors
import React from "react";

// Components
import LoginForm from "@/components/LoginComponents/LoginForm/LoginForm";
import FormInfo from "@/components/GeneralComponents/FormInfo/FormInfo";
import BackToHome from "@/components/GeneralComponents/BackToHome/BackToHome";

export const Login: React.FC = (): React.ReactElement => {

    return (

        <div className="bg-[url('/assets/images/background.png')] h-[100vh]">
            <div className="w-full h-full bg-[#000000ad] flex flex-col items-center justify-between lg:flex-row">
                <BackToHome />
                <FormInfo />
                <LoginForm />
            </div>
        </div>

    );

};

export default Login;