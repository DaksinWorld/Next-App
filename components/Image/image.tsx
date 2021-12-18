import { ImageProps } from './image.props';
import styles from './image.module.css';
import cn from 'classnames';

export const Image = ({ size = 'm', children, className, ...props }: ImageProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.s]: size == 's',
				[styles.m]: size == 'm',
				[styles.l]: size == 'l',
			})}
			{...props}
		>
			{children}
		</p>
	);
};
