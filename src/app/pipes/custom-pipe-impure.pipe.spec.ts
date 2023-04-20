import { CustomPipeImpurePipe } from './custom-pipe-impure.pipe';

describe('CustomPipeImpurePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomPipeImpurePipe();
    expect(pipe).toBeTruthy();
  });
});
