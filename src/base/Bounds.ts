import { Box3 } from 'feng3d';

/**
 * Represents an axis aligned bounding box.
 *
 * An axis-aligned bounding box, or AABB for short, is a box aligned with coordinate axes and fully enclosing some object. Because the box is never rotated with respect to the axes, it can be defined by just its center and extents, or alternatively by min and max points.
 *
 * Bounds is used by Collider.bounds, Mesh.bounds and Renderer.bounds.
 */
export class Bounds extends Box3
{

}
