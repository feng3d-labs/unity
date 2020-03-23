namespace feng3d
{

    /**
     * 线条拖尾
     */
    export class TransparentParticlesStandardUniforms
    {
        __class__: "feng3d.TransparentParticlesStandardUniforms";

        @serialize
        @oav()
        _Time = new Vector2(0, 0);

        @serialize
        @oav()
        _BasicColor = new Color4(0.5, 0.5, 0.5, 0.5);

        @serialize
        @oav()
        _SaturatedColor = new Color4(0.5, 0.5, 0.5, 0.5);

        @serialize
        @oav()
        _MainTex = feng3d.Texture2D.white;

        @serialize
        @oav()
        _MainTex_ST = new Vector4(1, 1, 0, 0);

        @serialize
        @oav()
        _ColorRamp = feng3d.Texture2D.white;

        @serialize
        @oav()
        _NoiseTex = feng3d.Texture2D.white;

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
        _DissolveStep = new Vector4(0.0, 1.0, 0.0, 0.0);

        @serialize
        @oav()
        AUTOMATICPANNING = false;

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
        EMISSIVEPOWER = false;

        @serialize
        @oav()
        _EmissivePower = 1;

        @serialize
        @oav()
        EXTENDED_PARTICLES = false;

        @serialize
        @oav()
        NOISE_TEXTURE = false;

        @serialize
        @oav()
        _NoisePanning = new Vector4(0.5, 0.5, 0.5, 0.5);

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
    }

    feng3d.shaderConfig.shaders["TransparentParticlesStandard"] =
    {
        vertex: TransparentParticlesStandard_vertex,
        fragment: TransparentParticlesStandard_fragment,
        cls: TransparentParticlesStandardUniforms,
        renderParams: {
            enableBlend: true,
            sfactor: feng3d.BlendFactor.ONE,
            dfactor: feng3d.BlendFactor.ONE_MINUS_SRC_ALPHA,
            colorMask: feng3d.ColorMask.RGBA,
            cullFace: feng3d.CullFace.NONE,
            depthMask: true,
        },
    }
    feng3d.Material.setDefault("TransparentParticlesStandard-Material", { shaderName: "TransparentParticlesStandard" });
}

namespace feng3d
{
    export interface UniformsTypes { "TransparentParticlesStandard": TransparentParticlesStandardUniforms }

    export interface DefaultMaterial
    {
        "TransparentParticlesStandard-Material": Material;
    }
}