import { Behaviour, Constructor, Quaternion, Vector3 } from 'feng3d';
import { AnimationClip } from '../animation/AnimationClip';
import { AnimatorClipInfo } from '../animation/AnimatorClipInfo';
import { AnimatorControllerParameter } from '../animation/AnimatorControllerParameter';
import { AnimatorStateInfo } from '../animation/AnimatorStateInfo';
import { AnimatorCullingMode } from '../animation/enums/AnimatorCullingMode';
import { AnimatorRecorderMode } from '../animation/enums/AnimatorRecorderMode';
import { AnimatorUpdateMode } from '../animation/enums/AnimatorUpdateMode';
import { MatchTargetWeightMask } from '../animation/MatchTargetWeightMask';
import { RuntimeAnimatorController } from '../animation/RuntimeAnimatorController';
import { StateMachineBehaviour } from '../animation/StateMachineBehaviour';
import { AvatarIKGoal } from '../enums/AvatarIKGoal';
import { AvatarIKHint } from '../enums/AvatarIKHint';
import { AvatarTarget } from '../enums/AvatarTarget';
import { HumanBodyBones } from '../enums/HumanBodyBones';
import { PlayableGraph } from '../playables/PlayableGraph';
import { Avatar } from './Avatar';

/**
 * Interface to control the Mecanim animation system.
 */
export class Animator extends Behaviour
{
    /**
     * Gets the avatar angular velocity for the last evaluated frame.
     */
    angularVelocity = new Vector3();

    /**
     * Should root motion be applied?
     */
    applyRootMotion = false;

    /**
     * Gets/Sets the current Avatar.
     */
    avatar: Avatar = null;

    /**
     * The position of the body center of mass.
     */
    bodyPosition = new Vector3();

    /**
     * The rotation of the body center of mass.
     */
    bodyRotation = new Quaternion();

    /**
     * Controls culling of this Animator component.
     */
    cullingMode = AnimatorCullingMode.AlwaysAnimate;

    /**
     * Gets the avatar delta position for the last evaluated frame.
     */
    deltaPosition = new Vector3();

    /**
     * Gets the avatar delta rotation for the last evaluated frame.
     */
    deltaRotation = new Quaternion();

    /**
     * Blends pivot point between body center of mass and feet pivot.
     */
    feetPivotActive = 1;

    /**
     * Sets whether the Animator sends events of type AnimationEvent.
     */
    fireEvents = true;

    /**
     * The current gravity weight based on current animations that are played.
     */
    gravityWeight = 0;

    /**
     * Returns true if Animator has any playables assigned to it.
     */
    hasBoundPlayables = true;

    /**
     * Returns true if the current rig has root motion.
     */
    hasRootMotion = false;

    /**
     * Returns true if the object has a transform hierarchy.
     */
    hasTransformHierarchy = true;

    /**
     * Returns the scale of the current Avatar for a humanoid rig, (1 by default if the rig is generic).
     */
    humanScale = 1;

    /**
     * Returns true if the current rig is humanoid, false if it is generic.
     */
    isHuman = false;

    /**
     * Returns whether the animator is initialized successfully.
     */
    isInitialized = false;

    /**
     * If automatic matching is active.
     */
    isMatchingTarget = false;

    /**
     * Returns true if the current rig is optimizable with AnimatorUtility.OptimizeTransformHierarchy.
     */
    isOptimizable = false;

    /**
     * Controls the behaviour of the Animator component when a GameObject is disabled.
     */
    keepAnimatorControllerStateOnDisable = false;

    /**
     * Returns the number of layers in the controller.
     */
    layerCount = 0;

    /**
     * Additional layers affects the center of mass.
     */
    layersAffectMassCenter = false;

    /**
     * Get left foot bottom height.
     */
    leftFeetBottomHeight = 0;

    /**
     * Returns the number of parameters in the controller.
     */
    parameterCount = 0;

    /**
     * The AnimatorControllerParameter list used by the animator. (Read Only)
     */
    parameters: AnimatorControllerParameter[] = [];

    /**
     * Get the current position of the pivot.
     */
    pivotPosition = new Vector3();

    /**
     * Gets the pivot weight.
     */
    pivotWeight = 0.5;

    /**
     * The PlayableGraph created by the Animator.
     */
    playableGraph = new PlayableGraph();

