import { classNames } from 'shared/lib/classNames/classNames';
import { FC, HTMLAttributes, ReactNode } from 'react';
import cls from './Paper.module.scss';

interface PaperProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
}

export const Paper = ({ className, children }: PaperProps) => (
    <div className={classNames(cls.Paper, {}, [className])}>
        {children}
    </div>
);
