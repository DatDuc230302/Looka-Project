import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    outline = false,
    primary = false,
    rounded = false,
    text = false,
    disable = false,
    small = false,
    large = false,
    medium = false,
    smallMixMedium = false,
    black,
    textCustom,
    children,
    custom,
    leftIcon,
    rightIcon,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    //Remove event listener when btn is disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        textCustom,
        large,
        text,
        custom,
        smallMixMedium,
        medium,
        black,
        disable,
        rounded,
    });

    return (
        <Comp className={classes} {...props}>
            <span className={leftIcon || rightIcon ? 'flex items-center' : ''}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span className={cx('title')}>{children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </span>
        </Comp>
    );
}

export default Button;
