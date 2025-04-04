// precision mediump float;
// void main() {
//     gl_FragColor = vec4(1.0, 0.0,0.0,1.0);
// }

// precision mediump float;

// varying float vRandom;
// void main() {
//     gl_FragColor = vec4(0.0, vRandom, 0.0, 1.0);
// }

// precision mediump float;
// uniform vec3 uColor;
// uniform sampler2D uTexture;

// varying float vRandom;
// varying vec2 vUv;

// void main() {
//     vec4 textureColor = texture2D(uTexture, vUv);
//     gl_FragColor = textureColor;
// }

// precision mediump float;

// uniform sampler2D uTexture;
// varying float vRandom;
// varying vec2 vUv;

// void main() {
//     // gl_FragColor = vec4(vRandom, 0.0, 0.0, 1.0);
//     vec4 textureColor = texture2D(uTexture, vUv);
//     gl_FragColor = textureColor;
// }

// precision mediump float;

// varying vec2 vUv;

// void main() {
//     // gl_FragColor = vec4(1.0 * vUv.x , 1.0 * vUv.y, 1.0, 1.0);
//     // gl_FragColor = vec4(1.0 * vUv.x, 1.0 * vUv.y, 0.0, 1.0);
//     // gl_FragColor = vec4(1.0 * vUv.x, 1.0 * vUv.x, 1.0 * vUv.x, 1.0);
//     // gl_FragColor = vec4(10.0 * vUv.y, 10.0 * vUv.y, 10.0 * vUv.y, 1.0);
//     // gl_FragColor = vec4(mod(5.0 * vUv.y, 1.0), mod(5.0 * vUv.y, 1.0), mod(5.0 * vUv.y, 1.0), 1.0);
//     float strength = mod(vUv.x * 10.0, 1.0);
//     strength = step(0.8, strength);
//     gl_FragColor = vec4(strength, strength, strength, 1.0);
// }

#define PI 3.1415926535897932384626433832795
precision mediump float;

varying vec2 vUv;

float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

vec2 rotate(vec2 uv, float rotation, vec2 mid)
{
    return vec2(
      cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
      cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
    );
}

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}


vec2 fade(vec2 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}


float cnoise(vec2 P){
  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
  Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;
  vec4 i = permute(permute(ix) + iy);
  vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
  vec4 gy = abs(gx) - 0.5;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;
  vec2 g00 = vec2(gx.x,gy.x);
  vec2 g10 = vec2(gx.y,gy.y);
  vec2 g01 = vec2(gx.z,gy.z);
  vec2 g11 = vec2(gx.w,gy.w);
  vec4 norm = 1.79284291400159 - 0.85373472095314 * 
    vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 *= norm.x;
  g01 *= norm.y;
  g10 *= norm.z;
  g11 *= norm.w;
  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));
  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

void main() {

    // float x = step(0.4, mod(vUv.x * 10.0, 1.0)) * step(0.8, mod(vUv.y * 10.0 + 0.2, 1.0));
    // float y = step(0.8, mod(vUv.x * 10.0 + 0.2, 1.0)) * step(0.4, mod(vUv.y * 10.0, 1.0));
    // float strength =step(0.2, max( abs(vUv.x - 0.5) ,abs(vUv.y - 0.5) ));
    // float strength =(floor(vUv.x * 10.0) / 10.0) * (floor(vUv.y * 10.0) / 10.0);
    // float strength = random(vec2((floor(vUv.x * 10.0) / 10.0) , (floor(vUv.y * 10.0 + vUv.x * 1.5) / 10.0)));
    // vec2 stretchedUv = vec2(
    //     vUv.x * 0.2 + 0.4,
    //     vUv.y* 0.5 + 0.25
    // );
    // float strength = 0.02/  distance(stretchedUv, vec2(0.5));
    // vec2 curvedUv = vec2(
    //     vUv.x + sin(vUv.y * 100.0) * 0.1,
    //     vUv.y + sin(vUv.x * 100.0) * 0.1
    // );
    // float strength =  1.0 -step(0.01, abs(distance(curvedUv, vec2(0.5)) - 0.25));
// Math.mod(((Math.atan2(grid.x - 0.5, grid.y - 0.5) / (2 *Math.PI)) + 0.5) * 10.0, 1.0)
    // float strength =  step(0.35, mod(((atan(vUv.x - 0.5, vUv.y - 0.5) / (2.0 * PI)) + 0.5) * 20.0, 1.0));
    // float angles = atan(vUv.x - 0.5, vUv.y - 0.5);
    // angles = angles / 2.0 * PI;
    // angles = angles + 0.5;
    // float sinusoid = sin(angles * 25.0) * 2.0;
    // float radius = 0.25 + sinusoid * 0.005;
    // float strength = step(0.01,abs(distance(vUv, vec2(0.5)) - radius));
    // float strength = 1.0 - cos(cnoise(vUv * 10.0) * 10.0);
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    // float strengthX = step(0.4, mod(vUv.x * 10.0 - 0.2, 1.0)) * step(0.8, mod(vUv.y * 10.0, 1.0));
    // float strengthY = step(0.8, mod(vUv.x * 10.0, 1.0)) * step(0.4, mod(vUv.y * 10.0 - 0.2, 1.0));
    // float strength = strengthX + strengthY;
    // float strength = step(0.2,max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    // vec2 gridUv =vec2(
    //   floor(vUv.x * 10.0) / 10.0, 
    //   floor((vUv.y + vUv.x * 0.1) * 10.0) / 10.0
    //   );
    // float strength = random(gridUv);

    // vec2 modifiedUv = vec2(
    //   vUv.x * 0.2 + 0.4,
    //   vUv.y
    // );

    // float strength =0.02/  distance(modifiedUv, vec2(0.5, 0.5));

    // vec2 curvedUv = vec2(
    //   vUv.x + sin(vUv.y * 100.0) * 0.1,
    //   vUv.y + sin(vUv.x * 100.0) * 0.1
    // );
    // float strength = 1.0 -step(0.01, abs(distance(curvedUv, vec2(0.5)) - 0.3));

    // float strength = mod(((atan(vUv.x - 0.5, vUv.y - 0.5) / ( 2.0 * PI)) + 0.5) * 20.0, 1.0);
    // float angle = atan(vUv.x - 0.5, vUv.y - 0.5);
    // angle /= 2.0 * PI;  
    // angle += 0.5;
    // float sinusoid = sin(angle * 100.0) * 0.01;
    // float radius = 0.25 + sinusoid;
    // float strength =1.0 - step(0.01, abs(distance(vUv, vec2(0.5, 0.5)) - radius));
    vec3 uvColor = vec3(vUv, 1.0);
    vec3 blackColor = vec3(0.0);
    float strength = step(0.5, sin(cnoise(vUv * 10.0) * 20.0));
    vec3 mixedColors = mix(blackColor, uvColor, strength );
    gl_FragColor = vec4(mixedColors, 1.0);


}


