import { createNewUser } from '../../src/Api/CreateNewUser';
//jest.useFakeTimers({ legacyFakeTimers: true });

jest.setTimeout(1000000);

describe('sample test', () => {
    it('test one', async () => {
        const input = {
            userID: 'ar12',
            firstName: 'sk',
            lastName: 'rahat',
            email: 'test@test.ca',
            id: '123',
            password: 'test',
            phoneNumber: 12345,
            dob: '1996-10-15',
            dateJoined: '2022-10-15',
        };
        const test = await createNewUser(input);
        expect(test.body).toBe('Success');
    });
});
