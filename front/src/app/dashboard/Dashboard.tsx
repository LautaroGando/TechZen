import ImageUser from "@/components/DashboardComponents/ImageUser/ImageUser";
import InfoUser from "@/components/DashboardComponents/InfoUser/InfoUser";
import React from "react";

export const Dashboard: React.FC = (): React.ReactElement => {

    return (

        <div className="h-[calc(100vh-220px)] flex justify-center items-center gap-10">
            <ImageUser />
            <div className="w-[1px] h-[400px] lBColor"></div>
            <InfoUser />
        </div>

    );

};

export default Dashboard;