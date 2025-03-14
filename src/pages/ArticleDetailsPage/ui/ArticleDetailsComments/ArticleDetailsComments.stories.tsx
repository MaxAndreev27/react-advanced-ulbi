import { StoryObj } from '@storybook/react/*';
import { ArticleDetailsComments } from './ArticleDetailsComments';
import { StoreProvider } from 'app/providers/StoreProvider';
import { Theme } from 'app/providers/ThemeProvider';
import { Meta } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ArticleDetailsComments> = {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
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
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsComments>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
    args: { id: '1' },
    decorators: [
        (Story) => {
            return (
                <StoreProvider>
                    <div className={`app ${Theme.LIGHT}`}>
                        <Story />
                    </div>
                </StoreProvider>
            );
        },
    ],
};
