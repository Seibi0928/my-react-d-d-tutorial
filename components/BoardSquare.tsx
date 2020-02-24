import * as React from 'react';
import Square from './Square';
import Overlay from './Overlay';
import { ItemTypes } from './Constants';
import { moveKnight, canMoveKnight } from './Game';
import { useDrop } from 'react-dnd';

function BoardSquare({ x, y, children }: { x: number, y: number, children: JSX.Element }): JSX.Element {
    const black = (x + y) % 2 === 1;
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.KNIGHT,
        canDrop: () => canMoveKnight(x, y),
        drop: () => moveKnight(x, y),
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    });

    return (
        <div
            ref={drop}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
            }}
        >
            <Square black={black}>{children}</Square>
            {isOver && !canDrop && <Overlay color="red" />}
            {!isOver && canDrop && <Overlay color="yellow" />}
            {isOver && canDrop && <Overlay color="green" />}
        </div>);
}

export default BoardSquare;