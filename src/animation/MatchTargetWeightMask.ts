import { Vector3 } from 'feng3d';

/**
 * Use this struct to specify the position and rotation weight mask for Animator.MatchTarget.
 */
export class MatchTargetWeightMask
{
    /**
     * Position XYZ weight.
     */
    positionXYZWeight: Vector3;

    /**
     * Rotation weight.
     */
    rotationWeight: number;
}
