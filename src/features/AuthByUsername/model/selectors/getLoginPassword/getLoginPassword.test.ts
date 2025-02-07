import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return value', () => {
        const state: Partial<StateSchema> = {
            loginForm: {
                username: 'admin',
                password: '123123',
                isLoading: true,
                error: 'error',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('123123');
    });
    test('should work with empty state', () => {
        const state: Partial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
