// Last

type Lastsol = <T>(items: T[]) => T;

const lastsol: Lastsol = (items) => items[items.length - 1];

const lastItem = lastsol([1, 2, 3, 4, 5]);

console.log(lastItem);

// Prepend

type Prependsol = <T>(items: T[], item: T) => T[];

const prependsol: Prependsol = (items, item) =>  [item, ...items]

const items = [1, 2, 3, 4, 5];

const newItems = prependsol(items,0);

console.log(newItems)