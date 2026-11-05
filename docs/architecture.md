# Implementation notes

## Model

Activity is bounded to [0,100]. A simple activity-dependent baseline and small periodic variation drive the readout; a Gaussian envelope modulates a sinusoidal SVG trace. This is an interaction model, not a physiological model.

## Rendering and state

`src/signal.ts` generates deterministic illustrative values and SVG paths. `src/WearablePreview.tsx` renders the interface. `src/useReducedMotion.ts` follows the browser preference.

The interface uses ordinary React state for controls. High-frequency drawing uses refs or SVG updates rather than a server. Screenshots in this repository are actual app captures, not product mockups.

## Tradeoffs

A Drip-inspired UI experiment using fabricated sample data. It does not connect to a wearable, infer a person’s health, validate a physiological model, or provide medical advice. The Drip product source is separate.

This project favors a small, inspectable implementation. The public portfolio demo and this standalone version share their origin, but this repo owns its extracted model and test suite. No customer data or product credentials are included.

## Checks

Malformed-input handling, activity response, motion-disabled stability, and finite evolving SVG output.
