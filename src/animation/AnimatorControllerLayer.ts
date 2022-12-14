import { AnimatorState } from './AnimatorState';
import { AnimatorStateMachine } from './AnimatorStateMachine';
import { AvatarMask } from './AvatarMask';
import { AnimatorLayerBlendingMode } from './enums/AnimatorLayerBlendingMode';
import { Motion } from './Motion';
import { StateMachineBehaviour } from './StateMachineBehaviour';

/**
 * The Animation Layer contains a state machine that controls animations of a model or part of it.
 */
export class AnimatorControllerLayer
{
    /**
     * The AvatarMask that is used to mask the animation on the given layer.
     */
    avatarMask: AvatarMask;

    /**
     * The blending mode used by the layer. It is not taken into account for the first layer.
     */
    blendingMode: AnimatorLayerBlendingMode;

    /**
     * The default blending weight that the layers has. It is not taken into account for the first layer.
     */
    defaultWeight: number;

    /**
     * When active, the layer will have an IK pass when evaluated. It will trigger an OnAnimatorIK callback.
     */
    iKPass: boolean;

    /**
     * The name of the layer.
     */
    name: string;

    /**
     * The state machine for the layer.
     */
    stateMachine: AnimatorStateMachine;

    /**
     * When active, the layer will take control of the duration of the Synced Layer.
     */
    syncedLayerAffectsTiming: boolean;

    /**
     * Specifies the index of the Synced Layer.
     */
    syncedLayerIndex: number;

    /**
     * Gets the override behaviour list for the state on the given layer.
     *
     * @param _state The state which we want to get the behaviour list.
     */
    GetOverrideBehaviours(_state: AnimatorState)
    {

    }

    /**
     * Gets the override motion for the state on the given layer.
     *
     * @param _state The state which we want to get the motion.
     */
    GetOverrideMotion(_state: AnimatorState)
    {

    }

    /**
     * Sets the override behaviour list for the state on the given layer.
     *
     * @param _state The state which we want to set the behaviour list.
     * @param _behaviours The behaviour list that will be set.
     */
    SetOverrideBehaviours(_state: AnimatorState, _behaviours: StateMachineBehaviour[])
    {

    }

    /**
     * Sets the override motion for the state on the given layer.
     *
     * @param _state The state which we want to set the motion.
     * @param _motion The motion that will be set.
     */
    SetOverrideMotion(_state: AnimatorState, _motion: Motion)
    {

    }
}
