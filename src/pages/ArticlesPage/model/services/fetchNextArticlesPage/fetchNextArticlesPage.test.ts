import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage.test', () => {
    // test('success', async () => {
    //     const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
    //         articlesPage: {
    //             page: 2,
    //             ids: [],
    //             entities: {},
    //             view: ArticleView.SMALL,
    //             limit: 5,
    //             isLoading: false,
    //             hasMore: true,
    //             _inited: false,
    //             order: 'asc',
    //             sort: ArticleSortField.CREATED,
    //             search: '',
    //             type: ArticleType.ALL,
    //         },
    //     });
    //
    //     await thunk.callThunk();
    //
    //     expect(thunk.dispatch).toBeCalledTimes(4);
    //     expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
    // });
    test('fetchAritcleList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                view: ArticleView.SMALL,
                limit: 5,
                isLoading: false,
                hasMore: false,
                _inited: false,
                order: 'asc',
                sort: ArticleSortField.CREATED,
                search: '',
                type: ArticleType.ALL,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
