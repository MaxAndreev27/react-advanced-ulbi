import type { Meta, StoryObj } from '@storybook/react';
import { AppImage } from './AppImage';
import { Theme } from '@/shared/const/theme';
import { Skeleton } from '../Skeleton';
import { Icon } from '../Icon/Icon';
import UserIcon from '@/shared/assets/icons/user-filled.svg';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof AppImage> = {
    title: 'shared/AppImage',
    component: AppImage,
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
type Story = StoryObj<typeof AppImage>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        fallback: <Skeleton width={100} height={100} border={'50%'} />,
        errorFallback: <Icon inverted Svg={UserIcon} width={100} height={100} />,
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.LIGHT}`}>
                <Story />
            </div>
        ),
    ],
};
