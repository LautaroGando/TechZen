// Vendors
import React from "react";

// Next
import Link from "next/link";

export const BackToHome: React.FC = (): React.ReactElement => {

    return (

        <Link className="lColor absolute top-10 left-5" href='/'>
            <span>&larr;</span>
            Volver al inicio
        </Link>

    )

};

export default BackToHome;