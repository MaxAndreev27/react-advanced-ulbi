import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleById } from './fetchArticleById';

describe('fetchArticleById.test', () => {
    test('success', async () => {
        const data = { id: '1' };

        const thunk = new TestAsyncThunk(fetchArticleById);
        jest.mocked(thunk.api.get).mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error get article', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        jest.mocked(thunk.api.get).mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
