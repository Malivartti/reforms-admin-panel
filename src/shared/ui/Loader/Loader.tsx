import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

export const enum ThemeLoader {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface LoaderProps {
    className?: string;
    theme?: ThemeLoader;
}

export const Loader = ({ className, theme }: LoaderProps) => (
    <div className={classNames(cls['lds-ring'], {}, [className, cls[theme]])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
