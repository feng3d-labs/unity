import { BlendFactor, Color4, ColorMask, CullFace, Material, oav, serialize, shaderConfig, Texture2D, Vector4 } from 'feng3d';
import { transparentParticlesStandardFragment } from './TransparentParticlesStandard.fragment.glsl';
import { transparentParticlesStandardVertex } from './TransparentParticlesStandard.vertex.glsl';

declare global
{
    export interface MixinsUniformsTypes
    {
        'TransparentParticlesStandard': TransparentParticlesStandardUniforms
    }

    export interface MixinsDefaultMaterial
    {
        'TransparentParticlesStandard-Material': Material;
    }
}

/**
 * 线条拖尾
 */
export class TransparentParticlesStandardUniforms
{
    __class__: 'TransparentParticlesStandardUniforms';

    @serialize
    @oav()
    _BasicColor = new Color4(0.5, 0.5, 0.5, 0.5);

    @serialize
    @oav()
    _SaturatedColor = new Color4(0.5, 0.5, 0.5, 0.5);

    @serialize
    @oav()
    _MainTex = Texture2D.white;

    @serialize
    @oav()
    _MainTex_ST = new Vector4(1, 1, 0, 0);

    @serialize
    @oav()
    _ColorRamp = Texture2D.white;

    @serialize
    @oav()
    _NoiseTex = Texture2D.white;

    @serialize
    @oav()
    _NoiseTex_ST = new Vector4(1, 1, 0, 0);

    @serialize
    @oav()
    _EmissionSaturation = 1.0;

    @serialize
    @oav()
    _OpacitySaturation = 1.0;

    @serialize
    @oav()
    _ColorMultiplier = 1.0;

    @serialize
    @oav()
    _ABOffset = 0.0;

    @serialize
    @oav()
    _DissolveStep = new Vector4(0.0, 1.0, 0.0, 0.0);

    @serialize
    @oav()
    _Panning = new Vector4(0.0, 0.0, 0.0, 0.0);

    @serialize
    @oav()
    _TintColor = new Color4(0.5, 0.5, 0.5, 0.5);

    @serialize
    @oav()
    _GlobalAlpha = 1.0;

    @serialize
    @oav()
    _EmissivePower = 1;

    @serialize
    @oav()
    _NoisePanning = new Vector4(0.5, 0.5, 0.5, 0.5);

    @serialize
    @oav()
    COLOR_RAMP = false;

    @serialize
    @oav()
    COLOR_TINT = false;

    @serialize
    @oav()
    APPLY_RGB_COLOR_VERTEX = false;

    @serialize
    @oav()
    DISSOLVE_ENABLED = false;

    @serialize
    @oav()
    AUTOMATICPANNING = false;

    @serialize
    @oav()
    EMISSIVEPOWER = false;

    @serialize
    @oav()
    EXTENDED_PARTICLES = false;

    @serialize
    @oav()
    NOISE_TEXTURE = false;

    @serialize
    @oav()
    NOISE_TEXTURE_EMISSION = false;

    @serialize
    @oav()
    NOISE_TEXTURE_ALPHA = false;

    @serialize
    @oav()
    NOISE_TEXTURE_DISSOLVE = false;

    @serialize
    @oav()
    NOISEUV = false;

    @serialize
    @oav()
    FLOWMAP = false;

    @serialize
    @oav()
    BLENDMODE_ADDITIVEALPHABLEND = false;

    @serialize
    @oav()
    BLENDMODE_ALPHABLEND = false;

    @serialize
    @oav()
    BLENDMODE_ADDITIVEDOUBLE = false;

    @serialize
    @oav()
    BLENDMODE_SOFTADDITIVE = false;
}

shaderConfig.shaders['TransparentParticlesStandard']
    = {
    vertex: transparentParticlesStandardVertex,
    fragment: transparentParticlesStandardFragment,
    cls: TransparentParticlesStandardUniforms,
    renderParams: {
        enableBlend: true,
        sfactor: BlendFactor.ONE,
        dfactor: BlendFactor.ONE_MINUS_SRC_ALPHA,
        colorMask: ColorMask.RGBA,
        cullFace: CullFace.NONE,
        depthMask: true,
    },
};
Material.setDefault('TransparentParticlesStandard-Material', { shaderName: 'TransparentParticlesStandard' });
