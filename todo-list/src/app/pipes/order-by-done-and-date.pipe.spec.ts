import { OrderByDoneAndDatePipe } from './order-by-done-and-date.pipe';

describe('OrderByDoneAndDatePipe', () => {
    it('create an instance', () => {
        // FIXME: need a parameter for the pipe
        const pipe = new OrderByDoneAndDatePipe(null);
        expect(pipe).toBeTruthy();
    });
});
