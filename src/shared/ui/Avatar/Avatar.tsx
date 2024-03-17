import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
}

export const Avatar = ({ className, src, size }: AvatarProps) => (
    <div
        className={classNames(cls.Avatar, {}, [className])}
        style={{
            width: size,
            height: size,
        }}
    >
        <img src={src} alt="" />
    </div>
);
