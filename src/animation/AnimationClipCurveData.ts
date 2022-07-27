import { AnimationCurve } from 'feng3d';

/**
 * An AnimationClipCurveData object contains all the information needed to identify a specific curve in an AnimationClip. The curve animates a specific property of a component / material attached to a game object / animated bone.
 */
export class AnimationClipCurveData
{
    __class__: 'feng3d.unity.AnimationClipCurveData';

    /**
     * The actual animation curve.
     */
    curve: AnimationCurve;

    /**
     * The path of the game object / bone being animated.
     */
    path: string;

    /**
     * The name of the property being animated.
     */
    propertyName: string;

    /**
     * The type of the component / material being animated.
     */
    type: new () => any;
}
