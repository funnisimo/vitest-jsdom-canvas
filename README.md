# vitest-jsdom-canvas

A minimal repository to recreate an error in vitest+jsdom+canvas.

Running `npm test` gives the following error:

```
DEV  v1.5.0 /Users/sean/Projects/gw/vitest-jsdom-canvas

stderr | b.spec.js > Canvas > a
Error: Not implemented: HTMLCanvasElement.prototype.getContext (without installing the canvas npm package)
    at module.exports (/Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/jsdom/lib/jsdom/browser/not-implemented.js:9:17)
    at HTMLCanvasElementImpl.getContext (/Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/jsdom/lib/jsdom/living/nodes/HTMLCanvasElement-impl.js:42:5)
    at HTMLCanvasElement.getContext (/Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/jsdom/lib/jsdom/living/generated/HTMLCanvasElement.js:131:58)
    at /Users/sean/Projects/gw/vitest-jsdom-canvas/b.spec.js:8:24
    at file:///Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/@vitest/runner/dist/index.js:135:14
    at file:///Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/@vitest/runner/dist/index.js:60:26
    at runTest (file:///Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/@vitest/runner/dist/index.js:761:17)
    at runSuite (file:///Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/@vitest/runner/dist/index.js:889:15)
    at runSuite (file:///Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/@vitest/runner/dist/index.js:889:15)
    at runFiles (file:///Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/@vitest/runner/dist/index.js:938:5) undefined

stderr | b.spec.js > Canvas > b
Error: Not implemented: HTMLCanvasElement.prototype.getContext (without installing the canvas npm package)
    at module.exports (/Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/jsdom/lib/jsdom/browser/not-implemented.js:9:17)
    at HTMLCanvasElementImpl.getContext (/Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/jsdom/lib/jsdom/living/nodes/HTMLCanvasElement-impl.js:42:5)
    at HTMLCanvasElement.getContext (/Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/jsdom/lib/jsdom/living/generated/HTMLCanvasElement.js:131:58)
    at /Users/sean/Projects/gw/vitest-jsdom-canvas/b.spec.js:16:24
    at file:///Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/@vitest/runner/dist/index.js:135:14
    at file:///Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/@vitest/runner/dist/index.js:60:26
    at runTest (file:///Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/@vitest/runner/dist/index.js:761:17)
    at runSuite (file:///Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/@vitest/runner/dist/index.js:889:15)
    at runSuite (file:///Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/@vitest/runner/dist/index.js:889:15)
    at runFiles (file:///Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/@vitest/runner/dist/index.js:938:5) undefined

stderr | b.spec.js > Canvas > c
Error: Not implemented: HTMLCanvasElement.prototype.getContext (without installing the canvas npm package)
    at module.exports (/Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/jsdom/lib/jsdom/browser/not-implemented.js:9:17)
    at HTMLCanvasElementImpl.getContext (/Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/jsdom/lib/jsdom/living/nodes/HTMLCanvasElement-impl.js:42:5)
    at HTMLCanvasElement.getContext (/Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/jsdom/lib/jsdom/living/generated/HTMLCanvasElement.js:131:58)
    at /Users/sean/Projects/gw/vitest-jsdom-canvas/b.spec.js:24:24
    at file:///Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/@vitest/runner/dist/index.js:135:14
    at file:///Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/@vitest/runner/dist/index.js:60:26
    at runTest (file:///Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/@vitest/runner/dist/index.js:761:17)
    at runSuite (file:///Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/@vitest/runner/dist/index.js:889:15)
    at runSuite (file:///Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/@vitest/runner/dist/index.js:889:15)
    at runFiles (file:///Users/sean/Projects/gw/vitest-jsdom-canvas/node_modules/@vitest/runner/dist/index.js:938:5) undefined

 ✓ a.spec.js (3)
 ❯ b.spec.js (3)
   ❯ Canvas (3)
     × a
     × b
     × c

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 3 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  b.spec.js > Canvas > a
AssertionError: expected null not to be null
 ❯ b.spec.js:9:21
      7|
      8|     const ctx = canvas.getContext("2d");
      9|     expect(ctx).not.toBeNull();
       |                     ^
     10|   });
     11|

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/3]⎯

 FAIL  b.spec.js > Canvas > b
AssertionError: expected null not to be null
 ❯ b.spec.js:17:21
     15|
     16|     const ctx = canvas.getContext("2d");
     17|     expect(ctx).not.toBeNull();
       |                     ^
     18|   });
     19|

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/3]⎯

 FAIL  b.spec.js > Canvas > c
AssertionError: expected null not to be null
 ❯ b.spec.js:25:21
     23|
     24|     const ctx = canvas.getContext("2d");
     25|     expect(ctx).not.toBeNull();
       |                     ^
     26|   });
     27| });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/3]⎯

 Test Files  1 failed | 1 passed (2)
      Tests  3 failed | 3 passed (6)
   Start at  03:16:17
   Duration  329ms (transform 17ms, setup 0ms, collect 16ms, tests 38ms, environment 367ms, prepare 73ms)

```

But running each test individually works fine...

```
% npm test a

> vitest-canvas@1.0.0 test
> vitest a

The CJS build of Vite's Node API is deprecated. See https://vitejs.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.

 DEV  v1.5.0 /Users/sean/Projects/gw/vitest-jsdom-canvas

 ✓ a.spec.js (3)
   ✓ Canvas (3)
     ✓ a
     ✓ b
     ✓ c

 Test Files  1 passed (1)
      Tests  3 passed (3)
   Start at  03:18:22
   Duration  321ms (transform 13ms, setup 0ms, collect 7ms, tests 30ms, environment 177ms, prepare 36ms)
```

```
% npm test b

> vitest-canvas@1.0.0 test
> vitest b

The CJS build of Vite's Node API is deprecated. See https://vitejs.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.

 DEV  v1.5.0 /Users/sean/Projects/gw/vitest-jsdom-canvas

 ✓ b.spec.js (3)
   ✓ Canvas (3)
     ✓ a
     ✓ b
     ✓ c

 Test Files  1 passed (1)
      Tests  3 passed (3)
   Start at  03:18:39
   Duration  305ms (transform 12ms, setup 0ms, collect 7ms, tests 29ms, environment 169ms, prepare 32ms)
```

NOTE: It also works to run+fail and then use `p` to run each test set individually.
