import { createNewUser } from '../../src/Api/CreateNewUser';
//jest.useFakeTimers({ legacyFakeTimers: true });

jest.setTimeout(1000000);

describe('sample test', () => {
    it('duplicate user', async () => {
        const input = {
            userID: 'ar12',
            firstName: 'skrr',
            lastName: 'rahat',
            email: 'test2@test.ca',
            password: 'test1',
            phoneNumber: 12345,
            dob: '1996-10-15',
            dateJoined: '2022-10-15',
        };
        const test = await createNewUser(input);
        expect(test.body).toBe('Duplicate user');
    });
});
