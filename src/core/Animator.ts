namespace feng3d.unity
{
    export class Animator
    {

        /**
         * Gets the avatar angular velocity for the last evaluated frame.
         */
        angularVelocity: Vector3;

        /**
         * Should root motion be applied?
         */
        applyRootMotion: boolean;

        /**
         * Gets/Sets the current Avatar.
         */
        avatar: Avatar;

        /**
         * The position of the body center of mass.
         */
        bodyPosition: Vector3;

        /**
         * The rotation of the body center of mass.
         */
        bodyRotation: Quaternion;

        /**
         * Controls culling of this Animator component.
         */
        cullingMode: AnimatorCullingMode;

        /**
         * Gets the avatar delta position for the last evaluated frame.
         */
        deltaPosition: Vector3;

        /**
         * Gets the avatar delta rotation for the last evaluated frame.
         */
        deltaRotation: Quaternion;

        /**
         * Blends pivot point between body center of mass and feet pivot.
         */
        feetPivotActive: number;

        /**
         * Sets whether the Animator sends events of type AnimationEvent.
         */
        fireEvents: boolean;

        /**
         * The current gravity weight based on current animations that are played.
         */
        gravityWeight: number;

        /**
         * Returns true if Animator has any playables assigned to it.
         */
        hasBoundPlayables: boolean;

        /**
         * Returns true if the current rig has root motion.
         */
        hasRootMotion: boolean;

        /**
         * Returns true if the object has a transform hierarchy.
         */
        hasTransformHierarchy: boolean;

        /**
         * Returns the scale of the current Avatar for a humanoid rig, (1 by default if the rig is generic).
         */
        humanScale: number;

        /**
         * Returns true if the current rig is humanoid, false if it is generic.
         */
        isHuman: boolean;

        /**
         * Returns whether the animator is initialized successfully.
         */
        isInitialized: boolean;

        /**
         * If automatic matching is active.
         */
        isMatchingTarget: boolean;

        /**
         * Returns true if the current rig is optimizable with AnimatorUtility.OptimizeTransformHierarchy.
         */
        isOptimizable: boolean;

        /**
         * Controls the behaviour of the Animator component when a GameObject is disabled.
         */
        keepAnimatorControllerStateOnDisable: boolean;

        /**
         * Returns the number of layers in the controller.
         */
        layerCount: number;

        /**
         * Additional layers affects the center of mass.
         */
        layersAffectMassCenter: boolean;

        /**
         * Get left foot bottom height.
         */
        leftFeetBottomHeight: number;

        /**
         * Returns the number of parameters in the controller.
         */
        parameterCount: number;

        /**
         * The AnimatorControllerParameter list used by the animator. (Read Only)
         */
        parameters: AnimatorControllerParameter[];

        /**
         * Get the current position of the pivot.
         */
        pivotPosition: Vector3;

        /**
         * Gets the pivot weight.
         */
        pivotWeight: number;

        /**
         * The PlayableGraph created by the Animator.
         */
        playableGraph: PlayableGraph;

        /**
         * Sets the playback position in the recording buffer.
         */
        playbackTime: number;

        /**
         * Gets the mode of the Animator recorder.
         */
        recorderMode: AnimatorRecorderMode;

        /**
         * Start time of the first frame of the buffer relative to the frame at which StartRecording was called.
         */
        recorderStartTime: number;

        /**
         * End time of the recorded clip relative to when StartRecording was called.
         */
        recorderStopTime: number;

        /**
         * Get right foot bottom height.
         */
        rightFeetBottomHeight: number;

        /**
         * The root position, the position of the game object.
         */
        rootPosition: Vector3;

        /**
         * The root rotation, the rotation of the game object.
         */
        rootRotation: Quaternion;

        /**
         * The runtime representation of AnimatorController that controls the Animator.
         */
        runtimeAnimatorController: RuntimeAnimatorController;

        /**
         * The playback speed of the Animator. 1 is normal playback speed.
         */
        speed: number;

        /**
         * Automatic stabilization of feet during transition and blending.
         */
        stabilizeFeet: boolean;

        /**
         * Returns the position of the target specified by SetTarget.
         */
        targetPosition: Vector3;

        /**
         * Returns the rotation of the target specified by SetTarget.
         */
        targetRotation: Quaternion;

        /**
         * Specifies the update mode of the Animator.
         */
        updateMode: AnimatorUpdateMode;

        /**
         * Gets the avatar velocity for the last evaluated frame.
         */
        velocity: Vector3;

        /**
         * Apply the default Root Motion.
         * 
         * @param stateName 	The name of the state.
         * @param normalizedTransitionDuration The duration of the transition (normalized).
         * @param layer The layer where the crossfade occurs.
         * @param normalizedTimeOffset The time of the state (normalized).
         * @param normalizedTransitionTime The time of the transition (normalized).
         */
        ApplyBuiltinRootMotion(stateName: string, normalizedTransitionDuration: number, layer = -1, normalizedTimeOffset = Number.MIN_SAFE_INTEGER, normalizedTransitionTime = 0.0)
        {

        }

        /**
         * Creates a crossfade from the current state to any other state using normalized times.
         * 
         * @param stateName The name of the state.
         * @param normalizedTransitionDuration The duration of the transition (in seconds).
         * @param layer The layer where the crossfade occurs.
         * @param normalizedTimeOffset The time of the state (in seconds).
         * @param normalizedTransitionTime The time of the transition (normalized).
         */
        CrossFade(stateName: string, normalizedTransitionDuration: number, layer = -1, normalizedTimeOffset = Number.MIN_SAFE_INTEGER, normalizedTransitionTime = 0.0)
        {

        }

        /**
         * Creates a crossfade from the current state to any other state using times in seconds.
         * 
         * @param stateName The name of the state.
         * @param fixedTransitionDuration The duration of the transition (in seconds).
         * @param layer The layer where the crossfade occurs.
         * @param fixedTimeOffset The time of the state (in seconds).
         * @param normalizedTransitionTime The time of the transition (normalized).
         */
        CrossFadeInFixedTime(stateName: String, fixedTransitionDuration: number, layer = -1, fixedTimeOffset = 0.0, normalizedTransitionTime = 0.0)
        {

        }

        /**
         * Returns an AnimatorTransitionInfo with the informations on the current transition.
         * 
         * @param layerIndex The layer's index.
         */
        GetAnimatorTransitionInfo(layerIndex: number)
        {

        }

        /**
         * Returns the first StateMachineBehaviour that matches type T or is derived from T. Returns null if none are found.
         */
        GetBehaviour<T extends StateMachineBehaviour>(type: Constructor<T>): T
        {
            return null;
        }

        /**
         * Returns all StateMachineBehaviour that match type T or are derived from T. Returns null if none are found.
         */
        GetBehaviours<T extends StateMachineBehaviour>(type: Constructor<T>): T[]
        {
            return null;
        }

        /**
         * Returns Transform mapped to this human bone id.
         * 
         * @param humanBoneId The human bone that is queried, see enum HumanBodyBones for a list of possible values.
         */
        GetBoneTransform(humanBoneId: HumanBodyBones)
        {

        }

        /**
         * Returns the value of the given boolean parameter.
         * 
         * @param name The parameter name.
         */
        GetBool(name: string)
        {
            return false;
        }

        /**
         * Returns an array of all the AnimatorClipInfo in the current state of the given layer.
         * 
         * @param layerIndex The layer index.
         */
        GetCurrentAnimatorClipInfo(layerIndex: number): AnimatorClipInfo[]
        {
            return null;
        }

        /**
         * Returns the number of AnimatorClipInfo in the current state.
         */
        GetCurrentAnimatorClipInfoCount(layerIndex: number)
        {
            return 0;
        }

        /**
         * Returns an AnimatorStateInfo with the information on the current state.
         */
        GetCurrentAnimatorStateInfo(layerIndex: number): AnimatorStateInfo
        {
            return null;
        }

        /**
         * Returns the value of the given float parameter.
         */
        GetFloat(name: string)
        {
            return 0;
        }

        /**
         * Gets the position of an IK hint.
         * 
         * @param hint The AvatarIKHint that is queried.
         * 
         * @returns Vector3 Return the current position of this IK hint in world space.
         */
        GetIKHintPosition(hint: AvatarIKHint): Vector3
        {
            return null;
        }

        /**
         * Gets the translative weight of an IK Hint (0 = at the original animation before IK, 1 = at the hint).
         * 
         * @param hint The AvatarIKHint that is queried.
         */
        GetIKHintPositionWeight(hint: AvatarIKHint)
        {
            return 0;
        }

        /**
         * Gets the position of an IK goal.
         * 
         * @param goal The AvatarIKGoal that is queried.
         */
        GetIKPosition(goal: AvatarIKGoal): Vector3
        {
            return null;
        }

        /**
         * Gets the translative weight of an IK goal (0 = at the original animation before IK, 1 = at the goal).
         */
        GetIKPositionWeight

        /**
         * Gets the rotation of an IK goal.
         */
        GetIKRotation

        /**
         * Gets the rotational weight of an IK goal (0 = rotation before IK, 1 = rotation at the IK goal).
         */
        GetIKRotationWeight

        /**
         * Returns the value of the given integer parameter.
         */
        GetInteger

        /**
         * Returns the index of the layer with the given name.
         */
        GetLayerIndex

        /**
         * Returns the layer name.
         */
        GetLayerName

        /**
         * Returns the weight of the layer at the specified index.
         */
        GetLayerWeight

        /**
         * Returns an array of all the AnimatorClipInfo in the next state of the given layer.
         */
        GetNextAnimatorClipInfo

        /**
         * Returns the number of AnimatorClipInfo in the next state.
         */
        GetNextAnimatorClipInfoCount

        /**
         * Returns an AnimatorStateInfo with the information on the next state.
         */
        GetNextAnimatorStateInfo

        /**
         * See AnimatorController.parameters.
         */
        GetParameter

        /**
         * Returns true if the state exists in this layer, false otherwise.
         */
        HasState

        /**
         * Interrupts the automatic target matching.
         */
        InterruptMatchTarget

        /**
         * Returns true if there is a transition on the given layer, false otherwise.
         */
        IsInTransition

        /**
         * Returns true if the parameter is controlled by a curve, false otherwise.
         */
        IsParameterControlledByCurve

        /**
         * Automatically adjust the GameObject position and rotation.
         */
        MatchTarget

        /**
         * Plays a state.
         */
        Play

        /**
         * Plays a state.
         */
        PlayInFixedTime

        /**
         * Rebind all the animated properties and mesh data with the Animator.
         */
        Rebind

        /**
         * Resets the value of the given trigger parameter.
         */
        ResetTrigger

        /**
         * Sets local rotation of a human bone during a IK pass.
         */
        SetBoneLocalRotation

        /**
         * Sets the value of the given boolean parameter.
         */
        SetBool

        /**
         * Send float values to the Animator to affect transitions.
         */
        SetFloat

        /**
         * Sets the position of an IK hint.
         */
        SetIKHintPosition

        /**
         * Sets the translative weight of an IK hint (0 = at the original animation before IK, 1 = at the hint).
         */
        SetIKHintPositionWeight

        /**
         * Sets the position of an IK goal.
         */
        SetIKPosition

        /**
         * Sets the translative weight of an IK goal (0 = at the original animation before IK, 1 = at the goal).
         */
        SetIKPositionWeight

        /**
         * Sets the rotation of an IK goal.
         */
        SetIKRotation

        /**
         * Sets the rotational weight of an IK goal (0 = rotation before IK, 1 = rotation at the IK goal).
         */
        SetIKRotationWeight

        /**
         * Sets the value of the given integer parameter.
         */
        SetInteger

        /**
         * Sets the weight of the layer at the given index.
         */
        SetLayerWeight

        /**
         * Sets the look at position.
         */
        SetLookAtPosition

        /**
         * Set look at weights.
         */
        SetLookAtWeight

        /**
         * Sets an AvatarTarget and a targetNormalizedTime for the current state.
         */
        SetTarget

        /**
         * Sets the value of the given trigger parameter.
         */
        SetTrigger

        /**
         * Sets the animator in playback mode.
         */
        StartPlayback

        /**
         * Sets the animator in recording mode, and allocates a circular buffer of size frameCount.
         */
        StartRecording

        /**
         * Stops the animator playback mode. When playback stops, the avatar resumes getting control from game logic.
         */
        StopPlayback

        /**
         * Stops animator record mode.
         */
        StopRecording

        /**
         * Evaluates the animator based on deltaTime.
         */
        Update

        /**
         * Forces a write of the default values stored in the animator.
         */
        WriteDefaultValues

        /**
         * Generates an parameter id from a string.
         */
        static StringToHash(name: string)
        {

        }
    }
}