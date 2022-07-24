declare namespace unity {
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
    class Rect {
        /**
         * Shorthand for writing new Rect(0,0,0,0).
         */
        static zero: Rect;
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
        constructor(x: number, y: number, width: number, height: number);
        /**
         * Returns true if the x and y components of point is a point inside this rectangle. If allowInverse is present and true, the width and height of the Rect are allowed to take negative values (ie, the min value is greater than the max), and the test will still work.
         *
         * @param point Point to test.
         *
         * @returns bool True if the point lies within the specified rectangle.
         */
        Contains(point: Vector2): void;
        /**
         * Returns true if the other rectangle overlaps this one.
         *
         * @param other Other rectangle to test overlapping with.
         *
         * @returns Returns true if the other rectangle overlaps this one.
         */
        Overlaps(other: Rect): void;
        /**
         * Set components of an existing Rect.
         *
         * @param x	The X value the rect is measured from.
         * @param y	The Y value the rect is measured from.
         * @param width	The width of the rectangle.
         * @param height	The height of the rectangle.
         */
        Set(x: number, y: number, width: number, height: number): void;
        /**
         * Returns a nicely formatted string for this Rect.
         *
         * @todo
         */
        ToString(): void;
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
        static MinMaxRect(xmin: number, ymin: number, xmax: number, ymax: number): Rect;
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
        static NormalizedToPoint(rectangle: Rect, normalizedRectCoordinates: Vector2): void;
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
        static PointToNormalized(rectangle: Rect, point: Vector2): void;
        /**
         * Returns true if the rectangles are the same.
         */
        static equals(lhs: Rect, rhs: Rect): boolean;
    }
}
declare namespace unity {
    /**
     * Target.
     *
     * See Also: Animator.SetTarget and Animator.MatchTarget.
     */
    enum AvatarTarget {
        /**
         * The root, the position of the game object.
         */
        Root = 0,
        /**
         * The body, center of mass.
         */
        Body = 1,
        /**
         * The left foot.
         */
        LeftFoot = 2,
        /**
         * The right foot.
         */
        RightFoot = 3,
        /**
         * The left hand.
         */
        LeftHand = 4,
        /**
         * The right hand.
         */
        RightHand = 5
    }
}
declare namespace unity {
    /**
     * IK Hint.
     *
     * Used to set and get IK weights and position. See Also: Animator.GetIKHintPosition, Animator.GetIKHintPositionWeight, Animator.SetIKHintPosition, and Animator.SetIKHintPositionWeight.
     */
    enum AvatarIKHint {
        /**
         * The left knee IK hint.
         */
        LeftKnee = 0,
        /**
         * The right knee IK hint.
         */
        RightKnee = 1,
        /**
         * The left elbow IK hint.
         */
        LeftElbow = 2,
        /**
         * The right elbow IK hint.
         */
        RightElbow = 3
    }
}
declare namespace unity {
    /**
     * IK Goal.
     *
     * Used to set and get IK weights, position and rotation. See Also: Animator.SetIKPosition, Animator.SetIKPositionWeight, Animator.SetIKRotation and Animator.SetIKRotationWeight.
     */
    enum AvatarIKGoal {
        /**
         * The left foot.
         */
        LeftFoot = 0,
        /**
         * The right foot.
         */
        RightFoot = 1,
        /**
         * The left hand.
         */
        LeftHand = 2,
        /**
         * The right hand.
         */
        RightHand = 3
    }
}
declare namespace unity {
    /**
     * Human Body Bones.
     */
    enum HumanBodyBones {
        /**
         * This is the Hips bone.
         */
        Hips = 0,
        /**
         * This is the Left Upper Leg bone.
         */
        LeftUpperLeg = 1,
        /**
         * This is the Right Upper Leg bone.
         */
        RightUpperLeg = 2,
        /**
         * This is the Left Knee bone.
         */
        LeftLowerLeg = 3,
        /**
         * This is the Right Knee bone.
         */
        RightLowerLeg = 4,
        /**
         * This is the Left Ankle bone.
         */
        LeftFoot = 5,
        /**
         * This is the Right Ankle bone.
         */
        RightFoot = 6,
        /**
         * This is the first Spine bone.
         */
        Spine = 7,
        /**
         * This is the Chest bone.
         */
        Chest = 8,
        /**
         * This is the Upper Chest bone.
         */
        UpperChest = 9,
        /**
         * This is the Neck bone.
         */
        Neck = 10,
        /**
         * This is the Head bone.
         */
        Head = 11,
        /**
         * This is the Left Shoulder bone.
         */
        LeftShoulder = 12,
        /**
         * This is the Right Shoulder bone.
         */
        RightShoulder = 13,
        /**
         * This is the Left Upper Arm bone.
         */
        LeftUpperArm = 14,
        /**
         * This is the Right Upper Arm bone.
         */
        RightUpperArm = 15,
        /**
         * This is the Left Elbow bone.
         */
        LeftLowerArm = 16,
        /**
         * This is the Right Elbow bone.
         */
        RightLowerArm = 17,
        /**
         * This is the Left Wrist bone.
         */
        LeftHand = 18,
        /**
         * This is the Right Wrist bone.
         */
        RightHand = 19,
        /**
         * This is the Left Toes bone.
         */
        LeftToes = 20,
        /**
         * This is the Right Toes bone.
         */
        RightToes = 21,
        /**
         * This is the Left Eye bone.
         */
        LeftEye = 22,
        /**
         * This is the Right Eye bone.
         */
        RightEye = 23,
        /**
         * This is the Jaw bone.
         */
        Jaw = 24,
        /**
         * This is the left thumb 1st phalange.
         */
        LeftThumbProximal = 25,
        /**
         * This is the left thumb 2nd phalange.
         */
        LeftThumbIntermediate = 26,
        /**
         * This is the left thumb 3rd phalange.
         */
        LeftThumbDistal = 27,
        /**
         * This is the left index 1st phalange.
         */
        LeftIndexProximal = 28,
        /**
         * This is the left index 2nd phalange.
         */
        LeftIndexIntermediate = 29,
        /**
         * This is the left index 3rd phalange.
         */
        LeftIndexDistal = 30,
        /**
         * This is the left middle 1st phalange.
         */
        LeftMiddleProximal = 31,
        /**
         * This is the left middle 2nd phalange.
         */
        LeftMiddleIntermediate = 32,
        /**
         * This is the left middle 3rd phalange.
         */
        LeftMiddleDistal = 33,
        /**
         * This is the left ring 1st phalange.
         */
        LeftRingProximal = 34,
        /**
         * This is the left ring 2nd phalange.
         */
        LeftRingIntermediate = 35,
        /**
         * This is the left ring 3rd phalange.
         */
        LeftRingDistal = 36,
        /**
         * This is the left little 1st phalange.
         */
        LeftLittleProximal = 37,
        /**
         * This is the left little 2nd phalange.
         */
        LeftLittleIntermediate = 38,
        /**
         * This is the left little 3rd phalange.
         */
        LeftLittleDistal = 39,
        /**
         * This is the right thumb 1st phalange.
         */
        RightThumbProximal = 40,
        /**
         * This is the right thumb 2nd phalange.
         */
        RightThumbIntermediate = 41,
        /**
         * This is the right thumb 3rd phalange.
         */
        RightThumbDistal = 42,
        /**
         * This is the right index 1st phalange.
         */
        RightIndexProximal = 43,
        /**
         * This is the right index 2nd phalange.
         */
        RightIndexIntermediate = 44,
        /**
         * This is the right index 3rd phalange.
         */
        RightIndexDistal = 45,
        /**
         * This is the right middle 1st phalange.
         */
        RightMiddleProximal = 46,
        /**
         * This is the right middle 2nd phalange.
         */
        RightMiddleIntermediate = 47,
        /**
         * This is the right middle 3rd phalange.
         */
        RightMiddleDistal = 48,
        /**
         * This is the right ring 1st phalange.
         */
        RightRingProximal = 49,
        /**
         * This is the right ring 2nd phalange.
         */
        RightRingIntermediate = 50,
        /**
         * This is the right ring 3rd phalange.
         */
        RightRingDistal = 51,
        /**
         * This is the right little 1st phalange.
         */
        RightLittleProximal = 52,
        /**
         * This is the right little 2nd phalange.
         */
        RightLittleIntermediate = 53,
        /**
         * This is the right little 3rd phalange.
         */
        RightLittleDistal = 54,
        /**
         * This is the Last bone index delimiter.
         */
        LastBone = 55
    }
}
declare namespace unity {
    /**
     * Options for how to send a message.
     *
     * This is used by SendMessage & BroadcastMessage in GameObject & Component.
     */
    enum SendMessageOptions {
        /**
         * A receiver is required for SendMessage.
         */
        RequireReceiver = 0,
        /**
         * No receiver is required for SendMessage.
         */
        DontRequireReceiver = 1
    }
}
declare namespace unity {
    /**
     * Represents an axis aligned bounding box.
     *
     * An axis-aligned bounding box, or AABB for short, is a box aligned with coordinate axes and fully enclosing some object. Because the box is never rotated with respect to the axes, it can be defined by just its center and extents, or alternatively by min and max points.
     *
     * Bounds is used by Collider.bounds, Mesh.bounds and Renderer.bounds.
     */
    class Bounds extends Box3 {
    }
}
declare namespace unity {
    /**
     * Position, size, anchor and pivot information for a rectangle.
     *
     * RectTransforms are used for GUI but can also be used for other things. It's used to store and manipulate the position, size, and anchoring of a rectangle and supports various forms of scaling based on a parent RectTransform.
     *
     * Note: The Inspector changes which properties are exposed based on which anchor preset is in use. For more information see Rect Transform and Basic Layout.
     */
    class RectTransform extends Transform {
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
        ForceUpdateRectTransforms(): void;
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
        GetLocalCorners(fourCornersArray: Vector3[]): void;
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
        GetWorldCorners(fourCornersArray: Vector3[]): void;
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
        SetInsetAndSizeFromParentEdge(edge: RectTransform.Edge, inset: number, size: number): void;
        /**
         * Makes the RectTransform calculated rect be a given size on the specified axis.
         *
         * This method produces the given size with the current anchoring. If the parent RectTransform changes size, the size of the rect may change. If the size is meant to stay, either the RectTransform anchors should be set not to stretch, or this method should be invoked again whenever the parent size changes.
         *
         * @param axis	The axis to specify the size along.
         * @param size	The desired size along the specified axis.
         */
        SetSizeWithCurrentAnchors(axis: RectTransform.Axis, size: number): void;
    }
}
declare namespace unity.RectTransform {
    /**
     * Enum used to specify one edge of a rectangle.
     */
    enum Edge {
        /**
         * The left edge.
         */
        Left = 0,
        /**
         * The right edge.
         */
        Right = 1,
        /**
         * The top edge.
         */
        Top = 2,
        /**
         * The bottom edge.
         */
        Bottom = 3
    }
    /**
     * Represents the axes used in 3D space.
     */
    enum Axis {
        /**
         * Represents the case when no axis is specified.
         */
        None = 0,
        /**
         * Represents the X axis.
         */
        X = 1,
        /**
         * Represents the Y axis.
         */
        Y = 2,
        /**
         * Represents the Z axis.
         */
        Z = 3
    }
}
declare namespace unity {
    /**
     * Skinning bone weights of a vertex in the mesh.
     *
     * Each vertex is skinned with up to four bones. All weights should sum up to one. Weights and bone indices should be defined in the order of decreasing weight. If a vertex is affected by less than four bones, the remaining weights should be zeroes.
     */
    class BoneWeight {
        /**
         * Index of first bone.
         */
        boneIndex0: number;
        /**
         * Index of second bone.
         */
        boneIndex1: number;
        /**
         * Index of third bone.
         */
        boneIndex2: number;
        /**
         * Index of fourth bone.
         */
        boneIndex3: number;
        /**
         * Skinning weight for first bone.
         */
        weight0: number;
        /**
         * Skinning weight for second bone.
         */
        weight1: number;
        /**
         * Skinning weight for third bone.
         */
        weight2: number;
        /**
         * Skinning weight for fourth bone.
         */
        weight3: number;
    }
}
declare namespace unity {
    /**
     * 网格数据
     */
    class Mesh {
        /**
         * Returns a copy of the vertex positions or assigns a new vertex positions array.
         */
        vertices: Vector3[];
        /**
         * The base texture coordinates of the Mesh.
         */
        uv: Vector2[];
        /**
         * The second texture coordinate set of the mesh, if present.
         */
        uv2: Vector2[];
        /**
         * The third texture coordinate set of the mesh, if present.
         */
        uv3: Vector2[];
        /**
         * The fourth texture coordinate set of the mesh, if present.
         */
        uv4: Vector2[];
        /**
         * The fifth texture coordinate set of the mesh, if present.
         */
        uv5: Vector2[];
        /**
         * The sixth texture coordinate set of the mesh, if present.
         */
        uv6: Vector2[];
        /**
         * The seventh texture coordinate set of the mesh, if present.
         */
        uv7: Vector2[];
        /**
         * The eighth texture coordinate set of the mesh, if present.
         */
        uv8: Vector2[];
        /**
         * Vertex colors of the Mesh.
         */
        colors: Color4[];
        /**
         * The normals of the Mesh.
         */
        normals: Vector3[];
        /**
         * The tangents of the Mesh.
         */
        tangents: Vector3[];
        /**
         * The bind poses. The bind pose at each index refers to the bone with the same index.
         */
        bindposes: Matrix4x4[];
        /**
         * The bone weights of each vertex.
         */
        boneWeights: BoneWeight[];
        /**
         * An array containing all triangles in the Mesh.
         */
        triangles: number[];
        /**
         * The bounding volume of the mesh.
         */
        bounds: Box3;
        /**
         * The number of sub-meshes inside the Mesh object.
         */
        subMeshCount: any;
        /**
         * Returns the number of vertices in the Mesh (Read Only).
         */
        get vertexCount(): number;
    }
}
declare namespace unity {
    /**
     * Avatar definition.
     */
    class Avatar {
        /**
         * Return true if this avatar is a valid human avatar.
         */
        isHuman: boolean;
        /**
         * Return true if this avatar is a valid mecanim avatar. It can be a generic avatar or a human avatar.
         */
        isValid: boolean;
    }
}
declare namespace unity {
    /**
     * Interface to control the Mecanim animation system.
     */
    class Animator extends Behaviour {
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
         *
         * 设置记录缓冲区中的播放位置。
         */
        playbackTime: number;
        /**
         * Gets the mode of the Animator recorder.
         */
        recorderMode: AnimatorRecorderMode;
        /**
         * Start time of the first frame of the buffer relative to the frame at which StartRecording was called.
         */
        recorderStartTime: number;
        /**
         * End time of the recorded clip relative to when StartRecording was called.
         */
        recorderStopTime: number;
        /**
         * Get right foot bottom height.
         */
        rightFeetBottomHeight: number;
        /**
         * The root position, the position of the game object.
         */
        rootPosition: Vector3;
        /**
         * The root rotation, the rotation of the game object.
         */
        rootRotation: Quaternion;
        /**
         * The runtime representation of AnimatorController that controls the Animator.
         */
        runtimeAnimatorController: RuntimeAnimatorController;
        /**
         * The playback speed of the Animator. 1 is normal playback speed.
         */
        speed: number;
        /**
         * Automatic stabilization of feet during transition and blending.
         */
        stabilizeFeet: boolean;
        /**
         * Returns the position of the target specified by SetTarget.
         */
        targetPosition: Vector3;
        /**
         * Returns the rotation of the target specified by SetTarget.
         */
        targetRotation: Quaternion;
        /**
         * Specifies the update mode of the Animator.
         */
        updateMode: AnimatorUpdateMode;
        /**
         * Gets the avatar velocity for the last evaluated frame.
         */
        velocity: Vector3;
        /**
         * 动画播放时
         */
        private _activeAnimationClip;
        /**
         * 是否播放中
         */
        private _isPlaying;
        /**
         * Apply the default Root Motion.
         *
         * @param stateName 	The name of the state.
         * @param normalizedTransitionDuration The duration of the transition (normalized).
         * @param layer The layer where the crossfade occurs.
         * @param normalizedTimeOffset The time of the state (normalized).
         * @param normalizedTransitionTime The time of the transition (normalized).
         */
        ApplyBuiltinRootMotion(stateName: string, normalizedTransitionDuration: number, layer?: number, normalizedTimeOffset?: number, normalizedTransitionTime?: number): void;
        /**
         * Creates a crossfade from the current state to any other state using normalized times.
         *
         * @param stateName The name of the state.
         * @param normalizedTransitionDuration The duration of the transition (in seconds).
         * @param layer The layer where the crossfade occurs.
         * @param normalizedTimeOffset The time of the state (in seconds).
         * @param normalizedTransitionTime The time of the transition (normalized).
         */
        CrossFade(stateName: string, normalizedTransitionDuration: number, layer?: number, normalizedTimeOffset?: number, normalizedTransitionTime?: number): void;
        /**
         * Creates a crossfade from the current state to any other state using times in seconds.
         *
         * @param stateName The name of the state.
         * @param fixedTransitionDuration The duration of the transition (in seconds).
         * @param layer The layer where the crossfade occurs.
         * @param fixedTimeOffset The time of the state (in seconds).
         * @param normalizedTransitionTime The time of the transition (normalized).
         */
        CrossFadeInFixedTime(stateName: String, fixedTransitionDuration: number, layer?: number, fixedTimeOffset?: number, normalizedTransitionTime?: number): void;
        /**
         * Returns an AnimatorTransitionInfo with the informations on the current transition.
         *
         * @param layerIndex The layer's index.
         */
        GetAnimatorTransitionInfo(layerIndex: number): void;
        /**
         * Returns the first StateMachineBehaviour that matches type T or is derived from T. Returns null if none are found.
         */
        GetBehaviour<T extends StateMachineBehaviour>(type: Constructor<T>): T;
        /**
         * Returns all StateMachineBehaviour that match type T or are derived from T. Returns null if none are found.
         */
        GetBehaviours<T extends StateMachineBehaviour>(type: Constructor<T>): T[];
        /**
         * Returns Transform mapped to this human bone id.
         *
         * @param humanBoneId The human bone that is queried, see enum HumanBodyBones for a list of possible values.
         */
        GetBoneTransform(humanBoneId: HumanBodyBones): void;
        /**
         * Returns the value of the given boolean parameter.
         *
         * @param name The parameter name.
         */
        GetBool(name: string): boolean;
        /**
         * Returns an array of all the AnimatorClipInfo in the current state of the given layer.
         *
         * @param layerIndex The layer index.
         */
        GetCurrentAnimatorClipInfo(layerIndex: number): AnimatorClipInfo[];
        /**
         * Returns the number of AnimatorClipInfo in the current state.
         */
        GetCurrentAnimatorClipInfoCount(layerIndex: number): number;
        /**
         * Returns an AnimatorStateInfo with the information on the current state.
         */
        GetCurrentAnimatorStateInfo(layerIndex: number): AnimatorStateInfo;
        /**
         * Returns the value of the given float parameter.
         */
        GetFloat(name: string): number;
        /**
         * Gets the position of an IK hint.
         *
         * @param hint The AvatarIKHint that is queried.
         *
         * @returns Vector3 Return the current position of this IK hint in world space.
         */
        GetIKHintPosition(hint: AvatarIKHint): Vector3;
        /**
         * Gets the translative weight of an IK Hint (0 = at the original animation before IK, 1 = at the hint).
         *
         * @param hint The AvatarIKHint that is queried.
         */
        GetIKHintPositionWeight(hint: AvatarIKHint): number;
        /**
         * Gets the position of an IK goal.
         *
         * @param goal The AvatarIKGoal that is queried.
         */
        GetIKPosition(goal: AvatarIKGoal): Vector3;
        /**
         * Gets the translative weight of an IK goal (0 = at the original animation before IK, 1 = at the goal).
         *
         * @param goal The AvatarIKGoal that is queried.
         */
        GetIKPositionWeight(goal: AvatarIKGoal): void;
        /**
         * Gets the rotation of an IK goal.
         *
         * @param goal The AvatarIKGoal that is is queried.
         */
        GetIKRotation(goal: AvatarIKGoal): void;
        /**
         * Gets the rotational weight of an IK goal (0 = rotation before IK, 1 = rotation at the IK goal).
         *
         * @param goal The AvatarIKGoal that is is queried.
         */
        GetIKRotationWeight(goal: AvatarIKGoal): void;
        /**
         * Returns the value of the given integer parameter.
         *
         * @param name The parameter name.
         */
        GetInteger(name: string): number;
        /**
         * Returns the index of the layer with the given name.
         *
         * @param layerName The layer name.
         */
        GetLayerIndex(layerName: string): void;
        /**
         * Returns the layer name.
         *
         * @param layerIndex The layer index.
         */
        GetLayerName(layerIndex: number): void;
        /**
         * Returns the weight of the layer at the specified index.
         *
         * @param layerIndex The layer index.
         */
        GetLayerWeight(layerIndex: number): void;
        /**
         * Returns an array of all the AnimatorClipInfo in the next state of the given layer.
         *
         * @param layerIndex The layer index.
         */
        GetNextAnimatorClipInfo(layerIndex: number): AnimatorClipInfo[];
        /**
         * Returns the number of AnimatorClipInfo in the next state.
         *
         * @param layerIndex The layer index.
         */
        GetNextAnimatorClipInfoCount(layerIndex: number): number;
        /**
         * Returns an AnimatorStateInfo with the information on the next state.
         *
         * @param layerIndex The layer index.
         */
        GetNextAnimatorStateInfo(layerIndex: number): AnimatorStateInfo;
        /**
         * See AnimatorController.parameters.
         */
        GetParameter(index: number): AnimatorControllerParameter;
        /**
         * Returns true if the state exists in this layer, false otherwise.
         *
         * @param layerIndex The layer index.
         * @param stateID The state ID.
         */
        HasState(layerIndex: number, stateID: number): boolean;
        /**
         * Interrupts the automatic target matching.
         *
         * CompleteMatch will make the gameobject match the target completely at the next frame.
         */
        InterruptMatchTarget(completeMatch?: boolean): void;
        /**
         * Returns true if there is a transition on the given layer, false otherwise.
         *
         * @param layerIndex The layer index.
         */
        IsInTransition(layerIndex: number): void;
        /**
         * Returns true if the parameter is controlled by a curve, false otherwise.
         *
         * @param name The parameter name.
         *
         * @returns True if the parameter is controlled by a curve, false otherwise.
         */
        IsParameterControlledByCurve(name: string): void;
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
        MatchTarget(matchPosition: Vector3, matchRotation: Quaternion, targetBodyPart: AvatarTarget, weightMask: MatchTargetWeightMask, startNormalizedTime: number, targetNormalizedTime?: number): void;
        /**
         * Plays a state.
         *
         * @param stateName The state name.
         * @param layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
         * @param normalizedTime The time offset between zero and one.
         */
        Play(stateName: string, layer?: number, normalizedTime?: number): void;
        /**
         * Plays a state.
         *
         * @param stateName The state name.
         * @param layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
         * @param fixedTime The time offset (in seconds).
         */
        PlayInFixedTime(stateName: string, layer?: number, fixedTime?: number): void;
        /**
         * 每帧执行
         *
         * Evaluates the animator based on deltaTime.
         */
        update(deltaTime?: number): void;
        /**
         * Rebind all the animated properties and mesh data with the Animator.
         */
        Rebind(): void;
        /**
         * Resets the value of the given trigger parameter.
         *
         * @param name The parameter name.
         */
        ResetTrigger(name: string): void;
        /**
         * Sets local rotation of a human bone during a IK pass.
         *
         * @param humanBoneId The human bone Id.
         * @param rotation The local rotation.
         */
        SetBoneLocalRotation(humanBoneId: HumanBodyBones, rotation: Quaternion): void;
        /**
         * Sets the value of the given boolean parameter.
         *
         * @param name The parameter name.
         * @param value The new parameter value.
         */
        SetBool(name: string, value: boolean): void;
        /**
         * Send float values to the Animator to affect transitions.
         *
         * @param name The parameter name.
         * @param value The new parameter value.
         * @param dampTime The damper total time.
         * @param deltaTime The delta time to give to the damper.
         */
        SetFloat(name: string, value: number, dampTime: number, deltaTime: number): void;
        /**
         * Sets the position of an IK hint.
         *
         * @param hint The AvatarIKHint that is set.
         * @param hintPosition The position in world space.
         */
        SetIKHintPosition(hint: AvatarIKHint, hintPosition: Vector3): void;
        /**
         * Sets the translative weight of an IK hint (0 = at the original animation before IK, 1 = at the hint).
         *
         * @param hint The AvatarIKHint that is set.
         * @param value The translative weight.
         */
        SetIKHintPositionWeight(hint: AvatarIKHint, value: number): void;
        /**
         * Sets the position of an IK goal.
         *
         * @param goal The AvatarIKGoal that is set.
         * @param goalPosition The position in world space.
         */
        SetIKPosition(goal: AvatarIKGoal, goalPosition: Vector3): void;
        /**
         * Sets the translative weight of an IK goal (0 = at the original animation before IK, 1 = at the goal).
         *
         * @param goal The AvatarIKGoal that is set.
         * @param value The translative weight.
         */
        SetIKPositionWeight(goal: AvatarIKGoal, value: number): void;
        /**
         * Sets the rotation of an IK goal.
         *
         * @param goal The AvatarIKGoal that is set.
         * @param goalRotation The rotation in world space.
         */
        SetIKRotation(goal: AvatarIKGoal, goalRotation: Quaternion): void;
        /**
         * Sets the rotational weight of an IK goal (0 = rotation before IK, 1 = rotation at the IK goal).
         *
         * @param goal The AvatarIKGoal that is set.
         * @param value The rotational weight.
         */
        SetIKRotationWeight(goal: AvatarIKGoal, value: number): void;
        /**
         * Sets the value of the given integer parameter.
         *
         * @param name The parameter name.
         * @param value The new parameter value.
         */
        SetInteger(name: string, value: number): void;
        /**
         * Sets the weight of the layer at the given index.
         *
         * @param layerIndex The layer index.
         * @param weight The new layer weight.
         */
        SetLayerWeight(layerIndex: number, weight: number): void;
        /**
         * Sets the look at position.
         *
         * @param lookAtPosition The position to lookAt.
         */
        SetLookAtPosition(lookAtPosition: Vector3): void;
        /**
         * Set look at weights.
         *
         * @param weight (0-1) the global weight of the LookAt, multiplier for other parameters.
         * @param bodyWeight (0-1) determines how much the body is involved in the LookAt.
         * @param headWeight (0-1) determines how much the head is involved in the LookAt.
         * @param eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
         * @param clampWeight (0-1) 0.0 means the character is completely unrestrained in motion, 1.0 means he's completely clamped (look at becomes impossible), and 0.5 means he'll be able to move on half of the possible range (180 degrees).
         */
        SetLookAtWeight(weight: number, bodyWeight?: number, headWeight?: number, eyesWeight?: number, clampWeight?: number): void;
        /**
         * Sets an AvatarTarget and a targetNormalizedTime for the current state.
         *
         * @param targetIndex The avatar body part that is queried.
         * @param targetNormalizedTime The current state Time that is queried.
         */
        SetTarget(targetIndex: AvatarTarget, targetNormalizedTime: number): void;
        /**
         * Sets the value of the given trigger parameter.
         *
         * @param name The parameter name.
         */
        SetTrigger(name: string): void;
        /**
         * Sets the animator in playback mode.
         */
        StartPlayback(): void;
        /**
         * Sets the animator in recording mode, and allocates a circular buffer of size frameCount.
         *
         * @param frameCount The number of frames (updates) that will be recorded. If frameCount is 0, the recording will continue until the user calls StopRecording. The maximum value for frameCount is 10000.
         */
        StartRecording(frameCount: number): void;
        /**
         * Stops the animator playback mode. When playback stops, the avatar resumes getting control from game logic.
         */
        StopPlayback(): void;
        /**
         * Stops animator record mode.
         */
        StopRecording(): void;
        /**
         * Forces a write of the default values stored in the animator.
         */
        WriteDefaultValues(): void;
        /**
         * Generates an parameter id from a string.
         */
        static StringToHash(name: string): void;
    }
}
declare namespace unity {
    /**
     * The mode of the Animator's recorder.
     *
     * The recorder can either be Offline, in Playback or in Record.
     */
    enum AnimatorRecorderMode {
        /**
         * The Animator recorder is offline.
         */
        Offline = 0,
        /**
         * The Animator recorder is in Playback.
         */
        Playback = 1,
        /**
         * The Animator recorder is in Record.
         */
        Record = 2
    }
}
declare namespace unity {
    /**
     * The update mode of the Animator.
     */
    enum AnimatorUpdateMode {
        /**
         * Normal update of the animator.
         */
        Normal = 0,
        /**
         * Updates the animator during the physic loop in order to have the animation system synchronized with the physics engine.
         */
        AnimatePhysics = 1,
        /**
         * Animator updates independently of Time.timeScale.
         */
        UnscaledTime = 2
    }
}
declare namespace unity {
    /**
     * Culling mode for the Animator.
     */
    enum AnimatorCullingMode {
        /**
         * Always animate the entire character. Object is animated even when offscreen.
         */
        AlwaysAnimate = 0,
        /**
         * Retarget, IK and write of Transforms are disabled when renderers are not visible.
         */
        CullUpdateTransforms = 1,
        /**
         * Animation is completely disabled when renderers are not visible.
         */
        CullCompletely = 2
    }
}
declare namespace unity {
    /**
     * The type of the parameter.
     *
     * Can be bool, float, int or trigger.
     */
    enum AnimatorControllerParameterType {
        /**
         * Float type parameter.
         */
        Float = 0,
        /**
         * Int type parameter.
         */
        Int = 1,
        /**
         * Boolean type parameter.
         */
        Bool = 2,
        /**
         * Trigger type parameter.
         */
        Trigger = 3
    }
}
declare namespace unity {
    /**
     * Used by Animation.Play function.
     */
    enum AnimationBlendMode {
        /**
         * Animations will be blended.
         */
        Blend = 0,
        /**
         * Animations will be added.
         */
        Additive = 1
    }
}
declare namespace unity {
    /**
     * Specifies how the layer is blended with the previous layers.
     */
    enum AnimatorLayerBlendingMode {
        /**
         * Animations overrides to the previous layers.
         */
        Override = 0,
        /**
         * Animations are added to the previous layers.
         */
        Additive = 1
    }
}
declare namespace unity {
    /**
     * The mode of the condition.
     */
    enum AnimatorConditionMode {
        /**
         * The condition is true when the parameter value is true.
         */
        If = 0,
        /**
         * The condition is true when the parameter value is false.
         */
        IfNot = 1,
        /**
         * The condition is true when parameter value is greater than the threshold.
         */
        Greater = 2,
        /**
         * The condition is true when the parameter value is less than the threshold.
         */
        Less = 3,
        /**
         * The condition is true when parameter value is equal to the threshold.
         */
        Equals = 4,
        /**
         * The condition is true when the parameter value is not equal to the threshold.
         */
        NotEqual = 5
    }
}
declare namespace unity {
    /**
     * Which AnimatorState transitions can interrupt the Transition.
     */
    enum TransitionInterruptionSource {
        /**
         * The Transition cannot be interrupted. Formely know as Atomic.
         */
        None = 0,
        /**
         * The Transition can be interrupted by transitions in the source AnimatorState.
         */
        Source = 1,
        /**
         * The Transition can be interrupted by transitions in the destination AnimatorState.
         */
        Destination = 2,
        /**
         * The Transition can be interrupted by transitions in the source or the destination AnimatorState.
         */
        SourceThenDestination = 3,
        /**
         * The Transition can be interrupted by transitions in the source or the destination AnimatorState.
         */
        DestinationThenSource = 4
    }
}
declare namespace unity {
    /**
     * Use this struct to specify the position and rotation weight mask for Animator.MatchTarget.
     */
    class MatchTargetWeightMask {
        /**
         * Position XYZ weight.
         */
        positionXYZWeight: Vector3;
        /**
         * Rotation weight.
         */
        rotationWeight: number;
    }
}
declare namespace unity {
    /**
     * AnimationEvent lets you call a script function similar to SendMessage as part of playing back an animation.
     *
     * Animation events support functions that take zero or one parameter. The parameter can be a float, an int, a string, an object reference, or an AnimationEvent.
     */
    class AnimationEvent {
        /**
         * The animation state that fired this event (Read Only).
         */
        animationState: AnimationState;
        /**
         * The animator clip info related to this event (Read Only).
         */
        animatorClipInfo: AnimatorClipInfo;
        /**
         * The animator state info related to this event (Read Only).
         */
        animatorStateInfo: AnimatorStateInfo;
        /**
         * Float parameter that is stored in the event and will be sent to the function.
         */
        floatParameter: number;
        /**
         * The name of the function that will be called.
         */
        functionName: string;
        /**
         * Int parameter that is stored in the event and will be sent to the function.
         */
        intParameter: number;
        /**
         * Returns true if this Animation event has been fired by an Animator component.
         */
        isFiredByAnimator: boolean;
        /**
         * Returns true if this Animation event has been fired by an Animation component.
         */
        isFiredByLegacy: boolean;
        /**
         * Function call options.
         */
        messageOptions: SendMessageOptions;
        /**
         * Object reference parameter that is stored in the event and will be sent to the function.
         */
        objectReferenceParameter: Object;
        /**
         * String parameter that is stored in the event and will be sent to the function.
         */
        stringParameter: string;
        /**
         * The time at which the event will be fired off.
         */
        time: number;
    }
}
declare namespace unity {
    /**
     * StateMachineBehaviour is a component that can be added to a state machine state. It's the base class every script on a state derives from.
     */
    class StateMachineBehaviour {
        /**
         * Called on the first Update frame when making a transition to a state machine. This is not called when making a transition into a state machine sub-state.
         *
         * @param animator The Animator playing this state machine.
         * @param stateMachinePathHash The full path hash for this state machine.
         */
        OnStateMachineEnter(animator: Animator, stateMachinePathHash: number): void;
        /**
         * Called on the last Update frame when making a transition out of a StateMachine. This is not called when making a transition into a StateMachine sub-state.
         *
         * @param animator The Animator playing this state machine.
         * @param stateMachinePathHash The full path hash for this state machine.
         */
        OnStateMachineExit(animator: Animator, stateMachinePathHash: number): void;
        /**
         * Called on the first Update frame when a state machine evaluate this state.
         */
        OnStateEnter(animator: Animator, animatorStateInfo: AnimatorStateInfo, layerIndex: number): void;
        /**
         * Called on the last update frame when a state machine evaluate this state.
         */
        OnStateExit(animator: Animator, animatorStateInfo: AnimatorStateInfo, layerIndex: number): void;
        /**
         * Called right after MonoBehaviour.OnAnimatorIK.
         */
        OnStateIK(animator: Animator, animatorStateInfo: AnimatorStateInfo, layerIndex: number): void;
        /**
         * Called right after MonoBehaviour.OnAnimatorMove.
         */
        OnStateMove(animator: Animator, animatorStateInfo: AnimatorStateInfo, layerIndex: number): void;
        /**
         * Called at each Update frame except for the first and last frame.
         */
        OnStateUpdate(animator: Animator, animatorStateInfo: AnimatorStateInfo, layerIndex: number): void;
    }
}
declare namespace unity {
    /**
     * The animator state info related to this event (Read Only).
     */
    class AnimatorStateInfo {
        /**
         * The full path hash for this state.
         */
        fullPathHash: number;
        /**
         * Current duration of the state.
         */
        length: number;
        /**
         * Is the state looping.
         */
        loop: boolean;
        /**
         * Normalized time of the State.
         */
        normalizedTime: number;
        /**
         * The hash is generated using Animator.StringToHash. The hash does not include the name of the parent layer.
         */
        shortNameHash: number;
        /**
         * The playback speed of the animation. 1 is the normal playback speed.
         */
        speed: number;
        /**
         * The speed multiplier for this state.
         */
        speedMultiplier: number;
        /**
         * The Tag of the State.
         */
        tagHash: number;
        /**
         * Does name match the name of the active state in the statemachine?
         */
        IsName(name: string): void;
        /**
         * Does tag match the tag of the active state in the statemachine.
         */
        IsTag(tag: string): void;
    }
}
declare namespace unity {
    /**
     * Information about clip being played and blended by the Animator.
     */
    class AnimatorClipInfo {
        /**
         * Returns the animation clip played by the Animator.
         */
        clip: AnimationClip;
        /**
         * Returns the blending weight used by the Animator to blend this clip.
         */
        weight: number;
    }
}
declare namespace unity {
    /**
     * The AnimationState gives full control over animation blending.
     */
    class AnimationState {
        /**
         * Which blend mode should be used?
         */
        blendMode: AnimationBlendMode;
        /**
         * The clip that is being played by this animation state.
         */
        clip: AnimationClip;
        /**
         * Enables / disables the animation.
         */
        enabled: boolean;
        /**
         * The length of the animation clip in seconds.
         */
        length: number;
        /**
         * The name of the animation.
         */
        name: string;
        /**
         * The normalized playback speed.
         */
        normalizedSpeed: number;
        /**
         * The normalized time of the animation.
         */
        normalizedTime: number;
        /**
         * The playback speed of the animation. 1 is normal playback speed.
         */
        speed: number;
        /**
         * The current time of the animation.
         */
        time: number;
        /**
         * The weight of animation.
         */
        weight: number;
        /**
         * Wrapping mode of the animation.
         */
        wrapMode: WrapMode;
        /**
         * Adds a transform which should be animated. This allows you to reduce the number of animations you have to create.
         *
         * @param mix The transform to animate.
         * @param recursive Whether to also animate all children of the specified transform.
         */
        AddMixingTransform(mix: Transform, recursive?: boolean): void;
        /**
         * Removes a transform which should be animated.
         */
        RemoveMixingTransform(mix: Transform): void;
    }
}
declare namespace unity {
    /**
     * Stores keyframe based animations.
     *
     * AnimationClip is used by Animation to play back animations.
     */
    class AnimationClip {
        /**
         * The name of the object.
         */
        name: string;
        /**
         * Returns true if the animation clip has no curves and no events.
         */
        get empty(): boolean;
        /**
         * Animation Events for this animation clip.
         */
        events: AnimationEvent[];
        /**
         * Frame rate at which keyframes are sampled. (Read Only)
         */
        frameRate: number;
        /**
         * Returns true if the Animation has animation on the root transform.
         */
        hasGenericRootTransform: boolean;
        /**
         * Returns true if the AnimationClip has root motion curves.
         */
        hasMotionCurves: boolean;
        /**
         * Returns true if the AnimationClip has editor curves for its root motion.
         */
        hasMotionFloatCurves: boolean;
        /**
         * Returns true if the AnimationClip has root Curves.
         */
        hasRootCurves: boolean;
        /**
         * Returns true if the animation contains curve that drives a humanoid rig.
         */
        humanMotion: boolean;
        /**
         * Set to true if the AnimationClip will be used with the Legacy Animation component ( instead of the Animator ).
         */
        legacy: boolean;
        /**
         * Animation length in seconds. (Read Only)
         */
        get length(): number;
        /**
         * AABB of this Animation Clip in local space of Animation component that it is attached too.
         */
        localBounds: Bounds;
        /**
         * Sets the default wrap mode used in the animation state.
         */
        wrapMode: WrapMode;
        /**
         * 曲线数据
         */
        private curvedatas;
        constructor();
        /**
         * Adds an animation event to the clip.
         */
        AddEvent(evt: AnimationEvent): void;
        /**
         * Clears all curves from the clip.
         */
        ClearCurves(): void;
        /**
         * Realigns quaternion keys to ensure shortest interpolation paths.
         */
        EnsureQuaternionContinuity(): void;
        /**
         * Samples an animation at a given time for any animated properties.
         *
         * @param go The animated game object.
         * @param time The time to sample an animation.
         */
        SampleAnimation(go: GameObject, time: number): void;
        /**
         * Assigns the curve to animate a specific property.
         *
         * @param relativePath Path to the game object this curve applies to. The relativePath is formatted similar to a pathname, e.g. "root/spine/leftArm". If relativePath is empty it refers to the game object the animation clip is attached to.
         * @param type The class type of the component that is animated.
         * @param propertyName The name or path to the property being animated.
         * @param curve The animation curve.
         */
        SetCurve(relativePath: string, type: (new () => any), propertyName: string, curve: AnimationCurve): void;
        /**
         * Retrieves all curves from a specific animation clip.
         *
         * 等价Unity中AnimationUtility.GetAllCurves
         */
        GetAllCurves(): AnimationClipCurveData[];
        /**
         * Returns all the float curve bindings currently stored in the clip.
         */
        GetCurveBindings(): EditorCurveBinding[];
    }
}
declare namespace unity {
    /**
     * The runtime representation of the AnimatorController. Use this representation to change the Animator Controller during runtime.
     */
    class RuntimeAnimatorController {
        /**
         * Retrieves all AnimationClip used by the controller.
         */
        animationClips: AnimationClip[];
    }
}
declare namespace unity {
    /**
     * Used to communicate between scripting and the controller. Some parameters can be set in scripting and used by the controller, while other parameters are based on Custom Curves in Animation Clips and can be sampled using the scripting API.
     */
    class AnimatorControllerParameter {
        /**
         * The default bool value for the parameter.
         */
        defaultBool: boolean;
        /**
         * The default float value for the parameter.
         */
        defaultFloat: number;
        /**
         * The default int value for the parameter.
         */
        defaultInt: number;
        /**
         * The name of the parameter.
         */
        name: string;
        /**
         * Returns the hash of the parameter based on its name.
         */
        nameHash: number;
        /**
         * The type of the parameter.
         */
        type: AnimatorControllerParameterType;
    }
}
declare namespace unity {
    /**
     * Defines how a curve is attached to an object that it controls.
     */
    class EditorCurveBinding {
        /**
         * The transform path of the object that is animated.
         */
        path: string;
        /**
         * The name of the property to be animated.
         */
        propertyName: string;
        /**
         * The type of the property to be animated.
         */
        type: new () => any;
        /**
         * Creates a preconfigured binding for a curve where values should not be interpolated.
         *
         * @param inPath The transform path to the object to animate.
         * @param inType The type of the object to animate.
         * @param inPropertyName The name of the property to animate on the object.
         */
        static DiscreteCurve(inPath: string, inType: new () => any, inPropertyName: string): void;
        /**
         * Creates a preconfigured binding for a float curve.
         *
         * @param inPath The transform path to the object to animate.
         * @param inType The type of the object to animate.
         * @param inPropertyName The name of the property to animate on the object.
         */
        static FloatCurve(inPath: string, inType: new () => any, inPropertyName: string): void;
        /**
         * Creates a preconfigured binding for a curve that points to an Object.
         *
         * @param inPath The transform path to the object to animate.
         * @param inType The type of the object to animate.
         * @param inPropertyName The name of the property to animate on the object.
         */
        static PPtrCurve(inPath: string, inType: new () => any, inPropertyName: string): void;
    }
}
declare namespace unity {
    /**
     * An AnimationClipCurveData object contains all the information needed to identify a specific curve in an AnimationClip. The curve animates a specific property of a component / material attached to a game object / animated bone.
     */
    class AnimationClipCurveData {
        __class__: "unity.AnimationClipCurveData";
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
}
declare namespace unity {
    /**
     * The Animator Controller controls animation through layers with state machines, controlled by parameters.
     */
    class AnimatorController extends RuntimeAnimatorController {
        /**
         * The layers in the controller.
         */
        layers: AnimatorControllerLayer[];
        /**
         * Parameters are used to communicate between scripting and the controller. They are used to drive transitions and blendtrees for example.
         */
        parameters: AnimatorControllerParameter[];
    }
}
declare namespace unity {
    /**
     * The Animation Layer contains a state machine that controls animations of a model or part of it.
     */
    class AnimatorControllerLayer {
        /**
         * The AvatarMask that is used to mask the animation on the given layer.
         */
        avatarMask: AvatarMask;
        /**
         * The blending mode used by the layer. It is not taken into account for the first layer.
         */
        blendingMode: AnimatorLayerBlendingMode;
        /**
         * The default blending weight that the layers has. It is not taken into account for the first layer.
         */
        defaultWeight: number;
        /**
         * When active, the layer will have an IK pass when evaluated. It will trigger an OnAnimatorIK callback.
         */
        iKPass: boolean;
        /**
         * The name of the layer.
         */
        name: string;
        /**
         * The state machine for the layer.
         */
        stateMachine: AnimatorStateMachine;
        /**
         * When active, the layer will take control of the duration of the Synced Layer.
         */
        syncedLayerAffectsTiming: boolean;
        /**
         * Specifies the index of the Synced Layer.
         */
        syncedLayerIndex: number;
        /**
         * Gets the override behaviour list for the state on the given layer.
         *
         * @param state The state which we want to get the behaviour list.
         */
        GetOverrideBehaviours(state: AnimatorState): void;
        /**
         * Gets the override motion for the state on the given layer.
         *
         * @param state The state which we want to get the motion.
         */
        GetOverrideMotion(state: AnimatorState): void;
        /**
         * Sets the override behaviour list for the state on the given layer.
         *
         * @param state The state which we want to set the behaviour list.
         * @param behaviours The behaviour list that will be set.
         */
        SetOverrideBehaviours(state: AnimatorState, behaviours: StateMachineBehaviour[]): void;
        /**
         * Sets the override motion for the state on the given layer.
         *
         * @param state The state which we want to set the motion.
         * @param motion The motion that will be set.
         */
        SetOverrideMotion(state: AnimatorState, motion: Motion): void;
    }
}
declare namespace unity {
    /**
     * AvatarMask is used to mask out humanoid body parts and transforms.
     *
     * They can be used when importing animation or in an animator controller layer.
     */
    class AvatarMask {
        /**
         * Number of transforms.
         */
        transformCount: number;
        /**
         * Adds a transform path into the AvatarMask.
         *
         * @param transform The transform to add into the AvatarMask.
         * @param recursive Whether to also add all children of the specified transform.
         */
        AddTransformPath(transform: Transform, recursive?: boolean): void;
        /**
         * Returns true if the humanoid body part at the given index is active.
         *
         * @param index The index of the humanoid body part.
         */
        GetHumanoidBodyPartActive(index: AvatarMaskBodyPart): void;
        /**
         * Returns true if the transform at the given index is active.
         *
         * @param index The index of the transform.
         */
        GetTransformActive(index: number): void;
        /**
         * Returns the path of the transform at the given index.
         *
         * @param index The index of the transform.
         */
        GetTransformPath(index: number): void;
        /**
         * Removes a transform path from the AvatarMask.
         *
         * @param transform The Transform that should be removed from the AvatarMask.
         * @param recursive Whether to also remove all children of the specified transform.
         */
        RemoveTransformPath(transform: Transform, recursive?: boolean): void;
        /**
         * Sets the humanoid body part at the given index to active or not.
         *
         * @param index The index of the humanoid body part.
         * @param value Active or not.
         */
        SetHumanoidBodyPartActive(index: AvatarMaskBodyPart, value: boolean): void;
        /**
         * Sets the tranform at the given index to active or not.
         *
         * @param index The index of the transform.
         * @param value Active or not.
         */
        SetTransformActive(index: number, value: boolean): void;
        /**
         * Sets the path of the transform at the given index.
         *
         * @param index The index of the transform.
         * @param path The path of the transform.
         */
        SetTransformPath(index: number, path: string): void;
    }
}
declare namespace unity {
    /**
     * Avatar body part.
     */
    enum AvatarMaskBodyPart {
        /**
         * The Root.
         */
        Root = 0,
        /**
         * The Body.
         */
        Body = 1,
        /**
         * The Head.
         */
        Head = 2,
        /**
         * The Left Leg.
         */
        LeftLeg = 3,
        /**
         * The Right Leg.
         */
        RightLeg = 4,
        /**
         * The Left Arm.
         */
        LeftArm = 5,
        /**
         * The Right Arm.
         */
        RightArm = 6,
        /**
         * Left Fingers.
         */
        LeftFingers = 7,
        /**
         * Right Fingers.
         */
        RightFingers = 8,
        /**
         * Left Foot IK.
         */
        LeftFootIK = 9,
        /**
         * Right Foot IK.
         */
        RightFootIK = 10,
        /**
         * Left Hand IK.
         */
        LeftHandIK = 11,
        /**
         * Right Hand IK.
         */
        RightHandIK = 12,
        /**
         * Total number of body parts.
         */
        LastBodyPart = 13
    }
}
declare namespace unity {
    /**
     * A graph controlling the interaction of states. Each state references a motion.
     */
    class AnimatorStateMachine {
        /**
         * The position of the AnyState node.
         */
        anyStatePosition: Vector3;
        /**
         * The list of AnyState transitions.
         */
        anyStateTransitions: AnimatorStateTransition[];
        /**
         * The Behaviour list assigned to this state machine.
         */
        behaviours: StateMachineBehaviour[];
        /**
         * The state that the state machine will be in when it starts.
         */
        defaultState: AnimatorState;
        /**
         * The position of the entry node.
         */
        entryPosition: Vector3;
        /**
         * The list of entry transitions in the state machine.
         */
        entryTransitions: AnimatorTransition[];
        /**
         * The position of the exit node.
         */
        exitPosition: Vector3;
        /**
         * The position of the parent state machine node.Only valid when in a hierachic state machine.
         */
        parentStateMachinePosition: Vector3;
        /**
         * The list of sub state machines.
         */
        stateMachines: ChildAnimatorStateMachine[];
        /**
         * The list of states.
         */
        states: ChildAnimatorState[];
    }
}
declare namespace unity {
    /**
     * Base class for animator transitions. Transitions define when and how the state machine switches from one state to another.
     *
     * A transition happens when all its conditions are met.
     */
    class AnimatorTransitionBase {
        /**
         * AnimatorCondition conditions that need to be met for a transition to happen.
         */
        conditions: AnimatorCondition[];
        /**
         * The destination state of the transition.
         */
        destinationState: AnimatorState;
        /**
         * The destination state machine of the transition.
         */
        destinationStateMachine: AnimatorStateMachine;
        /**
         * Is the transition destination the exit of the current state machine.
         */
        isExit: boolean;
        /**
         * Mutes the transition. The transition will never occur.
         */
        mute: boolean;
        /**
         * Mutes all other transitions in the source state.
         */
        solo: boolean;
        /**
         * Utility function to add a condition to a transition.
         *
         * @param mode The AnimatorCondition mode of the condition.
         * @param threshold The threshold value of the condition.
         * @param parameter The name of the parameter.
         */
        AddCondition(mode: AnimatorConditionMode, threshold: number, parameter: string): void;
        /**
         * Utility function to remove a condition from the transition.
         *
         * @param condition The condition to remove.
         */
        RemoveCondition(condition: AnimatorCondition): void;
    }
}
declare namespace unity {
    /**
     * Transitions define when and how the state machine switch from one state to another. AnimatorStateTransition always originate from an Animator State (or AnyState) and have timing parameters.
     *
     * A transition happens when all its conditions are met. AnimatorStateTransition derives from AnimatorTransitionBase.
     */
    class AnimatorStateTransition extends AnimatorTransitionBase {
        /**
         * Set to true to allow or disallow transition to self during AnyState transition.
         */
        canTransitionToSelf: boolean;
        /**
         * The duration of the transition.
         */
        duration: number;
        /**
         * If AnimatorStateTransition.hasExitTime is true, exitTime represents the exact time at which the transition can take effect. This is represented in normalized time, so for example an exit time of 0.75 means that on the first frame where 75% of the animation has played, the Exit Time condition will be true. On the next frame, the condition will be false. For looped animations, transitions with exit times smaller than 1 will be evaluated every loop, so you can use this to time your transition with the proper timing in the animation, every loop. Transitions with exit times greater than one will be evaluated only once, so they can be used to exit at a specific time, after a fixed number of loops. For example, a transition with an exit time of 3.5 will be evaluated once, after three and a half loops.
         */
        exitTime: number;
        /**
         * When active the transition will have an exit time condition.
         */
        hasExitTime: boolean;
        /**
         * Determines whether the duration of the transition is reported in a fixed duration in seconds or as a normalized time.
         */
        hasFixedDuration: boolean;
        /**
         * Which AnimatorState transitions can interrupt the Transition.
         */
        interruptionSource: TransitionInterruptionSource;
        /**
         * The time at which the destination state will start.
         */
        offset: number;
        /**
         * The Transition can be interrupted by a transition that has a higher priority.
         */
        orderedInterruption: boolean;
    }
}
declare namespace unity {
    /**
     * AnimatorCondition conditions that need to be met for a transition to happen.
     */
    class AnimatorCondition {
        /**
         * The mode of the condition.
         */
        mode: AnimatorConditionMode;
        /**
         * The name of the parameter used in the condition.
         */
        parameter: string;
        /**
         * The AnimatorParameter's threshold value for the condition to be true.
         */
        threshold: number;
    }
}
declare namespace unity {
    /**
     * States are the basic building blocks of a state machine. Each state contains a Motion ( AnimationClip or BlendTree) which will play while the character is in that state. When an event in the game triggers a state transition, the character will be left in a new state whose animation sequence will then take over.
     */
    class AnimatorState {
        /**
         * The Behaviour list assigned to this state.
         */
        behaviours: StateMachineBehaviour[];
        /**
         * Offset at which the animation loop starts. Useful for synchronizing looped animations. Units is normalized time.
         */
        cycleOffset: number;
        /**
         * The animator controller parameter that drives the cycle offset value.
         */
        cycleOffsetParameter: string;
        /**
         * Define if the cycle offset value is driven by an Animator controller parameter or by the value set in the editor.
         */
        cycleOffsetParameterActive: boolean;
        /**
         * Should Foot IK be respected for this state.
         */
        iKOnFeet: boolean;
        /**
         * Should the state be mirrored.
         */
        mirror: boolean;
        /**
         * The animator controller parameter that drives the mirror value.
         */
        mirrorParameter: string;
        /**
         * Define if the mirror value is driven by an Animator controller parameter or by the value set in the editor.
         */
        mirrorParameterActive: boolean;
        /**
         * The motion assigned to this state.
         */
        motion: Motion;
        /**
         * The hashed name of the state.
         */
        nameHash: number;
        /**
         * The default speed of the motion.
         */
        speed: number;
        /**
         * The animator controller parameter that drives the speed value.
         */
        speedParameter: string;
        /**
         * Define if the speed value is driven by an Animator controller parameter or by the value set in the editor.
         */
        speedParameterActive: boolean;
        /**
         * A tag can be used to identify a state.
         */
        tag: string;
        /**
         * If timeParameterActive is true, the value of this Parameter will be used instead of normalized time.
         */
        timeParameter: string;
        /**
         * If true, use value of given Parameter as normalized time.
         */
        timeParameterActive: boolean;
        /**
         * The transitions that are going out of the state.
         */
        transitions: AnimatorStateTransition[];
        /**
         * Whether or not the AnimatorStates writes back the default values for properties that are not animated by its Motion.
         */
        writeDefaultValues: boolean;
        /**
         * Utility function to add an outgoing transition to the exit of the state's parent state machine.
         *
         * @param defaultExitTime If true, the exit time will be the equivalent of 0.25 second.
         */
        AddExitTransition(defaultExitTime: boolean): void;
        /**
         * Adds a state machine behaviour class of type stateMachineBehaviourType to the AnimatorState. C# Users can use a generic version.
         */
        AddStateMachineBehaviour(stateMachineBehaviourType: new () => any): void;
        /**
         * Utility function to add an outgoing transition to the destination state.
         *
         * @param destinationState The destination state | machine.
         * @param defaultExitTime If true, the exit time will be the equivalent of 0.25 second.
         */
        AddTransition(destinationState: AnimatorState | AnimatorStateMachine | AnimatorStateTransition, defaultExitTime: boolean): void;
        /**
         * Utility function to remove a transition from the state.
         *
         * @param transition Transition to remove.
         */
        RemoveTransition(transition: AnimatorStateTransition): void;
    }
}
declare namespace unity {
    /**
     * Base class for AnimationClips and BlendTrees.
     *
     * Motions are used by animation States in the Mecanim StateMachines.
     */
    class Motion {
    }
}
declare namespace unity {
    /**
     * Transitions define when and how the state machine switch from on state to another. AnimatorTransition always originate from a StateMachine or a StateMachine entry. They do not define timing parameters.
     *
     * A transition happens when all its conditions are met.
     */
    class AnimatorTransition extends AnimatorTransitionBase {
    }
}
declare namespace unity {
    /**
     * Structure that represents a state machine in the context of its parent state machine.
     */
    class ChildAnimatorStateMachine {
        /**
         * The position the the state machine node in the context of its parent state machine.
         */
        position: Vector3;
        /**
         * The state machine.
         */
        stateMachine: AnimatorStateMachine;
    }
}
declare namespace unity {
    /**
     * Structure that represents a state in the context of its parent state machine.
     */
    class ChildAnimatorState {
        /**
         * The position the the state node in the context of its parent state machine.
         */
        position: Vector3;
        /**
         * The state.
         */
        state: AnimatorState;
    }
}
declare namespace unity {
    /**
     * Use the PlayableGraph to manage Playable creations and destructions.
     *
     * The PlayableGraph is also the link to different systems, through structs that implement IPlayableOutput. For example, AnimationPlayableOutput or AudioPlayableOutput.
     */
    class PlayableGraph {
    }
}
declare namespace feng3d {
    var Line_Trail_vertex: string;
}
declare namespace feng3d {
    var Line_Trail_fragment: string;
}
declare namespace feng3d {
    /**
     * 线条拖尾
     */
    class Line_TrailUniforms {
        __class__: "feng3d.Line_TrailUniforms";
        s_texture: Texture2D<Texture2DEventMap>;
        u_color: Color4;
    }
}
declare namespace feng3d {
    interface UniformsTypes {
        "Line_Trail": Line_TrailUniforms;
    }
    interface DefaultMaterial {
        "Line_Trail-Material": Material;
    }
}
declare namespace feng3d {
    /**
     * Control the direction lines face, when using the LineRenderer or TrailRenderer.
     *
     * 使用LineRenderer或TrailRenderer时，控制方向线的面。
     */
    enum LineAlignment {
        /**
         * Lines face the camera.
         *
         * 线面向相机。
         */
        View = 0,
        /**
         * Lines face the Z axis of the Transform Component.
         *
         * 线面向变换组件的Z轴。
         */
        TransformZ = 1
    }
}
declare namespace feng3d {
    /**
     * Choose how textures are applied to Lines and Trails.
     *
     * 选择如何将纹理应用于线和迹线。
     */
    enum LineTextureMode {
        /**
         * Map the texture once along the entire length of the line.
         *
         * 沿线的整个长度映射一次纹理。
         */
        Stretch = 0,
        /**
         * Repeat the texture along the line, based on its length in world units. To set the tiling rate, use Material.SetTextureScale.
         *
         * 根据纹理的长度（以世界单位为单位），沿线重复纹理。要设置平铺率，请使用Material.SetTextureScale。
         */
        Tile = 1,
        /**
         * Map the texture once along the entire length of the line, assuming all vertices are evenly spaced.
         *
         * 假设所有顶点均等分布，则沿着线的整个长度映射一次纹理。
         */
        DistributePerSegment = 2,
        /**
         * Repeat the texture along the line, repeating at a rate of once per line segment. To adjust the tiling rate, use Material.SetTextureScale.
         *
         * 沿线重复纹理，每个线段重复一次。要调整平铺率，请使用Material.SetTextureScale。
         */
        RepeatPerSegment = 3
    }
}
declare namespace feng3d {
    /**
     * The line renderer is used to draw free-floating lines in 3D space.
     *
     * 线渲染器用于在三维空间中绘制自由浮动的线。
     */
    export class LineRenderer extends Renderable {
        geometry: any;
        material: Material;
        /**
         * Connect the start and end positions of the line together to form a continuous loop.
         *
         * 将直线的起点和终点连接在一起，形成一个连续的回路。
         */
        loop: boolean;
        /**
         * 是否使用曲线。
         */
        useCurve: boolean;
        /**
         * 曲线采样频率。
         */
        curveSamples: number;
        /**
         * 顶点列表。
         */
        positions: Vector3[];
        /**
         * 曲线宽度。
         */
        lineWidth: MinMaxCurve;
        /**
         *
         * 线条颜色。
         */
        lineColor: MinMaxGradient;
        /**
         * Set this to a value greater than 0, to get rounded corners between each segment of the line.
         *
         * 将此值设置为大于0的值，以在直线的每个线段之间获取圆角。
         */
        numCornerVertices: number;
        /**
         * Set this to a value greater than 0, to get rounded corners on each end of the line.
         *
         * 将此值设置为大于0的值，以在行的两端获得圆角。
         */
        numCapVertices: number;
        /**
         * Select whether the line will face the camera, or the orientation of the Transform Component.
         *
         * 选择线是否将面对摄像机，或转换组件的方向。
         */
        alignment: LineAlignment;
        /**
         * Choose whether the U coordinate of the line texture is tiled or stretched.
         *
         * 选择是平铺还是拉伸线纹理的U坐标。
         */
        textureMode: LineTextureMode;
        /**
         * Apply a shadow bias to prevent self-shadowing artifacts. The specified value is the proportion of the line width at each segment.
         *
         * 应用阴影偏差以防止自阴影伪影。指定的值是每段线宽的比例。
         */
        shadowBias: number;
        /**
         * Configures a line to generate Normals and Tangents. With this data, Scene lighting can affect the line via Normal Maps and the Unity Standard Shader, or your own custom-built Shaders.
         *
         * 是否自动生成灯光所需的法线与切线。
         */
        generateLightingData: boolean;
        /**
         * If enabled, the lines are defined in world space.
         *
         * 如果启用，则在世界空间中定义线。
         */
        useWorldSpace: boolean;
        /**
         * Set the curve describing the width of the line at various points along its length.
         *
         * 设置曲线，以描述沿线长度在各个点处的线宽。
         */
        get widthCurve(): AnimationCurve;
        /**
         * Set an overall multiplier that is applied to the LineRenderer.widthCurve to get the final width of the line.
         *
         * 设置一个应用于LineRenderer.widthCurve的总乘数，以获取线的最终宽度。
         */
        get widthMultiplier(): number;
        set widthMultiplier(v: number);
        /**
         * Set the color gradient describing the color of the line at various points along its length.
         *
         * 设置颜色渐变，以描述线条沿其长度的各个点的颜色。
         */
        get colorGradient(): Gradient;
        /**
         * Set the color at the end of the line.
         *
         * 设置线尾颜色。
         */
        get endColor(): Color4;
        set endColor(v: Color4);
        /**
         * Set the width at the end of the line.
         *
         * 设置线尾宽度。
         */
        get endWidth(): number;
        set endWidth(v: number);
        /**
         * Set/get the number of vertices.
         *
         * 设置/获取顶点数。
         */
        get positionCount(): number;
        set positionCount(v: number);
        /**
         * Set the color at the start of the line.
         *
         * 设置行线头颜色。
         */
        get startColor(): Color4;
        set startColor(v: Color4);
        /**
         * Set the width at the start of the line.
         *
         * 设置线头宽度
         */
        get startWidth(): number;
        set startWidth(v: number);
        beforeRender(renderAtomic: RenderAtomic, scene: Scene, camera: Camera): void;
        /**
         * Creates a snapshot of LineRenderer and stores it in mesh.
         *
         * 创建LineRenderer的快照并将其存储在网格中。
         *
         * @param mesh	A static mesh that will receive the snapshot of the line.
         * @param camera	The camera used for determining which way camera-space lines will face.
         * @param useTransform	Include the rotation and scale of the Transform in the baked mesh.
         */
        BakeMesh(mesh: Geometry, camera: Camera, useTransform: boolean): void;
        /**
         * Get the position of a vertex in the line.
         *
         * 获取直线在顶点的位置。
         *
         * @param index	The index of the position to retrieve.
         */
        GetPosition(index: number): Vector3;
        /**
         * Get the positions of all vertices in the line.
         *
         * 获取行中所有顶点的位置。
         *
         * @param positions	The array of positions to retrieve. The array passed should be of at least positionCount in size.
         *
         * @returns How many positions were actually stored in the output array.
         */
        GetPositions(positions?: Vector3[]): Vector3[];
        /**
         * Set the position of a vertex in the line.
         *
         * 设置顶点在直线中的位置。
         *
         * @param index	Which position to set.
         * @param position	The new position.
         */
        setPosition(index: number, position: Vector3): void;
        /**
         * Set the positions of all vertices in the line.
         *
         * 设置线中所有顶点的位置。
         *
         * @param positions	The array of positions to set.
         */
        SetPositions(positions: Vector3[]): void;
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
        static calcMesh(positionVertex: VertexInfo[], textureMode: LineTextureMode, colorGradient: Gradient, totalLength: number, mesh: Geometry): void;
        /**
         * 计算线条拐点接缝
         *
         * @param numCornerVertices 接缝顶点数量
         * @param positionVertex 结点信息列表
         */
        static calcCornerVertices(numCornerVertices: number, positionVertex: VertexInfo[]): void;
        /**
         * 计算线条帽子顶点
         *
         * @param numCapVertices 帽子顶点数量
         * @param positionVertex 结点信息列表
         * @param ishead 是否为线条头部
         */
        static calcCapVertices(numCapVertices: number, positionVertex: VertexInfo[], ishead: boolean): void;
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
        static calcPositionVertex(positions: Vector3[], loop: boolean, rateAtLines: number[], lineWidth: MinMaxCurve, alignment: LineAlignment, cameraPosition: Vector3): VertexInfo[];
        /**
         * 计算线条总长度
         *
         * @param positions 顶点列表
         * @param loop 是否循环
         */
        static calcTotalLength(positions: Vector3[], loop: boolean): number;
        /**
         * 计算结点所在线段位置
         *
         * @param positions 顶点列表
         * @param loop 是否循环
         */
        static calcRateAtLines(positions: Vector3[], loop: boolean, textureMode: LineTextureMode): number[];
        /**
         * 拟合线段为曲线
         *
         * @param positions 点列表
         * @param loop 是否为环线
         * @param rateAtLines 点在线条中的位置
         * @param numSamples 采样次数
         */
        static calcPositionsToCurve(positions: Vector3[], loop: boolean, rateAtLines: number[], numSamples?: number): void;
    }
    /**
     * 顶点信息
     */
    type VertexInfo = {
        width: number;
        position: Vector3;
        rateAtLine: number;
        vertexs: Vector3[];
        tangent: Vector3;
        normal: Vector3;
    };
    export interface ComponentMap {
        LineRenderer: LineRenderer;
    }
    export {};
}
declare namespace feng3d {
    /**
     * The trail renderer is used to make trails behind objects in the Scene as they move about.
     *
     * 线渲染器用于在三维空间中绘制自由浮动的线。
     */
    class TrailRenderer extends Renderable {
        "__class__": "feng3d.TrailRenderer";
        geometry: any;
        material: Material;
        /**
         * 结点列表。
         */
        private positions;
        /**
         * 曲线宽度。
         */
        lineWidth: MinMaxCurve;
        /**
         * How long does the trail take to fade out.
         */
        time: number;
        /**
         * Set the minimum distance the trail can travel before a new vertex is added to it.
         */
        minVertexDistance: number;
        /**
         * Does the GameObject of this Trail Renderer auto destruct?
         */
        autodestruct: boolean;
        /**
         * Creates trails when the GameObject moves.
         */
        emitting: boolean;
        /**
         *
         * 线条颜色。
         */
        lineColor: MinMaxGradient;
        /**
         * Set this to a value greater than 0, to get rounded corners between each segment of the line.
         *
         * 将此值设置为大于0的值，以在直线的每个线段之间获取圆角。
         */
        numCornerVertices: number;
        /**
         * Set this to a value greater than 0, to get rounded corners on each end of the line.
         *
         * 将此值设置为大于0的值，以在行的两端获得圆角。
         */
        numCapVertices: number;
        /**
         * Select whether the line will face the camera, or the orientation of the Transform Component.
         *
         * 选择线是否将面对摄像机，或转换组件的方向。
         */
        alignment: LineAlignment;
        /**
         * Choose whether the U coordinate of the line texture is tiled or stretched.
         *
         * 选择是平铺还是拉伸线纹理的U坐标。
         */
        textureMode: LineTextureMode;
        /**
         * Configures a line to generate Normals and Tangents. With this data, Scene lighting can affect the line via Normal Maps and the Unity Standard Shader, or your own custom-built Shaders.
         *
         * 是否自动生成灯光所需的法线与切线。
         */
        generateLightingData: boolean;
        /**
         * Apply a shadow bias to prevent self-shadowing artifacts. The specified value is the proportion of the line width at each segment.
         *
         * 应用阴影偏差以防止自阴影伪影。指定的值是每段线宽的比例。
         */
        shadowBias: number;
        /**
         * Set the curve describing the width of the line at various points along its length.
         *
         * 设置曲线，以描述沿线长度在各个点处的线宽。
         */
        get widthCurve(): AnimationCurve;
        /**
         * Set an overall multiplier that is applied to the LineRenderer.widthCurve to get the final width of the line.
         *
         * 设置一个应用于LineRenderer.widthCurve的总乘数，以获取线的最终宽度。
         */
        get widthMultiplier(): number;
        set widthMultiplier(v: number);
        /**
         * Set the color gradient describing the color of the line at various points along its length.
         *
         * 设置颜色渐变，以描述线条沿其长度的各个点的颜色。
         */
        get colorGradient(): Gradient;
        /**
         * Set the color at the end of the line.
         *
         * 设置线尾颜色。
         */
        get endColor(): Color4;
        set endColor(v: Color4);
        /**
         * Set the width at the end of the line.
         *
         * 设置线尾宽度。
         */
        get endWidth(): number;
        set endWidth(v: number);
        /**
         * Set/get the number of vertices.
         *
         * 设置/获取顶点数。
         */
        get positionCount(): number;
        set positionCount(v: number);
        /**
         * Set the color at the start of the line.
         *
         * 设置行线头颜色。
         */
        get startColor(): Color4;
        set startColor(v: Color4);
        /**
         * Set the width at the start of the line.
         *
         * 设置线头宽度
         */
        get startWidth(): number;
        set startWidth(v: number);
        beforeRender(renderAtomic: RenderAtomic, scene: Scene, camera: Camera): void;
        /**
         * 每帧执行
         */
        update(interval?: number): void;
        /**
         * Creates a snapshot of LineRenderer and stores it in mesh.
         *
         * 创建LineRenderer的快照并将其存储在网格中。
         *
         * @param mesh	A static mesh that will receive the snapshot of the line.
         * @param camera	The camera used for determining which way camera-space lines will face.
         * @param useTransform	Include the rotation and scale of the Transform in the baked mesh.
         */
        BakeMesh(mesh: Geometry, camera: Camera, useTransform: boolean): void;
        /**
         * Adds a position to the trail.
         *
         * @param position	The position to add to the trail.
         */
        AddPosition(position: Vector3): void;
        /**
         * Add an array of positions to the trail.
         *
         * All points inside a TrailRenderer store a timestamp when they are born. This, together with the TrailRenderer.time property, is used to determine when they will be removed. For trails to disappear smoothly, each position must have a unique, increasing timestamp. When positions are supplied from script and the current time is identical for multiple points, position timestamps are adjusted to interpolate smoothly between the timestamp of the newest existing point in the trail and the current time.
         *
         * @param positions	The positions to add to the trail.
         */
        AddPositions(positions: Vector3[]): void;
        /**
         * Removes all points from the TrailRenderer. Useful for restarting a trail from a new position.
         */
        Clear(): void;
        /**
         * Get the position of a vertex in the line.
         *
         * 获取直线在顶点的位置。
         *
         * @param index	The index of the position to retrieve.
         */
        GetPosition(index: number): {
            position: Vector3;
            birthTime: number;
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
        GetPositions(positions?: Vector3[]): Vector3[];
        /**
         * Set the position of a vertex in the line.
         *
         * 设置顶点在直线中的位置。
         *
         * @param index	Which position to set.
         * @param position	The new position.
         */
        setPosition(index: number, position: Vector3): void;
        /**
         * Set the positions of all vertices in the line.
         *
         * 设置线中所有顶点的位置。
         *
         * @param positions	The array of positions to set.
         */
        SetPositions(positions: Vector3[]): void;
        /**
         * 上次结点位置
         */
        private _preworldPos;
    }
    interface ComponentMap {
        TrailRenderer: TrailRenderer;
    }
    interface PrimitiveGameObject {
        "TrailRenderer": GameObject;
    }
}
declare namespace feng3d {
    var TransparentParticlesStandard_vertex: string;
}
declare namespace feng3d {
    var TransparentParticlesStandard_fragment: string;
}
declare namespace feng3d {
    /**
     * 线条拖尾
     */
    class TransparentParticlesStandardUniforms {
        __class__: "feng3d.TransparentParticlesStandardUniforms";
        _BasicColor: Color4;
        _SaturatedColor: Color4;
        _MainTex: Texture2D<Texture2DEventMap>;
        _MainTex_ST: Vector4;
        _ColorRamp: Texture2D<Texture2DEventMap>;
        _NoiseTex: Texture2D<Texture2DEventMap>;
        _NoiseTex_ST: Vector4;
        _EmissionSaturation: number;
        _OpacitySaturation: number;
        _ColorMultiplier: number;
        _ABOffset: number;
        _DissolveStep: Vector4;
        _Panning: Vector4;
        _TintColor: Color4;
        _GlobalAlpha: number;
        _EmissivePower: number;
        _NoisePanning: Vector4;
        COLOR_RAMP: boolean;
        COLOR_TINT: boolean;
        APPLY_RGB_COLOR_VERTEX: boolean;
        DISSOLVE_ENABLED: boolean;
        AUTOMATICPANNING: boolean;
        EMISSIVEPOWER: boolean;
        EXTENDED_PARTICLES: boolean;
        NOISE_TEXTURE: boolean;
        NOISE_TEXTURE_EMISSION: boolean;
        NOISE_TEXTURE_ALPHA: boolean;
        NOISE_TEXTURE_DISSOLVE: boolean;
        NOISEUV: boolean;
        FLOWMAP: boolean;
        BLENDMODE_ADDITIVEALPHABLEND: boolean;
        BLENDMODE_ALPHABLEND: boolean;
        BLENDMODE_ADDITIVEDOUBLE: boolean;
        BLENDMODE_SOFTADDITIVE: boolean;
    }
}
declare namespace feng3d {
    interface UniformsTypes {
        "TransparentParticlesStandard": TransparentParticlesStandardUniforms;
    }
    interface DefaultMaterial {
        "TransparentParticlesStandard-Material": Material;
    }
}
//# sourceMappingURL=unity.d.ts.map