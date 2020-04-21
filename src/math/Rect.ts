namespace feng3d.unity
{
    /**
     * A 2D Rectangle defined by X and Y position, width and height.
     * 
     * Unity uses a number of 2D coordinate spaces, most of which define X as increasing to the right, and Y increasing upwards. The one exception is in the GUI and GUILayout classes, where Y increases downwards.
     * 
     * The following examples are illustrated in GUI space, where (0,0) represents the top-left corner and Y increases downwards.
     * 
     * Rectangles can be specified in two different ways. The first is with an x and y position and a width and height:
     * 
     * The other way is with the X and Y coordinates of each of its edges. These are called xMin, xMax, yMin and yMax:
     * 
     * Note that although x and y have the same values as xMin and yMin, they behave differently when you set them. Setting x or y changes the position of the rectangle, but preserves its size:
     * 
     * 
     * Setting any of xMin, xMax, yMin and yMax will resize the rectangle, but preserve the position of the opposite edge:
     */
    export class Rect
    {
        /**
         * Shorthand for writing new Rect(0,0,0,0).
         */
        static zero = new Rect(0, 0, 0, 0);

        /**
         * The position of the center of the rectangle.
         */
        center: Vector2;

        /**
         * The height of the rectangle, measured from the Y position.
         */
        height: number;

        /**
         * The position of the maximum corner of the rectangle.
         */
        max: number;

        /**
         * The position of the minimum corner of the rectangle.
         */
        min: number;

        /**
         * The X and Y position of the rectangle.
         */
        position: number;

        /**
         * The width and height of the rectangle.
         */
        size: Vector2;

        /**
         * The width of the rectangle, measured from the X position.
         */
        width: number;

        /**
         * The X coordinate of the rectangle.
         */
        x: number;

        /**
         * The maximum X coordinate of the rectangle.
         */
        xMax: number;

        /**
         * The minimum X coordinate of the rectangle.
         */
        xMin: number;

        /**
         * The Y coordinate of the rectangle.
         */
        y: number;

        /**
         * The maximum Y coordinate of the rectangle.
         */
        yMax: number;

        /**
         * The minimum Y coordinate of the rectangle.
         */
        yMin: number;

        /**
         * Rect	Creates a new rectangle.
         * 
         * @param x	The X value the rect is measured from.
         * @param y	The Y value the rect is measured from.
         * @param width	The width of the rectangle.
         * @param height	The height of the rectangle.
         */
        constructor(x: number, y: number, width: number, height: number)
        {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }

        /**
         * Returns true if the x and y components of point is a point inside this rectangle. If allowInverse is present and true, the width and height of the Rect are allowed to take negative values (ie, the min value is greater than the max), and the test will still work.
         * 
         * @param point Point to test.
         * 
         * @returns bool True if the point lies within the specified rectangle.
         */
        Contains(point: Vector2)
        {

        }

        /**
         * Returns true if the other rectangle overlaps this one. 
         * 
         * @param other Other rectangle to test overlapping with.
         * 
         * @returns Returns true if the other rectangle overlaps this one. 
         */
        Overlaps(other: Rect)
        {

        }

        /**
         * Set components of an existing Rect.
         * 
         * @param x	The X value the rect is measured from.
         * @param y	The Y value the rect is measured from.
         * @param width	The width of the rectangle.
         * @param height	The height of the rectangle.
         */
        Set(x: number, y: number, width: number, height: number)
        {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }

        /**
         * Returns a nicely formatted string for this Rect.
         * 
         * @todo
         */
        ToString()
        {

        }

        /**
         * Creates a rectangle from min/max coordinate values.
         * 
         * @param xmin	The minimum X coordinate.
         * @param ymin	The minimum Y coordinate.
         * @param xmax	The maximum X coordinate.
         * @param ymax	The maximum Y coordinate.
         * 
         * @returns Rect A rectangle matching the specified coordinates.
         */
        static MinMaxRect(xmin: number, ymin: number, xmax: number, ymax: number)
        {
            return new Rect(xmin, ymin, xmax - xmin, ymax - ymin);
        }

        /**
         * Returns a point inside a rectangle, given normalized coordinates.
         * 
         * @param rectangle	Rectangle to get a point inside.
         * @param normalizedRectCoordinates	Normalized coordinates to get a point for.
         * 
         * @returns Returns a point inside a rectangle, given normalized coordinates.
         * 
         * The rectangle has coordinates between zero and one for the x and y axes. This function will compute the real screen coordinates and return as a Vector2.
         * 
         * @todo
         */
        static NormalizedToPoint(rectangle: Rect, normalizedRectCoordinates: Vector2)
        {

        }

        /**
         * Returns the normalized coordinates cooresponding the the point.
         * 
         * @param rectangle	Rectangle to get normalized coordinates inside.
         * @param point	A point inside the rectangle to get normalized coordinates for.
         * 
         * @returns Returns the normalized coordinates cooresponding the the point.
         * 
         * The returned Vector2 is in the range 0 to 1 with values more 1 or less than zero clamped.
         * 
         * @todo
         */
        static PointToNormalized(rectangle: Rect, point: Vector2)
        {

        }

        /**
         * Returns true if the rectangles are the same.
         */
        static equals(lhs: Rect, rhs: Rect)
        {
            if (lhs.x != rhs.x) return false;
            if (lhs.y != rhs.y) return false;
            if (lhs.width != rhs.width) return false;
            if (lhs.height != rhs.height) return false;
            return true;
        }
    }
}