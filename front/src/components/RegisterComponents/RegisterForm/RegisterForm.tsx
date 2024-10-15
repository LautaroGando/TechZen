"use client";

import { fetchRegisterUser } from "@/helpers/fetchRegisterUser";
import { IUserRegister, validateRegister } from "@/helpers/validateRegister";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export const RegisterForm: React.FC = (): React.ReactElement => {

    const router = useRouter();

    return (

        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
                address: '',
                phone: '',
            }}
            validate={validateRegister}
            onSubmit={async (userData, { resetForm }) => {

                const user = await fetchRegisterUser(userData);

                resetForm();

                if (!user.name) return;

                router.push("/login");

            }}
        >
            {
                ({ errors, touched }: FormikProps<IUserRegister>) => (
                    <Form className="pBColor flex flex-col w-[500px] h-[100vh] rounded-tl-[50px] rounded-bl-[50px] justify-center items-center gap-10">
                        <h2 className="lColor text-[36px] font-semibold">REGíSTRATE</h2>
                        <div className="relative w-[300px]">
                            <Field className='input' type='text' name='name' placeholder='Nombre completo' />
                            {touched.name && errors.name && (
                                <span className="inputError scrollY">
                                    <ErrorMessage name="name" />
                                </span>
                            )}
                        </div>
                        <div className="relative w-[300px]">
                            <Field className='input' type='email' name='email' placeholder='Correo electrónico' />
                            {touched.email && errors.email && (
                                <span className="inputError scrollY">
                                    <ErrorMessage name="email" />
                                </span>
                            )}
                        </div>
                        <div className="relative w-[300px]">
                            <Field className='input' type='password' name='password' placeholder='Contraseña' />
                            {touched.password && errors.password && (
                                <span className="inputError scrollY">
                                    <ErrorMessage name="password" />
                                </span>
                            )}
                        </div>
                        <div className="relative w-[300px]">
                            <Field className='input' type='text' name='address' placeholder='Dirección' />
                            {touched.address && errors.address && (
                                <span className="inputError scrollY">
                                    <ErrorMessage name="address" />
                                </span>
                            )}
                        </div>
                        <div className="relative w-[300px]">
                            <Field className='input' type='text' name='phone' placeholder='Teléfono' />
                            {touched.phone && errors.phone && (
                                <span className="inputError scrollY">
                                    <ErrorMessage name="phone" />
                                </span>
                            )}
                        </div>
                        <button className="w-[280px] h-[50px] rounded-[10px] cBColor lColor text-[18px] transition-all hover:bg-[#6ca7ecad]" type="submit">REGISTRARSE</button>
                        <p className="lColor text-[18px] font-light">
                            ¿Ya tenés una cuenta?
                            <Link className="cColor" href='/login'> Ingresa acá</Link>
                        </p>
                    </Form>
                )
            }
        </Formik>

    );

};

export default RegisterForm;