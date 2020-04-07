namespace feng3d
{
    /**
     * Skinning bone weights of a vertex in the mesh.
     * 
     * Each vertex is skinned with up to four bones. All weights should sum up to one. Weights and bone indices should be defined in the order of decreasing weight. If a vertex is affected by less than four bones, the remaining weights should be zeroes.
     */
    export class BoneWeight
    {
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