import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: Partial<StateSchema> = {
            loginForm: {
                username: 'admin',
                password: '1',
                isLoading: false,
                error: 'error',
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual('error');
    });
    test('should work with empty state', () => {
        const state: Partial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
