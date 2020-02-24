import * as React from 'react';

function Overlay({ color }: { color: string }): JSX.Element {
    return <div
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            background: color
        }}
    />;
}

export default Overlay;