    /**
     * Sets the playback position in the recording buffer.
     *
     * 设置记录缓冲区中的播放位置。
     */
    playbackTime = -1;

    /**
     * Gets the mode of the Animator recorder.
     */
    recorderMode = AnimatorRecorderMode.Offline;

    /**
     * Start time of the first frame of the buffer relative to the frame at which StartRecording was called.
     */
    recorderStartTime = -1;

    /**
     * End time of the recorded clip relative to when StartRecording was called.
     */
    recorderStopTime = -1;

    /**
     * Get right foot bottom height.
     */
    rightFeetBottomHeight = 0;

    /**
     * The root position, the position of the game object.
     */
    rootPosition = new Vector3();

    /**
     * The root rotation, the rotation of the game object.
     */
    rootRotation = new Quaternion();

    /**
     * The runtime representation of AnimatorController that controls the Animator.
     */
    runtimeAnimatorController: RuntimeAnimatorController;

    /**
     * The playback speed of the Animator. 1 is normal playback speed.
     */
    speed = 1;

    /**
     * Automatic stabilization of feet during transition and blending.
     */
    stabilizeFeet = false;

    /**
     * Returns the position of the target specified by SetTarget.
     */
    targetPosition = new Vector3();

    /**
     * Returns the rotation of the target specified by SetTarget.
     */
    targetRotation = new Quaternion();

    /**
     * Specifies the update mode of the Animator.
     */
    updateMode = AnimatorUpdateMode.Normal;

    /**
     * Gets the avatar velocity for the last evaluated frame.
     */
    velocity = new Vector3();

    /**
     * 动画播放时
     */
    private _activeAnimationClip: AnimationClip;

    /**
     * 是否播放中
     */
    private _isPlaying = false;

    /**
     * Apply the default Root Motion.
     *
     * @param _stateName 	The name of the state.
     * @param _normalizedTransitionDuration The duration of the transition (normalized).
     * @param _layer The layer where the crossfade occurs.
     * @param _normalizedTimeOffset The time of the state (normalized).
     * @param _normalizedTransitionTime The time of the transition (normalized).
     */
    ApplyBuiltinRootMotion(_stateName: string, _normalizedTransitionDuration: number, _layer = -1, _normalizedTimeOffset = Number.MIN_SAFE_INTEGER, _normalizedTransitionTime = 0.0)
    {

    }

    /**
     * Creates a crossfade from the current state to any other state using normalized times.
     *
     * @param _stateName The name of the state.
     * @param _normalizedTransitionDuration The duration of the transition (in seconds).
     * @param _layer The layer where the crossfade occurs.
     * @param _normalizedTimeOffset The time of the state (in seconds).
     * @param _normalizedTransitionTime The time of the transition (normalized).
     */
    CrossFade(_stateName: string, _normalizedTransitionDuration: number, _layer = -1, _normalizedTimeOffset = Number.MIN_SAFE_INTEGER, _normalizedTransitionTime = 0.0)
    {

    }

    /**
     * Creates a crossfade from the current state to any other state using times in seconds.
     *
     * @param _stateName The name of the state.
     * @param _fixedTransitionDuration The duration of the transition (in seconds).
     * @param _layer The layer where the crossfade occurs.
     * @param _fixedTimeOffset The time of the state (in seconds).
     * @param _normalizedTransitionTime The time of the transition (normalized).
     */
    CrossFadeInFixedTime(_stateName: String, _fixedTransitionDuration: number, _layer = -1, _fixedTimeOffset = 0.0, _normalizedTransitionTime = 0.0)
    {

    }

    /**
     * Returns an AnimatorTransitionInfo with the informations on the current transition.
     *
     * @param _layerIndex The layer's index.
     */
    GetAnimatorTransitionInfo(_layerIndex: number)
    {

    }

    /**
     * Returns the first StateMachineBehaviour that matches type T or is derived from T. Returns null if none are found.
     */
    GetBehaviour<T extends StateMachineBehaviour>(_type: Constructor<T>): T
    {
        return null;
    }

    /**
     * Returns all StateMachineBehaviour that match type T or are derived from T. Returns null if none are found.
     */
    GetBehaviours<T extends StateMachineBehaviour>(_type: Constructor<T>): T[]
    {
        return null;
    }

