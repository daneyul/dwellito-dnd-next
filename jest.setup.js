require('@testing-library/jest-dom');

// jest.setup.js or the top of your test file
global.performance = global.performance || {};
global.performance.mark = jest.fn();
global.performance.measure = jest.fn();
global.console.warn = jest.fn();
global.ResizeObserver = class {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {
    // No-op
  }
  unobserve() {
    // No-op
  }
  disconnect() {
    // No-op
  }
};