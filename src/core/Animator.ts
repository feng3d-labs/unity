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
        playbackTime

        /**
         * Gets the mode of the Animator recorder.
         */
        recorderMode

        /**
         * Start time of the first frame of the buffer relative to the frame at which StartRecording was called.
         */
        recorderStartTime

        /**
         * End time of the recorded clip relative to when StartRecording was called.
         */
        recorderStopTime

        /**
         * Get right foot bottom height.
         */
        rightFeetBottomHeight

        /**
         * The root position, the position of the game object.
         */
        rootPosition

        /**
         * The root rotation, the rotation of the game object.
         */
        rootRotation

        /**
         * The runtime representation of AnimatorController that controls the Animator.
         */
        runtimeAnimatorController

        /**
         * The playback speed of the Animator. 1 is normal playback speed.
         */
        speed

        /**
         * Automatic stabilization of feet during transition and blending.
         */
        stabilizeFeet

        /**
         * Returns the position of the target specified by SetTarget.
         */
        targetPosition

        /**
         * Returns the rotation of the target specified by SetTarget.
         */
        targetRotation

        /**
         * Specifies the update mode of the Animator.
         */
        updateMode

        /**
         * Gets the avatar velocity for the last evaluated frame.
         */
        velocity
    }
}