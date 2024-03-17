import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { BotItem } from '../BotItem/BotItem';
import cls from './BotsList.module.scss';
import { BotItemProps } from './model/types';

interface BotsListProps {
    className?: string;
    botItems: BotItemProps[];
}

export const BotsList = ({ className, botItems }: BotsListProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.BotsList, {}, [className])}>
            <div className={cls.head}>
                <div className={cls.head__item}>{t('Название')}</div>
                <div className={cls.head__item}>{t('База знаний')}</div>
                <div className={cls.head__item}>{t('Действия')}</div>
            </div>
       {...botItems.map((item) => (
           <BotItem {...item} />
       ))}
        </div>
    );
};
