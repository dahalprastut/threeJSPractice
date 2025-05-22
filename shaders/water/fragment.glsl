// precision mediump float;

// uniform vec3 uDepthColor;
// uniform vec3 uSurfaceColor;
// uniform float uColorOffset;
// uniform float uColorMultiplier;

// varying float vElevation;


// void main() {
//     float mixStrength = (vElevation + uColorOffset) * uColorMultiplier;
//     vec3 mixColor = mix(uDepthColor, uSurfaceColor, mixStrength);
//     gl_FragColor = vec4(mixColor, 1.0);
// }


// ========== new here

// precision mediump float;

// uniform vec3 uSurfaceColor;
// uniform vec3 uDepthColor;
// uniform float uColorMultiplier;
// uniform float uColorOffset;

// varying float vElevation;


// void main() {
//     float mixColorStrength = (vElevation + uColorOffset) * uColorMultiplier;
//     vec3 mixColor = mix (uDepthColor,uSurfaceColor, mixColorStrength);
//     gl_FragColor = vec4(mixColor, 1.0);
// }



// ==========================================


// precision mediump float;

// uniform vec3 uInnerColor;
// uniform vec3 uOuterColor;

// uniform float uOffsetColor;
// uniform float uColorMultiplier;

// varying float vElevation;

// void main() {
//     vec3 mixColor = mix(uOuterColor, uInnerColor, vElevation) + uOffsetColor *uColorMultiplier;
//     gl_FragColor = vec4(mixColor, 1.0);
// }

// ====================================================

precision mediump float;

uniform vec3 uColorHigh; 
uniform vec3 uColorLow; 
uniform float uColorMultiplier;
uniform float uColorOffset;

varying float vElevation;
void main() {
    vec3 mixColor = mix(uColorHigh, uColorLow, vElevation * uColorMultiplier + uColorOffset );
    gl_FragColor = vec4(mixColor,1.0);

}
