import test, { describe } from "node:test";
import assert from "node:assert";
import getStickFlickLocation from "../src/utils/get-stick-flick-position";

describe('[getStickFlickPosition]', () => {
    test('should return x at 0 and y at full value if stick is completely oriented at 90 degrees north', () => {
        assert.strictEqual(getStickFlickLocation({
            angle: 90,
            intensity: 100,
        }), `0;${(2 << 16) - 1}`);
    });
});
