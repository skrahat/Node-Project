import { ICustomerUserClass } from '../User/type';
// import lodash from 'lodash';
import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
import Ajv from 'ajv';
import { schema, IResponse } from './type';
//import { ObjectId } from 'mongodb';
dotenv.config();

export const createNewUser = async (
    body: ICustomerUserClass
): Promise<IResponse> => {
    //const uri = process.env.NEXT_PUBLIC_URI;
    const uri =
        'mongodb+srv://dev:devmongodb@projecthermesdev.cdmsiyp.mongodb.net/?retryWrites=true&w=majority';

    let response = {
        header: '',
        body: '',
        statusCode: 500,
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
        const usersPool = await db.collection('Users');
        const currentUser = {
            //_id: new ObjectId(body.email),
            email: body.email,
            password: body.password,
        };

        const duplicate = await usersPool.findOne({ email: body.email });

        if (!duplicate) {
            console.log('duplicate pass');
            await usersPool.insertOne(currentUser);
            const usersInfo = await db.collection('UserInfo');
            await usersInfo.insertOne(body);

            response.body = 'Successfully added user';
            response.statusCode = 200;
        } else {
            response.body = 'Duplicate user';
            response.statusCode = 409;
        }
        await mongoClient.close();
    } catch (err) {
        console.log(`could not execute createNewUser: ${err}`);
        response.body = `internal error`;
    }

    return response;
};
