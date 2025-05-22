// uniform mat4 modelMatrix;
// uniform mat4 viewMatrix;
// uniform mat4 projectionMatrix;

// attribute vec3 position;
// attribute vec3 color;

// attribute float aScale;

// uniform float uSize;
// uniform float uTime;

// varying vec3 vColor;

// void main() {
//     vec4 modelPosition = modelMatrix * vec4(position, 1.0);
//     float angle = atan(modelPosition.x, modelPosition.z);
//     float distanceToCenter = distance(modelPosition.xz, vec2(0.0));
//     float offsetAngle = (distanceToCenter) * uTime * 0.2;
//     angle += offsetAngle;
//     modelPosition.x = sin(angle) * distanceToCenter;
//     modelPosition.z = cos(angle) * distanceToCenter;
//     vec4 viewPosition = viewMatrix * modelPosition;
//     vec4 projectedPosition = projectionMatrix * viewPosition;
//     gl_Position = projectedPosition;
//     gl_PointSize =  uSize * aScale;
//     gl_PointSize *= ( 1.0 / - viewPosition.z );
//     vColor = color;
// }

// ===================================

// uniform mat4 modelMatrix;
// uniform mat4 viewMatrix;
// uniform mat4 projectionMatrix;

// attribute vec3 position;
// attribute vec3 color;
// attribute float aScale;

// uniform float uSize;
// uniform float uTime;

// varying vec3 vColor;

// void main() {
//     vec4 modelPosition = modelMatrix * vec4(position, 1.0);
//     float angle = atan(modelPosition.x, modelPosition.z);
//     float distanceToCenter = distance(modelPosition.xz, vec2(0.0));
//     float angleOffset = (1.0/ distanceToCenter) * uTime * 0.5;
//     angle += angleOffset;
//     modelPosition.x = cos(angle) * distanceToCenter ;
//     modelPosition.z = sin(angle) * distanceToCenter;
   
//     vec4 viewPosition = viewMatrix * modelPosition;
//     vec4 projectedPosition = projectionMatrix * viewPosition;

//     gl_Position = projectedPosition;
//     gl_PointSize = uSize * aScale;
//     gl_PointSize *= ( 1.0 / - viewPosition.z );

//     vColor = color;
// }


// ===================================

uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;

attribute vec3 position;
attribute vec3 color;

attribute float aScale;

uniform float uSize;
uniform float uTime;

varying vec3 vColor;


void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    float angle = atan(modelPosition.x, modelPosition.z);
    float distanceToCenter = distance(modelPosition.xz, vec2(0.0));
    float angleOffset = uTime * (1.0 / distanceToCenter) * 0.2;
    angle += angleOffset;
    modelPosition.x = cos(angle) * distanceToCenter;
    modelPosition.z = sin(angle) * distanceToCenter;
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position= projectedPosition;
    gl_PointSize = uSize * aScale;
    gl_PointSize *= ( 1.0 / - viewPosition.z );
    vColor = color;
}