    /**
     * Returns Transform mapped to this human bone id.
     *
     * @param _humanBoneId The human bone that is queried, see enum HumanBodyBones for a list of possible values.
     */
    GetBoneTransform(_humanBoneId: HumanBodyBones)
    {

    }

    /**
     * Returns the value of the given boolean parameter.
     *
     * @param _name The parameter name.
     */
    GetBool(_name: string)
    {
        return false;
    }

    /**
     * Returns an array of all the AnimatorClipInfo in the current state of the given layer.
     *
     * @param _layerIndex The layer index.
     */
    GetCurrentAnimatorClipInfo(_layerIndex: number): AnimatorClipInfo[]
    {
        return null;
    }

    /**
     * Returns the number of AnimatorClipInfo in the current state.
     */
    GetCurrentAnimatorClipInfoCount(_layerIndex: number)
    {
        return 0;
    }

    /**
     * Returns an AnimatorStateInfo with the information on the current state.
     */
    GetCurrentAnimatorStateInfo(_layerIndex: number): AnimatorStateInfo
    {
        return null;
    }

    /**
     * Returns the value of the given float parameter.
     */
    GetFloat(_name: string)
    {
        return 0;
    }

    /**
     * Gets the position of an IK hint.
     *
     * @param _hint The AvatarIKHint that is queried.
     *
     * @returns Vector3 Return the current position of this IK hint in world space.
     */
    GetIKHintPosition(_hint: AvatarIKHint): Vector3
    {
        return null;
    }

    /**
     * Gets the translative weight of an IK Hint (0 = at the original animation before IK, 1 = at the hint).
     *
     * @param _hint The AvatarIKHint that is queried.
     */
    GetIKHintPositionWeight(_hint: AvatarIKHint)
    {
        return 0;
    }

    /**
     * Gets the position of an IK goal.
     *
     * @param _goal The AvatarIKGoal that is queried.
     */
    GetIKPosition(_goal: AvatarIKGoal): Vector3
    {
        return null;
    }

    /**
     * Gets the translative weight of an IK goal (0 = at the original animation before IK, 1 = at the goal).
     *
     * @param _goal The AvatarIKGoal that is queried.
     */
    GetIKPositionWeight(_goal: AvatarIKGoal)
    {

    }

    /**
     * Gets the rotation of an IK goal.
     *
     * @param _goal The AvatarIKGoal that is is queried.
     */
    GetIKRotation(_goal: AvatarIKGoal)
    {

    }

    /**
     * Gets the rotational weight of an IK goal (0 = rotation before IK, 1 = rotation at the IK goal).
     *
     * @param _goal The AvatarIKGoal that is is queried.
     */
    GetIKRotationWeight(_goal: AvatarIKGoal)
    {

    }

    /**
     * Returns the value of the given integer parameter.
     *
     * @param _name The parameter name.
     */
    GetInteger(_name: string)
    {
        return 0;
    }

    /**
     * Returns the index of the layer with the given name.
     *
     * @param _layerName The layer name.
     */
    GetLayerIndex(_layerName: string)
    {

    }

    /**
     * Returns the layer name.
     *
     * @param _layerIndex The layer index.
     */
    GetLayerName(_layerIndex: number)
    {

    }

    /**
     * Returns the weight of the layer at the specified index.
     *
     * @param _layerIndex The layer index.
     */
    GetLayerWeight(_layerIndex: number)
    {

    }

    /**
     * Returns an array of all the AnimatorClipInfo in the next state of the given layer.
     *
     * @param _layerIndex The layer index.
     */
    GetNextAnimatorClipInfo(_layerIndex: number): AnimatorClipInfo[]
    {
        return null;
    }

    /**
     * Returns the number of AnimatorClipInfo in the next state.
     *
     * @param _layerIndex The layer index.
     */
    GetNextAnimatorClipInfoCount(_layerIndex: number)
    {
        return 0;
    }

    /**
     * Returns an AnimatorStateInfo with the information on the next state.
     *
     * @param _layerIndex The layer index.
     */
    GetNextAnimatorStateInfo(_layerIndex: number): AnimatorStateInfo
    {
        return null;
    }

    /**
     * See AnimatorController.parameters.
     */
    GetParameter(_index: number): AnimatorControllerParameter
    {
        return null;
    }

