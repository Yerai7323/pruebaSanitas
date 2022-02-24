import { PaginatePipe } from './paginate.pipe';

describe('PaginatePipe', () => {
  it('Creación pipe PaginatePipe', () => {
    const pipe = new PaginatePipe();
    expect(pipe).toBeTruthy();
  }); 
});
