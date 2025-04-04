// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// // import vertexShader from "./shaders/test/vertex.glsl";
// // import fragmentShader from "./shaders/test/fragment.glsl";
// import { Timer } from "three/addons/misc/Timer.js";
// import GUI from "lil-gui";
// import vertexShader from "./shaders/water/vertex.glsl";
// import fragmentShader from "./shaders/water/fragment.glsl";

// const gui = new GUI();

// const canvas = document.querySelector("canvas.webgl");

// const sizes = {
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// };

// const debugObj = {};

// const scene = new THREE.Scene();
// const raycaster = new THREE.Raycaster();

// const mouse = new THREE.Vector2();

// window.addEventListener("mousemove", (e) => {
// 	mouse.x = (e.clientX / sizes.width) * 2 - 1;
// 	mouse.y = -(e.clientY / sizes.height) * 2 + 1;
// });

// const planeGeometry = new THREE.PlaneGeometry(4, 4, 60, 120);
// debugObj.depthColor = "#186691";
// debugObj.surfaceColor = "#9bd8ff";

// const planeMaterial = new THREE.RawShaderMaterial({
// 	vertexShader: vertexShader,
// 	fragmentShader: fragmentShader,
// 	transparent: true,
// 	uniforms: {
// 		uTime: { value: 0.0 },
// 		uBigWavesElevation: { value: 0.2 },
// 		uBigWavesFrequency: { value: new THREE.Vector2(4.0, 1.4) },
// 		uBigWavesSpeed: { value: 1.5 },

// 		uDepthColor: { value: new THREE.Color(debugObj.depthColor) },
// 		uSurfaceColor: { value: new THREE.Color(debugObj.surfaceColor) },

// 		uColorOffset: { value: 0.08 },
// 		uColorMultiplier: { value: 5.0 },
// 	},
// 	// wireframe: true,
// });
// console.log(planeMaterial);

// gui.add(planeMaterial.uniforms.uBigWavesElevation, "value").min(-10.0).max(10.0).step(0.01).name("uBigWavesElevation");
// gui.add(planeMaterial.uniforms.uBigWavesFrequency.value, "x").min(-5.0).max(5.0).step(0.01).name("uBigWavesFrequencyX");
// gui.add(planeMaterial.uniforms.uBigWavesFrequency.value, "y").min(-5.0).max(5.0).step(0.01).name("uBigWavesFrequencyY");
// gui.add(planeMaterial.uniforms.uBigWavesSpeed, "value").min(0.0).max(5.0).step(0.01).name("uBigWavesSpeed");
// gui.add(planeMaterial.uniforms.uColorOffset, "value").min(0.0).max(5.0).step(0.01).name("uColorOffset");
// gui.add(planeMaterial.uniforms.uColorMultiplier, "value").min(0.0).max(10.0).step(0.01).name("uColorMultiplier");

// gui.addColor(debugObj, "depthColor")
// 	.onChange(() => {
// 		planeMaterial.uniforms.uDepthColor.value.set(debugObj.depthColor);
// 	})
// 	.name("uDepthColor");
// gui.addColor(debugObj, "surfaceColor")
// 	.onChange((e) => {
// 		planeMaterial.uniforms.uSurfaceColor.value.set(e);
// 	})
// 	.name("uSurfaceColor");

// const plane = new THREE.Mesh(planeGeometry, planeMaterial);
// scene.add(plane);
// plane.rotation.x = -Math.PI * 0.5;

// const ambientLight = new THREE.AmbientLight("#fff", 1);
// scene.add(ambientLight);

// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
// camera.position.z = 5;
// camera.position.y = 1;
// scene.add(camera);

// const controls = new OrbitControls(camera, canvas);
// controls.update();

// const renderer = new THREE.WebGLRenderer({
// 	canvas,
// });
// renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene, camera);

