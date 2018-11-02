import 'jest-preset-angular';

Error.stackTraceLimit = 2;

Object.defineProperty(document.body.style, 'transform', {
    value: () => {
        return {
            enumerable: true,
            configurable: true,
        };
    },
});

Object.defineProperty(window, 'matchMedia', {
    value: jest.fn(() => ({ matches: true }))
});
