// uniform mat4 projectionMatrix;
// uniform mat4 modelMatrix;
// uniform mat4 viewMatrix;
// attribute vec3 position;


// float lorem() {
//     return 0.9;
// }
// void main() {
//     vec4 modelPosition = modelMatrix * vec4(position, 1.0);
//     // modelPosition.z += sin(modelPosition.x * 10.0) * 0.1;
//     modelPosition.z += sin(modelPosition.x * 5.0) * 0.1 ;
//     vec4 viewPosition = viewMatrix * modelPosition;
//     vec4 projectedPosition = projectionMatrix * viewPosition;
//     gl_Position = projectedPosition;
// }


// uniform mat4 modelMatrix;
// uniform mat4 viewMatrix;
// uniform mat4 projectionMatrix;

// uniform vec2 uFrequency;

// attribute vec3 position;
// attribute float aRandom;

// varying float vRandom;

// void main() {
//     vec4 modelPosition = modelMatrix * vec4(position, 1.0);
//     modelPosition.z += sin(modelPosition.x * uFrequency.x) * 0.5;
//     modelPosition.z += sin(modelPosition.y * uFrequency.y) * 0.5;
//     vec4 viewPosition =   viewMatrix * modelPosition;
//     vec4 projectedPosition = projectionMatrix * viewPosition;
//     gl_Position = projectedPosition;
//     vRandom = aRandom;
// }

// uniform mat4 viewMatrix;
// uniform mat4 projectionMatrix;
// uniform mat4 modelMatrix;

// uniform vec2 uFrequency;
// uniform float uTime;

// attribute vec3 position;
// attribute float aRandom;
// attribute vec2 uv;
// varying float vRandom;
// varying vec2 vUv;


// void main() {
//     vec4 modelPosition = modelMatrix * vec4(position, 1.0);
//     modelPosition.z += sin(modelPosition.x * uFrequency.x - uTime) * 0.5;
//     modelPosition.z += sin(modelPosition.y * uFrequency.y - uTime) * 0.5;
//     vec4 viewPosition = viewMatrix * modelPosition;
//     vec4 projectedPosition = projectionMatrix * viewPosition;
//     gl_Position = projectedPosition;
//     vRandom = aRandom;
//     vUv = uv;
// }

// uniform mat4 viewMatrix;
// uniform mat4 modelMatrix;
// uniform mat4 projectionMatrix;

// uniform vec2 uFrequency;
// uniform float uTime;

// attribute vec3 position;
// attribute float aRandom;
// attribute vec2 uv;

// varying float vRandom;
// varying vec2 vUv;

// void main() {
//     vec4 modelPosition = modelMatrix * vec4(position, 1.0);
//     // modelPosition.z += aRandom;
//     modelPosition.z += sin(modelPosition.x * uFrequency.x - uTime) * 0.4;
//     modelPosition.z += sin(modelPosition.y * uFrequency.y - uTime) * 0.4;
//     vec4 viewPosition =  viewMatrix * modelPosition  ;
//     vec4 projectedPosition =   projectionMatrix * viewPosition;
//     // vec4 projectedPosition = projectionMatrix * viewMatrix * modelMatrix *  vec4(position, 1.0);
//     gl_Position = projectedPosition;
//     vRandom = aRandom;
//     vUv = uv;
// }

uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;

attribute vec3 position;
attribute vec2 uv;

varying vec2 vUv;

void main() {
    gl_Position = projectionMatrix * viewMatrix * modelMatrix  * vec4(position, 1.0);
    vUv = uv;
}












