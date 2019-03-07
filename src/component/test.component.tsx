import React from 'react';

export interface TestComponentProps {
    name: string,
    value?: string
}

export const TestComponent = (props: TestComponentProps) => {
    return (
        <div>
            <span>{props.name}</span>
            <span>{props.value}</span>
        </div>
    );
};