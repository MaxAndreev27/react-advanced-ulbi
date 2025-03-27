import type { Meta, StoryObj } from '@storybook/react';
import { ArticleList } from './ArticleList';
import { Article } from '../../model/types/article';
import { ArticleBlockType, ArticleType, ArticleView } from '../../model/consts/articleConsts';
import { Theme } from '@/shared/const/theme';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ArticleList> = {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
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
type Story = StoryObj<typeof ArticleList>;

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    user: {
        id: '1',
        username: 'John',
        avatar: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    },
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
    ],
} as Article;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LoadingBig: Story = {
    args: {
        articles: [],
        isLoading: true,
        view: ArticleView.BIG,
    },
    decorators: [
        (Story) => {
            return (
                <div className={`app ${Theme.LIGHT}`}>
                    <Story />
                </div>
            );
        },
    ],
};

export const LoadingSmall: Story = {
    args: {
        articles: [],
        isLoading: true,
        view: ArticleView.SMALL,
    },
    decorators: [
        (Story) => {
            return (
                <div className={`app ${Theme.LIGHT}`}>
                    <Story />
                </div>
            );
        },
    ],
};

export const ListSmall: Story = {
    args: {
        articles: new Array(9).fill(0).map((item, index) => ({
            ...article,
            id: String(index),
        })),
        isLoading: false,
        view: ArticleView.SMALL,
    },
    decorators: [
        (Story) => {
            return (
                <div className={`app ${Theme.LIGHT}`}>
                    <Story />
                </div>
            );
        },
    ],
};

export const ListBig: Story = {
    args: {
        articles: new Array(9).fill(0).map((item, index) => ({
            ...article,
            id: String(index),
        })),
        isLoading: false,
        view: ArticleView.BIG,
    },
    decorators: [
        (Story) => {
            return (
                <div className={`app ${Theme.LIGHT}`}>
                    <Story />
                </div>
            );
        },
    ],
};
