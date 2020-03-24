namespace feng3d
{
    @AddComponentMenu("Effects/TransparentParticlesStandard")
    export class TransparentParticlesStandard extends Component
    {
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

        beforeRender(gl: GL, renderAtomic: RenderAtomic, scene: Scene, camera: Camera)
        {
            renderAtomic.shaderMacro["COLOR_RAMP"] = this.COLOR_RAMP;
            renderAtomic.shaderMacro["COLOR_TINT"] = this.COLOR_TINT;
            renderAtomic.shaderMacro["APPLY_RGB_COLOR_VERTEX"] = this.APPLY_RGB_COLOR_VERTEX;
            renderAtomic.shaderMacro["DISSOLVE_ENABLED"] = this.DISSOLVE_ENABLED;
            renderAtomic.shaderMacro["AUTOMATICPANNING"] = this.AUTOMATICPANNING;
            renderAtomic.shaderMacro["EMISSIVEPOWER"] = this.EMISSIVEPOWER;

            renderAtomic.shaderMacro["EXTENDED_PARTICLES"] = this.EXTENDED_PARTICLES;
            renderAtomic.shaderMacro["NOISE_TEXTURE"] = this.NOISE_TEXTURE;
            renderAtomic.shaderMacro["NOISE_TEXTURE_EMISSION"] = this.NOISE_TEXTURE_EMISSION;
            renderAtomic.shaderMacro["NOISE_TEXTURE_ALPHA"] = this.NOISE_TEXTURE_ALPHA;
            renderAtomic.shaderMacro["NOISE_TEXTURE_DISSOLVE"] = this.NOISE_TEXTURE_DISSOLVE;
            renderAtomic.shaderMacro["NOISEUV"] = this.NOISEUV;
            renderAtomic.shaderMacro["FLOWMAP"] = this.FLOWMAP;

        }
    }
}