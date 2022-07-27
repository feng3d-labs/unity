import { Transform, Vector2, Vector3, Rect } from 'feng3d';

/**
 * Position, size, anchor and pivot information for a rectangle.
 *
 * RectTransforms are used for GUI but can also be used for other things. It's used to store and manipulate the position, size, and anchoring of a rectangle and supports various forms of scaling based on a parent
 *
 * Note: The Inspector changes which properties are exposed based on which anchor preset is in use. For more information see Rect Transform and Basic Layout.
 */
export class RectTransform extends Transform
{
    /**
     * The position of the pivot of this RectTransform relative to the anchor reference point.
     */
    anchoredPosition: Vector2;

    /**
     * The 3D position of the pivot of this RectTransform relative to the anchor reference point.
     */
    anchoredPosition3D: Vector3;

    /**
     * The normalized position in the parent RectTransform that the upper right corner is anchored to.
     */
    anchorMax: Vector2;

    /**
     * The normalized position in the parent RectTransform that the lower left corner is anchored to.
     */
    anchorMin: Vector2;

    /**
     * The offset of the upper right corner of the rectangle relative to the upper right anchor.
     */
    offsetMax: Vector2;

    /**
     * The offset of the lower left corner of the rectangle relative to the lower left anchor.
     */
    offsetMin: Vector2;

    /**
     * The normalized position in this RectTransform that it rotates around.
     */
    pivot: Vector2;

    /**
     * The calculated rectangle in the local space of the Transform.
     */
    rect: Rect;

    /**
     * The size of this RectTransform relative to the distances between the anchors.
     */
    sizeDelta: Vector2;

    /**
     * Force the recalculation of RectTransforms internal data.
     */
    ForceUpdateRectTransforms()
    {

    }

    /**
     * Get the corners of the calculated rectangle in the local space of its Transform.
     *
     * @param _fourCornersArray	The array that corners are filled into.
     *
     * Get the corners of the calculated rectangle in the local space of its Transform.
     *
     * Each corner provides its local space value. The returned array of 4 vertices is clockwise. It starts bottom left and rotates to top left, then top right, and finally bottom right. Note that bottom left, for example, is an (x, y, z) vector with x being left and y being bottom.
     *
     * Note: If the RectTransform is rotated in Z then the dimensions of the GetWorldCorners will not be changed.
     */
    GetLocalCorners(_fourCornersArray: Vector3[])
    {

    }

    /**
     * Get the corners of the calculated rectangle in world space.
     *
     * @param _fourCornersArray	The array that corners are filled into.
     *
     * Get the corners of the calculated rectangle in world space.
     *
     * Each corner provides its world space value. The returned array of 4 vertices is clockwise. It starts bottom left and rotates to top left, then top right, and finally bottom right. Note that bottom left, for example, is an (x, y, z) vector with x being left and y being bottom.
     *
     * Note: If the RectTransform is rotated in Z then the dimensions of the GetWorldCorners will be changed.
     */
    GetWorldCorners(_fourCornersArray: Vector3[])
    {

    }

    /**
     *
     * Set the distance of this rectangle relative to a specified edge of the parent rectangle, while also setting its size.
     *
     * Calling this method sets both the anchors, anchoredPosition, and sizeDelta, though only either the horizontal or vertical components, depending on which edge is specified for the inset.
     *
     * The method can particularly be useful when scripting layout behaviours, since it makes it simple to specify positions relative to the parent edges without needing to be concerned with anchoring functionality.
     *
     * @param _edge	The edge of the parent rectangle to inset from.
     * @param _inset	The inset distance.
     * @param _size	The size of the rectangle along the same direction of the inset.
     *
     */
    SetInsetAndSizeFromParentEdge(_edge: Edge, _inset: number, _size: number)
    {

    }

    /**
     * Makes the RectTransform calculated rect be a given size on the specified axis.
     *
     * This method produces the given size with the current anchoring. If the parent RectTransform changes size, the size of the rect may change. If the size is meant to stay, either the RectTransform anchors should be set not to stretch, or this method should be invoked again whenever the parent size changes.
     *
     * @param _axis	The axis to specify the size along.
     * @param _size	The desired size along the specified axis.
     */
    SetSizeWithCurrentAnchors(_axis: Axis, _size: number)
    {

    }
}

/**
 * Enum used to specify one edge of a rectangle.
 */
export enum Edge
{
    /**
     * The left edge.
     */
    Left,

    /**
     * The right edge.
     */
    Right,

    /**
     * The top edge.
     */
    Top,

    /**
     * The bottom edge.
     */
    Bottom,
}

/**
 * Represents the axes used in 3D space.
 */
export enum Axis
{
    /**
     * Represents the case when no axis is specified.
     */
    None,

    /**
     * Represents the X axis.
     */
    X,

    /**
     * Represents the Y axis.
     */
    Y,

    /**
     * Represents the Z axis.
     */
    Z,

}
