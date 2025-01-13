import { useTranslation } from 'react-i18next';

const Main = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            <h1>{t('Main page content')}</h1>
        </div>
    );
};

export default Main;
