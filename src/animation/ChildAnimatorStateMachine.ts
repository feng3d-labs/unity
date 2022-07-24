import { Vector3 } from 'feng3d';
import { AnimatorStateMachine } from './AnimatorStateMachine';

/**
 * Structure that represents a state machine in the context of its parent state machine.
 */
export class ChildAnimatorStateMachine
{
    /**
     * The position the the state machine node in the context of its parent state machine.
     */
    position: Vector3;

    /**
     * The state machine.
     */
    stateMachine: AnimatorStateMachine;
}
