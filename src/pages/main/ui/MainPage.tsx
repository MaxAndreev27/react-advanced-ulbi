import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            <h1>{t('Main page content')}</h1>
            <Counter />
        </div>
    );
};

export default MainPage;