    /**
     * Returns true if the state exists in this layer, false otherwise.
     *
     * @param _layerIndex The layer index.
     * @param _stateID The state ID.
     */
    HasState(_layerIndex: number, _stateID: number)
    {
        return false;
    }

    /**
     * Interrupts the automatic target matching.
     *
     * CompleteMatch will make the gameobject match the target completely at the next frame.
     */
    InterruptMatchTarget(_completeMatch = true)
    {

    }

    /**
     * Returns true if there is a transition on the given layer, false otherwise.
     *
     * @param _layerIndex The layer index.
     */
    IsInTransition(_layerIndex: number)
    {

    }

    /**
     * Returns true if the parameter is controlled by a curve, false otherwise.
     *
     * @param _name The parameter name.
     *
     * @returns True if the parameter is controlled by a curve, false otherwise.
     */
    IsParameterControlledByCurve(_name: string)
    {

    }

    /**
     * Automatically adjust the GameObject position and rotation.
     *
     * @param _matchPosition The position we want the body part to reach.
     * @param _matchRotation The rotation in which we want the body part to be.
     * @param _targetBodyPart The body part that is involved in the match.
     * @param _weightMask Structure that contains weights for matching position and rotation.
     * @param _startNormalizedTime Start time within the animation clip (0 - beginning of clip, 1 - end of clip).
     * @param _targetNormalizedTime End time within the animation clip (0 - beginning of clip, 1 - end of clip), values greater than 1 can be set to trigger a match after a certain number of loops. Ex: 2.3 means at 30% of 2nd loop.
     */
    MatchTarget(_matchPosition: Vector3, _matchRotation: Quaternion, _targetBodyPart: AvatarTarget, _weightMask: MatchTargetWeightMask, _startNormalizedTime: number, _targetNormalizedTime = 1)
    {

    }

    /**
     * Plays a state.
     *
     * @param stateName The state name.
     * @param _layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
     * @param _normalizedTime The time offset between zero and one.
     */
    Play(stateName: string, _layer = -1, _normalizedTime = Number.MIN_SAFE_INTEGER)
    {
        if (!this.runtimeAnimatorController) return;

        const animationClip = this.runtimeAnimatorController.animationClips.filter((v) => v.name === stateName)[0];
        if (!animationClip) return;

        this._activeAnimationClip = animationClip;

        this.StartPlayback();
    }

    /**
     * Plays a state.
     *
     * @param _stateName The state name.
     * @param _layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
     * @param _fixedTime The time offset (in seconds).
     */
    PlayInFixedTime(_stateName: string, _layer = -1, _fixedTime = Number.MIN_SAFE_INTEGER)
    {

    }

    /**
     * 每帧执行
     *
     * Evaluates the animator based on deltaTime.
     */
    update(deltaTime?: number)
    {
        if (!this._isPlaying) return;

        this.playbackTime += deltaTime / 1000 * this.speed;

        if (this._activeAnimationClip)
        {
            this._activeAnimationClip.SampleAnimation(this.gameObject, this.playbackTime);
        }
    }

    /**
     * Rebind all the animated properties and mesh data with the Animator.
     */
    Rebind()
    {

    }

    /**
     * Resets the value of the given trigger parameter.
     *
     * @param _name The parameter name.
     */
    ResetTrigger(_name: string)
    {

    }

    /**
     * Sets local rotation of a human bone during a IK pass.
     *
     * @param _humanBoneId The human bone Id.
     * @param _rotation The local rotation.
     */
    SetBoneLocalRotation(_humanBoneId: HumanBodyBones, _rotation: Quaternion)
    {

    }

    /**
     * Sets the value of the given boolean parameter.
     *
     * @param _name The parameter name.
     * @param _value The new parameter value.
     */
    SetBool(_name: string, _value: boolean)
    {

    }

    /**
     * Send float values to the Animator to affect transitions.
     *
     * @param _name The parameter name.
     * @param _value The new parameter value.
     * @param _dampTime The damper total time.
     * @param _deltaTime The delta time to give to the damper.
     */
    SetFloat(_name: string, _value: number, _dampTime: number, _deltaTime: number)
    {

    }

    /**
     * Sets the position of an IK hint.
     *
     * @param _hint The AvatarIKHint that is set.
     * @param _hintPosition The position in world space.
     */
    SetIKHintPosition(_hint: AvatarIKHint, _hintPosition: Vector3)
    {

    }

