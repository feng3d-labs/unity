namespace feng3d.unity
{
    /**
     * StateMachineBehaviour is a component that can be added to a state machine state. It's the base class every script on a state derives from.
     */
    export class StateMachineBehaviour
    {
        /**
         * Called on the first Update frame when making a transition to a state machine. This is not called when making a transition into a state machine sub-state.
         */
        OnStateMachineEnter

        /**
         * Called on the last Update frame when making a transition out of a StateMachine. This is not called when making a transition into a StateMachine sub-state.
         */
        OnStateMachineExit

        /**
         * Called on the first Update frame when a state machine evaluate this state.
         */
        OnStateEnter

        /**
         * Called on the last update frame when a state machine evaluate this state.
         */
        OnStateExit

        /**
         * Called right after MonoBehaviour.OnAnimatorIK.
         */
        OnStateIK

        /**
         * Called right after MonoBehaviour.OnAnimatorMove.
         */
        OnStateMove

        /**
         * Called at each Update frame except for the first and last frame.
         */
        OnStateUpdate

    }
}