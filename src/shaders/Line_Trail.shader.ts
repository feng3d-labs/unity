
/**
 * 线条拖尾
 */
export class Line_TrailUniforms
{
    __class__: "feng3d.Line_TrailUniforms";

    @feng3d.serialize
    @feng3d.oav()
    s_texture = feng3d.Texture2D.white;

    @feng3d.oav()
    u_color = new feng3d.Color4();
}

feng3d.shaderConfig.shaders["Line_Trail"] =
{
    vertex: Line_Trail_vertex,
    fragment: Line_Trail_fragment,
    cls: Line_TrailUniforms,
    renderParams: {
        enableBlend: true,
        sfactor: feng3d.BlendFactor.ONE,
        dfactor: feng3d.BlendFactor.ONE_MINUS_SRC_ALPHA,
        colorMask: feng3d.ColorMask.RGBA,
        cullFace: feng3d.CullFace.NONE,
        depthMask: true,
    },
}
feng3d.Material.setDefault("Line_Trail-Material", { shaderName: "Line_Trail" });

export interface UniformsTypes { "Line_Trail": Line_TrailUniforms }

export interface DefaultMaterial
{
    "Line_Trail-Material": Material;
}