// window.addEventListener("click", (e) => {
// 	raycaster.setFromCamera(mouse, camera);
// 	const intersects = raycaster.intersectObject(plane);
// 	if (intersects.length > 0) {
// 		const uv = intersects[0].uv;
// 		const absX = Math.abs(uv.x - 0.5);
// 		const absY = Math.abs(uv.y - 0.5);
// 		const strength = Math.max(absX, absY);
// 		console.log(`{x:${uv.x.toFixed(2)} y:${uv.y.toFixed(2)}} absX=${absX} absY=${absY}`);
// 		// console.log(`{x:${uv.x} y:${uv.y}} rgb = ${(strength, strength, strength)}`);
// 	}
// });

// const timer = new Timer();

// const tick = () => {
// 	renderer.render(scene, camera);
// 	controls.update();
// 	const elapsed = timer.getElapsed();
// 	planeMaterial.uniforms.uTime.value = elapsed;
// 	timer.update();

// 	window.requestAnimationFrame(tick);
// };

// tick();

// =============== new here ======

// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import vertexShader from "./shaders/water/vertex.glsl";
// import fragmentShader from "./shaders/water/fragment.glsl";
// import { Timer } from "three/addons/misc/Timer.js";

// import GUI from "lil-gui";

// const gui = new GUI();

// const canvas = document.querySelector("canvas.webgl");

// const obj = {
// 	surfaceColor: "#1433d2",
// 	depthColor: "#642020",
// };

// const sizes = {
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// };

// const scene = new THREE.Scene();

// const plane = new THREE.Mesh(
// 	new THREE.PlaneGeometry(4, 4, 512, 512),
// 	new THREE.RawShaderMaterial({
// 		vertexShader,
// 		fragmentShader,
// 		transparent: true,
// 		uniforms: {
// 			uBigWavesElevation: { value: 0.12 },
// 			uBigWavesFrequency: { value: new THREE.Vector2(3.0, 2.0) },

// 			uTime: { value: 0.0 },
// 			uSpeed: { value: 1.5 },
// 			uSurfaceColor: { value: new THREE.Color(obj.surfaceColor) },
// 			uDepthColor: { value: new THREE.Color(obj.depthColor) },

// 			uColorMultiplier: { value: 2.57 },
// 			uColorOffset: { value: 0.2 },
// 		},
// 	})
// );
// plane.rotation.x = -Math.PI * 0.5;
// scene.add(plane);

// gui.add(plane.material.uniforms.uBigWavesFrequency.value, "x")
// 	.min(-5.0)
// 	.max(5.0)
// 	.step(0.01)
// 	.name("uBigWavesFrequencyX");
// gui.add(plane.material.uniforms.uBigWavesFrequency.value, "y")
// 	.min(-5.0)
// 	.max(5.0)
// 	.step(0.01)
// 	.name("uBigWavesFrequencyY");
// gui.add(plane.material.uniforms.uBigWavesElevation, "value").min(0.0).max(5.0).step(0.01).name("uBigWavesElevation");
// gui.add(plane.material.uniforms.uSpeed, "value").min(0.0).max(5.0).step(0.01).name("uSpeed");

// gui.addColor(obj, "surfaceColor").onChange((e) => {
// 	plane.material.uniforms.uSurfaceColor.value = new THREE.Color(e);
// });

// gui.addColor(obj, "depthColor").onChange((e) => {
// 	plane.material.uniforms.uDepthColor.value = new THREE.Color(e);
// });

// gui.add(plane.material.uniforms.uColorMultiplier, "value").min(0.0).max(5.0).step(0.01).name("uColorMultiplier");
// gui.add(plane.material.uniforms.uColorOffset, "value").min(0.0).max(5.0).step(0.01).name("uColorOffset");

// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
// camera.position.z = 5;
// camera.position.y = 1;
// scene.add(camera);

// const controls = new OrbitControls(camera, canvas);
// controls.update();

