const nowSpy = jest.fn();

global.performance = {
  ...global.performance,
  now: nowSpy
}

import { Timer } from "./timer";

describe("TimerSpecs", () => {

  let timer: Timer;

  describe("given the class is initialized", () => {
    beforeEach(() => {
      timer = new Timer();
    });
    describe("when i start it", () => {
      beforeEach(() => {
        timer.start();
      });
      it("should call the underlying method", () => {
        expect(nowSpy).toHaveBeenCalled();
        expect(nowSpy).toHaveBeenCalledWith();
        expect(nowSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
