import React from "react";

export const Welcome: React.FC = (): React.ReactElement => {

    return (

        <div className="w-full h-[calc(100vh-100px)] flex items-end">
            <div className="w-full h-3/4 sBColor rounded-tr-[100px] flex flex-col gap-5 p-5 justify-center sm:w-4/5 lg:w-3/4 lg:p-20">
                <h1 className="cColor text-4xl font-bold sm:text-5xl lg:text-8xl">TechZen</h1>
                <h2 className="lColor text-base font-medium sm:text-lg lg:text-3xl">¡Bienvenido a TechZen!</h2>
                <p className="lColor text-sm font-light sm:text-base lg:text-xl">
                    Estamos encantados de tenerte aquí. En TechZen, creemos que la tecnología tiene el poder de transformar tu vida, y estamos comprometidos a ofrecerte lo mejor en innovación y calidad. Explora nuestra amplia selección de productos de última generación, diseñados para satisfacer tus necesidades y superar tus expectativas.
                    Descubre el futuro hoy. Si tienes alguna pregunta o necesitas asistencia, nuestro equipo de soporte está aquí para ayudarte en cada paso del camino.
                </p>
                <h2 className="lColor text-base font-medium sm:text-lg lg:text-3xl">¡Gracias por elegir TechZen!</h2>
            </div>
        </div>

    );

};

export default Welcome;