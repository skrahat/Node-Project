import express, { Response, Request } from 'express';

// const app = express();
// app.get('/', (req: Request, res: Response) => {
//   res.send('A');
// });
// export {};
// app.listen(3000, () => console.log('Express Server running'));

const app = () => {
    const testArray = {
        a: 'a',
        b: 'b',
    };
    console.log(testArray);
    console.log(Object.keys(testArray));
};
app();
