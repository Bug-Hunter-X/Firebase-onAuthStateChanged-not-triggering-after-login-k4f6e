# Firebase onAuthStateChanged Not Triggering After Login

This repository demonstrates an uncommon bug where Firebase's `onAuthStateChanged` listener fails to trigger after a user successfully signs in.  The issue is subtle and doesn't manifest under standard conditions.

## Bug Description

The `onAuthStateChanged` listener is expected to fire whenever the authentication state changes (user signs in, signs out, etc.). In this scenario, it works correctly for sign-out but not sign-in under specific circumstances (likely related to concurrent requests or state changes during initialization).  The provided code includes detailed comments for context and reproduction steps.

## Solution

A robust solution involves employing a more resilient approach, such as combining `onAuthStateChanged` with explicit checks for the user's signed-in status after a successful authentication attempt.