export interface ButtonProps {
    onClick?: (e: any) => void;
    children: any;
    className?: string;
    variant?: 'default' | 'success';
}

const variants = {
    default: 'text-white bg-slate-600 hover:bg-slate-500 active:bg-slate-400 ',
    success: 'text-white text-xl px-3 py-1 bg-lime-600 active:text-white hover:bg-lime-500 active:bg-lime-400 ',
};

export function Button(props: ButtonProps) {
    const {children, className, variant = 'default', ...other} = props;
    const classes = className + ' ' +
        'border-0 ' +
        'rounded ' +
        'px-2 py-1 ' +
        variants[variant];

    return (
        <button {...other} className={classes}>{children}</button>
    )
}
