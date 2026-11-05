/** Illustrative signals only. This is not a physiological or diagnostic model. */
export const normalizeActivity = (activity: number) =>
  Math.max(0, Math.min(100, Number.isFinite(activity) ? activity : 0));
export function bpmFor(activity: number, tick = 0, motion = true) {
  return Math.round(
    62 +
      normalizeActivity(activity) * 0.72 +
      (motion ? Math.sin(tick * 0.8) * 2 : 0),
  );
}
export function waveformFor(activity: number, tick = 0) {
  const level = normalizeActivity(activity);
  return Array.from({ length: 70 }, (_, i) => {
    const x = 10 + i * 3.7,
      envelope = Math.exp(-Math.pow((((i + tick * 2) % 22) - 11) / 3, 2)),
      y = 52 - Math.sin(i * 0.7 + tick * 0.4) * envelope * (15 + level * 0.12);
    return `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
}
