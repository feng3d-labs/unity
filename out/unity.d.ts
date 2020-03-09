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
        TransformZ = 1,
        /**
         * 无特定朝向，自动根据线条走向确定面向(法线)
         */
        None = 2
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
    class LineRenderer extends Renderable {
        geometry: any;
        /**
         * Connect the start and end positions of the line together to form a continuous loop.
         *
         * 将直线的起点和终点连接在一起，形成一个连续的回路。
         */
        loop: boolean;
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
        beforeRender(gl: GL, renderAtomic: RenderAtomic, scene: Scene, camera: Camera): void;
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
         * 计算网格
         *
         * @param positionVectex 顶点列表
         * @param rateAtLines 顶点所在线条位置
         * @param textureMode 纹理模式
         * @param totalLength 线条总长度
         * @param mesh 保存网格数据的对象
         */
        static calcMesh(positionVectex: {
            vertexs: Vector3[];
            rateAtLine: number;
        }[], textureMode: LineTextureMode, colorGradient: Gradient, totalLength: number, mesh: Geometry): void;
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
        static calcPositionVectex(positions: Vector3[], loop: boolean, rateAtLines: number[], lineWidth: MinMaxCurve, alignment: LineAlignment, cameraPosition: Vector3): {
            vertexs: Vector3[];
            rateAtLine: number;
        }[];
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
         * Generates a simplified version of the original line by removing points that fall within the specified tolerance.
         *
         * 通过删除落在指定公差范围内的点，生成原始线的简化版本。
         *
         * @param tolerance	This value is used to evaluate which points should be removed from the line. A higher value results in a simpler line (less points). A positive value close to zero results in a line with little to no reduction. A value of zero or less has no effect.
         *
         * @todo
         */
        Simplify(tolerance: number): void;
    }
}
declare namespace feng3d {
    /**
     * The trail renderer is used to make trails behind objects in the Scene as they move about.
     *
     * 线渲染器用于在三维空间中绘制自由浮动的线。
     */
    class TrailRenderer extends Renderable {
        geometry: any;
        /**
         * 顶点列表。
         */
        private positions;
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
         * Does the GameObject of this Trail Renderer auto destruct?
         */
        autodestruct: boolean;
        /**
         * Creates trails when the GameObject moves.
         */
        emitting: boolean;
        /**
         * Set the minimum distance the trail can travel before a new vertex is added to it.
         */
        minVertexDistance: number;
        /**
         * How long does the trail take to fade out.
         */
        time: number;
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
        beforeRender(gl: GL, renderAtomic: RenderAtomic, scene: Scene, camera: Camera): void;
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
         * 计算总长度
         *
         * @param positions 顶点列表
         * @param loop 是否循环
         */
        private calcTotalLength;
        private calcRateAtLines;
        private positionsToCurve;
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
         * Generates a simplified version of the original line by removing points that fall within the specified tolerance.
         *
         * 通过删除落在指定公差范围内的点，生成原始线的简化版本。
         *
         * @param tolerance	This value is used to evaluate which points should be removed from the line. A higher value results in a simpler line (less points). A positive value close to zero results in a line with little to no reduction. A value of zero or less has no effect.
         *
         * @todo
         */
        Simplify(tolerance: number): void;
    }
}
//# sourceMappingURL=unity.d.ts.map