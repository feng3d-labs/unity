var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
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
        var Rect = /** @class */ (function () {
            /**
             * Rect	Creates a new rectangle.
             *
             * @param x	The X value the rect is measured from.
             * @param y	The Y value the rect is measured from.
             * @param width	The width of the rectangle.
             * @param height	The height of the rectangle.
             */
            function Rect(x, y, width, height) {
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
            Rect.prototype.Contains = function (point) {
            };
            /**
             * Returns true if the other rectangle overlaps this one.
             *
             * @param other Other rectangle to test overlapping with.
             *
             * @returns Returns true if the other rectangle overlaps this one.
             */
            Rect.prototype.Overlaps = function (other) {
            };
            /**
             * Set components of an existing Rect.
             *
             * @param x	The X value the rect is measured from.
             * @param y	The Y value the rect is measured from.
             * @param width	The width of the rectangle.
             * @param height	The height of the rectangle.
             */
            Rect.prototype.Set = function (x, y, width, height) {
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
            };
            /**
             * Returns a nicely formatted string for this Rect.
             *
             * @todo
             */
            Rect.prototype.ToString = function () {
            };
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
            Rect.MinMaxRect = function (xmin, ymin, xmax, ymax) {
                return new Rect(xmin, ymin, xmax - xmin, ymax - ymin);
            };
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
            Rect.NormalizedToPoint = function (rectangle, normalizedRectCoordinates) {
            };
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
            Rect.PointToNormalized = function (rectangle, point) {
            };
            /**
             * Returns true if the rectangles are the same.
             */
            Rect.equals = function (lhs, rhs) {
                if (lhs.x != rhs.x)
                    return false;
                if (lhs.y != rhs.y)
                    return false;
                if (lhs.width != rhs.width)
                    return false;
                if (lhs.height != rhs.height)
                    return false;
                return true;
            };
            /**
             * Shorthand for writing new Rect(0,0,0,0).
             */
            Rect.zero = new Rect(0, 0, 0, 0);
            return Rect;
        }());
        unity.Rect = Rect;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * Target.
         *
         * See Also: Animator.SetTarget and Animator.MatchTarget.
         */
        var AvatarTarget;
        (function (AvatarTarget) {
            /**
             * The root, the position of the game object.
             */
            AvatarTarget[AvatarTarget["Root"] = 0] = "Root";
            /**
             * The body, center of mass.
             */
            AvatarTarget[AvatarTarget["Body"] = 1] = "Body";
            /**
             * The left foot.
             */
            AvatarTarget[AvatarTarget["LeftFoot"] = 2] = "LeftFoot";
            /**
             * The right foot.
             */
            AvatarTarget[AvatarTarget["RightFoot"] = 3] = "RightFoot";
            /**
             * The left hand.
             */
            AvatarTarget[AvatarTarget["LeftHand"] = 4] = "LeftHand";
            /**
             * The right hand.
             */
            AvatarTarget[AvatarTarget["RightHand"] = 5] = "RightHand";
        })(AvatarTarget = unity.AvatarTarget || (unity.AvatarTarget = {}));
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * IK Hint.
         *
         * Used to set and get IK weights and position. See Also: Animator.GetIKHintPosition, Animator.GetIKHintPositionWeight, Animator.SetIKHintPosition, and Animator.SetIKHintPositionWeight.
         */
        var AvatarIKHint;
        (function (AvatarIKHint) {
            /**
             * The left knee IK hint.
             */
            AvatarIKHint[AvatarIKHint["LeftKnee"] = 0] = "LeftKnee";
            /**
             * The right knee IK hint.
             */
            AvatarIKHint[AvatarIKHint["RightKnee"] = 1] = "RightKnee";
            /**
             * The left elbow IK hint.
             */
            AvatarIKHint[AvatarIKHint["LeftElbow"] = 2] = "LeftElbow";
            /**
             * The right elbow IK hint.
             */
            AvatarIKHint[AvatarIKHint["RightElbow"] = 3] = "RightElbow";
        })(AvatarIKHint = unity.AvatarIKHint || (unity.AvatarIKHint = {}));
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * IK Goal.
         *
         * Used to set and get IK weights, position and rotation. See Also: Animator.SetIKPosition, Animator.SetIKPositionWeight, Animator.SetIKRotation and Animator.SetIKRotationWeight.
         */
        var AvatarIKGoal;
        (function (AvatarIKGoal) {
            /**
             * The left foot.
             */
            AvatarIKGoal[AvatarIKGoal["LeftFoot"] = 0] = "LeftFoot";
            /**
             * The right foot.
             */
            AvatarIKGoal[AvatarIKGoal["RightFoot"] = 1] = "RightFoot";
            /**
             * The left hand.
             */
            AvatarIKGoal[AvatarIKGoal["LeftHand"] = 2] = "LeftHand";
            /**
             * The right hand.
             */
            AvatarIKGoal[AvatarIKGoal["RightHand"] = 3] = "RightHand";
        })(AvatarIKGoal = unity.AvatarIKGoal || (unity.AvatarIKGoal = {}));
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * Human Body Bones.
         */
        var HumanBodyBones;
        (function (HumanBodyBones) {
            /**
             * This is the Hips bone.
             */
            HumanBodyBones[HumanBodyBones["Hips"] = 0] = "Hips";
            /**
             * This is the Left Upper Leg bone.
             */
            HumanBodyBones[HumanBodyBones["LeftUpperLeg"] = 1] = "LeftUpperLeg";
            /**
             * This is the Right Upper Leg bone.
             */
            HumanBodyBones[HumanBodyBones["RightUpperLeg"] = 2] = "RightUpperLeg";
            /**
             * This is the Left Knee bone.
             */
            HumanBodyBones[HumanBodyBones["LeftLowerLeg"] = 3] = "LeftLowerLeg";
            /**
             * This is the Right Knee bone.
             */
            HumanBodyBones[HumanBodyBones["RightLowerLeg"] = 4] = "RightLowerLeg";
            /**
             * This is the Left Ankle bone.
             */
            HumanBodyBones[HumanBodyBones["LeftFoot"] = 5] = "LeftFoot";
            /**
             * This is the Right Ankle bone.
             */
            HumanBodyBones[HumanBodyBones["RightFoot"] = 6] = "RightFoot";
            /**
             * This is the first Spine bone.
             */
            HumanBodyBones[HumanBodyBones["Spine"] = 7] = "Spine";
            /**
             * This is the Chest bone.
             */
            HumanBodyBones[HumanBodyBones["Chest"] = 8] = "Chest";
            /**
             * This is the Upper Chest bone.
             */
            HumanBodyBones[HumanBodyBones["UpperChest"] = 9] = "UpperChest";
            /**
             * This is the Neck bone.
             */
            HumanBodyBones[HumanBodyBones["Neck"] = 10] = "Neck";
            /**
             * This is the Head bone.
             */
            HumanBodyBones[HumanBodyBones["Head"] = 11] = "Head";
            /**
             * This is the Left Shoulder bone.
             */
            HumanBodyBones[HumanBodyBones["LeftShoulder"] = 12] = "LeftShoulder";
            /**
             * This is the Right Shoulder bone.
             */
            HumanBodyBones[HumanBodyBones["RightShoulder"] = 13] = "RightShoulder";
            /**
             * This is the Left Upper Arm bone.
             */
            HumanBodyBones[HumanBodyBones["LeftUpperArm"] = 14] = "LeftUpperArm";
            /**
             * This is the Right Upper Arm bone.
             */
            HumanBodyBones[HumanBodyBones["RightUpperArm"] = 15] = "RightUpperArm";
            /**
             * This is the Left Elbow bone.
             */
            HumanBodyBones[HumanBodyBones["LeftLowerArm"] = 16] = "LeftLowerArm";
            /**
             * This is the Right Elbow bone.
             */
            HumanBodyBones[HumanBodyBones["RightLowerArm"] = 17] = "RightLowerArm";
            /**
             * This is the Left Wrist bone.
             */
            HumanBodyBones[HumanBodyBones["LeftHand"] = 18] = "LeftHand";
            /**
             * This is the Right Wrist bone.
             */
            HumanBodyBones[HumanBodyBones["RightHand"] = 19] = "RightHand";
            /**
             * This is the Left Toes bone.
             */
            HumanBodyBones[HumanBodyBones["LeftToes"] = 20] = "LeftToes";
            /**
             * This is the Right Toes bone.
             */
            HumanBodyBones[HumanBodyBones["RightToes"] = 21] = "RightToes";
            /**
             * This is the Left Eye bone.
             */
            HumanBodyBones[HumanBodyBones["LeftEye"] = 22] = "LeftEye";
            /**
             * This is the Right Eye bone.
             */
            HumanBodyBones[HumanBodyBones["RightEye"] = 23] = "RightEye";
            /**
             * This is the Jaw bone.
             */
            HumanBodyBones[HumanBodyBones["Jaw"] = 24] = "Jaw";
            /**
             * This is the left thumb 1st phalange.
             */
            HumanBodyBones[HumanBodyBones["LeftThumbProximal"] = 25] = "LeftThumbProximal";
            /**
             * This is the left thumb 2nd phalange.
             */
            HumanBodyBones[HumanBodyBones["LeftThumbIntermediate"] = 26] = "LeftThumbIntermediate";
            /**
             * This is the left thumb 3rd phalange.
             */
            HumanBodyBones[HumanBodyBones["LeftThumbDistal"] = 27] = "LeftThumbDistal";
            /**
             * This is the left index 1st phalange.
             */
            HumanBodyBones[HumanBodyBones["LeftIndexProximal"] = 28] = "LeftIndexProximal";
            /**
             * This is the left index 2nd phalange.
             */
            HumanBodyBones[HumanBodyBones["LeftIndexIntermediate"] = 29] = "LeftIndexIntermediate";
            /**
             * This is the left index 3rd phalange.
             */
            HumanBodyBones[HumanBodyBones["LeftIndexDistal"] = 30] = "LeftIndexDistal";
            /**
             * This is the left middle 1st phalange.
             */
            HumanBodyBones[HumanBodyBones["LeftMiddleProximal"] = 31] = "LeftMiddleProximal";
            /**
             * This is the left middle 2nd phalange.
             */
            HumanBodyBones[HumanBodyBones["LeftMiddleIntermediate"] = 32] = "LeftMiddleIntermediate";
            /**
             * This is the left middle 3rd phalange.
             */
            HumanBodyBones[HumanBodyBones["LeftMiddleDistal"] = 33] = "LeftMiddleDistal";
            /**
             * This is the left ring 1st phalange.
             */
            HumanBodyBones[HumanBodyBones["LeftRingProximal"] = 34] = "LeftRingProximal";
            /**
             * This is the left ring 2nd phalange.
             */
            HumanBodyBones[HumanBodyBones["LeftRingIntermediate"] = 35] = "LeftRingIntermediate";
            /**
             * This is the left ring 3rd phalange.
             */
            HumanBodyBones[HumanBodyBones["LeftRingDistal"] = 36] = "LeftRingDistal";
            /**
             * This is the left little 1st phalange.
             */
            HumanBodyBones[HumanBodyBones["LeftLittleProximal"] = 37] = "LeftLittleProximal";
            /**
             * This is the left little 2nd phalange.
             */
            HumanBodyBones[HumanBodyBones["LeftLittleIntermediate"] = 38] = "LeftLittleIntermediate";
            /**
             * This is the left little 3rd phalange.
             */
            HumanBodyBones[HumanBodyBones["LeftLittleDistal"] = 39] = "LeftLittleDistal";
            /**
             * This is the right thumb 1st phalange.
             */
            HumanBodyBones[HumanBodyBones["RightThumbProximal"] = 40] = "RightThumbProximal";
            /**
             * This is the right thumb 2nd phalange.
             */
            HumanBodyBones[HumanBodyBones["RightThumbIntermediate"] = 41] = "RightThumbIntermediate";
            /**
             * This is the right thumb 3rd phalange.
             */
            HumanBodyBones[HumanBodyBones["RightThumbDistal"] = 42] = "RightThumbDistal";
            /**
             * This is the right index 1st phalange.
             */
            HumanBodyBones[HumanBodyBones["RightIndexProximal"] = 43] = "RightIndexProximal";
            /**
             * This is the right index 2nd phalange.
             */
            HumanBodyBones[HumanBodyBones["RightIndexIntermediate"] = 44] = "RightIndexIntermediate";
            /**
             * This is the right index 3rd phalange.
             */
            HumanBodyBones[HumanBodyBones["RightIndexDistal"] = 45] = "RightIndexDistal";
            /**
             * This is the right middle 1st phalange.
             */
            HumanBodyBones[HumanBodyBones["RightMiddleProximal"] = 46] = "RightMiddleProximal";
            /**
             * This is the right middle 2nd phalange.
             */
            HumanBodyBones[HumanBodyBones["RightMiddleIntermediate"] = 47] = "RightMiddleIntermediate";
            /**
             * This is the right middle 3rd phalange.
             */
            HumanBodyBones[HumanBodyBones["RightMiddleDistal"] = 48] = "RightMiddleDistal";
            /**
             * This is the right ring 1st phalange.
             */
            HumanBodyBones[HumanBodyBones["RightRingProximal"] = 49] = "RightRingProximal";
            /**
             * This is the right ring 2nd phalange.
             */
            HumanBodyBones[HumanBodyBones["RightRingIntermediate"] = 50] = "RightRingIntermediate";
            /**
             * This is the right ring 3rd phalange.
             */
            HumanBodyBones[HumanBodyBones["RightRingDistal"] = 51] = "RightRingDistal";
            /**
             * This is the right little 1st phalange.
             */
            HumanBodyBones[HumanBodyBones["RightLittleProximal"] = 52] = "RightLittleProximal";
            /**
             * This is the right little 2nd phalange.
             */
            HumanBodyBones[HumanBodyBones["RightLittleIntermediate"] = 53] = "RightLittleIntermediate";
            /**
             * This is the right little 3rd phalange.
             */
            HumanBodyBones[HumanBodyBones["RightLittleDistal"] = 54] = "RightLittleDistal";
            /**
             * This is the Last bone index delimiter.
             */
            HumanBodyBones[HumanBodyBones["LastBone"] = 55] = "LastBone";
        })(HumanBodyBones = unity.HumanBodyBones || (unity.HumanBodyBones = {}));
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * Options for how to send a message.
         *
         * This is used by SendMessage & BroadcastMessage in GameObject & Component.
         */
        var SendMessageOptions;
        (function (SendMessageOptions) {
            /**
             * A receiver is required for SendMessage.
             */
            SendMessageOptions[SendMessageOptions["RequireReceiver"] = 0] = "RequireReceiver";
            /**
             * No receiver is required for SendMessage.
             */
            SendMessageOptions[SendMessageOptions["DontRequireReceiver"] = 1] = "DontRequireReceiver";
        })(SendMessageOptions = unity.SendMessageOptions || (unity.SendMessageOptions = {}));
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * Represents an axis aligned bounding box.
         *
         * An axis-aligned bounding box, or AABB for short, is a box aligned with coordinate axes and fully enclosing some object. Because the box is never rotated with respect to the axes, it can be defined by just its center and extents, or alternatively by min and max points.
         *
         * Bounds is used by Collider.bounds, Mesh.bounds and Renderer.bounds.
         */
        var Bounds = /** @class */ (function (_super) {
            __extends(Bounds, _super);
            function Bounds() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Bounds;
        }(feng3d.Box3));
        unity.Bounds = Bounds;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * Position, size, anchor and pivot information for a rectangle.
         *
         * RectTransforms are used for GUI but can also be used for other things. It's used to store and manipulate the position, size, and anchoring of a rectangle and supports various forms of scaling based on a parent RectTransform.
         *
         * Note: The Inspector changes which properties are exposed based on which anchor preset is in use. For more information see Rect Transform and Basic Layout.
         */
        var RectTransform = /** @class */ (function (_super) {
            __extends(RectTransform, _super);
            function RectTransform() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * Force the recalculation of RectTransforms internal data.
             */
            RectTransform.prototype.ForceUpdateRectTransforms = function () {
            };
            /**
             * Get the corners of the calculated rectangle in the local space of its Transform.
             *
             * @param fourCornersArray	The array that corners are filled into.
             *
             * Get the corners of the calculated rectangle in the local space of its Transform.
             *
             * Each corner provides its local space value. The returned array of 4 vertices is clockwise. It starts bottom left and rotates to top left, then top right, and finally bottom right. Note that bottom left, for example, is an (x, y, z) vector with x being left and y being bottom.
             *
             * Note: If the RectTransform is rotated in Z then the dimensions of the GetWorldCorners will not be changed.
             */
            RectTransform.prototype.GetLocalCorners = function (fourCornersArray) {
            };
            /**
             * Get the corners of the calculated rectangle in world space.
             *
             * @param fourCornersArray	The array that corners are filled into.
             *
             * Get the corners of the calculated rectangle in world space.
             *
             * Each corner provides its world space value. The returned array of 4 vertices is clockwise. It starts bottom left and rotates to top left, then top right, and finally bottom right. Note that bottom left, for example, is an (x, y, z) vector with x being left and y being bottom.
             *
             * Note: If the RectTransform is rotated in Z then the dimensions of the GetWorldCorners will be changed.
             */
            RectTransform.prototype.GetWorldCorners = function (fourCornersArray) {
            };
            /**
             *
             * Set the distance of this rectangle relative to a specified edge of the parent rectangle, while also setting its size.
             *
             * Calling this method sets both the anchors, anchoredPosition, and sizeDelta, though only either the horizontal or vertical components, depending on which edge is specified for the inset.
             *
             * The method can particularly be useful when scripting layout behaviours, since it makes it simple to specify positions relative to the parent edges without needing to be concerned with anchoring functionality.
             *
             * @param edge	The edge of the parent rectangle to inset from.
             * @param inset	The inset distance.
             * @param size	The size of the rectangle along the same direction of the inset.
             *
             */
            RectTransform.prototype.SetInsetAndSizeFromParentEdge = function (edge, inset, size) {
            };
            /**
             * Makes the RectTransform calculated rect be a given size on the specified axis.
             *
             * This method produces the given size with the current anchoring. If the parent RectTransform changes size, the size of the rect may change. If the size is meant to stay, either the RectTransform anchors should be set not to stretch, or this method should be invoked again whenever the parent size changes.
             *
             * @param axis	The axis to specify the size along.
             * @param size	The desired size along the specified axis.
             */
            RectTransform.prototype.SetSizeWithCurrentAnchors = function (axis, size) {
            };
            return RectTransform;
        }(feng3d.Transform));
        unity.RectTransform = RectTransform;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
(function (feng3d) {
    var unity;
    (function (unity) {
        var RectTransform;
        (function (RectTransform) {
            /**
             * Enum used to specify one edge of a rectangle.
             */
            var Edge;
            (function (Edge) {
                /**
                 * The left edge.
                 */
                Edge[Edge["Left"] = 0] = "Left";
                /**
                 * The right edge.
                 */
                Edge[Edge["Right"] = 1] = "Right";
                /**
                 * The top edge.
                 */
                Edge[Edge["Top"] = 2] = "Top";
                /**
                 * The bottom edge.
                 */
                Edge[Edge["Bottom"] = 3] = "Bottom";
            })(Edge = RectTransform.Edge || (RectTransform.Edge = {}));
            /**
             * Represents the axes used in 3D space.
             */
            var Axis;
            (function (Axis) {
                /**
                 * Represents the case when no axis is specified.
                 */
                Axis[Axis["None"] = 0] = "None";
                /**
                 * Represents the X axis.
                 */
                Axis[Axis["X"] = 1] = "X";
                /**
                 * Represents the Y axis.
                 */
                Axis[Axis["Y"] = 2] = "Y";
                /**
                 * Represents the Z axis.
                 */
                Axis[Axis["Z"] = 3] = "Z";
            })(Axis = RectTransform.Axis || (RectTransform.Axis = {}));
        })(RectTransform = unity.RectTransform || (unity.RectTransform = {}));
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * Skinning bone weights of a vertex in the mesh.
         *
         * Each vertex is skinned with up to four bones. All weights should sum up to one. Weights and bone indices should be defined in the order of decreasing weight. If a vertex is affected by less than four bones, the remaining weights should be zeroes.
         */
        var BoneWeight = /** @class */ (function () {
            function BoneWeight() {
            }
            return BoneWeight;
        }());
        unity.BoneWeight = BoneWeight;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * 网格数据
         */
        var Mesh = /** @class */ (function () {
            function Mesh() {
            }
            Object.defineProperty(Mesh.prototype, "vertexCount", {
                /**
                 * Returns the number of vertices in the Mesh (Read Only).
                 */
                get: function () {
                    if (!this.vertices)
                        return 0;
                    return this.vertices.length;
                },
                enumerable: true,
                configurable: true
            });
            return Mesh;
        }());
        unity.Mesh = Mesh;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * Avatar definition.
         */
        var Avatar = /** @class */ (function () {
            function Avatar() {
            }
            return Avatar;
        }());
        unity.Avatar = Avatar;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * Interface to control the Mecanim animation system.
         */
        var Animator = /** @class */ (function (_super) {
            __extends(Animator, _super);
            function Animator() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                /**
                 * Gets the avatar angular velocity for the last evaluated frame.
                 */
                _this.angularVelocity = new feng3d.Vector3();
                /**
                 * Should root motion be applied?
                 */
                _this.applyRootMotion = false;
                /**
                 * Gets/Sets the current Avatar.
                 */
                _this.avatar = null;
                /**
                 * The position of the body center of mass.
                 */
                _this.bodyPosition = new feng3d.Vector3();
                /**
                 * The rotation of the body center of mass.
                 */
                _this.bodyRotation = new feng3d.Quaternion();
                /**
                 * Controls culling of this Animator component.
                 */
                _this.cullingMode = unity.AnimatorCullingMode.AlwaysAnimate;
                /**
                 * Gets the avatar delta position for the last evaluated frame.
                 */
                _this.deltaPosition = new feng3d.Vector3();
                /**
                 * Gets the avatar delta rotation for the last evaluated frame.
                 */
                _this.deltaRotation = new feng3d.Quaternion();
                /**
                 * Blends pivot point between body center of mass and feet pivot.
                 */
                _this.feetPivotActive = 1;
                /**
                 * Sets whether the Animator sends events of type AnimationEvent.
                 */
                _this.fireEvents = true;
                /**
                 * The current gravity weight based on current animations that are played.
                 */
                _this.gravityWeight = 0;
                /**
                 * Returns true if Animator has any playables assigned to it.
                 */
                _this.hasBoundPlayables = true;
                /**
                 * Returns true if the current rig has root motion.
                 */
                _this.hasRootMotion = false;
                /**
                 * Returns true if the object has a transform hierarchy.
                 */
                _this.hasTransformHierarchy = true;
                /**
                 * Returns the scale of the current Avatar for a humanoid rig, (1 by default if the rig is generic).
                 */
                _this.humanScale = 1;
                /**
                 * Returns true if the current rig is humanoid, false if it is generic.
                 */
                _this.isHuman = false;
                /**
                 * Returns whether the animator is initialized successfully.
                 */
                _this.isInitialized = false;
                /**
                 * If automatic matching is active.
                 */
                _this.isMatchingTarget = false;
                /**
                 * Returns true if the current rig is optimizable with AnimatorUtility.OptimizeTransformHierarchy.
                 */
                _this.isOptimizable = false;
                /**
                 * Controls the behaviour of the Animator component when a GameObject is disabled.
                 */
                _this.keepAnimatorControllerStateOnDisable = false;
                /**
                 * Returns the number of layers in the controller.
                 */
                _this.layerCount = 0;
                /**
                 * Additional layers affects the center of mass.
                 */
                _this.layersAffectMassCenter = false;
                /**
                 * Get left foot bottom height.
                 */
                _this.leftFeetBottomHeight = 0;
                /**
                 * Returns the number of parameters in the controller.
                 */
                _this.parameterCount = 0;
                /**
                 * The AnimatorControllerParameter list used by the animator. (Read Only)
                 */
                _this.parameters = [];
                /**
                 * Get the current position of the pivot.
                 */
                _this.pivotPosition = new feng3d.Vector3();
                /**
                 * Gets the pivot weight.
                 */
                _this.pivotWeight = 0.5;
                /**
                 * The PlayableGraph created by the Animator.
                 */
                _this.playableGraph = new unity.PlayableGraph();
                /**
                 * Sets the playback position in the recording buffer.
                 *
                 * 设置记录缓冲区中的播放位置。
                 */
                _this.playbackTime = -1;
                /**
                 * Gets the mode of the Animator recorder.
                 */
                _this.recorderMode = unity.AnimatorRecorderMode.Offline;
                /**
                 * Start time of the first frame of the buffer relative to the frame at which StartRecording was called.
                 */
                _this.recorderStartTime = -1;
                /**
                 * End time of the recorded clip relative to when StartRecording was called.
                 */
                _this.recorderStopTime = -1;
                /**
                 * Get right foot bottom height.
                 */
                _this.rightFeetBottomHeight = 0;
                /**
                 * The root position, the position of the game object.
                 */
                _this.rootPosition = new feng3d.Vector3();
                /**
                 * The root rotation, the rotation of the game object.
                 */
                _this.rootRotation = new feng3d.Quaternion();
                /**
                 * The playback speed of the Animator. 1 is normal playback speed.
                 */
                _this.speed = 1;
                /**
                 * Automatic stabilization of feet during transition and blending.
                 */
                _this.stabilizeFeet = false;
                /**
                 * Returns the position of the target specified by SetTarget.
                 */
                _this.targetPosition = new feng3d.Vector3();
                /**
                 * Returns the rotation of the target specified by SetTarget.
                 */
                _this.targetRotation = new feng3d.Quaternion();
                /**
                 * Specifies the update mode of the Animator.
                 */
                _this.updateMode = unity.AnimatorUpdateMode.Normal;
                /**
                 * Gets the avatar velocity for the last evaluated frame.
                 */
                _this.velocity = new feng3d.Vector3();
                /**
                 * 是否播放中
                 */
                _this._isPlaying = false;
                return _this;
            }
            /**
             * Apply the default Root Motion.
             *
             * @param stateName 	The name of the state.
             * @param normalizedTransitionDuration The duration of the transition (normalized).
             * @param layer The layer where the crossfade occurs.
             * @param normalizedTimeOffset The time of the state (normalized).
             * @param normalizedTransitionTime The time of the transition (normalized).
             */
            Animator.prototype.ApplyBuiltinRootMotion = function (stateName, normalizedTransitionDuration, layer, normalizedTimeOffset, normalizedTransitionTime) {
                if (layer === void 0) { layer = -1; }
                if (normalizedTimeOffset === void 0) { normalizedTimeOffset = Number.MIN_SAFE_INTEGER; }
                if (normalizedTransitionTime === void 0) { normalizedTransitionTime = 0.0; }
            };
            /**
             * Creates a crossfade from the current state to any other state using normalized times.
             *
             * @param stateName The name of the state.
             * @param normalizedTransitionDuration The duration of the transition (in seconds).
             * @param layer The layer where the crossfade occurs.
             * @param normalizedTimeOffset The time of the state (in seconds).
             * @param normalizedTransitionTime The time of the transition (normalized).
             */
            Animator.prototype.CrossFade = function (stateName, normalizedTransitionDuration, layer, normalizedTimeOffset, normalizedTransitionTime) {
                if (layer === void 0) { layer = -1; }
                if (normalizedTimeOffset === void 0) { normalizedTimeOffset = Number.MIN_SAFE_INTEGER; }
                if (normalizedTransitionTime === void 0) { normalizedTransitionTime = 0.0; }
            };
            /**
             * Creates a crossfade from the current state to any other state using times in seconds.
             *
             * @param stateName The name of the state.
             * @param fixedTransitionDuration The duration of the transition (in seconds).
             * @param layer The layer where the crossfade occurs.
             * @param fixedTimeOffset The time of the state (in seconds).
             * @param normalizedTransitionTime The time of the transition (normalized).
             */
            Animator.prototype.CrossFadeInFixedTime = function (stateName, fixedTransitionDuration, layer, fixedTimeOffset, normalizedTransitionTime) {
                if (layer === void 0) { layer = -1; }
                if (fixedTimeOffset === void 0) { fixedTimeOffset = 0.0; }
                if (normalizedTransitionTime === void 0) { normalizedTransitionTime = 0.0; }
            };
            /**
             * Returns an AnimatorTransitionInfo with the informations on the current transition.
             *
             * @param layerIndex The layer's index.
             */
            Animator.prototype.GetAnimatorTransitionInfo = function (layerIndex) {
            };
            /**
             * Returns the first StateMachineBehaviour that matches type T or is derived from T. Returns null if none are found.
             */
            Animator.prototype.GetBehaviour = function (type) {
                return null;
            };
            /**
             * Returns all StateMachineBehaviour that match type T or are derived from T. Returns null if none are found.
             */
            Animator.prototype.GetBehaviours = function (type) {
                return null;
            };
            /**
             * Returns Transform mapped to this human bone id.
             *
             * @param humanBoneId The human bone that is queried, see enum HumanBodyBones for a list of possible values.
             */
            Animator.prototype.GetBoneTransform = function (humanBoneId) {
            };
            /**
             * Returns the value of the given boolean parameter.
             *
             * @param name The parameter name.
             */
            Animator.prototype.GetBool = function (name) {
                return false;
            };
            /**
             * Returns an array of all the AnimatorClipInfo in the current state of the given layer.
             *
             * @param layerIndex The layer index.
             */
            Animator.prototype.GetCurrentAnimatorClipInfo = function (layerIndex) {
                return null;
            };
            /**
             * Returns the number of AnimatorClipInfo in the current state.
             */
            Animator.prototype.GetCurrentAnimatorClipInfoCount = function (layerIndex) {
                return 0;
            };
            /**
             * Returns an AnimatorStateInfo with the information on the current state.
             */
            Animator.prototype.GetCurrentAnimatorStateInfo = function (layerIndex) {
                return null;
            };
            /**
             * Returns the value of the given float parameter.
             */
            Animator.prototype.GetFloat = function (name) {
                return 0;
            };
            /**
             * Gets the position of an IK hint.
             *
             * @param hint The AvatarIKHint that is queried.
             *
             * @returns Vector3 Return the current position of this IK hint in world space.
             */
            Animator.prototype.GetIKHintPosition = function (hint) {
                return null;
            };
            /**
             * Gets the translative weight of an IK Hint (0 = at the original animation before IK, 1 = at the hint).
             *
             * @param hint The AvatarIKHint that is queried.
             */
            Animator.prototype.GetIKHintPositionWeight = function (hint) {
                return 0;
            };
            /**
             * Gets the position of an IK goal.
             *
             * @param goal The AvatarIKGoal that is queried.
             */
            Animator.prototype.GetIKPosition = function (goal) {
                return null;
            };
            /**
             * Gets the translative weight of an IK goal (0 = at the original animation before IK, 1 = at the goal).
             *
             * @param goal The AvatarIKGoal that is queried.
             */
            Animator.prototype.GetIKPositionWeight = function (goal) {
            };
            /**
             * Gets the rotation of an IK goal.
             *
             * @param goal The AvatarIKGoal that is is queried.
             */
            Animator.prototype.GetIKRotation = function (goal) {
            };
            /**
             * Gets the rotational weight of an IK goal (0 = rotation before IK, 1 = rotation at the IK goal).
             *
             * @param goal The AvatarIKGoal that is is queried.
             */
            Animator.prototype.GetIKRotationWeight = function (goal) {
            };
            /**
             * Returns the value of the given integer parameter.
             *
             * @param name The parameter name.
             */
            Animator.prototype.GetInteger = function (name) {
                return 0;
            };
            /**
             * Returns the index of the layer with the given name.
             *
             * @param layerName The layer name.
             */
            Animator.prototype.GetLayerIndex = function (layerName) {
            };
            /**
             * Returns the layer name.
             *
             * @param layerIndex The layer index.
             */
            Animator.prototype.GetLayerName = function (layerIndex) {
            };
            /**
             * Returns the weight of the layer at the specified index.
             *
             * @param layerIndex The layer index.
             */
            Animator.prototype.GetLayerWeight = function (layerIndex) {
            };
            /**
             * Returns an array of all the AnimatorClipInfo in the next state of the given layer.
             *
             * @param layerIndex The layer index.
             */
            Animator.prototype.GetNextAnimatorClipInfo = function (layerIndex) {
                return null;
            };
            /**
             * Returns the number of AnimatorClipInfo in the next state.
             *
             * @param layerIndex The layer index.
             */
            Animator.prototype.GetNextAnimatorClipInfoCount = function (layerIndex) {
                return 0;
            };
            /**
             * Returns an AnimatorStateInfo with the information on the next state.
             *
             * @param layerIndex The layer index.
             */
            Animator.prototype.GetNextAnimatorStateInfo = function (layerIndex) {
                return null;
            };
            /**
             * See AnimatorController.parameters.
             */
            Animator.prototype.GetParameter = function (index) {
                return null;
            };
            /**
             * Returns true if the state exists in this layer, false otherwise.
             *
             * @param layerIndex The layer index.
             * @param stateID The state ID.
             */
            Animator.prototype.HasState = function (layerIndex, stateID) {
                return false;
            };
            /**
             * Interrupts the automatic target matching.
             *
             * CompleteMatch will make the gameobject match the target completely at the next frame.
             */
            Animator.prototype.InterruptMatchTarget = function (completeMatch) {
                if (completeMatch === void 0) { completeMatch = true; }
            };
            /**
             * Returns true if there is a transition on the given layer, false otherwise.
             *
             * @param layerIndex The layer index.
             */
            Animator.prototype.IsInTransition = function (layerIndex) {
            };
            /**
             * Returns true if the parameter is controlled by a curve, false otherwise.
             *
             * @param name The parameter name.
             *
             * @returns True if the parameter is controlled by a curve, false otherwise.
             */
            Animator.prototype.IsParameterControlledByCurve = function (name) {
            };
            /**
             * Automatically adjust the GameObject position and rotation.
             *
             * @param matchPosition The position we want the body part to reach.
             * @param matchRotation The rotation in which we want the body part to be.
             * @param targetBodyPart The body part that is involved in the match.
             * @param weightMask Structure that contains weights for matching position and rotation.
             * @param startNormalizedTime Start time within the animation clip (0 - beginning of clip, 1 - end of clip).
             * @param targetNormalizedTime End time within the animation clip (0 - beginning of clip, 1 - end of clip), values greater than 1 can be set to trigger a match after a certain number of loops. Ex: 2.3 means at 30% of 2nd loop.
             */
            Animator.prototype.MatchTarget = function (matchPosition, matchRotation, targetBodyPart, weightMask, startNormalizedTime, targetNormalizedTime) {
                if (targetNormalizedTime === void 0) { targetNormalizedTime = 1; }
            };
            /**
             * Plays a state.
             *
             * @param stateName The state name.
             * @param layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
             * @param normalizedTime The time offset between zero and one.
             */
            Animator.prototype.Play = function (stateName, layer, normalizedTime) {
                if (layer === void 0) { layer = -1; }
                if (normalizedTime === void 0) { normalizedTime = Number.MIN_SAFE_INTEGER; }
                if (this.runtimeAnimatorController == null)
                    return;
                var animationClip = this.runtimeAnimatorController.animationClips.filter(function (v) { return v.name == stateName; })[0];
                if (animationClip == null)
                    return;
                this._activeAnimationClip = animationClip;
                this.StartPlayback();
            };
            /**
             * Plays a state.
             *
             * @param stateName The state name.
             * @param layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
             * @param fixedTime The time offset (in seconds).
             */
            Animator.prototype.PlayInFixedTime = function (stateName, layer, fixedTime) {
                if (layer === void 0) { layer = -1; }
                if (fixedTime === void 0) { fixedTime = Number.MIN_SAFE_INTEGER; }
            };
            /**
             * 每帧执行
             *
             * Evaluates the animator based on deltaTime.
             */
            Animator.prototype.update = function (deltaTime) {
                if (!this._isPlaying)
                    return;
                this.playbackTime += deltaTime / 1000 * this.speed;
                if (this._activeAnimationClip) {
                    this._activeAnimationClip.SampleAnimation(this.gameObject, this.playbackTime);
                }
            };
            /**
             * Rebind all the animated properties and mesh data with the Animator.
             */
            Animator.prototype.Rebind = function () {
            };
            /**
             * Resets the value of the given trigger parameter.
             *
             * @param name The parameter name.
             */
            Animator.prototype.ResetTrigger = function (name) {
            };
            /**
             * Sets local rotation of a human bone during a IK pass.
             *
             * @param humanBoneId The human bone Id.
             * @param rotation The local rotation.
             */
            Animator.prototype.SetBoneLocalRotation = function (humanBoneId, rotation) {
            };
            /**
             * Sets the value of the given boolean parameter.
             *
             * @param name The parameter name.
             * @param value The new parameter value.
             */
            Animator.prototype.SetBool = function (name, value) {
            };
            /**
             * Send float values to the Animator to affect transitions.
             *
             * @param name The parameter name.
             * @param value The new parameter value.
             * @param dampTime The damper total time.
             * @param deltaTime The delta time to give to the damper.
             */
            Animator.prototype.SetFloat = function (name, value, dampTime, deltaTime) {
            };
            /**
             * Sets the position of an IK hint.
             *
             * @param hint The AvatarIKHint that is set.
             * @param hintPosition The position in world space.
             */
            Animator.prototype.SetIKHintPosition = function (hint, hintPosition) {
            };
            /**
             * Sets the translative weight of an IK hint (0 = at the original animation before IK, 1 = at the hint).
             *
             * @param hint The AvatarIKHint that is set.
             * @param value The translative weight.
             */
            Animator.prototype.SetIKHintPositionWeight = function (hint, value) {
            };
            /**
             * Sets the position of an IK goal.
             *
             * @param goal The AvatarIKGoal that is set.
             * @param goalPosition The position in world space.
             */
            Animator.prototype.SetIKPosition = function (goal, goalPosition) {
            };
            /**
             * Sets the translative weight of an IK goal (0 = at the original animation before IK, 1 = at the goal).
             *
             * @param goal The AvatarIKGoal that is set.
             * @param value The translative weight.
             */
            Animator.prototype.SetIKPositionWeight = function (goal, value) {
            };
            /**
             * Sets the rotation of an IK goal.
             *
             * @param goal The AvatarIKGoal that is set.
             * @param goalRotation The rotation in world space.
             */
            Animator.prototype.SetIKRotation = function (goal, goalRotation) {
            };
            /**
             * Sets the rotational weight of an IK goal (0 = rotation before IK, 1 = rotation at the IK goal).
             *
             * @param goal The AvatarIKGoal that is set.
             * @param value The rotational weight.
             */
            Animator.prototype.SetIKRotationWeight = function (goal, value) {
            };
            /**
             * Sets the value of the given integer parameter.
             *
             * @param name The parameter name.
             * @param value The new parameter value.
             */
            Animator.prototype.SetInteger = function (name, value) {
            };
            /**
             * Sets the weight of the layer at the given index.
             *
             * @param layerIndex The layer index.
             * @param weight The new layer weight.
             */
            Animator.prototype.SetLayerWeight = function (layerIndex, weight) {
            };
            /**
             * Sets the look at position.
             *
             * @param lookAtPosition The position to lookAt.
             */
            Animator.prototype.SetLookAtPosition = function (lookAtPosition) {
            };
            /**
             * Set look at weights.
             *
             * @param weight (0-1) the global weight of the LookAt, multiplier for other parameters.
             * @param bodyWeight (0-1) determines how much the body is involved in the LookAt.
             * @param headWeight (0-1) determines how much the head is involved in the LookAt.
             * @param eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
             * @param clampWeight (0-1) 0.0 means the character is completely unrestrained in motion, 1.0 means he's completely clamped (look at becomes impossible), and 0.5 means he'll be able to move on half of the possible range (180 degrees).
             */
            Animator.prototype.SetLookAtWeight = function (weight, bodyWeight, headWeight, eyesWeight, clampWeight) {
                if (bodyWeight === void 0) { bodyWeight = 0.0; }
                if (headWeight === void 0) { headWeight = 1.0; }
                if (eyesWeight === void 0) { eyesWeight = 0.0; }
                if (clampWeight === void 0) { clampWeight = 0.5; }
            };
            /**
             * Sets an AvatarTarget and a targetNormalizedTime for the current state.
             *
             * @param targetIndex The avatar body part that is queried.
             * @param targetNormalizedTime The current state Time that is queried.
             */
            Animator.prototype.SetTarget = function (targetIndex, targetNormalizedTime) {
            };
            /**
             * Sets the value of the given trigger parameter.
             *
             * @param name The parameter name.
             */
            Animator.prototype.SetTrigger = function (name) {
            };
            /**
             * Sets the animator in playback mode.
             */
            Animator.prototype.StartPlayback = function () {
                this._isPlaying = true;
            };
            /**
             * Sets the animator in recording mode, and allocates a circular buffer of size frameCount.
             *
             * @param frameCount The number of frames (updates) that will be recorded. If frameCount is 0, the recording will continue until the user calls StopRecording. The maximum value for frameCount is 10000.
             */
            Animator.prototype.StartRecording = function (frameCount) {
            };
            /**
             * Stops the animator playback mode. When playback stops, the avatar resumes getting control from game logic.
             */
            Animator.prototype.StopPlayback = function () {
                this._isPlaying = false;
            };
            /**
             * Stops animator record mode.
             */
            Animator.prototype.StopRecording = function () {
            };
            /**
             * Forces a write of the default values stored in the animator.
             */
            Animator.prototype.WriteDefaultValues = function () {
            };
            /**
             * Generates an parameter id from a string.
             */
            Animator.StringToHash = function (name) {
            };
            return Animator;
        }(feng3d.Behaviour));
        unity.Animator = Animator;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * The mode of the Animator's recorder.
         *
         * The recorder can either be Offline, in Playback or in Record.
         */
        var AnimatorRecorderMode;
        (function (AnimatorRecorderMode) {
            /**
             * The Animator recorder is offline.
             */
            AnimatorRecorderMode[AnimatorRecorderMode["Offline"] = 0] = "Offline";
            /**
             * The Animator recorder is in Playback.
             */
            AnimatorRecorderMode[AnimatorRecorderMode["Playback"] = 1] = "Playback";
            /**
             * The Animator recorder is in Record.
             */
            AnimatorRecorderMode[AnimatorRecorderMode["Record"] = 2] = "Record";
        })(AnimatorRecorderMode = unity.AnimatorRecorderMode || (unity.AnimatorRecorderMode = {}));
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * The update mode of the Animator.
         */
        var AnimatorUpdateMode;
        (function (AnimatorUpdateMode) {
            /**
             * Normal update of the animator.
             */
            AnimatorUpdateMode[AnimatorUpdateMode["Normal"] = 0] = "Normal";
            /**
             * Updates the animator during the physic loop in order to have the animation system synchronized with the physics engine.
             */
            AnimatorUpdateMode[AnimatorUpdateMode["AnimatePhysics"] = 1] = "AnimatePhysics";
            /**
             * Animator updates independently of Time.timeScale.
             */
            AnimatorUpdateMode[AnimatorUpdateMode["UnscaledTime"] = 2] = "UnscaledTime";
        })(AnimatorUpdateMode = unity.AnimatorUpdateMode || (unity.AnimatorUpdateMode = {}));
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * Culling mode for the Animator.
         */
        var AnimatorCullingMode;
        (function (AnimatorCullingMode) {
            /**
             * Always animate the entire character. Object is animated even when offscreen.
             */
            AnimatorCullingMode[AnimatorCullingMode["AlwaysAnimate"] = 0] = "AlwaysAnimate";
            /**
             * Retarget, IK and write of Transforms are disabled when renderers are not visible.
             */
            AnimatorCullingMode[AnimatorCullingMode["CullUpdateTransforms"] = 1] = "CullUpdateTransforms";
            /**
             * Animation is completely disabled when renderers are not visible.
             */
            AnimatorCullingMode[AnimatorCullingMode["CullCompletely"] = 2] = "CullCompletely";
        })(AnimatorCullingMode = unity.AnimatorCullingMode || (unity.AnimatorCullingMode = {}));
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * The type of the parameter.
         *
         * Can be bool, float, int or trigger.
         */
        var AnimatorControllerParameterType;
        (function (AnimatorControllerParameterType) {
            /**
             * Float type parameter.
             */
            AnimatorControllerParameterType[AnimatorControllerParameterType["Float"] = 0] = "Float";
            /**
             * Int type parameter.
             */
            AnimatorControllerParameterType[AnimatorControllerParameterType["Int"] = 1] = "Int";
            /**
             * Boolean type parameter.
             */
            AnimatorControllerParameterType[AnimatorControllerParameterType["Bool"] = 2] = "Bool";
            /**
             * Trigger type parameter.
             */
            AnimatorControllerParameterType[AnimatorControllerParameterType["Trigger"] = 3] = "Trigger";
        })(AnimatorControllerParameterType = unity.AnimatorControllerParameterType || (unity.AnimatorControllerParameterType = {}));
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * Used by Animation.Play function.
         */
        var AnimationBlendMode;
        (function (AnimationBlendMode) {
            /**
             * Animations will be blended.
             */
            AnimationBlendMode[AnimationBlendMode["Blend"] = 0] = "Blend";
            /**
             * Animations will be added.
             */
            AnimationBlendMode[AnimationBlendMode["Additive"] = 1] = "Additive";
        })(AnimationBlendMode = unity.AnimationBlendMode || (unity.AnimationBlendMode = {}));
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * Specifies how the layer is blended with the previous layers.
         */
        var AnimatorLayerBlendingMode;
        (function (AnimatorLayerBlendingMode) {
            /**
             * Animations overrides to the previous layers.
             */
            AnimatorLayerBlendingMode[AnimatorLayerBlendingMode["Override"] = 0] = "Override";
            /**
             * Animations are added to the previous layers.
             */
            AnimatorLayerBlendingMode[AnimatorLayerBlendingMode["Additive"] = 1] = "Additive";
        })(AnimatorLayerBlendingMode = unity.AnimatorLayerBlendingMode || (unity.AnimatorLayerBlendingMode = {}));
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * The mode of the condition.
         */
        var AnimatorConditionMode;
        (function (AnimatorConditionMode) {
            /**
             * The condition is true when the parameter value is true.
             */
            AnimatorConditionMode[AnimatorConditionMode["If"] = 0] = "If";
            /**
             * The condition is true when the parameter value is false.
             */
            AnimatorConditionMode[AnimatorConditionMode["IfNot"] = 1] = "IfNot";
            /**
             * The condition is true when parameter value is greater than the threshold.
             */
            AnimatorConditionMode[AnimatorConditionMode["Greater"] = 2] = "Greater";
            /**
             * The condition is true when the parameter value is less than the threshold.
             */
            AnimatorConditionMode[AnimatorConditionMode["Less"] = 3] = "Less";
            /**
             * The condition is true when parameter value is equal to the threshold.
             */
            AnimatorConditionMode[AnimatorConditionMode["Equals"] = 4] = "Equals";
            /**
             * The condition is true when the parameter value is not equal to the threshold.
             */
            AnimatorConditionMode[AnimatorConditionMode["NotEqual"] = 5] = "NotEqual";
        })(AnimatorConditionMode = unity.AnimatorConditionMode || (unity.AnimatorConditionMode = {}));
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * Which AnimatorState transitions can interrupt the Transition.
         */
        var TransitionInterruptionSource;
        (function (TransitionInterruptionSource) {
            /**
             * The Transition cannot be interrupted. Formely know as Atomic.
             */
            TransitionInterruptionSource[TransitionInterruptionSource["None"] = 0] = "None";
            /**
             * The Transition can be interrupted by transitions in the source AnimatorState.
             */
            TransitionInterruptionSource[TransitionInterruptionSource["Source"] = 1] = "Source";
            /**
             * The Transition can be interrupted by transitions in the destination AnimatorState.
             */
            TransitionInterruptionSource[TransitionInterruptionSource["Destination"] = 2] = "Destination";
            /**
             * The Transition can be interrupted by transitions in the source or the destination AnimatorState.
             */
            TransitionInterruptionSource[TransitionInterruptionSource["SourceThenDestination"] = 3] = "SourceThenDestination";
            /**
             * The Transition can be interrupted by transitions in the source or the destination AnimatorState.
             */
            TransitionInterruptionSource[TransitionInterruptionSource["DestinationThenSource"] = 4] = "DestinationThenSource";
        })(TransitionInterruptionSource = unity.TransitionInterruptionSource || (unity.TransitionInterruptionSource = {}));
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * Use this struct to specify the position and rotation weight mask for Animator.MatchTarget.
         */
        var MatchTargetWeightMask = /** @class */ (function () {
            function MatchTargetWeightMask() {
            }
            return MatchTargetWeightMask;
        }());
        unity.MatchTargetWeightMask = MatchTargetWeightMask;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * AnimationEvent lets you call a script function similar to SendMessage as part of playing back an animation.
         *
         * Animation events support functions that take zero or one parameter. The parameter can be a float, an int, a string, an object reference, or an AnimationEvent.
         */
        var AnimationEvent = /** @class */ (function () {
            function AnimationEvent() {
            }
            return AnimationEvent;
        }());
        unity.AnimationEvent = AnimationEvent;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * StateMachineBehaviour is a component that can be added to a state machine state. It's the base class every script on a state derives from.
         */
        var StateMachineBehaviour = /** @class */ (function () {
            function StateMachineBehaviour() {
            }
            /**
             * Called on the first Update frame when making a transition to a state machine. This is not called when making a transition into a state machine sub-state.
             *
             * @param animator The Animator playing this state machine.
             * @param stateMachinePathHash The full path hash for this state machine.
             */
            StateMachineBehaviour.prototype.OnStateMachineEnter = function (animator, stateMachinePathHash) {
            };
            /**
             * Called on the last Update frame when making a transition out of a StateMachine. This is not called when making a transition into a StateMachine sub-state.
             *
             * @param animator The Animator playing this state machine.
             * @param stateMachinePathHash The full path hash for this state machine.
             */
            StateMachineBehaviour.prototype.OnStateMachineExit = function (animator, stateMachinePathHash) {
            };
            /**
             * Called on the first Update frame when a state machine evaluate this state.
             */
            StateMachineBehaviour.prototype.OnStateEnter = function (animator, animatorStateInfo, layerIndex) {
            };
            /**
             * Called on the last update frame when a state machine evaluate this state.
             */
            StateMachineBehaviour.prototype.OnStateExit = function (animator, animatorStateInfo, layerIndex) {
            };
            /**
             * Called right after MonoBehaviour.OnAnimatorIK.
             */
            StateMachineBehaviour.prototype.OnStateIK = function (animator, animatorStateInfo, layerIndex) {
            };
            /**
             * Called right after MonoBehaviour.OnAnimatorMove.
             */
            StateMachineBehaviour.prototype.OnStateMove = function (animator, animatorStateInfo, layerIndex) {
            };
            /**
             * Called at each Update frame except for the first and last frame.
             */
            StateMachineBehaviour.prototype.OnStateUpdate = function (animator, animatorStateInfo, layerIndex) {
            };
            return StateMachineBehaviour;
        }());
        unity.StateMachineBehaviour = StateMachineBehaviour;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * The animator state info related to this event (Read Only).
         */
        var AnimatorStateInfo = /** @class */ (function () {
            function AnimatorStateInfo() {
            }
            /**
             * Does name match the name of the active state in the statemachine?
             */
            AnimatorStateInfo.prototype.IsName = function (name) {
            };
            /**
             * Does tag match the tag of the active state in the statemachine.
             */
            AnimatorStateInfo.prototype.IsTag = function (tag) {
            };
            return AnimatorStateInfo;
        }());
        unity.AnimatorStateInfo = AnimatorStateInfo;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * Information about clip being played and blended by the Animator.
         */
        var AnimatorClipInfo = /** @class */ (function () {
            function AnimatorClipInfo() {
            }
            return AnimatorClipInfo;
        }());
        unity.AnimatorClipInfo = AnimatorClipInfo;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * The AnimationState gives full control over animation blending.
         */
        var AnimationState = /** @class */ (function () {
            function AnimationState() {
            }
            /**
             * Adds a transform which should be animated. This allows you to reduce the number of animations you have to create.
             *
             * @param mix The transform to animate.
             * @param recursive Whether to also animate all children of the specified transform.
             */
            AnimationState.prototype.AddMixingTransform = function (mix, recursive) {
                if (recursive === void 0) { recursive = true; }
            };
            /**
             * Removes a transform which should be animated.
             */
            AnimationState.prototype.RemoveMixingTransform = function (mix) {
            };
            return AnimationState;
        }());
        unity.AnimationState = AnimationState;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * Stores keyframe based animations.
         *
         * AnimationClip is used by Animation to play back animations.
         */
        var AnimationClip = /** @class */ (function () {
            function AnimationClip() {
                /**
                 * The name of the object.
                 */
                this.name = "";
                /**
                 * Animation Events for this animation clip.
                 */
                this.events = [];
                /**
                 * Frame rate at which keyframes are sampled. (Read Only)
                 */
                this.frameRate = 60;
                /**
                 * Returns true if the Animation has animation on the root transform.
                 */
                this.hasGenericRootTransform = false;
                /**
                 * Returns true if the AnimationClip has root motion curves.
                 */
                this.hasMotionCurves = false;
                /**
                 * Returns true if the AnimationClip has editor curves for its root motion.
                 */
                this.hasMotionFloatCurves = false;
                /**
                 * Returns true if the AnimationClip has root Curves.
                 */
                this.hasRootCurves = false;
                /**
                 * Returns true if the animation contains curve that drives a humanoid rig.
                 */
                this.humanMotion = false;
                /**
                 * Set to true if the AnimationClip will be used with the Legacy Animation component ( instead of the Animator ).
                 */
                this.legacy = false;
                /**
                 * AABB of this Animation Clip in local space of Animation component that it is attached too.
                 */
                this.localBounds = new unity.Bounds();
                /**
                 * Sets the default wrap mode used in the animation state.
                 */
                this.wrapMode = feng3d.WrapMode.Default;
                /**
                 * 曲线数据
                 */
                this.curvedatas = [];
            }
            Object.defineProperty(AnimationClip.prototype, "empty", {
                /**
                 * Returns true if the animation clip has no curves and no events.
                 */
                get: function () {
                    if (this.events.length > 0)
                        return false;
                    if (this.curvedatas.length > 0)
                        return false;
                    return true;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AnimationClip.prototype, "length", {
                /**
                 * Animation length in seconds. (Read Only)
                 */
                get: function () {
                    var l = this.curvedatas.reduce(function (pv, cv) {
                        var animationCurve = cv.curve;
                        var keys = animationCurve.keys;
                        if (keys.length > 0) {
                            var lastkey = keys[keys.length - 1];
                            pv = Math.max(pv, lastkey.time);
                        }
                        return pv;
                    }, 0);
                    return l;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Adds an animation event to the clip.
             */
            AnimationClip.prototype.AddEvent = function (evt) {
                this.events.push(evt);
            };
            /**
             * Clears all curves from the clip.
             */
            AnimationClip.prototype.ClearCurves = function () {
                this.curvedatas = [];
            };
            /**
             * Realigns quaternion keys to ensure shortest interpolation paths.
             */
            AnimationClip.prototype.EnsureQuaternionContinuity = function () {
            };
            /**
             * Samples an animation at a given time for any animated properties.
             *
             * @param go The animated game object.
             * @param time The time to sample an animation.
             */
            AnimationClip.prototype.SampleAnimation = function (go, time) {
                this.curvedatas.forEach(function (cd) {
                    var anigo = go.find(cd.path);
                    var propertys = cd.propertyName.split(".");
                    cd.path;
                    cd.type;
                    var value = cd.curve.getValue(time);
                    switch (propertys[0]) {
                        case "m_LocalScale":
                            anigo.transform.scale[propertys[1]] = value;
                            break;
                        case "localEulerAnglesRaw":
                            anigo.transform.rotation[propertys[1]] = value;
                            break;
                        case "material":
                            var meshRenderer = anigo.getComponent(feng3d.MeshRenderer);
                            if (meshRenderer && meshRenderer.material) {
                                var uniforms = meshRenderer.material.uniforms;
                                // serialization.setValue(uniforms,)
                                Object;
                            }
                            break;
                        default:
                            console.warn("\u65E0\u6CD5\u5904\u7406\u52A8\u753B\u5C5E\u6027 " + propertys[0]);
                            break;
                    }
                });
            };
            /**
             * Assigns the curve to animate a specific property.
             *
             * @param relativePath Path to the game object this curve applies to. The relativePath is formatted similar to a pathname, e.g. "root/spine/leftArm". If relativePath is empty it refers to the game object the animation clip is attached to.
             * @param type The class type of the component that is animated.
             * @param propertyName The name or path to the property being animated.
             * @param curve The animation curve.
             */
            AnimationClip.prototype.SetCurve = function (relativePath, type, propertyName, curve) {
                var data = new unity.AnimationClipCurveData();
                data.path = relativePath;
                data.type = type;
                data.propertyName = propertyName;
                data.curve = curve;
                this.curvedatas.push(data);
            };
            /**
             * Retrieves all curves from a specific animation clip.
             *
             * 等价Unity中AnimationUtility.GetAllCurves
             */
            AnimationClip.prototype.GetAllCurves = function () {
                return this.curvedatas;
            };
            /**
             * Returns all the float curve bindings currently stored in the clip.
             */
            AnimationClip.prototype.GetCurveBindings = function () {
                var bindings = this.curvedatas.map(function (v) {
                    var binding = new unity.EditorCurveBinding();
                    binding.path = v.path;
                    binding.propertyName = v.propertyName;
                    binding.type = v.type;
                    return binding;
                });
                return bindings;
            };
            return AnimationClip;
        }());
        unity.AnimationClip = AnimationClip;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * The runtime representation of the AnimatorController. Use this representation to change the Animator Controller during runtime.
         */
        var RuntimeAnimatorController = /** @class */ (function () {
            function RuntimeAnimatorController() {
            }
            return RuntimeAnimatorController;
        }());
        unity.RuntimeAnimatorController = RuntimeAnimatorController;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * Used to communicate between scripting and the controller. Some parameters can be set in scripting and used by the controller, while other parameters are based on Custom Curves in Animation Clips and can be sampled using the scripting API.
         */
        var AnimatorControllerParameter = /** @class */ (function () {
            function AnimatorControllerParameter() {
            }
            return AnimatorControllerParameter;
        }());
        unity.AnimatorControllerParameter = AnimatorControllerParameter;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * Defines how a curve is attached to an object that it controls.
         */
        var EditorCurveBinding = /** @class */ (function () {
            function EditorCurveBinding() {
            }
            /**
             * Creates a preconfigured binding for a curve where values should not be interpolated.
             *
             * @param inPath The transform path to the object to animate.
             * @param inType The type of the object to animate.
             * @param inPropertyName The name of the property to animate on the object.
             */
            EditorCurveBinding.DiscreteCurve = function (inPath, inType, inPropertyName) {
            };
            /**
             * Creates a preconfigured binding for a float curve.
             *
             * @param inPath The transform path to the object to animate.
             * @param inType The type of the object to animate.
             * @param inPropertyName The name of the property to animate on the object.
             */
            EditorCurveBinding.FloatCurve = function (inPath, inType, inPropertyName) {
            };
            /**
             * Creates a preconfigured binding for a curve that points to an Object.
             *
             * @param inPath The transform path to the object to animate.
             * @param inType The type of the object to animate.
             * @param inPropertyName The name of the property to animate on the object.
             */
            EditorCurveBinding.PPtrCurve = function (inPath, inType, inPropertyName) {
            };
            return EditorCurveBinding;
        }());
        unity.EditorCurveBinding = EditorCurveBinding;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * An AnimationClipCurveData object contains all the information needed to identify a specific curve in an AnimationClip. The curve animates a specific property of a component / material attached to a game object / animated bone.
         */
        var AnimationClipCurveData = /** @class */ (function () {
            function AnimationClipCurveData() {
            }
            return AnimationClipCurveData;
        }());
        unity.AnimationClipCurveData = AnimationClipCurveData;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * The Animator Controller controls animation through layers with state machines, controlled by parameters.
         */
        var AnimatorController = /** @class */ (function (_super) {
            __extends(AnimatorController, _super);
            function AnimatorController() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return AnimatorController;
        }(unity.RuntimeAnimatorController));
        unity.AnimatorController = AnimatorController;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * The Animation Layer contains a state machine that controls animations of a model or part of it.
         */
        var AnimatorControllerLayer = /** @class */ (function () {
            function AnimatorControllerLayer() {
            }
            /**
             * Gets the override behaviour list for the state on the given layer.
             *
             * @param state The state which we want to get the behaviour list.
             */
            AnimatorControllerLayer.prototype.GetOverrideBehaviours = function (state) {
            };
            /**
             * Gets the override motion for the state on the given layer.
             *
             * @param state The state which we want to get the motion.
             */
            AnimatorControllerLayer.prototype.GetOverrideMotion = function (state) {
            };
            /**
             * Sets the override behaviour list for the state on the given layer.
             *
             * @param state The state which we want to set the behaviour list.
             * @param behaviours The behaviour list that will be set.
             */
            AnimatorControllerLayer.prototype.SetOverrideBehaviours = function (state, behaviours) {
            };
            /**
             * Sets the override motion for the state on the given layer.
             *
             * @param state The state which we want to set the motion.
             * @param motion The motion that will be set.
             */
            AnimatorControllerLayer.prototype.SetOverrideMotion = function (state, motion) {
            };
            return AnimatorControllerLayer;
        }());
        unity.AnimatorControllerLayer = AnimatorControllerLayer;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * AvatarMask is used to mask out humanoid body parts and transforms.
         *
         * They can be used when importing animation or in an animator controller layer.
         */
        var AvatarMask = /** @class */ (function () {
            function AvatarMask() {
            }
            /**
             * Adds a transform path into the AvatarMask.
             *
             * @param transform The transform to add into the AvatarMask.
             * @param recursive Whether to also add all children of the specified transform.
             */
            AvatarMask.prototype.AddTransformPath = function (transform, recursive) {
                if (recursive === void 0) { recursive = true; }
            };
            /**
             * Returns true if the humanoid body part at the given index is active.
             *
             * @param index The index of the humanoid body part.
             */
            AvatarMask.prototype.GetHumanoidBodyPartActive = function (index) {
            };
            /**
             * Returns true if the transform at the given index is active.
             *
             * @param index The index of the transform.
             */
            AvatarMask.prototype.GetTransformActive = function (index) {
            };
            /**
             * Returns the path of the transform at the given index.
             *
             * @param index The index of the transform.
             */
            AvatarMask.prototype.GetTransformPath = function (index) {
            };
            /**
             * Removes a transform path from the AvatarMask.
             *
             * @param transform The Transform that should be removed from the AvatarMask.
             * @param recursive Whether to also remove all children of the specified transform.
             */
            AvatarMask.prototype.RemoveTransformPath = function (transform, recursive) {
                if (recursive === void 0) { recursive = true; }
            };
            /**
             * Sets the humanoid body part at the given index to active or not.
             *
             * @param index The index of the humanoid body part.
             * @param value Active or not.
             */
            AvatarMask.prototype.SetHumanoidBodyPartActive = function (index, value) {
            };
            /**
             * Sets the tranform at the given index to active or not.
             *
             * @param index The index of the transform.
             * @param value Active or not.
             */
            AvatarMask.prototype.SetTransformActive = function (index, value) {
            };
            /**
             * Sets the path of the transform at the given index.
             *
             * @param index The index of the transform.
             * @param path The path of the transform.
             */
            AvatarMask.prototype.SetTransformPath = function (index, path) {
            };
            return AvatarMask;
        }());
        unity.AvatarMask = AvatarMask;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * Avatar body part.
         */
        var AvatarMaskBodyPart;
        (function (AvatarMaskBodyPart) {
            /**
             * The Root.
             */
            AvatarMaskBodyPart[AvatarMaskBodyPart["Root"] = 0] = "Root";
            /**
             * The Body.
             */
            AvatarMaskBodyPart[AvatarMaskBodyPart["Body"] = 1] = "Body";
            /**
             * The Head.
             */
            AvatarMaskBodyPart[AvatarMaskBodyPart["Head"] = 2] = "Head";
            /**
             * The Left Leg.
             */
            AvatarMaskBodyPart[AvatarMaskBodyPart["LeftLeg"] = 3] = "LeftLeg";
            /**
             * The Right Leg.
             */
            AvatarMaskBodyPart[AvatarMaskBodyPart["RightLeg"] = 4] = "RightLeg";
            /**
             * The Left Arm.
             */
            AvatarMaskBodyPart[AvatarMaskBodyPart["LeftArm"] = 5] = "LeftArm";
            /**
             * The Right Arm.
             */
            AvatarMaskBodyPart[AvatarMaskBodyPart["RightArm"] = 6] = "RightArm";
            /**
             * Left Fingers.
             */
            AvatarMaskBodyPart[AvatarMaskBodyPart["LeftFingers"] = 7] = "LeftFingers";
            /**
             * Right Fingers.
             */
            AvatarMaskBodyPart[AvatarMaskBodyPart["RightFingers"] = 8] = "RightFingers";
            /**
             * Left Foot IK.
             */
            AvatarMaskBodyPart[AvatarMaskBodyPart["LeftFootIK"] = 9] = "LeftFootIK";
            /**
             * Right Foot IK.
             */
            AvatarMaskBodyPart[AvatarMaskBodyPart["RightFootIK"] = 10] = "RightFootIK";
            /**
             * Left Hand IK.
             */
            AvatarMaskBodyPart[AvatarMaskBodyPart["LeftHandIK"] = 11] = "LeftHandIK";
            /**
             * Right Hand IK.
             */
            AvatarMaskBodyPart[AvatarMaskBodyPart["RightHandIK"] = 12] = "RightHandIK";
            /**
             * Total number of body parts.
             */
            AvatarMaskBodyPart[AvatarMaskBodyPart["LastBodyPart"] = 13] = "LastBodyPart";
        })(AvatarMaskBodyPart = unity.AvatarMaskBodyPart || (unity.AvatarMaskBodyPart = {}));
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * A graph controlling the interaction of states. Each state references a motion.
         */
        var AnimatorStateMachine = /** @class */ (function () {
            function AnimatorStateMachine() {
            }
            return AnimatorStateMachine;
        }());
        unity.AnimatorStateMachine = AnimatorStateMachine;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * Base class for animator transitions. Transitions define when and how the state machine switches from one state to another.
         *
         * A transition happens when all its conditions are met.
         */
        var AnimatorTransitionBase = /** @class */ (function () {
            function AnimatorTransitionBase() {
            }
            /**
             * Utility function to add a condition to a transition.
             *
             * @param mode The AnimatorCondition mode of the condition.
             * @param threshold The threshold value of the condition.
             * @param parameter The name of the parameter.
             */
            AnimatorTransitionBase.prototype.AddCondition = function (mode, threshold, parameter) {
                var condition = new unity.AnimatorCondition();
                condition.mode = mode;
                condition.threshold = threshold;
                condition.parameter = parameter;
                this.conditions.push(condition);
            };
            /**
             * Utility function to remove a condition from the transition.
             *
             * @param condition The condition to remove.
             */
            AnimatorTransitionBase.prototype.RemoveCondition = function (condition) {
                this.conditions = this.conditions.filter(function (v) { return v != condition; });
            };
            return AnimatorTransitionBase;
        }());
        unity.AnimatorTransitionBase = AnimatorTransitionBase;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * Transitions define when and how the state machine switch from one state to another. AnimatorStateTransition always originate from an Animator State (or AnyState) and have timing parameters.
         *
         * A transition happens when all its conditions are met. AnimatorStateTransition derives from AnimatorTransitionBase.
         */
        var AnimatorStateTransition = /** @class */ (function (_super) {
            __extends(AnimatorStateTransition, _super);
            function AnimatorStateTransition() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return AnimatorStateTransition;
        }(unity.AnimatorTransitionBase));
        unity.AnimatorStateTransition = AnimatorStateTransition;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * AnimatorCondition conditions that need to be met for a transition to happen.
         */
        var AnimatorCondition = /** @class */ (function () {
            function AnimatorCondition() {
            }
            return AnimatorCondition;
        }());
        unity.AnimatorCondition = AnimatorCondition;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * States are the basic building blocks of a state machine. Each state contains a Motion ( AnimationClip or BlendTree) which will play while the character is in that state. When an event in the game triggers a state transition, the character will be left in a new state whose animation sequence will then take over.
         */
        var AnimatorState = /** @class */ (function () {
            function AnimatorState() {
            }
            /**
             * Utility function to add an outgoing transition to the exit of the state's parent state machine.
             *
             * @param defaultExitTime If true, the exit time will be the equivalent of 0.25 second.
             */
            AnimatorState.prototype.AddExitTransition = function (defaultExitTime) {
            };
            /**
             * Adds a state machine behaviour class of type stateMachineBehaviourType to the AnimatorState. C# Users can use a generic version.
             */
            AnimatorState.prototype.AddStateMachineBehaviour = function (stateMachineBehaviourType) {
            };
            /**
             * Utility function to add an outgoing transition to the destination state.
             *
             * @param destinationState The destination state | machine.
             * @param defaultExitTime If true, the exit time will be the equivalent of 0.25 second.
             */
            AnimatorState.prototype.AddTransition = function (destinationState, defaultExitTime) {
            };
            /**
             * Utility function to remove a transition from the state.
             *
             * @param transition Transition to remove.
             */
            AnimatorState.prototype.RemoveTransition = function (transition) {
                this.transitions = this.transitions.filter(function (v) { return v != transition; });
            };
            return AnimatorState;
        }());
        unity.AnimatorState = AnimatorState;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * Base class for AnimationClips and BlendTrees.
         *
         * Motions are used by animation States in the Mecanim StateMachines.
         */
        var Motion = /** @class */ (function () {
            function Motion() {
            }
            return Motion;
        }());
        unity.Motion = Motion;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * Transitions define when and how the state machine switch from on state to another. AnimatorTransition always originate from a StateMachine or a StateMachine entry. They do not define timing parameters.
         *
         * A transition happens when all its conditions are met.
         */
        var AnimatorTransition = /** @class */ (function (_super) {
            __extends(AnimatorTransition, _super);
            function AnimatorTransition() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return AnimatorTransition;
        }(unity.AnimatorTransitionBase));
        unity.AnimatorTransition = AnimatorTransition;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * Structure that represents a state machine in the context of its parent state machine.
         */
        var ChildAnimatorStateMachine = /** @class */ (function () {
            function ChildAnimatorStateMachine() {
            }
            return ChildAnimatorStateMachine;
        }());
        unity.ChildAnimatorStateMachine = ChildAnimatorStateMachine;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * Structure that represents a state in the context of its parent state machine.
         */
        var ChildAnimatorState = /** @class */ (function () {
            function ChildAnimatorState() {
            }
            return ChildAnimatorState;
        }());
        unity.ChildAnimatorState = ChildAnimatorState;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    var unity;
    (function (unity) {
        /**
         * Use the PlayableGraph to manage Playable creations and destructions.
         *
         * The PlayableGraph is also the link to different systems, through structs that implement IPlayableOutput. For example, AnimationPlayableOutput or AudioPlayableOutput.
         */
        var PlayableGraph = /** @class */ (function () {
            function PlayableGraph() {
            }
            return PlayableGraph;
        }());
        unity.PlayableGraph = PlayableGraph;
    })(unity = feng3d.unity || (feng3d.unity = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    feng3d.Line_Trail_vertex = "\n\nattribute vec3 a_position;\nattribute vec2 a_uv;\nattribute vec4 a_color;\n\nuniform mat4 u_modelMatrix;\nuniform mat4 u_viewProjection;\n\nvarying vec2 v_uv;\nvarying vec4 v_color;\n\nvoid main() \n{\n    vec3 position = a_position;\n    gl_Position = u_viewProjection * u_modelMatrix * vec4(position, 1.0);\n    v_uv = a_uv;\n    v_color = a_color;\n}\n    ";
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    feng3d.Line_Trail_fragment = "\nprecision mediump float;\n\nuniform sampler2D s_texture;\n\nvarying vec2 v_uv;\nvarying vec4 v_color;\n\nuniform vec4 u_color;\n\nvoid main() \n{\n    vec4 color = texture2D(s_texture, v_uv);\n    gl_FragColor = color * u_color * v_color;\n}\n    ";
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    /**
     * 线条拖尾
     */
    var Line_TrailUniforms = /** @class */ (function () {
        function Line_TrailUniforms() {
            this.s_texture = feng3d.Texture2D.white;
            this.u_color = new feng3d.Color4();
        }
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], Line_TrailUniforms.prototype, "s_texture", void 0);
        __decorate([
            feng3d.oav()
        ], Line_TrailUniforms.prototype, "u_color", void 0);
        return Line_TrailUniforms;
    }());
    feng3d.Line_TrailUniforms = Line_TrailUniforms;
    feng3d.shaderConfig.shaders["Line_Trail"] =
        {
            vertex: feng3d.Line_Trail_vertex,
            fragment: feng3d.Line_Trail_fragment,
            cls: Line_TrailUniforms,
            renderParams: {
                enableBlend: true,
                sfactor: feng3d.BlendFactor.ONE,
                dfactor: feng3d.BlendFactor.ONE_MINUS_SRC_ALPHA,
                colorMask: feng3d.ColorMask.RGBA,
                cullFace: feng3d.CullFace.NONE,
                depthMask: true,
            },
        };
    feng3d.Material.setDefault("Line_Trail-Material", { shaderName: "Line_Trail" });
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    /**
     * Control the direction lines face, when using the LineRenderer or TrailRenderer.
     *
     * 使用LineRenderer或TrailRenderer时，控制方向线的面。
     */
    var LineAlignment;
    (function (LineAlignment) {
        /**
         * Lines face the camera.
         *
         * 线面向相机。
         */
        LineAlignment[LineAlignment["View"] = 0] = "View";
        /**
         * Lines face the Z axis of the Transform Component.
         *
         * 线面向变换组件的Z轴。
         */
        LineAlignment[LineAlignment["TransformZ"] = 1] = "TransformZ";
    })(LineAlignment = feng3d.LineAlignment || (feng3d.LineAlignment = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    /**
     * Choose how textures are applied to Lines and Trails.
     *
     * 选择如何将纹理应用于线和迹线。
     */
    var LineTextureMode;
    (function (LineTextureMode) {
        /**
         * Map the texture once along the entire length of the line.
         *
         * 沿线的整个长度映射一次纹理。
         */
        LineTextureMode[LineTextureMode["Stretch"] = 0] = "Stretch";
        /**
         * Repeat the texture along the line, based on its length in world units. To set the tiling rate, use Material.SetTextureScale.
         *
         * 根据纹理的长度（以世界单位为单位），沿线重复纹理。要设置平铺率，请使用Material.SetTextureScale。
         */
        LineTextureMode[LineTextureMode["Tile"] = 1] = "Tile";
        /**
         * Map the texture once along the entire length of the line, assuming all vertices are evenly spaced.
         *
         * 假设所有顶点均等分布，则沿着线的整个长度映射一次纹理。
         */
        LineTextureMode[LineTextureMode["DistributePerSegment"] = 2] = "DistributePerSegment";
        /**
         * Repeat the texture along the line, repeating at a rate of once per line segment. To adjust the tiling rate, use Material.SetTextureScale.
         *
         * 沿线重复纹理，每个线段重复一次。要调整平铺率，请使用Material.SetTextureScale。
         */
        LineTextureMode[LineTextureMode["RepeatPerSegment"] = 3] = "RepeatPerSegment";
    })(LineTextureMode = feng3d.LineTextureMode || (feng3d.LineTextureMode = {}));
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    /**
     * The line renderer is used to draw free-floating lines in 3D space.
     *
     * 线渲染器用于在三维空间中绘制自由浮动的线。
     */
    var LineRenderer = /** @class */ (function (_super) {
        __extends(LineRenderer, _super);
        function LineRenderer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.geometry = new feng3d.Geometry();
            _this.material = feng3d.Material.getDefault("Line_Trail-Material");
            /**
             * Connect the start and end positions of the line together to form a continuous loop.
             *
             * 将直线的起点和终点连接在一起，形成一个连续的回路。
             */
            _this.loop = false;
            /**
             * 是否使用曲线。
             */
            _this.useCurve = false;
            /**
             * 曲线采样频率。
             */
            _this.curveSamples = 10;
            /**
             * 顶点列表。
             */
            _this.positions = [];
            /**
             * 曲线宽度。
             */
            _this.lineWidth = feng3d.serialization.setValue(new feng3d.MinMaxCurve(), { between0And1: true, curveMultiplier: 0.1, mode: feng3d.MinMaxCurveMode.Curve });
            /**
             *
             * 线条颜色。
             */
            _this.lineColor = feng3d.serialization.setValue(new feng3d.MinMaxGradient(), { mode: feng3d.MinMaxGradientMode.Gradient });
            /**
             * Set this to a value greater than 0, to get rounded corners between each segment of the line.
             *
             * 将此值设置为大于0的值，以在直线的每个线段之间获取圆角。
             */
            _this.numCornerVertices = 0;
            /**
             * Set this to a value greater than 0, to get rounded corners on each end of the line.
             *
             * 将此值设置为大于0的值，以在行的两端获得圆角。
             */
            _this.numCapVertices = 0;
            /**
             * Select whether the line will face the camera, or the orientation of the Transform Component.
             *
             * 选择线是否将面对摄像机，或转换组件的方向。
             */
            // alignment = LineAlignment.View;
            _this.alignment = feng3d.LineAlignment.TransformZ;
            /**
             * Choose whether the U coordinate of the line texture is tiled or stretched.
             *
             * 选择是平铺还是拉伸线纹理的U坐标。
             */
            _this.textureMode = feng3d.LineTextureMode.Stretch;
            /**
             * Apply a shadow bias to prevent self-shadowing artifacts. The specified value is the proportion of the line width at each segment.
             *
             * 应用阴影偏差以防止自阴影伪影。指定的值是每段线宽的比例。
             */
            _this.shadowBias = 0.5;
            /**
             * Configures a line to generate Normals and Tangents. With this data, Scene lighting can affect the line via Normal Maps and the Unity Standard Shader, or your own custom-built Shaders.
             *
             * 是否自动生成灯光所需的法线与切线。
             */
            _this.generateLightingData = false;
            /**
             * If enabled, the lines are defined in world space.
             *
             * 如果启用，则在世界空间中定义线。
             */
            _this.useWorldSpace = false;
            return _this;
        }
        LineRenderer_1 = LineRenderer;
        Object.defineProperty(LineRenderer.prototype, "widthCurve", {
            /**
             * Set the curve describing the width of the line at various points along its length.
             *
             * 设置曲线，以描述沿线长度在各个点处的线宽。
             */
            get: function () {
                return this.lineWidth.curve;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LineRenderer.prototype, "widthMultiplier", {
            /**
             * Set an overall multiplier that is applied to the LineRenderer.widthCurve to get the final width of the line.
             *
             * 设置一个应用于LineRenderer.widthCurve的总乘数，以获取线的最终宽度。
             */
            get: function () {
                return this.lineWidth.curveMultiplier;
            },
            set: function (v) {
                this.lineWidth.curveMultiplier = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LineRenderer.prototype, "colorGradient", {
            /**
             * Set the color gradient describing the color of the line at various points along its length.
             *
             * 设置颜色渐变，以描述线条沿其长度的各个点的颜色。
             */
            get: function () {
                return this.lineColor.gradient;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LineRenderer.prototype, "endColor", {
            /**
             * Set the color at the end of the line.
             *
             * 设置线尾颜色。
             */
            get: function () {
                var color4 = new feng3d.Color4();
                var color3 = this.colorGradient.colorKeys[this.colorGradient.colorKeys.length - 1];
                var alpha = this.colorGradient.alphaKeys[this.colorGradient.alphaKeys.length - 1];
                color4.setTo(color3.color.r, color3.color.g, color3.color.b, alpha.alpha);
                return color4;
            },
            set: function (v) {
                this.colorGradient.alphaKeys[this.colorGradient.alphaKeys.length - 1].alpha = v.a;
                this.colorGradient.colorKeys[this.colorGradient.colorKeys.length - 1].color.setTo(v.r, v.g, v.b);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LineRenderer.prototype, "endWidth", {
            /**
             * Set the width at the end of the line.
             *
             * 设置线尾宽度。
             */
            get: function () {
                return this.widthCurve.keys[this.widthCurve.keys.length - 1].value;
            },
            set: function (v) {
                this.widthCurve.keys[this.widthCurve.keys.length - 1].value = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LineRenderer.prototype, "positionCount", {
            /**
             * Set/get the number of vertices.
             *
             * 设置/获取顶点数。
             */
            get: function () {
                return this.positions.length;
            },
            set: function (v) {
                this.positions.length = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LineRenderer.prototype, "startColor", {
            /**
             * Set the color at the start of the line.
             *
             * 设置行线头颜色。
             */
            get: function () {
                var color4 = new feng3d.Color4();
                var color3 = this.colorGradient.colorKeys[0];
                var alpha = this.colorGradient.alphaKeys[0];
                color4.setTo(color3.color.r, color3.color.g, color3.color.b, alpha.alpha);
                return color4;
            },
            set: function (v) {
                this.colorGradient.alphaKeys[0].alpha = v.a;
                this.colorGradient.colorKeys[0].color.setTo(v.r, v.g, v.b);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LineRenderer.prototype, "startWidth", {
            /**
             * Set the width at the start of the line.
             *
             * 设置线头宽度
             */
            get: function () {
                return this.widthCurve.keys[0].value * this.widthMultiplier;
            },
            set: function (v) {
                this.widthCurve.keys[0].value = v / this.widthMultiplier;
            },
            enumerable: true,
            configurable: true
        });
        LineRenderer.prototype.beforeRender = function (renderAtomic, scene, camera) {
            this.geometry.clear();
            this.BakeMesh(this.geometry, camera, false);
            renderAtomic.shaderMacro.HAS_a_color = true;
            _super.prototype.beforeRender.call(this, renderAtomic, scene, camera);
        };
        /**
         * Creates a snapshot of LineRenderer and stores it in mesh.
         *
         * 创建LineRenderer的快照并将其存储在网格中。
         *
         * @param mesh	A static mesh that will receive the snapshot of the line.
         * @param camera	The camera used for determining which way camera-space lines will face.
         * @param useTransform	Include the rotation and scale of the Transform in the baked mesh.
         */
        LineRenderer.prototype.BakeMesh = function (mesh, camera, useTransform) {
            var positions = this.positions.concat();
            // 移除重复点
            positions = positions.filter(function (p, i) { if (i == 0)
                return true; if (p.subTo(positions[i - 1]).lengthSquared < 0.0001)
                return false; return true; });
            if (positions.length < 2)
                return;
            var textureMode = this.textureMode;
            var loop = this.loop;
            var lineWidth = this.lineWidth;
            var alignment = this.alignment;
            var colorGradient = this.colorGradient;
            // 计算摄像机本地坐标
            var cameraPosition = this.transform.worldToLocalMatrix.transformVector(camera.transform.worldPosition);
            // 计算线条总长度
            var totalLength = LineRenderer_1.calcTotalLength(positions, loop);
            // 计算结点所在线段位置
            var rateAtLines = LineRenderer_1.calcRateAtLines(positions, loop, textureMode);
            if (this.useCurve) {
                LineRenderer_1.calcPositionsToCurve(positions, loop, rateAtLines, loop ? (this.curveSamples * this.positionCount) : (this.positionCount + (this.curveSamples - 1) * (this.positionCount - 1)));
            }
            // 计算结点的顶点
            var positionVertex = LineRenderer_1.calcPositionVertex(positions, loop, rateAtLines, lineWidth, alignment, cameraPosition);
            // 计算线条拐点接缝
            LineRenderer_1.calcCornerVertices(this.numCornerVertices, positionVertex);
            // 计算两端帽子
            if (!loop) {
                LineRenderer_1.calcCapVertices(this.numCapVertices, positionVertex, true);
                LineRenderer_1.calcCapVertices(this.numCapVertices, positionVertex, false);
            }
            // 计算网格
            LineRenderer_1.calcMesh(positionVertex, textureMode, colorGradient, totalLength, mesh);
        };
        /**
         * Get the position of a vertex in the line.
         *
         * 获取直线在顶点的位置。
         *
         * @param index	The index of the position to retrieve.
         */
        LineRenderer.prototype.GetPosition = function (index) {
            return this.positions[index];
        };
        /**
         * Get the positions of all vertices in the line.
         *
         * 获取行中所有顶点的位置。
         *
         * @param positions	The array of positions to retrieve. The array passed should be of at least positionCount in size.
         *
         * @returns How many positions were actually stored in the output array.
         */
        LineRenderer.prototype.GetPositions = function (positions) {
            if (positions === void 0) { positions = []; }
            positions.length = this.positions.length;
            for (var i = 0; i < this.positions.length; i++) {
                positions[i] = positions[i] || new feng3d.Vector3();
                positions[i].copy(this.positions[i]);
            }
            return positions;
        };
        /**
         * Set the position of a vertex in the line.
         *
         * 设置顶点在直线中的位置。
         *
         * @param index	Which position to set.
         * @param position	The new position.
         */
        LineRenderer.prototype.setPosition = function (index, position) {
            this.positions[index].copy(position);
        };
        /**
         * Set the positions of all vertices in the line.
         *
         * 设置线中所有顶点的位置。
         *
         * @param positions	The array of positions to set.
         */
        LineRenderer.prototype.SetPositions = function (positions) {
            this.positions.length = positions.length;
            for (var i = 0; i < positions.length; i++) {
                this.positions[i] = this.positions[i] || new feng3d.Vector3();
                this.positions[i].copy(positions[i]);
            }
        };
        /**
         * 计算网格
         *
         * @param positionVertex 顶点列表
         * @param rateAtLines 顶点所在线条位置
         * @param textureMode 纹理模式
         * @param totalLength 线条总长度
         * @param mesh 保存网格数据的对象
         * @param numCornerVertices 将此值设置为大于0的值，以在行的两端获得圆角。
         * @param numCornerVertices 将此值设置为大于0的值，以在直线的每个线段之间获取圆角。
         * @param loop 是否为换线
         */
        LineRenderer.calcMesh = function (positionVertex, textureMode, colorGradient, totalLength, mesh) {
            //
            var a_positions = [];
            var a_uvs = [];
            var a_colors = [];
            var indices = [];
            //
            // 摄像机在该对象空间内的坐标
            for (var i = 0, n = positionVertex.length; i < n; i++) {
                //
                var vertex = positionVertex[i];
                //
                var offset0 = vertex.vertexs[0];
                var offset1 = vertex.vertexs[1];
                //
                var rateAtLine = vertex.rateAtLine;
                // 颜色
                var currentColor = colorGradient.getValue(rateAtLine);
                //
                a_positions.push(offset0.x, offset0.y, offset0.z, offset1.x, offset1.y, offset1.z);
                a_colors.push(currentColor.r, currentColor.g, currentColor.b, currentColor.a, currentColor.r, currentColor.g, currentColor.b, currentColor.a);
                // 计算UV
                if (textureMode == feng3d.LineTextureMode.Stretch) {
                    a_uvs.push(rateAtLine, 1, rateAtLine, 0);
                }
                else if (textureMode == feng3d.LineTextureMode.Tile) {
                    a_uvs.push(rateAtLine * totalLength, 1, rateAtLine * totalLength, 0);
                }
                else if (textureMode == feng3d.LineTextureMode.DistributePerSegment) {
                    a_uvs.push(rateAtLine, 1, rateAtLine, 0);
                }
                else if (textureMode == feng3d.LineTextureMode.RepeatPerSegment) {
                    a_uvs.push(i, 1, i, 0);
                }
                // 计算索引
                if (i > 0) {
                    indices.push((i - 1) * 2, i * 2, (i - 1) * 2 + 1);
                    indices.push((i - 1) * 2 + 1, i * 2, i * 2 + 1);
                }
            }
            mesh.positions = a_positions;
            mesh.uvs = a_uvs;
            mesh.colors = a_colors;
            mesh.indices = indices;
            //
            mesh.normals = feng3d.geometryUtils.createVertexNormals(mesh.indices, mesh.positions, true);
            mesh.tangents = feng3d.geometryUtils.createVertexTangents(mesh.indices, mesh.positions, mesh.uvs, true);
        };
        /**
         * 计算线条拐点接缝
         *
         * @param numCornerVertices 接缝顶点数量
         * @param positionVertex 结点信息列表
         */
        LineRenderer.calcCornerVertices = function (numCornerVertices, positionVertex) {
            var numNode = positionVertex.length;
            if (numNode < 3 || numCornerVertices == 0)
                return;
            var positionVertex0 = positionVertex;
            positionVertex = positionVertex.concat();
            positionVertex0.length = 0;
            positionVertex0.push(positionVertex[0]);
            for (var i = 0; i < numNode - 2; i++) {
                var preVertex = positionVertex[i];
                var curVertex = positionVertex[i + 1];
                var nexVertex = positionVertex[i + 2];
                //
                var width = curVertex.width;
                //
                var prePosition = preVertex.position;
                var curPosition = curVertex.position;
                var nexPosition = nexVertex.position;
                // 计算前后切线
                var preTanget = curPosition.subTo(prePosition).normalize();
                var nexTanget = nexPosition.subTo(curPosition).normalize();
                // 计算内线方向
                var insideDir = preTanget.negateTo().add(nexTanget).normalize();
                // 半夹角cos
                var halfcos = insideDir.dot(nexTanget);
                // 半夹角sin
                var halfsin = Math.sqrt(1 - halfcos * halfcos);
                // 计算内线点离顶点距离
                var insideDistance = 0.5 * width / halfsin;
                // 计算内线点
                var insidePosition = curPosition.addTo(insideDir.scaleNumberTo(insideDistance));
                // 计算补充弧线的两端坐标
                var startPosition = preTanget.scaleNumberTo(halfcos).add(insideDir).negate().normalize().scaleNumber(width).add(insidePosition);
                var endPosition = nexTanget.scaleNumberTo(halfcos).sub(insideDir).normalize().scaleNumber(width).add(insidePosition);
                // 计算内线点是否为第一个点
                var insideIsFirst = insidePosition.subTo(startPosition).cross(preTanget).dot(curVertex.normal) > 0;
                // 计算起点
                var startVertex = curVertex;
                startVertex.vertexs = [insidePosition, startPosition];
                if (!insideIsFirst) {
                    startVertex.vertexs = [startPosition, insidePosition];
                }
                startVertex.position = startVertex.vertexs[0].addTo(startVertex.vertexs[1]).scaleNumber(0.5);
                startVertex.tangent = preTanget;
                // 计算终点
                var endVertex = {
                    position: insidePosition.addTo(endPosition).scaleNumber(0.5),
                    vertexs: [insidePosition, endPosition],
                    width: width,
                    tangent: nexTanget,
                    normal: curVertex.normal,
                    rateAtLine: curVertex.rateAtLine
                };
                if (!insideIsFirst) {
                    endVertex.vertexs = [endPosition, insidePosition];
                }
                positionVertex0.push(startVertex);
                // 计算中间补充夹角
                var outAngle = Math.acos(preTanget.dot(nexTanget));
                var angleStep = outAngle / (numCornerVertices);
                var startLineDir = startPosition.subTo(insidePosition).normalize();
                for (var j = 1; j < numCornerVertices; j++) {
                    var curAngle = angleStep * j;
                    var curOutSidePosition = insidePosition.addTo(startLineDir.scaleNumberTo(Math.cos(curAngle) * width).add(preTanget.scaleNumberTo(Math.sin(curAngle) * width)));
                    var addNewVertex = {
                        position: insidePosition.addTo(curOutSidePosition).scaleNumber(0.5),
                        vertexs: [insidePosition, curOutSidePosition],
                        width: width,
                        tangent: preTanget.lerpNumberTo(nexTanget, 1 - (j / numCornerVertices)),
                        normal: curVertex.normal,
                        rateAtLine: curVertex.rateAtLine
                    };
                    if (!insideIsFirst) {
                        addNewVertex.vertexs = [curOutSidePosition, insidePosition];
                    }
                    positionVertex0.push(addNewVertex);
                }
                //
                positionVertex0.push(endVertex);
            }
            //
            positionVertex0.push(positionVertex[numNode - 1]);
        };
        /**
         * 计算线条帽子顶点
         *
         * @param numCapVertices 帽子顶点数量
         * @param positionVertex 结点信息列表
         * @param ishead 是否为线条头部
         */
        LineRenderer.calcCapVertices = function (numCapVertices, positionVertex, ishead) {
            if (numCapVertices < 1)
                return;
            var step = Math.PI / (numCapVertices + 1);
            var vertex = positionVertex[0];
            if (!ishead)
                vertex = positionVertex[positionVertex.length - 1];
            var rateAtLine = vertex.rateAtLine;
            var normal = vertex.normal.clone();
            var tangent = vertex.tangent;
            if (ishead)
                tangent = tangent.negateTo();
            var offset0 = vertex.vertexs[0];
            var offset1 = vertex.vertexs[1];
            var center = offset0.addTo(offset1).scaleNumber(0.5);
            var width = offset0.distance(offset1);
            for (var i = 0; i <= numCapVertices + 1; i++) {
                var angle = step * i;
                var addPoint = center.addTo(offset0.subTo(offset1).scaleNumber(0.5 * Math.cos(angle))).add(tangent.scaleNumberTo(Math.sin(angle) * width / 2));
                var newVertex = {
                    width: vertex.width / 2,
                    position: addPoint.addTo(center).scaleNumber(0.5),
                    rateAtLine: rateAtLine,
                    vertexs: [addPoint, center],
                    tangent: tangent,
                    normal: normal,
                };
                // 添加
                if (ishead)
                    positionVertex.unshift(newVertex);
                else
                    positionVertex.push(newVertex);
            }
        };
        /**
         * 计算结点的三角形顶点列表
         *
         * @param positions 结点列表
         * @param loop 是否成换线
         * @param rateAtLines 结点所在线条位置
         * @param lineWidth 线条宽度曲线
         * @param alignment 朝向方式
         * @param cameraPosition 摄像机局部坐标
         */
        LineRenderer.calcPositionVertex = function (positions, loop, rateAtLines, lineWidth, alignment, cameraPosition) {
            // 
            var positionVertex = [];
            if (positions.length == 0) {
                return positionVertex;
            }
            // 处理两端循环情况
            if (loop) {
                positions.unshift(positions[positions.length - 1]);
                positions.push(positions[1]);
                positions.push(positions[2]);
            }
            else {
                positions.unshift(positions[0]);
                positions.push(positions[positions.length - 1]);
            }
            //
            var positionCount = positions.length;
            //
            // 摄像机在该对象空间内的坐标
            for (var i = 0; i < positionCount - 2; i++) {
                // 顶点索引
                var prePosition = positions[i];
                var currentPosition = positions[i + 1];
                var nextPosition = positions[i + 2];
                //
                // 当前所在线条，0表示起点，1表示终点
                var rateAtLine = rateAtLines[i];
                // 线条宽度
                var currentLineWidth = lineWidth.getValue(rateAtLine);
                // 切线，线条方向
                var tangent = new feng3d.Vector3(1, 0, 0);
                var tangent0 = currentPosition.subTo(prePosition).normalize();
                var tangent1 = nextPosition.subTo(currentPosition).normalize();
                tangent.copy(tangent0).add(tangent1).normalize();
                // 法线，面朝向
                var normal = new feng3d.Vector3(0, 0, -1);
                if (alignment == feng3d.LineAlignment.View) {
                    normal.copy(cameraPosition).sub(currentPosition).normalize();
                }
                else if (alignment == feng3d.LineAlignment.TransformZ) {
                    normal.set(0, 0, -1);
                }
                // 使用强制面向Z轴或者摄像机，会出现 与 线条方向一致的情况
                if (tangent.isParallel(normal)) {
                    // 强制修改切线方向
                    tangent.set(1, 0, 0);
                    if (tangent.isParallel(normal))
                        tangent.set(0, 1, 0);
                    // 重新计算与法线垂直的切线
                    var tempTN = tangent.crossTo(normal);
                    tangent.copy(normal).cross(tempTN).normalize();
                }
                // 用于计算线条中点生成两个点的偏移量
                var offset = new feng3d.Vector3();
                offset.copy(tangent).cross(normal).normalize(currentLineWidth / 2);
                // 保持线条宽度
                var sin = Math.sqrt(1 - Math.pow(offset.clone().normalize().dot(tangent0), 2));
                sin = Math.clamp(sin, 0.2, 5);
                offset.scaleNumber(1 / sin);
                //
                var offset0 = currentPosition.clone().add(offset);
                var offset1 = currentPosition.clone().sub(offset);
                //
                positionVertex[i] = {
                    width: currentLineWidth,
                    position: currentPosition.clone(),
                    vertexs: [offset0, offset1],
                    rateAtLine: rateAtLine,
                    tangent: tangent,
                    normal: normal,
                };
            }
            return positionVertex;
        };
        /**
         * 计算线条总长度
         *
         * @param positions 顶点列表
         * @param loop 是否循环
         */
        LineRenderer.calcTotalLength = function (positions, loop) {
            var total = 0;
            var length = positions.length;
            for (var i = 0, n = length - 1; i < n; i++) {
                total += positions[i + 1].distance(positions[i]);
            }
            if (loop && length > 0) {
                total += positions[length - 1].distance(positions[0]);
            }
            return total;
        };
        /**
         * 计算结点所在线段位置
         *
         * @param positions 顶点列表
         * @param loop 是否循环
         */
        LineRenderer.calcRateAtLines = function (positions, loop, textureMode) {
            // 结点所在线段位置
            var rateAtLines = [0];
            // 线条总长度
            var totalLength = 0;
            var positionCount = positions.length;
            for (var i = 0, n = positionCount - 1; i < n; i++) {
                totalLength += positions[i + 1].distance(positions[i]);
                rateAtLines[i + 1] = totalLength;
            }
            if (loop && positionCount > 0) {
                totalLength += positions[positionCount - 1].distance(positions[0]);
                rateAtLines[positionCount] = totalLength;
            }
            // 计算结点所在线段位置
            rateAtLines = rateAtLines.map(function (v, i) {
                // 计算UV
                if (textureMode == feng3d.LineTextureMode.Stretch || textureMode == feng3d.LineTextureMode.Tile) {
                    return v / totalLength;
                }
                return i / (loop ? positionCount : (positionCount - 1));
            });
            return rateAtLines;
        };
        /**
         * 拟合线段为曲线
         *
         * @param positions 点列表
         * @param loop 是否为环线
         * @param rateAtLines 点在线条中的位置
         * @param numSamples 采样次数
         */
        LineRenderer.calcPositionsToCurve = function (positions, loop, rateAtLines, numSamples) {
            if (numSamples === void 0) { numSamples = 100; }
            var xCurve = new feng3d.AnimationCurve();
            var yCurve = new feng3d.AnimationCurve();
            var zCurve = new feng3d.AnimationCurve();
            xCurve.keys.length = 0;
            yCurve.keys.length = 0;
            zCurve.keys.length = 0;
            var position;
            var length = positions.length;
            for (var i_1 = 0; i_1 < length; i_1++) {
                position = positions[i_1];
                // 计算切线
                var prei = i_1 - 1;
                var nexti = i_1 + 1;
                var pretime = rateAtLines[prei];
                var nexttime = rateAtLines[nexti];
                if (i_1 == 0) {
                    prei = 0;
                    pretime = 0;
                    if (loop) {
                        prei = length - 1;
                    }
                }
                else if (i_1 == length - 1) {
                    nexti = length - 1;
                    nexttime = 1;
                    if (loop) {
                        nexti = 0;
                    }
                }
                var tangent = positions[nexti].subTo(positions[prei]).scaleNumber(1 / (nexttime - pretime));
                xCurve.keys[i_1] = { time: rateAtLines[i_1], value: position.x, inTangent: tangent.x, outTangent: tangent.x };
                yCurve.keys[i_1] = { time: rateAtLines[i_1], value: position.y, inTangent: tangent.y, outTangent: tangent.y };
                zCurve.keys[i_1] = { time: rateAtLines[i_1], value: position.z, inTangent: tangent.z, outTangent: tangent.z };
            }
            if (loop && length > 0) {
                position = positions[0];
                xCurve.keys[length] = { time: 1, value: position.x, inTangent: xCurve.keys[0].inTangent, outTangent: xCurve.keys[0].outTangent };
                yCurve.keys[length] = { time: 1, value: position.y, inTangent: yCurve.keys[0].inTangent, outTangent: yCurve.keys[0].outTangent };
                zCurve.keys[length] = { time: 1, value: position.z, inTangent: zCurve.keys[0].inTangent, outTangent: zCurve.keys[0].outTangent };
            }
            // 重新计算 positions以及rateAtLines
            positions.length = 0;
            rateAtLines.length = 0;
            if (loop)
                numSamples = numSamples + 1;
            var step = 1 / (numSamples - 1);
            for (var i = 0, currentStep = 0; i < numSamples; i++, currentStep += step) {
                var x = xCurve.getValue(currentStep);
                var y = yCurve.getValue(currentStep);
                var z = zCurve.getValue(currentStep);
                positions[i] = new feng3d.Vector3(x, y, z);
                rateAtLines[i] = currentStep;
            }
            if (loop && length > 0) {
                positions.pop();
            }
        };
        var LineRenderer_1;
        __decorate([
            feng3d.oav({ exclude: true })
        ], LineRenderer.prototype, "geometry", void 0);
        __decorate([
            feng3d.oav({ tooltip: "将直线的起点和终点连接在一起，形成一个连续的回路。" }),
            feng3d.serialize
        ], LineRenderer.prototype, "loop", void 0);
        __decorate([
            feng3d.oav({ tooltip: "是否使用曲线。" }),
            feng3d.serialize
        ], LineRenderer.prototype, "useCurve", void 0);
        __decorate([
            feng3d.oav({ tooltip: "曲线采样频率。" }),
            feng3d.serialize
        ], LineRenderer.prototype, "curveSamples", void 0);
        __decorate([
            feng3d.oav({ component: "OAVArray", tooltip: "顶点列表。", componentParam: { defaultItem: function () { return new feng3d.Vector3(); } } }),
            feng3d.serialize
        ], LineRenderer.prototype, "positions", void 0);
        __decorate([
            feng3d.oav({ tooltip: "曲线宽度。" }),
            feng3d.serialize
        ], LineRenderer.prototype, "lineWidth", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ tooltip: "线条颜色。" })
        ], LineRenderer.prototype, "lineColor", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ tooltip: "将此值设置为大于0的值，以在直线的每个线段之间获取圆角。" })
        ], LineRenderer.prototype, "numCornerVertices", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ tooltip: "将此值设置为大于0的值，以在直线的每个线段之间获取圆角。" })
        ], LineRenderer.prototype, "numCapVertices", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ component: "OAVEnum", tooltip: "选择线是否将面对摄像机，或转换组件的方向。", componentParam: { enumClass: feng3d.LineAlignment } })
        ], LineRenderer.prototype, "alignment", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ component: "OAVEnum", tooltip: "选择是平铺还是拉伸线纹理的U坐标。", componentParam: { enumClass: feng3d.LineTextureMode } })
        ], LineRenderer.prototype, "textureMode", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ tooltip: "应用阴影偏差以防止自阴影伪影。指定的值是每段线宽的比例。" })
        ], LineRenderer.prototype, "shadowBias", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ tooltip: "是否自动生成灯光所需的法线与切线。" })
        ], LineRenderer.prototype, "generateLightingData", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ tooltip: "如果启用，则在世界空间中定义线。" })
        ], LineRenderer.prototype, "useWorldSpace", void 0);
        LineRenderer = LineRenderer_1 = __decorate([
            feng3d.AddComponentMenu("Effects/LineRenderer")
        ], LineRenderer);
        return LineRenderer;
    }(feng3d.Renderer));
    feng3d.LineRenderer = LineRenderer;
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    /**
     * The trail renderer is used to make trails behind objects in the Scene as they move about.
     *
     * 线渲染器用于在三维空间中绘制自由浮动的线。
     */
    var TrailRenderer = /** @class */ (function (_super) {
        __extends(TrailRenderer, _super);
        function TrailRenderer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.geometry = new feng3d.Geometry();
            _this.material = feng3d.Material.getDefault("Line_Trail-Material");
            /**
             * 结点列表。
             */
            _this.positions = [];
            /**
             * 曲线宽度。
             */
            _this.lineWidth = feng3d.serialization.setValue(new feng3d.MinMaxCurve(), { between0And1: true, curveMultiplier: 0.1, mode: feng3d.MinMaxCurveMode.Curve });
            /**
             * How long does the trail take to fade out.
             */
            _this.time = 5;
            /**
             * Set the minimum distance the trail can travel before a new vertex is added to it.
             */
            _this.minVertexDistance = 0.1;
            /**
             * Does the GameObject of this Trail Renderer auto destruct?
             */
            _this.autodestruct = false;
            /**
             * Creates trails when the GameObject moves.
             */
            _this.emitting = true;
            /**
             *
             * 线条颜色。
             */
            _this.lineColor = feng3d.serialization.setValue(new feng3d.MinMaxGradient(), { mode: feng3d.MinMaxGradientMode.Gradient });
            /**
             * Set this to a value greater than 0, to get rounded corners between each segment of the line.
             *
             * 将此值设置为大于0的值，以在直线的每个线段之间获取圆角。
             */
            _this.numCornerVertices = 0;
            /**
             * Set this to a value greater than 0, to get rounded corners on each end of the line.
             *
             * 将此值设置为大于0的值，以在行的两端获得圆角。
             */
            _this.numCapVertices = 0;
            /**
             * Select whether the line will face the camera, or the orientation of the Transform Component.
             *
             * 选择线是否将面对摄像机，或转换组件的方向。
             */
            // alignment = LineAlignment.View;
            _this.alignment = feng3d.LineAlignment.TransformZ;
            /**
             * Choose whether the U coordinate of the line texture is tiled or stretched.
             *
             * 选择是平铺还是拉伸线纹理的U坐标。
             */
            _this.textureMode = feng3d.LineTextureMode.Stretch;
            /**
             * Configures a line to generate Normals and Tangents. With this data, Scene lighting can affect the line via Normal Maps and the Unity Standard Shader, or your own custom-built Shaders.
             *
             * 是否自动生成灯光所需的法线与切线。
             */
            _this.generateLightingData = false;
            /**
             * Apply a shadow bias to prevent self-shadowing artifacts. The specified value is the proportion of the line width at each segment.
             *
             * 应用阴影偏差以防止自阴影伪影。指定的值是每段线宽的比例。
             */
            _this.shadowBias = 0.5;
            /**
             * 上次结点位置
             */
            _this._preworldPos = null;
            return _this;
        }
        Object.defineProperty(TrailRenderer.prototype, "widthCurve", {
            /**
             * Set the curve describing the width of the line at various points along its length.
             *
             * 设置曲线，以描述沿线长度在各个点处的线宽。
             */
            get: function () {
                return this.lineWidth.curve;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TrailRenderer.prototype, "widthMultiplier", {
            /**
             * Set an overall multiplier that is applied to the LineRenderer.widthCurve to get the final width of the line.
             *
             * 设置一个应用于LineRenderer.widthCurve的总乘数，以获取线的最终宽度。
             */
            get: function () {
                return this.lineWidth.curveMultiplier;
            },
            set: function (v) {
                this.lineWidth.curveMultiplier = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TrailRenderer.prototype, "colorGradient", {
            /**
             * Set the color gradient describing the color of the line at various points along its length.
             *
             * 设置颜色渐变，以描述线条沿其长度的各个点的颜色。
             */
            get: function () {
                return this.lineColor.gradient;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TrailRenderer.prototype, "endColor", {
            /**
             * Set the color at the end of the line.
             *
             * 设置线尾颜色。
             */
            get: function () {
                var color4 = new feng3d.Color4();
                var color3 = this.colorGradient.colorKeys[this.colorGradient.colorKeys.length - 1];
                var alpha = this.colorGradient.alphaKeys[this.colorGradient.alphaKeys.length - 1];
                color4.setTo(color3.color.r, color3.color.g, color3.color.b, alpha.alpha);
                return color4;
            },
            set: function (v) {
                this.colorGradient.alphaKeys[this.colorGradient.alphaKeys.length - 1].alpha = v.a;
                this.colorGradient.colorKeys[this.colorGradient.colorKeys.length - 1].color.setTo(v.r, v.g, v.b);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TrailRenderer.prototype, "endWidth", {
            /**
             * Set the width at the end of the line.
             *
             * 设置线尾宽度。
             */
            get: function () {
                return this.widthCurve.keys[this.widthCurve.keys.length - 1].value * this.widthMultiplier;
            },
            set: function (v) {
                this.widthCurve.keys[this.widthCurve.keys.length - 1].value = v / this.widthMultiplier;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TrailRenderer.prototype, "positionCount", {
            /**
             * Set/get the number of vertices.
             *
             * 设置/获取顶点数。
             */
            get: function () {
                return this.positions.length;
            },
            set: function (v) {
                this.positions.length = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TrailRenderer.prototype, "startColor", {
            /**
             * Set the color at the start of the line.
             *
             * 设置行线头颜色。
             */
            get: function () {
                var color4 = new feng3d.Color4();
                var color3 = this.colorGradient.colorKeys[0];
                var alpha = this.colorGradient.alphaKeys[0];
                color4.setTo(color3.color.r, color3.color.g, color3.color.b, alpha.alpha);
                return color4;
            },
            set: function (v) {
                this.colorGradient.alphaKeys[0].alpha = v.a;
                this.colorGradient.colorKeys[0].color.setTo(v.r, v.g, v.b);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TrailRenderer.prototype, "startWidth", {
            /**
             * Set the width at the start of the line.
             *
             * 设置线头宽度
             */
            get: function () {
                return this.widthCurve.keys[0].value * this.widthMultiplier;
            },
            set: function (v) {
                this.widthCurve.keys[0].value = v / this.widthMultiplier;
            },
            enumerable: true,
            configurable: true
        });
        TrailRenderer.prototype.beforeRender = function (renderAtomic, scene, camera) {
            this.geometry.clear();
            this.BakeMesh(this.geometry, camera, false);
            renderAtomic.shaderMacro.HAS_a_color = true;
            _super.prototype.beforeRender.call(this, renderAtomic, scene, camera);
        };
        /**
         * 每帧执行
         */
        TrailRenderer.prototype.update = function (interval) {
            var _this = this;
            if (this.emitting) {
                var currentPosition = this.transform.worldPosition.clone();
                // 初始化一个必定添加顶点的值
                var moveDistanceSquared = this.minVertexDistance * this.minVertexDistance * 2;
                if (this._preworldPos)
                    moveDistanceSquared = currentPosition.distanceSquared(this._preworldPos);
                // 移动新增结点
                if (moveDistanceSquared >= this.minVertexDistance * this.minVertexDistance) {
                    this.AddPosition(currentPosition);
                    this._preworldPos = currentPosition;
                }
            }
            // 移除死亡结点
            var nowTime = Date.now();
            this.positions = this.positions.filter(function (v) { return ((nowTime - v.birthTime) < _this.time * 1000); });
            //
            if (this.positions.length == 0) {
                this._preworldPos == null;
            }
        };
        /**
         * Creates a snapshot of LineRenderer and stores it in mesh.
         *
         * 创建LineRenderer的快照并将其存储在网格中。
         *
         * @param mesh	A static mesh that will receive the snapshot of the line.
         * @param camera	The camera used for determining which way camera-space lines will face.
         * @param useTransform	Include the rotation and scale of the Transform in the baked mesh.
         */
        TrailRenderer.prototype.BakeMesh = function (mesh, camera, useTransform) {
            var _this = this;
            var positions = this.positions.map(function (v) { return v.position; });
            if (positions.length < 2)
                return;
            var textureMode = this.textureMode;
            var loop = false;
            var lineWidth = this.lineWidth;
            var alignment = this.alignment;
            var colorGradient = this.colorGradient;
            // 计算摄像机世界坐标
            var cameraPosition = camera.transform.worldPosition;
            // 计算线条总长度
            var totalLength = feng3d.LineRenderer.calcTotalLength(positions, loop);
            // 计算结点所在线段位置
            var rateAtLines = feng3d.LineRenderer.calcRateAtLines(positions, loop, textureMode);
            // 计算结点的顶点
            var positionVertex = feng3d.LineRenderer.calcPositionVertex(positions, loop, rateAtLines, lineWidth, alignment, cameraPosition);
            // 计算线条拐点接缝
            feng3d.LineRenderer.calcCornerVertices(this.numCornerVertices, positionVertex);
            // 计算两端帽子
            if (!loop) {
                feng3d.LineRenderer.calcCapVertices(this.numCapVertices, positionVertex, true);
                feng3d.LineRenderer.calcCapVertices(this.numCapVertices, positionVertex, false);
            }
            // 世界坐标转换为局部坐标
            positionVertex.forEach(function (v) {
                v.vertexs.forEach(function (ver) {
                    _this.transform.worldToLocalMatrix.transformVector(ver, ver);
                });
            });
            // 计算网格
            feng3d.LineRenderer.calcMesh(positionVertex, textureMode, colorGradient, totalLength, mesh);
        };
        /**
         * Adds a position to the trail.
         *
         * @param position	The position to add to the trail.
         */
        TrailRenderer.prototype.AddPosition = function (position) {
            this.positions.unshift({ position: position, birthTime: Date.now() });
        };
        /**
         * Add an array of positions to the trail.
         *
         * All points inside a TrailRenderer store a timestamp when they are born. This, together with the TrailRenderer.time property, is used to determine when they will be removed. For trails to disappear smoothly, each position must have a unique, increasing timestamp. When positions are supplied from script and the current time is identical for multiple points, position timestamps are adjusted to interpolate smoothly between the timestamp of the newest existing point in the trail and the current time.
         *
         * @param positions	The positions to add to the trail.
         */
        TrailRenderer.prototype.AddPositions = function (positions) {
            var preTime = Date.now();
            if (this.positions.length > 0)
                preTime = this.positions[this.positions.length - 1].birthTime;
            for (var i = 0, n = positions.length; i < n; i++) {
                this.positions.unshift({ position: positions[i], birthTime: Math.lerp(preTime, Date.now(), (i + 1) / n) });
            }
        };
        /**
         * Removes all points from the TrailRenderer. Useful for restarting a trail from a new position.
         */
        TrailRenderer.prototype.Clear = function () {
            this.positions.length = 0;
            this._preworldPos = null;
        };
        /**
         * Get the position of a vertex in the line.
         *
         * 获取直线在顶点的位置。
         *
         * @param index	The index of the position to retrieve.
         */
        TrailRenderer.prototype.GetPosition = function (index) {
            return this.positions[index];
        };
        /**
         * Get the positions of all vertices in the line.
         *
         * 获取行中所有顶点的位置。
         *
         * @param positions	The array of positions to retrieve. The array passed should be of at least positionCount in size.
         *
         * @returns How many positions were actually stored in the output array.
         */
        TrailRenderer.prototype.GetPositions = function (positions) {
            if (positions === void 0) { positions = []; }
            positions.length = this.positions.length;
            for (var i = 0; i < this.positions.length; i++) {
                positions[i] = positions[i] || new feng3d.Vector3();
                positions[i].copy(this.positions[i].position);
            }
            return positions;
        };
        /**
         * Set the position of a vertex in the line.
         *
         * 设置顶点在直线中的位置。
         *
         * @param index	Which position to set.
         * @param position	The new position.
         */
        TrailRenderer.prototype.setPosition = function (index, position) {
            this.positions[index].position.copy(position);
        };
        /**
         * Set the positions of all vertices in the line.
         *
         * 设置线中所有顶点的位置。
         *
         * @param positions	The array of positions to set.
         */
        TrailRenderer.prototype.SetPositions = function (positions) {
            this.positions.length = positions.length;
            for (var i = 0; i < positions.length; i++) {
                if (this.positions[i])
                    this.positions[i].position.copy(positions[i]);
            }
        };
        __decorate([
            feng3d.oav({ exclude: true })
        ], TrailRenderer.prototype, "geometry", void 0);
        __decorate([
            feng3d.oav({ tooltip: "曲线宽度。" }),
            feng3d.serialize
        ], TrailRenderer.prototype, "lineWidth", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ tooltip: "How long does the trail take to fade out." })
        ], TrailRenderer.prototype, "time", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ tooltip: "How long does the trail take to fade out." })
        ], TrailRenderer.prototype, "minVertexDistance", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ tooltip: "How long does the trail take to fade out." })
        ], TrailRenderer.prototype, "autodestruct", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ tooltip: "How long does the trail take to fade out." })
        ], TrailRenderer.prototype, "emitting", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ tooltip: "线条颜色。" })
        ], TrailRenderer.prototype, "lineColor", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ tooltip: "将此值设置为大于0的值，以在直线的每个线段之间获取圆角。" })
        ], TrailRenderer.prototype, "numCornerVertices", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ tooltip: "将此值设置为大于0的值，以在直线的每个线段之间获取圆角。" })
        ], TrailRenderer.prototype, "numCapVertices", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ component: "OAVEnum", tooltip: "选择线是否将面对摄像机，或转换组件的方向。", componentParam: { enumClass: feng3d.LineAlignment } })
        ], TrailRenderer.prototype, "alignment", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ component: "OAVEnum", tooltip: "选择是平铺还是拉伸线纹理的U坐标。", componentParam: { enumClass: feng3d.LineTextureMode } })
        ], TrailRenderer.prototype, "textureMode", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ tooltip: "是否自动生成灯光所需的法线与切线。" })
        ], TrailRenderer.prototype, "generateLightingData", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ tooltip: "应用阴影偏差以防止自阴影伪影。指定的值是每段线宽的比例。" })
        ], TrailRenderer.prototype, "shadowBias", void 0);
        TrailRenderer = __decorate([
            feng3d.AddComponentMenu("Effects/TrailRenderer")
        ], TrailRenderer);
        return TrailRenderer;
    }(feng3d.Renderer));
    feng3d.TrailRenderer = TrailRenderer;
    feng3d.GameObject.registerPrimitive("TrailRenderer", function (g) {
        g.addComponent(TrailRenderer);
    });
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    feng3d.TransparentParticlesStandard_vertex = "\n\nprecision mediump float;\n\nattribute vec3 a_position;\nattribute vec2 a_uv;\nattribute vec4 a_color;\n\nuniform vec4 _MainTex_ST;\n\nuniform vec2 _Panning;\nuniform vec2 _Time;\n\nuniform vec4 _NoiseTex_ST;\nuniform vec4 _NoisePanning;\n\nuniform mat4 u_modelMatrix;\nuniform mat4 u_viewProjection;\n\nvarying vec2 v_uv;\nvarying vec4 v_color;\n\nuniform float EXTENDED_PARTICLES;\nvarying vec2 v_particledata;\n\nuniform float NOISE_TEXTURE;\nuniform float NOISEUV;\nvarying vec2 v_noiseuv;\n\nvoid main() \n{\n    vec3 position = a_position;\n    gl_Position = u_viewProjection * u_modelMatrix * vec4(position, 1.0);\n    v_uv = a_uv * _MainTex_ST.xy + _MainTex_ST.zw + (_Panning.xy * _Time.yy);\n    // v_color = a_color;\n    v_color = vec4(1.0,1.0,1.0,1.0);\n\n    if(EXTENDED_PARTICLES > 0.5)\n    {\n        if( NOISE_TEXTURE > 0.5)\n        {\n            if( NOISEUV > 0.5)\n            {\n                v_noiseuv = a_uv * _NoiseTex_ST.xy + _NoiseTex_ST.zw + (_NoisePanning.xy * _Time.yy);\n            }\n            else\n            {\n                v_noiseuv = a_uv * _MainTex_ST.xy + _MainTex_ST.zw + (_NoisePanning.xy * _Time.yy);\n            }\n        }\n    }\n    else\n    {\n        // v_particledata = a_uv.zw;\n        v_particledata = a_uv;\n    }\n}\n    ";
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    feng3d.TransparentParticlesStandard_fragment = "\nprecision mediump float;\n\nuniform sampler2D _MainTex;\n\nuniform vec4 u_color;\n\nuniform float EXTENDED_PARTICLES;\nuniform float _EmissionSaturation;\nuniform float _OpacitySaturation;\nuniform float _ColorMultiplier;\n\nuniform float COLOR_RAMP;\nuniform sampler2D _ColorRamp;\nuniform vec4 _ColorRamp_ST;\nuniform float COLOR_TINT;\nuniform vec4 _BasicColor;\nuniform vec4 _SaturatedColor;\n\nuniform float DISSOLVE_ENABLED;\nuniform vec4 _DissolveStep;\n\nuniform float NOISE_TEXTURE;\nuniform sampler2D _NoiseTex;\nuniform vec4 _TintColor;\n\nuniform float EMISSIVEPOWER;\nuniform float _EmissivePower;\n\nuniform float BLENDMODE_ADDITIVEALPHABLEND;\nuniform float _ABOffset;\n\nuniform float _GlobalAlpha;\n\nvarying vec2 v_uv;\nvarying vec4 v_color;\n\nvarying vec2 v_particledata;\nvarying vec2 v_noiseuv;\n\nuniform float APPLY_RGB_COLOR_VERTEX;\nuniform float NOISE_TEXTURE_EMISSION;\nuniform float NOISE_TEXTURE_ALPHA;\nuniform float NOISE_TEXTURE_DISSOLVE;\nuniform float BLENDMODE_ALPHABLEND;\nuniform float BLENDMODE_ADDITIVEDOUBLE;\nuniform float BLENDMODE_SOFTADDITIVE;\n\nvoid main() \n{\n    vec4 tex = texture2D(_MainTex, v_uv);\n\n    vec4 col = vec4(1.0, 1.0, 1.0, 1.0);\n\n    vec4 vcolor = vec4(1.0, 1.0, 1.0, v_color.w);\n\n    if( EXTENDED_PARTICLES > 0.5 )\n    {\n        if( APPLY_RGB_COLOR_VERTEX > 0.5)\n        {\n            vcolor = v_color;\n        }\n\n        float nEmission = 1.0;\n        float nAlpha = 1.0;\n        float nDissolve = 1.0;\n        \n        if( NOISE_TEXTURE > 0.5)\n        {\n            vec3 noise = texture2D(_NoiseTex, v_noiseuv).xyz;\n        \n            if( NOISE_TEXTURE_EMISSION > 0.5)\n            {\n                nEmission = noise.x;\n            }\n            else\n            {\n                nEmission = 1.0;\n            }\n            \n            if( NOISE_TEXTURE_ALPHA > 0.5)\n            {\n                nAlpha = noise.y;\n            }\n            else\n            {\n                nAlpha = 1.0;\n            }\n            \n            if( NOISE_TEXTURE_DISSOLVE > 0.5)\n            {\n                nDissolve = noise.z;\n            }\n            else\n            {\n                nDissolve = 1.0;\n            }\n        }\n    \n        if( DISSOLVE_ENABLED > 0.5)\n        {\n            float ramp = -1.0 + (v_particledata.x * 2.0);\n            col.a = clamp(tex.g * smoothstep(_DissolveStep.x, _DissolveStep.y, (tex.b + ramp) * nDissolve) * _OpacitySaturation * vcolor.w * nAlpha, 0.0, 1.0);\n        }\n        else\n        {\n            col.a = clamp(tex.g * _OpacitySaturation * vcolor.w, 0.0, 1.0) * nAlpha;\n        }\n    \n        float lerpValue = 0.0;\n        if(COLOR_TINT < 0.5)\n        {\n            lerpValue = clamp(tex.r * v_particledata.y * _ColorMultiplier * nEmission, 0.0, 1.0);\n        }\n    \n        if( BLENDMODE_ALPHABLEND > 0.5)\n        {\n            if( COLOR_RAMP > 0.5)\n            {\n                col.xyz = texture2D(_ColorRamp, vec2((1.0 - lerpValue), 0.0)).xyz * vcolor.xyz * _EmissionSaturation;\n            }\n            else\n            {\n                if( COLOR_TINT > 0.5)\n                {\n                    col.xyz = tex.x * _BasicColor.xyz * vcolor.xyz * nEmission * _EmissionSaturation;\n                }\n                else\n                {\n                    col.xyz = mix(_BasicColor.xyz * vcolor.xyz, _SaturatedColor.xyz, lerpValue) * _EmissionSaturation;\n                }\n            }\n            col.a *= _GlobalAlpha;\n        }\n        else\n        {\n            if( COLOR_RAMP > 0.5)\n            {\n                col.xyz = texture2D(_ColorRamp, vec2((1.0 - lerpValue), 0.0)).xyz * vcolor.xyz * col.a * _EmissionSaturation;\n            }\n            else\n            {\n                if( COLOR_TINT > 0.5 )\n                {\n                    col.xyz = tex.x * _BasicColor.xyz * vcolor.xyz * nEmission * _EmissionSaturation * col.a;\n                }\n                else\n                {\n                    col.xyz = mix(_BasicColor.xyz * vcolor.xyz, _SaturatedColor.xyz, lerpValue) * col.a * _EmissionSaturation;\n                }\n            }\n            col *= _GlobalAlpha;\n        }\n    }\n    else\n    {\n        if( BLENDMODE_ADDITIVEALPHABLEND > 0.5)\n        {\n            tex *= _TintColor;\n            float luminance = clamp(dot(tex, vec4(0.2126, 0.7152, 0.0722, 0.0)) * tex.a * _ABOffset, 0.0, 1.0);\n            vec4 one = vec4(1, 1, 1, 1);\n            col = mix(2.0 * (v_color * tex), one - 2.0 * (one - v_color) * (one - tex), luminance);\n        }\n        else\n        {\n            col = v_color * tex;\n            col *= _TintColor;\n        \n            if( EMISSIVEPOWER > 0.5)\n            {\n                col *= _EmissivePower;\n            }\n            \n            if( BLENDMODE_SOFTADDITIVE > 0.5 )\n            {\n                col.rgb *= col.a;\n            }\n            else\n            {\n                if( BLENDMODE_ALPHABLEND > 0.5 )\n                {\n                    col *= 2.0;\n                }\n                else\n                {\n                    if( BLENDMODE_ADDITIVEDOUBLE > 0.5 )\n                    {\n                        col *= 4.0;\n                    }\n                }\n            }\n        }\n    \n        col *= _GlobalAlpha;\n\n    }\n\n    gl_FragColor = col;\n}\n    ";
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    /**
     * 线条拖尾
     */
    var TransparentParticlesStandardUniforms = /** @class */ (function () {
        function TransparentParticlesStandardUniforms() {
            this._BasicColor = new feng3d.Color4(0.5, 0.5, 0.5, 0.5);
            this._SaturatedColor = new feng3d.Color4(0.5, 0.5, 0.5, 0.5);
            this._MainTex = feng3d.Texture2D.white;
            this._MainTex_ST = new feng3d.Vector4(1, 1, 0, 0);
            this._ColorRamp = feng3d.Texture2D.white;
            this._NoiseTex = feng3d.Texture2D.white;
            this._NoiseTex_ST = new feng3d.Vector4(1, 1, 0, 0);
            this._EmissionSaturation = 1.0;
            this._OpacitySaturation = 1.0;
            this._ColorMultiplier = 1.0;
            this._ABOffset = 0.0;
            this._DissolveStep = new feng3d.Vector4(0.0, 1.0, 0.0, 0.0);
            this._Panning = new feng3d.Vector4(0.0, 0.0, 0.0, 0.0);
            this._TintColor = new feng3d.Color4(0.5, 0.5, 0.5, 0.5);
            this._GlobalAlpha = 1.0;
            this._EmissivePower = 1;
            this._NoisePanning = new feng3d.Vector4(0.5, 0.5, 0.5, 0.5);
            this.COLOR_RAMP = false;
            this.COLOR_TINT = false;
            this.APPLY_RGB_COLOR_VERTEX = false;
            this.DISSOLVE_ENABLED = false;
            this.AUTOMATICPANNING = false;
            this.EMISSIVEPOWER = false;
            this.EXTENDED_PARTICLES = false;
            this.NOISE_TEXTURE = false;
            this.NOISE_TEXTURE_EMISSION = false;
            this.NOISE_TEXTURE_ALPHA = false;
            this.NOISE_TEXTURE_DISSOLVE = false;
            this.NOISEUV = false;
            this.FLOWMAP = false;
            this.BLENDMODE_ADDITIVEALPHABLEND = false;
            this.BLENDMODE_ALPHABLEND = false;
            this.BLENDMODE_ADDITIVEDOUBLE = false;
            this.BLENDMODE_SOFTADDITIVE = false;
        }
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "_BasicColor", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "_SaturatedColor", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "_MainTex", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "_MainTex_ST", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "_ColorRamp", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "_NoiseTex", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "_NoiseTex_ST", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "_EmissionSaturation", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "_OpacitySaturation", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "_ColorMultiplier", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "_ABOffset", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "_DissolveStep", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "_Panning", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "_TintColor", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "_GlobalAlpha", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "_EmissivePower", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "_NoisePanning", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "COLOR_RAMP", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "COLOR_TINT", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "APPLY_RGB_COLOR_VERTEX", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "DISSOLVE_ENABLED", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "AUTOMATICPANNING", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "EMISSIVEPOWER", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "EXTENDED_PARTICLES", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "NOISE_TEXTURE", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "NOISE_TEXTURE_EMISSION", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "NOISE_TEXTURE_ALPHA", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "NOISE_TEXTURE_DISSOLVE", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "NOISEUV", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "FLOWMAP", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "BLENDMODE_ADDITIVEALPHABLEND", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "BLENDMODE_ALPHABLEND", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "BLENDMODE_ADDITIVEDOUBLE", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "BLENDMODE_SOFTADDITIVE", void 0);
        return TransparentParticlesStandardUniforms;
    }());
    feng3d.TransparentParticlesStandardUniforms = TransparentParticlesStandardUniforms;
    feng3d.shaderConfig.shaders["TransparentParticlesStandard"] =
        {
            vertex: feng3d.TransparentParticlesStandard_vertex,
            fragment: feng3d.TransparentParticlesStandard_fragment,
            cls: TransparentParticlesStandardUniforms,
            renderParams: {
                enableBlend: true,
                sfactor: feng3d.BlendFactor.ONE,
                dfactor: feng3d.BlendFactor.ONE_MINUS_SRC_ALPHA,
                colorMask: feng3d.ColorMask.RGBA,
                cullFace: feng3d.CullFace.NONE,
                depthMask: true,
            },
        };
    feng3d.Material.setDefault("TransparentParticlesStandard-Material", { shaderName: "TransparentParticlesStandard" });
})(feng3d || (feng3d = {}));
//# sourceMappingURL=unity.js.map