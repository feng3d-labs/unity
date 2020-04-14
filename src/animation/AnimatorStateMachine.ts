namespace feng3d.unity
{
    /**
     * A graph controlling the interaction of states. Each state references a motion.
     */
    export class AnimatorStateMachine
    {

        /**
         * The position of the AnyState node.
         */
        anyStatePosition: Vector3;

        /**
         * The list of AnyState transitions.
         */
        anyStateTransitions: AnimatorStateTransition[];

        /**
         * The Behaviour list assigned to this state machine.
         */
        behaviours: StateMachineBehaviour[];

        /**
         * The state that the state machine will be in when it starts.
         */
        defaultState: AnimatorState;

        /**
         * The position of the entry node.
         */
        entryPosition: Vector3;

        /**
         * The list of entry transitions in the state machine.
         */
        entryTransitions: AnimatorTransition[];

        /**
         * The position of the exit node.
         */
        exitPosition

        /**
         * The position of the parent state machine node.Only valid when in a hierachic state machine.
         */
        parentStateMachinePosition

        /**
         * The list of sub state machines.
         */
        stateMachines

        /**
         * The list of states.
         */
        states

    }
}