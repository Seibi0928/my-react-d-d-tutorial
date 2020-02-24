let knightPosition: [number, number] = [1, 7];
let observer: Function | null = null;

function emitChange(): void {
    observer!(knightPosition);
}

export function observe(o: Function) {
    if (observer !== null) {
        throw new Error('Multiple observers not implemented.');
    }

    observer = o;
    emitChange();
}

export function moveKnight(toX: number, toY: number) {
    knightPosition = [toX, toY];
    emitChange();
}

export function canMoveKnight(toX: number, toY: number): boolean {
    const [x, y] = knightPosition;
    const dx = toX - x;
    const dy = toY - y;

    return (
        (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
        (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    );
}