export interface IPropsButtonFinalizePurchase<Item> {
    token: string;
    userId: number;
    productsId: number[];
    handleUpdateCart: (handleUpdateCart: Item[]) => void;
};