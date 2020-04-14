namespace feng3d.unity
{
    /**
     * Stores keyframe based animations.
     * 
     * AnimationClip is used by Animation to play back animations.
     */
    export class AnimationClip
    {
        /**
         * Returns true if the animation clip has no curves and no events.
         */
        get empty()
        {
            if (this.events.length > 0) return false;
            if (this._curvedata.length > 0) return false;
            return true;
        }

        /**
         * Animation Events for this animation clip.
         */
        events: AnimationEvent[] = [];

        /**
         * Frame rate at which keyframes are sampled. (Read Only)
         */
        frameRate = 60;

        /**
         * Returns true if the Animation has animation on the root transform.
         */
        hasGenericRootTransform = false;

        /**
         * Returns true if the AnimationClip has root motion curves.
         */
        hasMotionCurves = false;

        /**
         * Returns true if the AnimationClip has editor curves for its root motion.
         */
        hasMotionFloatCurves = false;

        /**
         * Returns true if the AnimationClip has root Curves.
         */
        hasRootCurves = false;

        /**
         * Returns true if the animation contains curve that drives a humanoid rig.
         */
        humanMotion = false;

        /**
         * Set to true if the AnimationClip will be used with the Legacy Animation component ( instead of the Animator ).
         */
        legacy = false;

        /**
         * Animation length in seconds. (Read Only)
         */
        get length()
        {
            var l = this._curvedata.reduce((pv, cv) =>
            {
                var animationCurve = cv.curve;
                var keys = animationCurve.keys;
                if (keys.length > 0)
                {
                    var lastkey = keys[keys.length - 1];
                    pv = Math.max(pv, lastkey.time);
                }
                return pv;
            }, 0);
            return l;
        }

        /**
         * AABB of this Animation Clip in local space of Animation component that it is attached too.
         */
        localBounds = new Bounds();

        /**
         * Sets the default wrap mode used in the animation state.
         */
        wrapMode = WrapMode.Default;

        /**
         * 曲线数据
         */
        private _curvedata: AnimationClipCurveData[] = [];

        /**
         * Adds an animation event to the clip.
         */
        AddEvent(evt: AnimationEvent)
        {
            this.events.push(evt);
        }

        /**
         * Clears all curves from the clip.
         */
        ClearCurves()
        {
            this._curvedata = [];
        }

        /**
         * Realigns quaternion keys to ensure shortest interpolation paths.
         */
        EnsureQuaternionContinuity()
        {

        }

        /**
         * Samples an animation at a given time for any animated properties.
         * 
         * @param go The animated game object.
         * @param time The time to sample an animation.
         */
        SampleAnimation(go: GameObject, time: number)
        {

        }

        /**
         * Assigns the curve to animate a specific property.
         * 
         * @param relativePath Path to the game object this curve applies to. The relativePath is formatted similar to a pathname, e.g. "root/spine/leftArm". If relativePath is empty it refers to the game object the animation clip is attached to.
         * @param type The class type of the component that is animated.
         * @param propertyName The name or path to the property being animated.
         * @param curve The animation curve.
         */
        SetCurve(relativePath: string, type: (new () => any), propertyName: string, curve: AnimationCurve)
        {
            var data = new AnimationClipCurveData();
            data.path = relativePath;
            data.type = type;
            data.propertyName = propertyName;
            data.curve = curve;
            this._curvedata.push(data)
        }

        /**
         * Retrieves all curves from a specific animation clip.
         * 
         * 等价Unity中AnimationUtility.GetAllCurves
         */
        GetAllCurves()
        {
            return this._curvedata;
        }

    }
}