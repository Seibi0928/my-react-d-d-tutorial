import * as React from 'react';
import Knight from './Knight';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import BoadSquare from './BoardSquare';

export default function Board({ knightPosition }: { knightPosition: [number, number] }): JSX.Element {
    const squares: JSX.Element[] = [];
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition));
    }
    return (
        <DndProvider backend={Backend}>
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexWrap: 'wrap'
                }}
            >
                {squares}
            </div>
        </DndProvider>
    );
}

function renderSquare(i: number, knightPosition: [number, number]): JSX.Element {
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
        <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
            <BoadSquare x={x} y={y}>
                {renderPiece(x, y, knightPosition)}
            </BoadSquare>
        </div>
    );
}

function renderPiece(x: number, y: number, [knightX, knightY]: [number, number]): JSX.Element {
    if (x === knightX && y === knightY) {
        return <Knight />
    }

    return <span></span>;
}
