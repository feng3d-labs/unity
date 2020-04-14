namespace feng3d.unity
{
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
        blendingMode

        /**
         * The default blending weight that the layers has. It is not taken into account for the first layer.
         */
        defaultWeight

        /**
         * When active, the layer will have an IK pass when evaluated. It will trigger an OnAnimatorIK callback.
         */
        iKPass

        /**
         * The name of the layer.
         */
        name

        /**
         * The state machine for the layer.
         */
        stateMachine

        /**
         * When active, the layer will take control of the duration of the Synced Layer.
         */
        syncedLayerAffectsTiming

        /**
         * Specifies the index of the Synced Layer.
         */
        syncedLayerIndex


        /**
         * Gets the override behaviour list for the state on the given layer.
         */
        GetOverrideBehaviours

        /**
         * Gets the override motion for the state on the given layer.
         */
        GetOverrideMotion

        /**
         * Sets the override behaviour list for the state on the given layer.
         */
        SetOverrideBehaviours

        /**
         * Sets the override motion for the state on the given layer.
         */
        SetOverrideMotion

    }
}