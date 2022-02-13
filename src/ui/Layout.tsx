export interface LayoutProps {
    header?: any;
    main?: any;
    footer?: any;
    children?: any;
}

export function Layout(props: LayoutProps) {
    return (
        <div className="flex flex-col h-screen">
            <header className="flex-initial">{props.header}</header>
            <main className="flex-1">{props.main}</main>
            <footer className="flex-initial">
                <div className="px-2 py-2">
                    {props.footer}
                </div>
            </footer>
        </div>
    );
}
