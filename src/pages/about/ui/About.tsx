import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            <h1>{t('About page content')}</h1>
        </div>
    );
};

export default About;
