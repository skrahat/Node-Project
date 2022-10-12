import { ICustomerUserClass } from '../User/type';
// import lodash from 'lodash';
import { MongoClient } from 'mongodb';
import { config } from 'dotenv';
import Ajv from 'ajv';
import { schema } from './type';

config();

export const createNewUser = async (body: ICustomerUserClass): Promise<any> => {
    const { uri } = process.env;

    let response = {
        header: '',
        body: '',
        statusCode: 400,
    };
    let mongoClient;

    const ajv = new Ajv();
    const validate = ajv.compile(schema);

    if (!validate) {
        return response;
    }
    try {
        mongoClient = new MongoClient(uri || '');
        await mongoClient.connect();
        const db = await mongoClient.db('Accounts');
        const usersDb = await db.collection('Users');
        const duplicate = await usersDb.findOne(body);
        response = duplicate;
        if (!duplicate) {
            await usersDb.insertOne(body);
            response.body = 'Successfully added user';
            response.statusCode = 200;
        }
    } finally {
    }
    await mongoClient.close();
    return response;
};
