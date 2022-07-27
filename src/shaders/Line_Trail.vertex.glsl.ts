export const lineTrailvertex = `

attribute vec3 a_position;
attribute vec2 a_uv;
attribute vec4 a_color;

uniform mat4 u_modelMatrix;
uniform mat4 u_viewProjection;

varying vec2 v_uv;
varying vec4 v_color;

void main() 
{
    vec3 position = a_position;
    gl_Position = u_viewProjection * u_modelMatrix * vec4(position, 1.0);
    v_uv = a_uv;
    v_color = a_color;
}
    `;
