namespace feng3d.unity
{
    /**
     * Base class for animator transitions. Transitions define when and how the state machine switches from one state to another.
     * 
     * A transition happens when all its conditions are met.
     */
    export class AnimatorTransitionBase
    {
        /**
         * AnimatorCondition conditions that need to be met for a transition to happen.
         */
        conditions

        /**
         * The destination state of the transition.
         */
        destinationState

        /**
         * The destination state machine of the transition.
         */
        destinationStateMachine

        /**
         * Is the transition destination the exit of the current state machine.
         */
        isExit

        /**
         * Mutes the transition. The transition will never occur.
         */
        mute

        /**
         * Mutes all other transitions in the source state.
         */
        solo

        /**
         * Utility function to add a condition to a transition.
         */
        AddCondition

        /**
         * Utility function to remove a condition from the transition.
         */
        RemoveCondition

    }
}