import { JSONSchemaType } from 'ajv';

export const schema: JSONSchemaType<RequestPayload> = {
    additionalProperties: false,
    properties: {
        userID: {
            type: 'string',
        },
        firstName: {
            type: 'string',
        },
        lastName: {
            type: 'string',
        },
        email: {
            type: 'string',
        },
        id: {
            type: 'string',
        },
        password: {
            type: 'string',
        },
        phoneNumber: {
            type: 'number',
        },
        dob: {
            type: 'string',
        },
        dateJoined: {
            type: 'string',
        },
    },
    required: [
        'userID',
        'firstName',
        'lastName',
        'email',
        'id',
        'password',
        'phoneNumber',
        'dob',
        'dateJoined',
    ],
    type: 'object',
};
export type RequestPayload = {
    userID: string;
    firstName: string;
    lastName: string;
    email: string;
    id: string;
    password: string;
    phoneNumber: number;
    dob: string;
    dateJoined: string;
};
