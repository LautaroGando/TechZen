// Vendors
import React from "react";

// Components
import BackToHome from "@/components/GeneralComponents/BackToHome/BackToHome";
import FormInfo from "@/components/GeneralComponents/FormInfo/FormInfo";
import RegisterForm from "@/components/RegisterComponents/RegisterForm/RegisterForm";

export const Register: React.FC = (): React.ReactElement => {

    return (

        <div className="bg-[url('/assets/images/background.png')] h-[100vh]">
            <div className="w-full h-full bg-[#000000ad] flex flex-col items-center justify-between lg:flex-row">
                <BackToHome />
                <FormInfo />
                <RegisterForm />
            </div>
        </div>

    );

};

export default Register;