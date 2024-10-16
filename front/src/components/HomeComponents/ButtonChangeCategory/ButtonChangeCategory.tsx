// Vendors
import React from "react";

// Types
import { IPropsButtonChangeCategory } from "./types";
import { ICategory } from "../Product/types";

export const ButtonChangeCategory: React.FC<IPropsButtonChangeCategory<ICategory>> = ({ categories, active, handleCategory }: IPropsButtonChangeCategory<ICategory>): React.ReactElement => {

    return (

        <div className="mx-5 mb-10 flex flex-wrap gap-5 lg:mx-20">
            {
                categories.map((category: ICategory) => (
                    <button onClick={() => handleCategory(category.id)} className={`${active === category.id ? 'cBColor hover:bg-[#6ca7ecad]' : 'sBColor'} lColor py-2 px-3 transition-all text-sm hover:bg-[#373737ad]`} key={category.id}>{category.name}</button>
                ))
            }
        </div>

    );

};

export default ButtonChangeCategory;