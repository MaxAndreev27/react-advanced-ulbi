import { StoryObj } from '@storybook/react/*';
import { Meta } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { Article } from 'entities/Article';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        // layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

const article: Article = {
    id: '1',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgyMOnjDMdB6F57Kgndh2ORUysG_HcJmaung&s',
    createdAt: '14.03.2025',
    views: 123,
    user: { id: '1', username: 'Admin' },
    blocks: [],
    type: [],
    title: 'Title',
    subtitle: 'Subtitle',
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {},
    decorators: [
        (Story) => {
            return (
                <StoreProvider>
                    <Story />
                </StoreProvider>
            );
        },
    ],
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_limit=3`,
                method: 'GET',
                status: 200,
                response: [
                    { ...article, id: '1' },
                    { ...article, id: '2' },
                    { ...article, id: '3' },
                ],
            },
        ],
    },
};
