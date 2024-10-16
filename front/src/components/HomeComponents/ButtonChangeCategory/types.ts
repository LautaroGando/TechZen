export interface IPropsButtonChangeCategory<Item> {
    categories: Item[];
    active: number;
    handleCategory: (id: number) => void;
};