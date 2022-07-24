import { serialize, oav, Texture2D, Color4, shaderConfig, BlendFactor, ColorMask, CullFace, Material } from 'feng3d';
import { lineTrailfragment } from './Line_Trail.fragment.glsl';
import { lineTrailvertex } from './Line_Trail.vertex.glsl';

declare global
{
    export interface MixinsUniformsTypes { 'Line_Trail': LineTrailUniforms }

    export interface MixinsDefaultMaterial
    {
        'Line_Trail-Material': Material;
    }
}

/**
 * 线条拖尾
 */
export class LineTrailUniforms
{
    __class__: 'Line_TrailUniforms';

    @serialize
    @oav()
    s_texture = Texture2D.white;

    @oav()
    u_color = new Color4();
}

shaderConfig.shaders['Line_Trail']
    = {
    vertex: lineTrailvertex,
    fragment: lineTrailfragment,
    cls: LineTrailUniforms,
    renderParams: {
        enableBlend: true,
        sfactor: BlendFactor.ONE,
        dfactor: BlendFactor.ONE_MINUS_SRC_ALPHA,
        colorMask: ColorMask.RGBA,
        cullFace: CullFace.NONE,
        depthMask: true,
    },
};
Material.setDefault('Line_Trail-Material', { shaderName: 'Line_Trail' });
