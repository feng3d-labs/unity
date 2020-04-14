namespace feng3d.unity
{
    /**
     * Structure that represents a state in the context of its parent state machine.
     */
    export class ChildAnimatorState
    {
        /**
         * The position the the state node in the context of its parent state machine.
         */
        position: Vector3;

        /**
         * The state.
         */
        state: AnimatorState;
    }
}