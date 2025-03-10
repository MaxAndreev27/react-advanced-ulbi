import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page>
            <h1>{t('About page content')}</h1>
        </Page>
    );
};

export default AboutPage;
