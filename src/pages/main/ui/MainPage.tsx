import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page data-testid="MainPage">
            <h1>{t('Main page content')}</h1>
            <Counter />
        </Page>
    );
};

export default MainPage;