// const renderer = new THREE.WebGLRenderer({
// 	canvas,
// });
// renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene, camera);

// const timer = new Timer();
// const tick = () => {
// 	renderer.render(scene, camera);
// 	controls.update();

// 	timer.update();
// 	const elapsed = timer.getElapsed();
// 	plane.material.uniforms.uTime.value = elapsed;
// 	window.requestAnimationFrame(tick);
// };

// tick();

// ================================================

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import vertexShader from "./shaders/water/vertex.glsl";
import fragmentShader from "./shaders/water/fragment.glsl";
import GUI from "lil-gui";
import { Timer } from "three/addons/misc/Timer.js";

const gui = new GUI();

const canvas = document.querySelector("canvas.webgl");

const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

const guiObj = {
	innerColor: "#d1d1d1",
	outerColor: "#0e42dd",
};

const scene = new THREE.Scene();

const plane = new THREE.Mesh(
	new THREE.PlaneGeometry(4, 4, 512, 512),
	new THREE.RawShaderMaterial({
		vertexShader,
		fragmentShader,
		transparent: true,
		uniforms: {
			uTime: { value: 0.0 },
			uWaveFrequency: { value: new THREE.Vector2(2.0, 1.3) },
			uWaveElevation: { value: 0.2 },
			uInnerColor: { value: new THREE.Color(guiObj.innerColor) },
			uOuterColor: { value: new THREE.Color(guiObj.outerColor) },
			uSpeed: { value: 0.5 },
			uColorMultiplier: { value: 0.66 },
			uOffsetColor: { value: 0.35 },
			uSmallWaveFrequency: { value: 3.0 },
			uSmallWaveElevation: { value: 0.15 },
		},
	})
);
plane.rotation.x = -Math.PI * 0.5;
scene.add(plane);

gui.add(plane.material.uniforms.uWaveFrequency.value, "x").min(0.0).max(5.0).step(0.01).name("uWaveFrequencyX");
gui.add(plane.material.uniforms.uWaveFrequency.value, "y").min(0.0).max(5.0).step(0.01).name("uWaveFrequencyY");
gui.add(plane.material.uniforms.uWaveElevation, "value").min(0.0).max(5.0).step(0.01).name("uWaveElevation");
gui.addColor(guiObj, "innerColor")
	.name("innerColor")
	.onChange((e) => {
		plane.material.uniforms.uInnerColor.value = new THREE.Color(e);
	});
gui.addColor(guiObj, "outerColor")
	.name("outerColor")
	.onChange((e) => {
		plane.material.uniforms.uOuterColor.value = new THREE.Color(e);
	});
gui.add(plane.material.uniforms.uSpeed, "value").min(0.0).max(5.0).step(0.01).name("uSpeed");
gui.add(plane.material.uniforms.uColorMultiplier, "value").min(0.0).max(5.0).step(0.01).name("uColorMultiplier");
gui.add(plane.material.uniforms.uOffsetColor, "value").min(0.0).max(5.0).step(0.01).name("uOffsetColor");
gui.add(plane.material.uniforms.uSmallWaveFrequency, "value").min(0.0).max(5.0).step(0.01).name("uSmallWaveFrequency");
gui.add(plane.material.uniforms.uSmallWaveElevation, "value").min(0.0).max(5.0).step(0.01).name("uSmallWaveElevation");

const ambientLight = new THREE.AmbientLight("#fff", 1);
scene.add(ambientLight);

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 5;
camera.position.y = 1;
scene.add(camera);

const controls = new OrbitControls(camera, canvas);
controls.update();

const renderer = new THREE.WebGLRenderer({
	canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

const timer = new Timer();
const tick = () => {
	renderer.render(scene, camera);
	controls.update();
	const elapsedTime = timer.getElapsed();
	plane.material.uniforms.uTime.value = elapsedTime;
	timer.update();
	window.requestAnimationFrame(tick);
};

tick();
