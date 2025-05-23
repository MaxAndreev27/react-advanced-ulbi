import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AdminPanelPage = () => {
    const { t } = useTranslation('about');

    return <Page data-testid="AdminPanelPage">{t('Adminpanel')}</Page>;
};

export default AdminPanelPage;
