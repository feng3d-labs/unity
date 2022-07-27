import { Vector3 } from 'feng3d';
import { AnimatorState } from './AnimatorState';

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
