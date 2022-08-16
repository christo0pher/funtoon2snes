import { GameStates } from "./enums";

export function isDemo(gameState) {
    return (
        [
            GameStates.TRANSITION_FROM_DEMO,
            GameStates.TRANSITION_FROM_DEMO_2,
            GameStates.PLAYING_DEMO,
            GameStates.TRANSITION_TO_DEMO,
            GameStates.TRANSITION_TO_DEMO_2,
        ].indexOf(gameState) >= 0
    );
}

export function isDeath(gameState) {
    return (
        [
            GameStates.SAMUS_DEAD,
            GameStates.SAMUS_DEAD_BLACK_OUT,
            GameStates.SAMUS_DEAD_BLACK_OUT_2,
            GameStates.SAMUS_DEAD_BEGIN_DEATH_ANIMATION,
            GameStates.SAMUS_DEAD_FLASHING,
            GameStates.SAMUS_DEAD_EXPLOSION,
            GameStates.SAMUS_DEAD_FADE_TO_BLACK,
        ].indexOf(gameState) >= 0
    );
}
