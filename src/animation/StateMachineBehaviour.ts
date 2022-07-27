import { Animator } from '../core/Animator';
import { AnimatorStateInfo } from './AnimatorStateInfo';

/**
 * StateMachineBehaviour is a component that can be added to a state machine state. It's the base class every script on a state derives from.
 */
export class StateMachineBehaviour
{
    /**
     * Called on the first Update frame when making a transition to a state machine. This is not called when making a transition into a state machine sub-state.
     *
     * @param _animator The Animator playing this state machine.
     * @param _stateMachinePathHash The full path hash for this state machine.
     */
    OnStateMachineEnter(_animator: Animator, _stateMachinePathHash: number)
    {

    }

    /**
     * Called on the last Update frame when making a transition out of a StateMachine. This is not called when making a transition into a StateMachine sub-state.
     *
     * @param _animator The Animator playing this state machine.
     * @param _stateMachinePathHash The full path hash for this state machine.
     */
    OnStateMachineExit(_animator: Animator, _stateMachinePathHash: number)
    {

    }

    /**
     * Called on the first Update frame when a state machine evaluate this state.
     */
    OnStateEnter(_animator: Animator, _animatorStateInfo: AnimatorStateInfo, _layerIndex: number)
    {

    }

    /**
     * Called on the last update frame when a state machine evaluate this state.
     */
    OnStateExit(_animator: Animator, _animatorStateInfo: AnimatorStateInfo, _layerIndex: number)
    {

    }

    /**
     * Called right after MonoBehaviour.OnAnimatorIK.
     */
    OnStateIK(_animator: Animator, _animatorStateInfo: AnimatorStateInfo, _layerIndex: number)
    {

    }

    /**
     * Called right after MonoBehaviour.OnAnimatorMove.
     */
    OnStateMove(_animator: Animator, _animatorStateInfo: AnimatorStateInfo, _layerIndex: number)
    {

    }

    /**
     * Called at each Update frame except for the first and last frame.
     */
    OnStateUpdate(_animator: Animator, _animatorStateInfo: AnimatorStateInfo, _layerIndex: number)
    {

    }
}
