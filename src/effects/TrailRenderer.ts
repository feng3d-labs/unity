namespace feng3d
{
    /**
     * The trail renderer is used to make trails behind objects in the Scene as they move about.
     * 
     * 线渲染器用于在三维空间中绘制自由浮动的线。
     */
    @AddComponentMenu("Effects/TrailRenderer")
    @RegisterComponent()
    export class TrailRenderer extends Renderable
    {
        "__class__": "feng3d.TrailRenderer";

        @oav({ exclude: true })
        geometry = <any>new Geometry();

        material = Material.getDefault("Line_Trail-Material");

        /**
         * 结点列表。
         */
        private positions: { position: Vector3, birthTime: number }[] = [];

        /**
         * 曲线宽度。
         */
        @oav({ tooltip: "曲线宽度。" })
        @serialize
        lineWidth = serialization.setValue(new MinMaxCurve(), { between0And1: true, curveMultiplier: 0.1, mode: MinMaxCurveMode.Curve });

        /**
         * How long does the trail take to fade out.
         */
        @serialize
        @oav({ tooltip: "How long does the trail take to fade out." })
        time = 5;

        /**
         * Set the minimum distance the trail can travel before a new vertex is added to it.
         */
        @serialize
        @oav({ tooltip: "How long does the trail take to fade out." })
        minVertexDistance = 0.1;

        /**
         * Does the GameObject of this Trail Renderer auto destruct?
         */
        @serialize
        @oav({ tooltip: "How long does the trail take to fade out." })
        autodestruct = false;

        /**
         * Creates trails when the GameObject moves.
         */
        @serialize
        @oav({ tooltip: "How long does the trail take to fade out." })
        emitting = true;

        /**
         * 
         * 线条颜色。
         */
        @serialize
        @oav({ tooltip: "线条颜色。" })
        lineColor = serialization.setValue(new MinMaxGradient(), { mode: MinMaxGradientMode.Gradient });

        /**
         * Set this to a value greater than 0, to get rounded corners between each segment of the line.
         * 
         * 将此值设置为大于0的值，以在直线的每个线段之间获取圆角。
         */
        @serialize
        @oav({ tooltip: "将此值设置为大于0的值，以在直线的每个线段之间获取圆角。" })
        numCornerVertices = 0;

        /**
         * Set this to a value greater than 0, to get rounded corners on each end of the line.
         * 
         * 将此值设置为大于0的值，以在行的两端获得圆角。
         */
        @serialize
        @oav({ tooltip: "将此值设置为大于0的值，以在直线的每个线段之间获取圆角。" })
        numCapVertices = 0;

        /**
         * Select whether the line will face the camera, or the orientation of the Transform Component.
         * 
         * 选择线是否将面对摄像机，或转换组件的方向。
         */
        @serialize
        @oav({ component: "OAVEnum", tooltip: "选择线是否将面对摄像机，或转换组件的方向。", componentParam: { enumClass: LineAlignment } })
        // alignment = LineAlignment.View;
        alignment = LineAlignment.TransformZ;

        /**
         * Choose whether the U coordinate of the line texture is tiled or stretched.
         * 
         * 选择是平铺还是拉伸线纹理的U坐标。
         */
        @serialize
        @oav({ component: "OAVEnum", tooltip: "选择是平铺还是拉伸线纹理的U坐标。", componentParam: { enumClass: LineTextureMode } })
        textureMode = LineTextureMode.Stretch;

        /**
         * Configures a line to generate Normals and Tangents. With this data, Scene lighting can affect the line via Normal Maps and the Unity Standard Shader, or your own custom-built Shaders.
         * 
         * 是否自动生成灯光所需的法线与切线。
         */
        @serialize
        @oav({ tooltip: "是否自动生成灯光所需的法线与切线。" })
        generateLightingData = false;

        /**
         * Apply a shadow bias to prevent self-shadowing artifacts. The specified value is the proportion of the line width at each segment.
         * 
         * 应用阴影偏差以防止自阴影伪影。指定的值是每段线宽的比例。
         */
        @serialize
        @oav({ tooltip: "应用阴影偏差以防止自阴影伪影。指定的值是每段线宽的比例。" })
        shadowBias = 0.5;

        /**
         * Set the curve describing the width of the line at various points along its length.
         * 
         * 设置曲线，以描述沿线长度在各个点处的线宽。
         */
        get widthCurve()
        {
            return this.lineWidth.curve;
        }

        /**
         * Set an overall multiplier that is applied to the LineRenderer.widthCurve to get the final width of the line.
         * 
         * 设置一个应用于LineRenderer.widthCurve的总乘数，以获取线的最终宽度。
         */
        get widthMultiplier()
        {
            return this.lineWidth.curveMultiplier;
        }

        set widthMultiplier(v)
        {
            this.lineWidth.curveMultiplier = v;
        }

        /**
         * Set the color gradient describing the color of the line at various points along its length.
         * 
         * 设置颜色渐变，以描述线条沿其长度的各个点的颜色。
         */
        get colorGradient()
        {
            return this.lineColor.gradient;
        }

        /**
         * Set the color at the end of the line.
         * 
         * 设置线尾颜色。
         */
        get endColor()
        {
            var color4 = new Color4();
            var color3 = this.colorGradient.colorKeys[this.colorGradient.colorKeys.length - 1];
            var alpha = this.colorGradient.alphaKeys[this.colorGradient.alphaKeys.length - 1];
            color4.setTo(color3.color.r, color3.color.g, color3.color.b, alpha.alpha);
            return color4;
        }

        set endColor(v)
        {
            this.colorGradient.alphaKeys[this.colorGradient.alphaKeys.length - 1].alpha = v.a
            this.colorGradient.colorKeys[this.colorGradient.colorKeys.length - 1].color.setTo(v.r, v.g, v.b);
        }

        /**
         * Set the width at the end of the line.
         * 
         * 设置线尾宽度。
         */
        get endWidth()
        {
            return this.widthCurve.keys[this.widthCurve.keys.length - 1].value * this.widthMultiplier;
        }

        set endWidth(v)
        {
            this.widthCurve.keys[this.widthCurve.keys.length - 1].value = v / this.widthMultiplier;
        }

        /**
         * Set/get the number of vertices.
         * 
         * 设置/获取顶点数。
         */
        get positionCount()
        {
            return this.positions.length;
        }

        set positionCount(v)
        {
            this.positions.length = v;
        }

        /**
         * Set the color at the start of the line.
         * 
         * 设置行线头颜色。
         */
        get startColor()
        {
            var color4 = new Color4();
            var color3 = this.colorGradient.colorKeys[0];
            var alpha = this.colorGradient.alphaKeys[0];
            color4.setTo(color3.color.r, color3.color.g, color3.color.b, alpha.alpha);
            return color4;
        }

        set startColor(v)
        {
            this.colorGradient.alphaKeys[0].alpha = v.a
            this.colorGradient.colorKeys[0].color.setTo(v.r, v.g, v.b);
        }

        /**
         * Set the width at the start of the line.
         * 
         * 设置线头宽度
         */
        get startWidth()
        {
            return this.widthCurve.keys[0].value * this.widthMultiplier;
        }

        set startWidth(v)
        {
            this.widthCurve.keys[0].value = v / this.widthMultiplier;
        }

        beforeRender(renderAtomic: RenderAtomic, scene: Scene, camera: Camera)
        {
            this.geometry.clear();
            this.BakeMesh(this.geometry, camera, false);

            renderAtomic.shaderMacro.HAS_a_color = true;

            super.beforeRender(renderAtomic, scene, camera);
        }

        /**
         * 每帧执行
         */
        update(interval?: number)
        {

            if (this.emitting)
            {
                var currentPosition = this.transform.worldPosition.clone();

                // 初始化一个必定添加顶点的值
                var moveDistanceSquared = this.minVertexDistance * this.minVertexDistance * 2;
                if (this._preworldPos) moveDistanceSquared = currentPosition.distanceSquared(this._preworldPos);

                // 移动新增结点
                if (moveDistanceSquared >= this.minVertexDistance * this.minVertexDistance)
                {
                    this.AddPosition(currentPosition);
                    this._preworldPos = currentPosition;
                }
            }

            // 移除死亡结点
            var nowTime = Date.now();
            this.positions = this.positions.filter(v => ((nowTime - v.birthTime) < this.time * 1000));

            //
            if (this.positions.length == 0)
            {
                this._preworldPos == null;
            }
        }

        /**
         * Creates a snapshot of LineRenderer and stores it in mesh.
         * 
         * 创建LineRenderer的快照并将其存储在网格中。
         * 
         * @param mesh	A static mesh that will receive the snapshot of the line. 
         * @param camera	The camera used for determining which way camera-space lines will face.
         * @param useTransform	Include the rotation and scale of the Transform in the baked mesh.
         */
        BakeMesh(mesh: Geometry, camera: Camera, useTransform: boolean)
        {
            var positions = this.positions.map(v => v.position);
            if (positions.length < 2) return;

            var textureMode = this.textureMode;
            var loop = false;
            var lineWidth = this.lineWidth;
            var alignment = this.alignment;
            var colorGradient = this.colorGradient;

            // 计算摄像机世界坐标
            var cameraPosition = camera.transform.worldPosition;

            // 计算线条总长度
            var totalLength = LineRenderer.calcTotalLength(positions, loop);

            // 计算结点所在线段位置
            var rateAtLines = LineRenderer.calcRateAtLines(positions, loop, textureMode);

            // 计算结点的顶点
            var positionVertex = LineRenderer.calcPositionVertex(positions, loop, rateAtLines, lineWidth, alignment, cameraPosition);

            // 计算线条拐点接缝
            LineRenderer.calcCornerVertices(this.numCornerVertices, positionVertex);

            // 计算两端帽子
            if (!loop)
            {
                LineRenderer.calcCapVertices(this.numCapVertices, positionVertex, true);
                LineRenderer.calcCapVertices(this.numCapVertices, positionVertex, false);
            }

            // 世界坐标转换为局部坐标
            positionVertex.forEach(v =>
            {
                v.vertexs.forEach(ver =>
                {
                    this.transform.worldToLocalMatrix.transformPoint3(ver, ver);
                });
            });

            // 计算网格
            LineRenderer.calcMesh(positionVertex, textureMode, colorGradient, totalLength, mesh);
        }

        /**
         * Adds a position to the trail.
         * 
         * @param position	The position to add to the trail.
         */
        AddPosition(position: Vector3)
        {
            this.positions.unshift({ position: position, birthTime: Date.now() });
        }

        /**
         * Add an array of positions to the trail.
         * 
         * All points inside a TrailRenderer store a timestamp when they are born. This, together with the TrailRenderer.time property, is used to determine when they will be removed. For trails to disappear smoothly, each position must have a unique, increasing timestamp. When positions are supplied from script and the current time is identical for multiple points, position timestamps are adjusted to interpolate smoothly between the timestamp of the newest existing point in the trail and the current time.
         * 
         * @param positions	The positions to add to the trail.
         */
        AddPositions(positions: Vector3[])
        {
            var preTime = Date.now();
            if (this.positions.length > 0)
                preTime = this.positions[this.positions.length - 1].birthTime;

            for (let i = 0, n = positions.length; i < n; i++)
            {
                this.positions.unshift({ position: positions[i], birthTime: Math.lerp(preTime, Date.now(), (i + 1) / n) });
            }
        }

        /**
         * Removes all points from the TrailRenderer. Useful for restarting a trail from a new position.
         */
        Clear()
        {
            this.positions.length = 0;
            this._preworldPos = null;
        }

        /**
         * Get the position of a vertex in the line.
         * 
         * 获取直线在顶点的位置。
         * 
         * @param index	The index of the position to retrieve.
         */
        GetPosition(index: number)
        {
            return this.positions[index];
        }

        /**
         * Get the positions of all vertices in the line.
         * 
         * 获取行中所有顶点的位置。
         * 
         * @param positions	The array of positions to retrieve. The array passed should be of at least positionCount in size.
         * 
         * @returns How many positions were actually stored in the output array.
         */
        GetPositions(positions: Vector3[] = [])
        {
            positions.length = this.positions.length;
            for (let i = 0; i < this.positions.length; i++)
            {
                positions[i] = positions[i] || new Vector3();
                positions[i].copy(this.positions[i].position);
            }
            return positions;
        }

        /**
         * Set the position of a vertex in the line.
         * 
         * 设置顶点在直线中的位置。
         * 
         * @param index	Which position to set.
         * @param position	The new position.
         */
        setPosition(index: number, position: Vector3)
        {
            this.positions[index].position.copy(position);
        }

        /**
         * Set the positions of all vertices in the line.
         * 
         * 设置线中所有顶点的位置。
         * 
         * @param positions	The array of positions to set.
         */
        SetPositions(positions: Vector3[])
        {
            this.positions.length = positions.length;
            for (let i = 0; i < positions.length; i++)
            {
                if (this.positions[i])
                    this.positions[i].position.copy(positions[i]);
            }
        }

        /**
         * 上次结点位置
         */
        private _preworldPos: Vector3 = null;
    }

    GameObject.registerPrimitive("TrailRenderer", (g) =>
    {
        g.addComponent("TrailRenderer");
    });

    export interface ComponentMap
    {
        TrailRenderer: TrailRenderer
    }

    export interface PrimitiveGameObject
    {
        "TrailRenderer": GameObject;
    }
}