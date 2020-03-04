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
            /**
             * Connect the start and end positions of the line together to form a continuous loop.
             *
             * 将直线的起点和终点连接在一起，形成一个连续的回路。
             */
            _this.loop = false;
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
            var positions = this.positions;
            if (positions.length < 2)
                return;
            var a_positions = [];
            var a_normals = [];
            var a_tangents = [];
            var a_uvs = [];
            var a_colors = [];
            var indices = [];
            // 法线，面朝向
            var normal = new feng3d.Vector3(0, 0, -1);
            // 切线，线条方向
            var tangent = new feng3d.Vector3(1, 0, 0);
            // 当前所在线条位置，0表示起点，1表示终点
            var rateAtLine = 0;
            // 用于计算线条中点生成两个点的偏移量
            var offset = new feng3d.Vector3();
            //
            var positionCount = positions.length;
            // 计算线条总长度
            var totalLength = 0;
            for (var i = 0; i < positionCount; i++) {
                if (i == 0) {
                    if (this.loop) {
                        totalLength += positions[0].distance(positions[positionCount - 1]);
                    }
                }
                else {
                    totalLength += positions[i].distance(positions[i - 1]);
                }
            }
            //
            var currentLength = 0;
            // 摄像机在该对象空间内的坐标
            for (var i = 0; i < positionCount; i++) {
                //
                var current = i;
                var pre = current - 1;
                var next = current + 1;
                if (i == 0) {
                    pre = this.loop ? positionCount - 1 : 0;
                }
                else if (i == positionCount - 1) {
                    next = this.loop ? 0 : positionCount - 1;
                }
                var prePosition = positions[pre];
                var currentPosition = positions[current];
                var nextPosition = positions[next];
                //
                rateAtLine = current / (this.loop ? positionCount : positionCount - 1);
                // 线条宽度
                var lineWidth = this.lineWidth.getValue(rateAtLine);
                // 颜色
                var currentColor = this.colorGradient.getValue(rateAtLine);
                // 计算随摄像机朝向
                if (this.alignment == feng3d.LineAlignment.View) {
                    var cameraPosition = this.transform.inverseTransformPoint(camera.transform.worldPosition);
                    normal.copy(cameraPosition).sub(currentPosition).normalize();
                }
                else {
                    normal.set(0, 0, -1);
                }
                //
                var tangent0 = currentPosition.subTo(prePosition).normalize();
                var tangent1 = nextPosition.subTo(currentPosition).normalize();
                tangent.copy(tangent0).add(tangent1).normalize();
                //
                offset.copy(tangent).cross(normal);
                if (offset.length == 0) // 处理 tangent 与 normal 平行的情况
                    offset.copy(tangent).cross(feng3d.Vector3.X_AXIS);
                if (offset.length == 0) // 处理 tangent 与 normal 平行的情况
                    offset.copy(tangent).cross(feng3d.Vector3.Y_AXIS);
                // 保持线条宽度
                var sin = Math.sqrt(1 - Math.pow(offset.dot(tangent0), 2));
                offset.normalize(lineWidth / 2 / sin);
                // 重新计算面法线
                normal.copy(offset).cross(tangent).normalize();
                //
                var offset0 = currentPosition.clone().add(offset);
                var offset1 = currentPosition.clone().sub(offset);
                //
                a_positions.push(offset0.x, offset0.y, offset0.z, offset1.x, offset1.y, offset1.z);
                a_tangents.push(tangent.x, tangent.y, tangent.z, tangent.x, tangent.y, tangent.z);
                a_normals.push(normal.x, normal.y, normal.z, normal.x, normal.y, normal.z);
                a_colors.push(currentColor.r, currentColor.g, currentColor.b, currentColor.a, currentColor.r, currentColor.g, currentColor.b, currentColor.a);
                // 计算UV
                if (this.textureMode == feng3d.LineTextureMode.Stretch) {
                    a_uvs.push(rateAtLine, 1, rateAtLine, 0);
                }
                else if (this.textureMode == feng3d.LineTextureMode.Tile) {
                    a_uvs.push(rateAtLine, 1, rateAtLine, 0);
                }
                else if (this.textureMode == feng3d.LineTextureMode.DistributePerSegment) {
                    a_uvs.push(rateAtLine, 1, rateAtLine, 0);
                }
                else if (this.textureMode == feng3d.LineTextureMode.RepeatPerSegment) {
                    a_uvs.push(i, 1, i, 0);
                }
                //
                if (this.loop || i > 0) {
                    indices.push(pre * 2, current * 2, current * 2 + 1);
                    indices.push(pre * 2, current * 2 + 1, pre * 2 + 1);
                }
            }
            mesh.positions = a_positions;
            mesh.normals = a_normals;
            mesh.tangents = a_tangents;
            mesh.uvs = a_uvs;
            mesh.colors = a_colors;
            mesh.indices = indices;
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
         * Generates a simplified version of the original line by removing points that fall within the specified tolerance.
         *
         * 通过删除落在指定公差范围内的点，生成原始线的简化版本。
         *
         * @param tolerance	This value is used to evaluate which points should be removed from the line. A higher value results in a simpler line (less points). A positive value close to zero results in a line with little to no reduction. A value of zero or less has no effect.
         *
         * @todo
         */
        LineRenderer.prototype.Simplify = function (tolerance) {
        };
        __decorate([
            feng3d.oav({ exclude: true })
        ], LineRenderer.prototype, "geometry", void 0);
        __decorate([
            feng3d.oav({ tooltip: "将直线的起点和终点连接在一起，形成一个连续的回路。" }),
            feng3d.serialize
        ], LineRenderer.prototype, "loop", void 0);
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
        LineRenderer = __decorate([
            feng3d.AddComponentMenu("Effects/LineRenderer")
        ], LineRenderer);
        return LineRenderer;
    }(feng3d.Renderable));
    feng3d.LineRenderer = LineRenderer;
})(feng3d || (feng3d = {}));
//# sourceMappingURL=unity.js.map