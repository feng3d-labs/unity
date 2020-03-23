var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
        LineRenderer.prototype.beforeRender = function (gl, renderAtomic, scene, camera) {
            this.geometry.clear();
            this.BakeMesh(this.geometry, camera, false);
            renderAtomic.shaderMacro.HAS_a_color = true;
            _super.prototype.beforeRender.call(this, gl, renderAtomic, scene, camera);
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
    }(feng3d.Renderable));
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
        TrailRenderer.prototype.beforeRender = function (gl, renderAtomic, scene, camera) {
            this.geometry.clear();
            this.BakeMesh(this.geometry, camera, false);
            renderAtomic.shaderMacro.HAS_a_color = true;
            _super.prototype.beforeRender.call(this, gl, renderAtomic, scene, camera);
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
    }(feng3d.Renderable));
    feng3d.TrailRenderer = TrailRenderer;
    feng3d.GameObject.registerPrimitive("TrailRenderer", function (g) {
        g.addComponent(TrailRenderer);
    });
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    feng3d.TransparentParticlesStandard_vertex = "\n\n#define EXTENDED_PARTICLES\n#define NOISE_TEXTURE_EMISSION\n\nattribute vec3 a_position;\nattribute vec2 a_uv;\nattribute vec4 a_color;\n\nuniform vec4 _MainTex_ST;\n\nuniform vec2 _Panning;\nuniform vec2 _Time;\n\n#ifdef NOISE_TEXTURE\n    uniform vec4 _NoiseTex_ST;\n    uniform vec4 _NoisePanning;\n#endif\n\nuniform mat4 u_modelMatrix;\nuniform mat4 u_viewProjection;\n\nvarying vec2 v_uv;\nvarying vec4 v_color;\n\n#ifdef EXTENDED_PARTICLES\n    varying vec2 v_particledata;\n#endif\n\n#ifdef NOISE_TEXTURE\n    varying vec2 v_noiseuv;\n#endif\n\nvoid main() \n{\n    vec3 position = a_position;\n    gl_Position = u_viewProjection * u_modelMatrix * vec4(position, 1.0);\n    v_uv = a_uv * _MainTex_ST.xy + _MainTex_ST.zw + (_Panning.xy * _Time.yy);\n    // v_color = a_color;\n    v_color = vec4(1.0,1.0,1.0,1.0);\n\n    #ifdef EXTENDED_PARTICLES\n        #ifdef NOISE_TEXTURE\n            #if NOISEUV\n                v_noiseuv = a_uv * _NoiseTex_ST.xy + _NoiseTex_ST.zw + (_NoisePanning.xy * _Time.yy);\n            #else\n                v_noiseuv = a_uv * _MainTex_ST.xy + _MainTex_ST.zw + (_NoisePanning.xy * _Time.yy);\n            #endif\n        #endif\n\n        #ifdef EXTENDED_PARTICLES\n            // v_particledata = a_uv.zw;\n            v_particledata = a_uv;\n        #endif\n    #endif\n}\n    ";
})(feng3d || (feng3d = {}));
var feng3d;
(function (feng3d) {
    feng3d.TransparentParticlesStandard_fragment = "\n#define EXTENDED_PARTICLES\n#define NOISE_TEXTURE_EMISSION\n    \nprecision mediump float;\n\nuniform sampler2D _MainTex;\n\nuniform vec4 u_color;\n\n#ifdef EXTENDED_PARTICLES\n    uniform float _EmissionSaturation;\n    uniform float _OpacitySaturation;\n    uniform float _ColorMultiplier;\n\n    #ifdef COLOR_RAMP\n        uniform sampler2D _ColorRamp;\n        uniform vec4 _ColorRamp_ST;\n    #else\n        #if defined(COLOR_TINT)\n            uniform vec4 _BasicColor;\n        #else\n            uniform vec4 _BasicColor;\n            uniform vec4 _SaturatedColor;\n        #endif\n    #endif\n\n    #ifdef DISSOLVE_ENABLED\n        uniform vec4 _DissolveStep;\n    #endif\n\n    #ifdef NOISE_TEXTURE\n        uniform sampler2D _NoiseTex;\n        uniform vec4 _NoiseTex_ST;\n        uniform vec4 _NoisePanning;\n    #endif\n#else\n    uniform vec4 _TintColor;\n\n    #ifdef EMISSIVEPOWER\n        uniform float _EmissivePower;\n    #endif\n#endif\n\n#ifdef BLENDMODE_ADDITIVEALPHABLEND\n    uniform float _ABOffset;\n#endif\n\nuniform float _GlobalAlpha;\n\nvarying vec2 v_uv;\nvarying vec4 v_color;\n\n#ifdef EXTENDED_PARTICLES\n    varying vec2 v_particledata;\n#endif\n\n#ifdef NOISE_TEXTURE\n    varying vec2 v_noiseuv;\n#endif\n\nvoid main() \n{\n    vec4 tex = texture2D(_MainTex, v_uv);\n\n    vec4 col = vec4(1.0, 1.0, 1.0, 1.0);\n\n\n    #ifdef EXTENDED_PARTICLES\n\n        #ifdef APPLY_RGB_COLOR_VERTEX\n            vec4 vcolor = v_color;\n        #else\n            vec4 vcolor = vec4(1.0, 1.0, 1.0, v_color.w);\n        #endif\n    \n        #ifdef NOISE_TEXTURE\n        \n            float3 noise = tex2D(_NoiseTex, v_noiseuv);\n        \n            #ifdef NOISE_TEXTURE_EMISSION\n                float nEmission = noise.x;\n            #else\n                float nEmission = 1.0;\n            #endif\n            \n            #ifdef NOISE_TEXTURE_ALPHA\n                float nAlpha = noise.y;\n            #else\n                float nAlpha = 1.0;\n            #endif\n            \n            #ifdef NOISE_TEXTURE_DISSOLVE\n                float nDissolve = noise.z;\n            #else\n                float nDissolve = 1.0;\n            #endif\n        \n        #else\n            float nEmission = 1.0;\n            float nAlpha = 1.0;\n            float nDissolve = 1.0;\n        #endif\n    \n        #ifdef DISSOLVE_ENABLED\n            float ramp = -1.0 + (v_particledata.x * 2.0);\n            col.a = clamp(tex.g * smoothstep(_DissolveStep.x, _DissolveStep.y, (tex.b + ramp) * nDissolve) * _OpacitySaturation * vcolor.w * nAlpha, 0.0, 1.0);\n        #else\n            col.a = clamp(tex.g * _OpacitySaturation * vcolor.w, 0.0, 1.0) * nAlpha;\n        #endif\n    \n        #if !defined(COLOR_TINT)\n            float lerpValue = clamp(tex.r * v_particledata.y * _ColorMultiplier * nEmission, 0.0, 1.0);\n        #endif\n    \n        #ifdef BLENDMODE_ALPHABLEND\n            #ifdef COLOR_RAMP\n                col.xyz = tex2D(_ColorRamp, vec2((1.0 - lerpValue), 0.0)) * vcolor.xyz * _EmissionSaturation;\n            #else\n                #ifdef COLOR_TINT\n                    col.xyz = tex.x * _BasicColor.xyz * vcolor.xyz * nEmission * _EmissionSaturation;\n                #else\n                    col.xyz = mix(_BasicColor.xyz * vcolor.xyz, _SaturatedColor.xyz, lerpValue) * _EmissionSaturation;\n                #endif\n            #endif\n            col.a *= _GlobalAlpha;\n        #else\n            #ifdef COLOR_RAMP\n                col.xyz = tex2D(_ColorRamp, vec2((1.0 - lerpValue), 0.0)) * vcolor.xyz * col.a * _EmissionSaturation;\n            #else\n                #ifdef COLOR_TINT\n                    col.xyz = tex.x * _BasicColor.xyz * vcolor.xyz * nEmission * _EmissionSaturation * col.a;\n                #else\n                    col.xyz = mix(_BasicColor.xyz * vcolor.xyz, _SaturatedColor.xyz, lerpValue) * col.a * _EmissionSaturation;\n                #endif\n            #endif\n            col *= _GlobalAlpha;\n        #endif\n    \n    #else\n    \n        #ifdef BLENDMODE_ADDITIVEALPHABLEND\n            tex *= _TintColor;\n            float luminance = clamp(dot(tex, vec4(0.2126, 0.7152, 0.0722, 0.0)) * tex.a * _ABOffset, 0.0, 1.0);\n            fixed4 one = fixed4(1, 1, 1, 1);\n            col = lerp(2.0 * (v_color * tex), one - 2.0 * (one - v_color) * (one - tex), luminance);\n        #else\n            col = v_color * tex;\n            col *= _TintColor;\n        \n            #ifdef EMISSIVEPOWER\n                col *= _EmissivePower;\n            #endif\n            \n            #ifdef BLENDMODE_SOFTADDITIVE\n                col.rgb *= col.a;\n            #else\n                #ifdef BLENDMODE_ALPHABLEND\n                    col *= 2.0;\n                #else\n                    #ifdef BLENDMODE_ADDITIVEDOUBLE\n                        col *= 4.0;\n                    #endif\n                #endif\n            #endif\n        \n        #endif\n    \n        col *= _GlobalAlpha;\n\n    #endif\n\n    gl_FragColor = col;\n}\n    ";
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
            this._EmissionSaturation = 1.0;
            this._OpacitySaturation = 1.0;
            this._ColorMultiplier = 1.0;
            this._ABOffset = 0.0;
            this.COLOR_RAMP = false;
            this.COLOR_TINT = false;
            this.APPLY_RGB_COLOR_VERTEX = false;
            this.DISSOLVE_ENABLED = false;
            this._DissolveStep = new feng3d.Vector4(0.0, 1.0, 0.0, 0.0);
            this.AUTOMATICPANNING = false;
            this._Panning = new feng3d.Vector4(0.0, 0.0, 0.0, 0.0);
            this._TintColor = new feng3d.Color4(0.5, 0.5, 0.5, 0.5);
            this._GlobalAlpha = 1.0;
            this.EMISSIVEPOWER = false;
            this._EmissivePower = 1;
            this.EXTENDED_PARTICLES = false;
            this.NOISE_TEXTURE = false;
            this._NoisePanning = new feng3d.Vector4(0.5, 0.5, 0.5, 0.5);
            this.NOISE_TEXTURE_EMISSION = false;
            this.NOISE_TEXTURE_ALPHA = false;
            this.NOISE_TEXTURE_DISSOLVE = false;
            this.NOISEUV = false;
            this.FLOWMAP = false;
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
        ], TransparentParticlesStandardUniforms.prototype, "_DissolveStep", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "AUTOMATICPANNING", void 0);
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
        ], TransparentParticlesStandardUniforms.prototype, "EMISSIVEPOWER", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav()
        ], TransparentParticlesStandardUniforms.prototype, "_EmissivePower", void 0);
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
        ], TransparentParticlesStandardUniforms.prototype, "_NoisePanning", void 0);
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