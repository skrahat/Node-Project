export type IBaseUserClass = {
    userID: string;
    firstName: string;
    lastName: string;
    email: string;
    id: string;
    password: string;
};
export interface ICustomerUserClass extends IBaseUserClass {
    phoneNumber: number;
    dob: string;
    dateJoined: string;
}
export interface IAdminClass extends IBaseUserClass {
    postion: string;
}
