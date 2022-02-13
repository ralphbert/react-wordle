import {Button} from '../../ui/Button';

export interface BarProps {
    children?: any;
    rightContent?: any;
    leftContent?: any;
}

export function Bar(props: BarProps) {
    return (
        <div
            className="toolbar border-solid border-b gap-2 border-gray-200 p-2 mb-4 font-semibold flex items-center justify-between align-center">
            <div className="text-left">
                <div className="invisible h-0">
                    {props.rightContent}
                </div>
                {props.leftContent}
            </div>
            <div className="text-center grow">
                {props.children}
            </div>
            <div className="text-right">
                <div className="invisible h-0">
                    <Button>Test</Button>
                </div>
                {props.rightContent}
            </div>
        </div>
    );
}
