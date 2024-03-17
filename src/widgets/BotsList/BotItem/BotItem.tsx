import { classNames } from 'shared/lib/classNames/classNames';
import { Paper } from 'shared/ui/Paper/Paper';
import { Button } from 'shared/ui/Button/Button';
import AddIcon from 'shared/assets/icons/add.svg';
import RemoveIcon from 'shared/assets/icons/remove.svg';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './BotItem.module.scss';
import { BotItemProps } from '../BotsList/model/types';

export const BotItem = ({
    className, botImg, botName, baseName, baseCount,
}: BotItemProps) => (
    <Paper className={classNames(cls.BotItem, {}, [className])}>
        <div className={cls['name-part']}>
            <Avatar src={botImg} size={64} />
            <div className={cls['name-part__text']}>{botName}</div>
        </div>
        <div className={cls['base-part']}>
            <div className={cls['base-part__text']}>{baseName}</div>
            <div className={cls['base-part__count']}>
                {baseCount}
                {' '}
                вопросов
            </div>
        </div>
        <div className={cls['actions-part']}>
            <Button className={cls['actions-part__add-btn']}>
                <AddIcon />
            </Button>
            <Button className={cls['actions-part__remove-btn']}>
                <RemoveIcon fill="#000" />
            </Button>
        </div>
    </Paper>
);
