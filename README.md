# Firebase onAuthStateChanged Inconsistency Bug

This repository demonstrates a bug where the Firebase `onAuthStateChanged` listener does not consistently trigger when the user's authentication state changes (sign-in or sign-out).  The listener is properly attached, yet the callback function remains unresponsive to authentication state shifts.

## Bug Description
The `onAuthStateChanged` function is expected to call its callback whenever the user's authentication status alters. However, in this scenario, despite a clear change in authentication, the callback remains inactive.

## Bug Reproduction
1. Clone this repository.
2. Install dependencies: `npm install firebase`
3. Configure Firebase (replace placeholders with your project's config).
4. Run the application. Observe that authentication status changes do not trigger the listener.

## Solution
The solution involves ensuring the listener is correctly attached and that no other parts of the code interfere with the authentication process or the listener's execution.  Additionally, proper cleanup using the unsubscribe function is essential.