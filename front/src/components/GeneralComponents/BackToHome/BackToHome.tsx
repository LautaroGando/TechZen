import Link from "next/link";
import React from "react";

export const BackToHome: React.FC = (): React.ReactElement => {

    return (

        <Link className="lColor absolute top-10 left-20" href='/'>
            <span>&larr;</span>
            Volver al inicio
        </Link>

    )

};

export default BackToHome;