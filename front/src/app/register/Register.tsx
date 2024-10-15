import BackToHome from "@/components/GeneralComponents/BackToHome/BackToHome";
import FormInfo from "@/components/GeneralComponents/FormInfo/FormInfo";
import RegisterForm from "@/components/RegisterComponents/RegisterForm/RegisterForm";
import React from "react";

export const Register: React.FC = (): React.ReactElement => {

    return (

        <div className="bg-[url('/assets/images/background.png')] h-[100vh]">
            <div className="w-full h-full bg-[#000000ad] flex items-center">
                <BackToHome />
                <FormInfo />
                <RegisterForm />
            </div>
        </div>

    );

};

export default Register;