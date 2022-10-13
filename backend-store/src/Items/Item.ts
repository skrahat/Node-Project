import { CategoryOfItem, Condition, IItemClass, RentalStatus } from './type';

export class ItemClass {
    private _name: string;
    private _categoryOfItem: CategoryOfItem;
    private _id: string;
    private _owner: string;
    private _rentalRate: number;
    private _rentalStatus: RentalStatus;
    private _currentRentalOwner: string;
    private _condition: Condition;
    private _dateAdded: string;

    constructor(iItemClassObj: IItemClass) {
        this._name = iItemClassObj.name;
        this._categoryOfItem = iItemClassObj.categoryOfItem;
        this._id = iItemClassObj.id;
        this._owner = iItemClassObj.owner;
        this._rentalRate = iItemClassObj.rentalRate;
        this._rentalStatus = iItemClassObj.rentalStatus;
        this._currentRentalOwner = iItemClassObj.currentRentalOwner;
        this._condition = iItemClassObj.condition;
        this._dateAdded = iItemClassObj.dateAdded;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get categoryOfItem(): CategoryOfItem {
        return this._categoryOfItem;
    }
    public set categoryOfItem(value: CategoryOfItem) {
        this._categoryOfItem = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get owner(): string {
        return this._owner;
    }
    public set owner(value: string) {
        this._owner = value;
    }
    public get rentalRate(): number {
        return this._rentalRate;
    }
    public set rentalRate(value: number) {
        this._rentalRate = value;
    }
    public get rentalStatus(): RentalStatus {
        return this._rentalStatus;
    }
    public set rentalStatus(value: RentalStatus) {
        this._rentalStatus = value;
    }
    public get currentRentalOwner(): string {
        return this._currentRentalOwner;
    }
    public set currentRentalOwner(value: string) {
        this._currentRentalOwner = value;
    }
    public get condition(): Condition {
        return this._condition;
    }
    public set condition(value: Condition) {
        this._condition = value;
    }
    public get dateAdded(): string {
        return this._dateAdded;
    }
    public set dateAdded(value: string) {
        this._dateAdded = value;
    }
}
