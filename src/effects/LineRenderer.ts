namespace feng3d
{
    /**
     * The line renderer is used to draw free-floating lines in 3D space.
     * 
     * 线渲染器用于在三维空间中绘制自由浮动的线。
     */
    @AddComponentMenu("Effects/LineRenderer")
    export class LineRenderer extends Renderable
    {
        @oav({ exclude: true })
        geometry = <any>new Geometry();

        /**
         * Connect the start and end positions of the line together to form a continuous loop.
         * 
         * 将直线的起点和终点连接在一起，形成一个连续的回路。
         */
        @oav({ tooltip: "将直线的起点和终点连接在一起，形成一个连续的回路。" })
        @serialize
        loop = false;

        /**
         * 顶点列表。
         */
        @oav({ component: "OAVArray", tooltip: "顶点列表。", componentParam: { defaultItem: () => { return new Vector3(); } } })
        @serialize
        positions: Vector3[] = [];

        /**
         * 曲线宽度。
         */
        @oav({ tooltip: "曲线宽度。" })
        @serialize
        lineWidth = serialization.setValue(new MinMaxCurve(), { between0And1: true, curveMultiplier: 0.1, mode: MinMaxCurveMode.Curve });

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
         * Apply a shadow bias to prevent self-shadowing artifacts. The specified value is the proportion of the line width at each segment.
         * 
         * 应用阴影偏差以防止自阴影伪影。指定的值是每段线宽的比例。
         */
        @serialize
        @oav({ tooltip: "应用阴影偏差以防止自阴影伪影。指定的值是每段线宽的比例。" })
        shadowBias = 0.5;

        /**
         * Configures a line to generate Normals and Tangents. With this data, Scene lighting can affect the line via Normal Maps and the Unity Standard Shader, or your own custom-built Shaders.
         * 
         * 是否自动生成灯光所需的法线与切线。
         */
        @serialize
        @oav({ tooltip: "是否自动生成灯光所需的法线与切线。" })
        generateLightingData = false;

        /**
         * If enabled, the lines are defined in world space.
         * 
         * 如果启用，则在世界空间中定义线。
         */
        @serialize
        @oav({ tooltip: "如果启用，则在世界空间中定义线。" })
        useWorldSpace = false;

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
            return this.widthCurve.keys[this.widthCurve.keys.length - 1].value;
        }

        set endWidth(v)
        {
            this.widthCurve.keys[this.widthCurve.keys.length - 1].value = v;
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

        beforeRender(gl: GL, renderAtomic: RenderAtomic, scene: Scene, camera: Camera)
        {
            this.BakeMesh(this.geometry, camera, false);

            renderAtomic.shaderMacro.HAS_a_color = true;

            super.beforeRender(gl, renderAtomic, scene, camera);
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
            var positions = this.positions.concat();
            if (positions.length < 2) return;

            var positions = this.positions.concat();
            if (positions.length < 2) return;

            var textureMode = this.textureMode;
            var loop = this.loop;

            // 顶点所在线段位置
            var rateAtLines: number[] = [0];
            // 线条总长度
            var totalLength = 0;
            var positionCount = positions.length;
            for (let i = 0, n = positionCount - 1; i < n; i++)
            {
                totalLength += positions[i + 1].distance(positions[i]);
                rateAtLines[i + 1] = totalLength;
            }
            if (loop && positionCount > 0)
            {
                totalLength += positions[positionCount - 1].distance(positions[0]);
                rateAtLines[positionCount] = totalLength;
            }
            // 计算顶点所在线段位置
            rateAtLines = rateAtLines.map((v, i) =>
            {
                // 计算UV
                if (textureMode == LineTextureMode.Stretch || textureMode == LineTextureMode.Tile)
                {
                    return v / totalLength;
                }
                return i / (loop ? positionCount : (positionCount - 1));
            });

            // 处理两端循环情况
            if (loop)
            {
                positions.unshift(positions[positions.length - 1]);
                positions.push(positions[1]);
                positions.push(positions[2]);
            } else
            {
                positions.unshift(positions[0]);
                positions.push(positions[positions.length - 1]);
            }

            // 计算网格
            var a_positions: number[] = [];
            var a_normals: number[] = [];
            var a_tangents: number[] = [];
            var a_uvs: number[] = [];
            var a_colors: number[] = [];
            var indices: number[] = [];
            //
            var positionCount = positions.length;
            //
            // 摄像机在该对象空间内的坐标
            for (var i = 0; i < positionCount - 2; i++)
            {
                // 顶点索引
                var prePosition = positions[i];
                var currentPosition = positions[i + 1];
                var nextPosition = positions[i + 2];
                //
                // 当前所在线条，0表示起点，1表示终点
                var rateAtLine = rateAtLine[i];
                // 线条宽度
                var lineWidth = this.lineWidth.getValue(rateAtLine);
                // 切线，线条方向
                var tangent = new Vector3(1, 0, 0);
                var tangent0 = currentPosition.subTo(prePosition).normalize();
                var tangent1 = nextPosition.subTo(currentPosition).normalize();
                tangent.copy(tangent0).add(tangent1).normalize();
                // 处理切线为0的情况
                if (tangent.lengthSquared == 0)
                {
                    if (tangent0.lengthSquared != 0) tangent.copy(tangent0);
                    else tangent.set(1, 0, 0);
                }
                // 法线，面朝向
                var normal = new Vector3(0, 0, -1);
                if (this.alignment == LineAlignment.View)
                {
                    var cameraPosition = this.transform.inverseTransformPoint(camera.transform.worldPosition);
                    normal.copy(cameraPosition).sub(currentPosition).normalize();
                } else if (this.alignment == LineAlignment.TransformZ)
                {
                    normal.set(0, 0, -1);
                }
                // 使用强制面向Z轴或者摄像机，会出现 与 线条方向一致的情况
                if (tangent.isParallel(normal))
                {
                    // 强制修改切线方向
                    tangent.set(1, 0, 0);
                    if (tangent.isParallel(normal)) tangent.set(0, 1, 0);
                    // 重新计算与法线垂直的切线
                    var tempTN = tangent.crossTo(normal);
                    tangent.copy(normal).cross(tempTN).normalize();
                }
                // 用于计算线条中点生成两个点的偏移量
                var offset = new Vector3();
                offset.copy(tangent).cross(normal).normalize(lineWidth / 2);
                // 保持线条宽度
                var sin = Math.sqrt(1 - Math.pow(offset.clone().normalize().dot(tangent0), 2));
                sin = Math.clamp(sin, 0.2, 5);
                offset.scaleNumber(1 / sin);
                //
                var offset0 = currentPosition.clone().add(offset);
                var offset1 = currentPosition.clone().sub(offset);
                // 颜色
                var currentColor = this.colorGradient.getValue(rateAtLine);
                //
                a_positions.push(offset0.x, offset0.y, offset0.z, offset1.x, offset1.y, offset1.z);
                a_tangents.push(tangent.x, tangent.y, tangent.z, tangent.x, tangent.y, tangent.z);
                a_normals.push(normal.x, normal.y, normal.z, normal.x, normal.y, normal.z);
                a_colors.push(currentColor.r, currentColor.g, currentColor.b, currentColor.a, currentColor.r, currentColor.g, currentColor.b, currentColor.a);

                // 计算UV
                if (textureMode == LineTextureMode.Stretch)
                {
                    a_uvs.push(rateAtLine, 1, rateAtLine, 0);
                } else if (textureMode == LineTextureMode.Tile)
                {
                    a_uvs.push(rateAtLine * totalLength, 1, rateAtLine * totalLength, 0);
                } else if (textureMode == LineTextureMode.DistributePerSegment)
                {
                    a_uvs.push(rateAtLine, 1, rateAtLine, 0);
                } else if (textureMode == LineTextureMode.RepeatPerSegment)
                {
                    a_uvs.push(i, 1, i, 0);
                }

                // 计算索引
                if (i > 0)
                {
                    indices.push((i - 1) * 2, i * 2, i * 2 + 1);
                    indices.push((i - 1) * 2, i * 2 + 1, (i - 1) * 2 + 1);
                }
            }

            mesh.positions = a_positions;
            mesh.normals = a_normals;
            mesh.tangents = a_tangents;
            mesh.uvs = a_uvs;
            mesh.colors = a_colors;
            mesh.indices = indices;
        }

        /**
         * 计算总长度
         * 
         * @param positions 顶点列表
         * @param loop 是否循环
         */
        private calcTotalLength(positions: Vector3[], loop: boolean)
        {
            var total = 0;
            var length = positions.length;
            for (let i = 0, n = length - 1; i < n; i++)
            {
                total += positions[i + 1].distance(positions[i]);
            }
            if (loop && length > 0)
            {
                total += positions[length - 1].distance(positions[0]);
            }
            return total;
        }

        private positionsToCurve(positions: Vector3[], loop: boolean)
        {

            var totalLength = this.calcTotalLength(positions, loop);


            var xCurve = new AnimationCurve();
            var yCurve = new AnimationCurve();
            var zCurve = new AnimationCurve();

            for (let i = 0, len = positions.length; i < len; i++)
            {
                var position = positions[i];
                var prePosition: Vector3;
                var nextPosition: Vector3;
                if (i == 0)
                {
                    if (loop)
                    {
                        prePosition = positions[(i - 1 + len) % len];
                        nextPosition = positions[(i + 1) % len];

                        var tangent = nextPosition.subTo(prePosition);

                        xCurve.addKey({ time: 0, value: position.x, inTangent: tangent.x, outTangent: tangent.x });
                        yCurve.addKey({ time: 0, value: position.y, inTangent: tangent.y, outTangent: tangent.y });
                        zCurve.addKey({ time: 0, value: position.z, inTangent: tangent.z, outTangent: tangent.z });
                    }

                }


            }



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
                positions[i].copy(this.positions[i]);
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
            this.positions[index].copy(position);
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
                this.positions[i] = this.positions[i] || new Vector3();
                this.positions[i].copy(positions[i]);
            }
        }

        /**
         * Generates a simplified version of the original line by removing points that fall within the specified tolerance.
         * 
         * 通过删除落在指定公差范围内的点，生成原始线的简化版本。
         * 
         * @param tolerance	This value is used to evaluate which points should be removed from the line. A higher value results in a simpler line (less points). A positive value close to zero results in a line with little to no reduction. A value of zero or less has no effect.
         * 
         * @todo
         */
        Simplify(tolerance: number)
        {

        }

    }
}