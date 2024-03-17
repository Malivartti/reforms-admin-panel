import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Paper } from 'shared/ui/Paper/Paper';
import { TextField } from 'shared/ui/TextField/TextField';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './AccountPage.module.scss';

const AccountPage = () => {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <Paper className={cls.AccountPage}>
            <div className={cls.part}>
                {t('Основные сведения')}
            </div>
            <div className={cls.part}>
                <Avatar size={110} className={cls.avatar} />
                <div className={cls.field}>
                    <TextField
                        value={name}
                        onChange={(value) => setName(value)}
                        placeholder={t('Имя Фамилия')}
                        className={cls.input}
                    />
                    <Button theme={ThemeButton.TEXT}>{t('Изменить')}</Button>
                </div>
                <div className={cls.field}>
                    <TextField
                        value={email}
                        onChange={(value) => setEmail(value)}
                        placeholder={t('Почта')}
                        className={cls.input}
                    />
                    <Button theme={ThemeButton.TEXT}>{t('Изменить')}</Button>
                </div>
            </div>
        </Paper>
    );
};

export default AccountPage;
