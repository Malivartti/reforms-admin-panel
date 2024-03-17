import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useState } from 'react';
import cls from './TextField.module.scss';

interface TextFieldProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
}

export const TextField = ({
    className, value, onChange, placeholder, ...otherProps
}: TextFieldProps) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    const [id] = useState(String(Date.now()));

    return (
        <div className={classNames(cls.TextField, {}, [className])}>
            <input
                type="text"
                value={value}
                onChange={onChangeHandler}
                id={id}
                required
                {...otherProps}
            />
            <label htmlFor={id}>
                {placeholder}
            </label>

        </div>
    );
};
