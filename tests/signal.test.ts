import { test } from "node:test";
import assert from "node:assert/strict";
import { normalizeActivity, bpmFor, waveformFor } from "../src/signal.ts";
test("malformed or out-of-range inputs cannot break the demo", () => {
  assert.equal(normalizeActivity(NaN), 0);
  assert.equal(normalizeActivity(-20), 0);
  assert.equal(normalizeActivity(140), 100);
});
test("increasing simulated activity raises the baseline", () => {
  assert.ok(bpmFor(90, 0, false) > bpmFor(20, 0, false));
});
test("reduced-motion output stays constant as time advances", () => {
  assert.equal(bpmFor(40, 0, false), bpmFor(40, 100, false));
});
test("the animated trace evolves while remaining a finite SVG path", () => {
  const first = waveformFor(50, 0),
    next = waveformFor(50, 2);
  assert.notEqual(first, next);
  assert.ok(first.startsWith("M"));
  assert.equal((first.match(/L/g) || []).length, 69);
  assert.ok(!/NaN|Infinity/.test(first));
});
