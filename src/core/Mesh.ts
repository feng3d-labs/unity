namespace feng3d
{
    /**
     * 网格数据
     */
    export class Mesh
    {

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
        subMeshCount

        /**
         * Returns the number of vertices in the Mesh (Read Only).
         */
        public get vertexCount()
        {
            if (!this.vertices) return 0;
            return this.vertices.length;
        }

        // Clear	Clears all vertex data and all triangle indices.
        // CombineMeshes	Combines several Meshes into this Mesh.
        // GetBaseVertex	Gets the base vertex index of the given sub-mesh.
        // GetBindposes	Gets the bind poses for this instance.
        // GetBlendShapeFrameCount	Returns the frame count for a blend shape.
        // GetBlendShapeFrameVertices	Retreives deltaVertices, deltaNormals and deltaTangents of a blend shape frame.
        // GetBlendShapeFrameWeight	Returns the weight of a blend shape frame.
        // GetBlendShapeIndex	Returns index of BlendShape by given name.
        // GetBlendShapeName	Returns name of BlendShape by given index.
        // GetBoneWeights	Gets the bone weights for this instance.
        // GetColors	Gets the vertex colors for this instance.
        // GetIndexCount	Gets the index count of the given sub-mesh.
        // GetIndexStart	Gets the starting index location within the Mesh's index buffer, for the given sub-mesh.
        // GetIndices	Fetches the index list for the specified sub-mesh.
        // GetNativeIndexBufferPtr	Retrieves a native (underlying graphics API) pointer to the index buffer.
        // GetNativeVertexBufferPtr	Retrieves a native (underlying graphics API) pointer to the vertex buffer.
        // GetNormals	Gets the vertex normals for this instance.
        // GetTangents	Gets the tangents for this instance.
        // GetTopology	Gets the topology of a sub-mesh.
        // GetTriangles	Fetches the triangle list for the specified sub-mesh on this object.
        // GetUVDistributionMetric	The UV distribution metric can be used to calculate the desired mipmap level based on the position of the camera.
        // GetUVs	Gets the UVs of the Mesh.
        // GetVertices	Gets the vertex positions for this instance.
        // MarkDynamic	Optimize mesh for frequent updates.
        // RecalculateBounds	Recalculate the bounding volume of the Mesh from the vertices.
        // RecalculateNormals	Recalculates the normals of the Mesh from the triangles and vertices.
        // RecalculateTangents	Recalculates the tangents of the Mesh from the normals and texture coordinates.
        // SetColors	Vertex colors of the Mesh.
        // SetIndices	Sets the index buffer for the sub-mesh.
        // SetNormals	Set the normals of the Mesh.
        // SetTangents	Set the tangents of the Mesh.
        // SetTriangles	Sets the triangle list for the sub-mesh.
        // SetUVs	Sets the UVs of the Mesh.
        // SetVertices	Assigns a new vertex positions array.
        // UploadMeshData	Upload previously done Mesh modifications to the graphics API.

    }
}