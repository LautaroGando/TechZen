// Vendors
import React from "react";

// Components
import ImageUser from "@/components/DashboardComponents/ImageUser/ImageUser";
import InfoUser from "@/components/DashboardComponents/InfoUser/InfoUser";

export const Dashboard: React.FC = (): React.ReactElement => {

    return (

        <div className="min-h-[calc(100vh-220px)] flex flex-col justify-center items-center gap-10 md:min-h-[calc(100vh-220px)] md:flex-row lg:flex-row">
            <ImageUser />
            <div className="h-[1px] w-full lBColor md:w-[1px] md:h-[400px]"></div>
            <InfoUser />
        </div>

    );

};

export default Dashboard;