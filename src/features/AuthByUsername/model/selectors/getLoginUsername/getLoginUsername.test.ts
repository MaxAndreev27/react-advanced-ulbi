import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return value', () => {
        const state: Partial<StateSchema> = {
            loginForm: {
                username: '123123',
                password: '123123',
                isLoading: true,
                error: 'error',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('123123');
    });
    test('should work with empty state', () => {
        const state: Partial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
