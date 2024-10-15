import React from "react";

export const Welcome: React.FC = (): React.ReactElement => {

    return (

        <div className="w-full h-[calc(100vh-100px)] flex items-end">
            <div className="w-3/4 h-3/4 sBColor rounded-tr-[100px] flex flex-col gap-5 p-20 justify-center">
                <h1 className="cColor text-[108px] font-bold">TechZen</h1>
                <h2 className="lColor text-[28px] font-medium">¡Bienvenido a TechZen!</h2>
                <p className="lColor text-[20px] font-light">
                    Estamos encantados de tenerte aquí. En TechZen, creemos que la tecnología tiene el poder de transformar tu vida, y estamos comprometidos a ofrecerte lo mejor en innovación y calidad. Explora nuestra amplia selección de productos de última generación, diseñados para satisfacer tus necesidades y superar tus expectativas.
                    Descubre el futuro hoy. Si tienes alguna pregunta o necesitas asistencia, nuestro equipo de soporte está aquí para ayudarte en cada paso del camino.
                </p>
                <h2 className="lColor text-[28px] font-medium">¡Gracias por elegir TechZen!</h2>
            </div>
        </div>

    );

};

export default Welcome;