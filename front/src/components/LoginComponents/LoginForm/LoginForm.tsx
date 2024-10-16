"use client";

// Vendors
import React from "react";

// Next
import Link from "next/link";

// Hooks
import { useToken } from "@/context/TokenContext/TokenContext";
import { useRouter } from "next/navigation";

// Helpers
import { fetchLoginUser } from "@/helpers/fetchLoginUser";
import { IUserLogin, validateLogin } from "@/helpers/validateLogin";

// Libraries
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";

export const LoginForm: React.FC = (): React.ReactElement => {

    const { setToken } = useToken();
    const router = useRouter();

    return (

        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validate={validateLogin}
            onSubmit={async (userData, { resetForm }) => {

                const user = await fetchLoginUser(userData);

                if (user) {
                    
                    setToken(user);

                    router.push('/');

                };

                resetForm();

            }}
        >
            {
                ({ errors, touched }: FormikProps<IUserLogin>) => (
                    <Form className="pBColor flex flex-col w-full h-auto justify-center py-10 items-center gap-10 lg:h-[100vh] lg:rounded-tl-[80px] lg:rounded-bl-[80px] lg:w-3/4">
                        <h2 className="lColor text-[36px] font-semibold">INICIA SESIÓN</h2>
                        <div className="relative w-[300px] flex flex-col items-center gap-5">
                            <Field className='input' type='email' name='email' placeholder='Correo electrónico' />
                            {touched.email && errors.email && (
                                <span className="inputError scrollY">
                                    <ErrorMessage name="email" />
                                </span>
                            )}
                        </div>
                        <div className="relative w-[300px] flex flex-col items-center gap-5">
                            <Field className='input' type='password' name='password' placeholder='Contraseña' />
                            {touched.password && errors.password && (
                                <span className="inputError scrollY">
                                    <ErrorMessage name="password" />
                                </span>
                            )}
                        </div>
                        <button className="w-[280px] h-[50px] rounded-[10px] cBColor lColor text-[18px] transition-all hover:bg-[#6ca7ecad]" type="submit">INICIAR SESIÓN</button>
                        <p className="lColor text-[18px] font-light">
                            ¿No tenés una cuenta?
                            <Link className="cColor" href='/register'> Registrate acá</Link>
                        </p>
                    </Form>
                )
            }
        </Formik>

    );

};

export default LoginForm;