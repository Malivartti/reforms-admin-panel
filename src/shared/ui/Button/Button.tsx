import { classNames } from 'shared/lib/classNames/classNames';
import {
    ButtonHTMLAttributes,
    FC,
    ReactNode,
    SVGProps,
} from 'react';
import cls from './Button.module.scss';

export const enum ThemeButton {
    CONTAINED = 'contained',
    TEXT = 'text'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    StartIcon?: FC<SVGProps<SVGElement>>;
    EndIcon?: FC<SVGProps<SVGElement>>;
    children?: ReactNode;
}

export const Button: FC<ButtonProps> = ({
    className, theme, children, StartIcon, EndIcon, ...otherProps
}) => (
    <button
        type="button"
        className={classNames(cls.Button, {}, [cls['btn-reset'], className, cls[theme]])}
        {...otherProps}
    >
        {StartIcon && <StartIcon className={cls['start-icon']} />}
        {children}
        {EndIcon && <EndIcon className={cls['end-icon']} /> }
    </button>
);
