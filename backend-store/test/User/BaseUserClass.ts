import { BaseUserClass } from '../../src/User/BaseUserClass';

describe('BaseUserClass test', () => {
    beforeAll(() => {});

    afterAll(() => {
        jest.restoreAllMocks();
    });
    it('BaseUserClass test', () => {
        const baseUserClass: BaseUserClass = new BaseUserClass(
            'sk',
            'rahat',
            'test',
            'a121w13',
            2222,
            '1996-10-15'
        );
        expect(baseUserClass.lastName).toBe('rahat');
    });
});