    /**
     * Sets the translative weight of an IK hint (0 = at the original animation before IK, 1 = at the hint).
     *
     * @param _hint The AvatarIKHint that is set.
     * @param _value The translative weight.
     */
    SetIKHintPositionWeight(_hint: AvatarIKHint, _value: number)
    {

    }

    /**
     * Sets the position of an IK goal.
     *
     * @param _goal The AvatarIKGoal that is set.
     * @param _goalPosition The position in world space.
     */
    SetIKPosition(_goal: AvatarIKGoal, _goalPosition: Vector3)
    {

    }

    /**
     * Sets the translative weight of an IK goal (0 = at the original animation before IK, 1 = at the goal).
     *
     * @param _goal The AvatarIKGoal that is set.
     * @param _value The translative weight.
     */
    SetIKPositionWeight(_goal: AvatarIKGoal, _value: number)
    {

    }

    /**
     * Sets the rotation of an IK goal.
     *
     * @param _goal The AvatarIKGoal that is set.
     * @param _goalRotation The rotation in world space.
     */
    SetIKRotation(_goal: AvatarIKGoal, _goalRotation: Quaternion)
    {

    }

    /**
     * Sets the rotational weight of an IK goal (0 = rotation before IK, 1 = rotation at the IK goal).
     *
     * @param _goal The AvatarIKGoal that is set.
     * @param _value The rotational weight.
     */
    SetIKRotationWeight(_goal: AvatarIKGoal, _value: number)
    {

    }

    /**
     * Sets the value of the given integer parameter.
     *
     * @param _name The parameter name.
     * @param _value The new parameter value.
     */
    SetInteger(_name: string, _value: number)
    {

    }

    /**
     * Sets the weight of the layer at the given index.
     *
     * @param _layerIndex The layer index.
     * @param _weight The new layer weight.
     */
    SetLayerWeight(_layerIndex: number, _weight: number)
    {

    }

    /**
     * Sets the look at position.
     *
     * @param _lookAtPosition The position to lookAt.
     */
    SetLookAtPosition(_lookAtPosition: Vector3)
    {

    }

    /**
     * Set look at weights.
     *
     * @param _weight (0-1) the global weight of the LookAt, multiplier for other parameters.
     * @param _bodyWeight (0-1) determines how much the body is involved in the LookAt.
     * @param _headWeight (0-1) determines how much the head is involved in the LookAt.
     * @param _eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
     * @param _clampWeight (0-1) 0.0 means the character is completely unrestrained in motion, 1.0 means he's completely clamped (look at becomes impossible), and 0.5 means he'll be able to move on half of the possible range (180 degrees).
     */
    SetLookAtWeight(_weight: number, _bodyWeight = 0.0, _headWeight = 1.0, _eyesWeight = 0.0, _clampWeight = 0.5)
    {

    }

    /**
     * Sets an AvatarTarget and a targetNormalizedTime for the current state.
     *
     * @param _targetIndex The avatar body part that is queried.
     * @param _targetNormalizedTime The current state Time that is queried.
     */
    SetTarget(_targetIndex: AvatarTarget, _targetNormalizedTime: number)
    {

    }

    /**
     * Sets the value of the given trigger parameter.
     *
     * @param _name The parameter name.
     */
    SetTrigger(_name: string)
    {

    }

    /**
     * Sets the animator in playback mode.
     */
    StartPlayback()
    {
        this._isPlaying = true;
    }

    /**
     * Sets the animator in recording mode, and allocates a circular buffer of size frameCount.
     *
     * @param _frameCount The number of frames (updates) that will be recorded. If frameCount is 0, the recording will continue until the user calls StopRecording. The maximum value for frameCount is 10000.
     */
    StartRecording(_frameCount: number)
    {

    }

    /**
     * Stops the animator playback mode. When playback stops, the avatar resumes getting control from game logic.
     */
    StopPlayback()
    {
        this._isPlaying = false;
    }

    /**
     * Stops animator record mode.
     */
    StopRecording()
    {

    }

    /**
     * Forces a write of the default values stored in the animator.
     */
    WriteDefaultValues()
    {

    }

    /**
     * Generates an parameter id from a string.
     */
    static StringToHash(_name: string)
    {

    }
}
