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
        'password',
        'phoneNumber',
        'dob',
        'dateJoined',
    ],
    type: 'object',
};
export type IResponse = {
    header: string;
    body: string;
    statusCode: number;
};
export type RequestPayload = {
    userID: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: number;
    dob: string;
    dateJoined: string;
};
