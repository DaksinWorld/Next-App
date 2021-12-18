import {PaProps} from "./p-props";
import styles from './p.module.css';
import cn from 'classnames';


export const P = ({size, children, ...props}: PaProps): JSX.Element => {
    return (
        <p className={cn(styles.p, {
        [styles.big]: size == 'big',
        [styles.medium]: size == 'medium',
        [styles.small]: size == 'small',
        })}
           {...props}
        >
            {children}
        </p>
    );
};
