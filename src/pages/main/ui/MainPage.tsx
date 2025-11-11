import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page data-testid="MainPage">
            <h1>{t('Main page content')}</h1>
            <h2>For test login:</h2>
            <h2>admin 123</h2>
            <h2>user 123</h2>
            <h2>manager 123</h2>
            <h2>testuser 123</h2>
        </Page>
    );
};

export default MainPage;
