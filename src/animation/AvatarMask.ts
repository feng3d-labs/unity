import { Transform } from 'feng3d';
import { AvatarMaskBodyPart } from './AvatarMaskBodyPart';

/**
 * AvatarMask is used to mask out humanoid body parts and transforms.
 *
 * They can be used when importing animation or in an animator controller layer.
 */
export class AvatarMask
{
    /**
     * Number of transforms.
     */
    transformCount: number;

    /**
     * Adds a transform path into the AvatarMask.
     *
     * @param _transform The transform to add into the AvatarMask.
     * @param _recursive Whether to also add all children of the specified transform.
     */
    AddTransformPath(_transform: Transform, _recursive = true)
    {

    }

    /**
     * Returns true if the humanoid body part at the given index is active.
     *
     * @param _index The index of the humanoid body part.
     */
    GetHumanoidBodyPartActive(_index: AvatarMaskBodyPart)
    {

    }

    /**
     * Returns true if the transform at the given index is active.
     *
     * @param _index The index of the transform.
     */
    GetTransformActive(_index: number)
    {

    }

    /**
     * Returns the path of the transform at the given index.
     *
     * @param _index The index of the transform.
     */
    GetTransformPath(_index: number)
    {

    }

    /**
     * Removes a transform path from the AvatarMask.
     *
     * @param _transform The Transform that should be removed from the AvatarMask.
     * @param _recursive Whether to also remove all children of the specified transform.
     */
    RemoveTransformPath(_transform: Transform, _recursive = true)
    {

    }

    /**
     * Sets the humanoid body part at the given index to active or not.
     *
     * @param _index The index of the humanoid body part.
     * @param _value Active or not.
     */
    SetHumanoidBodyPartActive(_index: AvatarMaskBodyPart, _value: boolean)
    {

    }

    /**
     * Sets the tranform at the given index to active or not.
     *
     * @param _index The index of the transform.
     * @param _value Active or not.
     */
    SetTransformActive(_index: number, _value: boolean)
    {

    }

    /**
     * Sets the path of the transform at the given index.
     *
     * @param _index The index of the transform.
     * @param _path The path of the transform.
     */
    SetTransformPath(_index: number, _path: string)
    {

    }
}
