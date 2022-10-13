export type IItemClass = {
    name: string;
    categoryOfItem: CategoryOfItem;
    id: string;
    owner: string;
    rentalRate: number;
    rentalStatus: RentalStatus;
    currentRentalOwner: string;
    condition: Condition;
    dateAdded: string;
};
export enum CategoryOfItem {
    type1 = 'sport',
    type2 = 'health',
    type3 = 'instrument',
}
export enum RentalStatus {
    available = 'available',
    rented = 'rented',
    unavailable = 'unavailable',
}
export enum Condition {
    new = 'new',
    fairlyUsed = 'fairly used',
    used = 'used',
}
