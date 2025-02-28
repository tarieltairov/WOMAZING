import btnStyle from './Button.module.scss';

export function Button({ type, variant, children, className = '', onClick }) {
  const style =
    variant === 'outlined'
      ? `${btnStyle.outlined} ${btnStyle.btn} ${className}`
      : `${btnStyle.filled} ${btnStyle.btn} ${className}`;

  return (
    <button className={style} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
