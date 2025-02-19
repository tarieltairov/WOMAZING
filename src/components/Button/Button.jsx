import btnStyle from "./Button.module.scss"

export function Button({ type, variant, children, className }) {
    const style = variant === 'outlined' ? `${btnStyle.outlined} ${btnStyle.btn} ${className}` : `${btnStyle.filled} ${btnStyle.btn} ${className}`;

    return (
        <button className={style}>
            {children}
        </button>
    )
}