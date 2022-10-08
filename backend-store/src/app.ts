import express, { Response, Request } from 'express';

// const app = express();
// app.get('/', (req: Request, res: Response) => {
//   res.send('A');
// });
// export {};
// app.listen(3000, () => console.log('Express Server running'));

const app = () => {
    type Point = { a: number; b: number; c: number };
    type out = {
        a: number;
    };
    const testArray: Point = {
        a: 1,
        b: 2,
        c: 3,
    };

    const answer: Partial<Point> = {
        a: 2,
    };

    console.log(typeof answer);
    console.log(Object.keys(testArray));
};
app();
