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

// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import vertexShader from "./shaders/water/vertex.glsl";
// import fragmentShader from "./shaders/water/fragment.glsl";
// import GUI from "lil-gui";
// import { Timer } from "three/addons/misc/Timer.js";

// const gui = new GUI();

// const canvas = document.querySelector("canvas.webgl");

// const sizes = {
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// };

// const guiObj = {
// 	innerColor: "#d1d1d1",
// 	outerColor: "#0e42dd",
// };

// const scene = new THREE.Scene();

// const plane = new THREE.Mesh(
// 	new THREE.PlaneGeometry(4, 4, 512, 512),
// 	new THREE.RawShaderMaterial({
// 		vertexShader,
// 		fragmentShader,
// 		transparent: true,
// 		uniforms: {
// 			uTime: { value: 0.0 },
// 			uWaveFrequency: { value: new THREE.Vector2(2.0, 1.3) },
// 			uWaveElevation: { value: 0.2 },
// 			uInnerColor: { value: new THREE.Color(guiObj.innerColor) },
// 			uOuterColor: { value: new THREE.Color(guiObj.outerColor) },
// 			uSpeed: { value: 0.5 },
// 			uColorMultiplier: { value: 0.66 },
// 			uOffsetColor: { value: 0.35 },
// 			uSmallWaveFrequency: { value: 3.0 },
// 			uSmallWaveElevation: { value: 0.15 },
// 		},
// 	})
// );
// plane.rotation.x = -Math.PI * 0.5;
// scene.add(plane);

// gui.add(plane.material.uniforms.uWaveFrequency.value, "x").min(0.0).max(5.0).step(0.01).name("uWaveFrequencyX");
// gui.add(plane.material.uniforms.uWaveFrequency.value, "y").min(0.0).max(5.0).step(0.01).name("uWaveFrequencyY");
// gui.add(plane.material.uniforms.uWaveElevation, "value").min(0.0).max(5.0).step(0.01).name("uWaveElevation");
// gui.addColor(guiObj, "innerColor")
// 	.name("innerColor")
// 	.onChange((e) => {
// 		plane.material.uniforms.uInnerColor.value = new THREE.Color(e);
// 	});
// gui.addColor(guiObj, "outerColor")
// 	.name("outerColor")
// 	.onChange((e) => {
// 		plane.material.uniforms.uOuterColor.value = new THREE.Color(e);
// 	});
// gui.add(plane.material.uniforms.uSpeed, "value").min(0.0).max(5.0).step(0.01).name("uSpeed");
// gui.add(plane.material.uniforms.uColorMultiplier, "value").min(0.0).max(5.0).step(0.01).name("uColorMultiplier");
// gui.add(plane.material.uniforms.uOffsetColor, "value").min(0.0).max(5.0).step(0.01).name("uOffsetColor");
// gui.add(plane.material.uniforms.uSmallWaveFrequency, "value").min(0.0).max(5.0).step(0.01).name("uSmallWaveFrequency");
// gui.add(plane.material.uniforms.uSmallWaveElevation, "value").min(0.0).max(5.0).step(0.01).name("uSmallWaveElevation");

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

// const timer = new Timer();
// const tick = () => {
// 	renderer.render(scene, camera);
// 	controls.update();
// 	const elapsedTime = timer.getElapsed();
// 	plane.material.uniforms.uTime.value = elapsedTime;
// 	timer.update();
// 	window.requestAnimationFrame(tick);
// };

// tick();

// // ===========================================
// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import GUI from "lil-gui";
// import { Timer } from "three/addons/misc/Timer.js";
// import vertexShader from "./shaders/galaxy/vertexShader.glsl";
// import fragmentShader from "./shaders/galaxy/fragmentShader.glsl";

// const canvas = document.querySelector("canvas.webgl");

// const gui = new GUI();

// const sizes = {
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// };

// const scene = new THREE.Scene();

// // const plane = new THREE.Mesh(
// // 	new THREE.PlaneGeometry(2, 2),
// // 	new THREE.MeshBasicMaterial({
// // 		color: "red",
// // 	})
// // );
// // plane.rotation.x = -Math.PI * 0.5;
// // scene.add(plane);

// // Custom particles
// const debugObj = {
// 	count: 37950,
// 	size: 0.02,
// 	radius: 3.0,
// 	numOfBranches: 3,
// 	randomness: 1.19,
// 	power: 2.49,
// 	spread: 1.75,
// 	uSize: 30.0,
// 	innerColor: "#e7440d",
// 	outerColor: "#0c16a7",
// };

// let geometry = null;
// let material = null;
// let points = null;
// const createGalaxy = () => {
// 	if (geometry) {
// 		geometry.dispose();
// 		material.dispose();
// 		scene.remove(points);
// 	}
// 	const count = debugObj.count;
// 	const positionArray = new Float32Array(count * 3);
// 	const colorsArray = new Float32Array(count * 3);
// 	const scaleArray = new Float32Array(count);

// 	for (let i = 0; i < count; i++) {
// 		const branches = debugObj.numOfBranches;
// 		const branchingFactor = ((i % branches) / branches) * Math.PI * 2.0;

// 		const radius = Math.random() * debugObj.radius;
// 		const randomX =
// 			(Math.sqrt(radius) / debugObj.spread) *
// 			Math.pow(Math.random(), debugObj.power) *
// 			(Math.random() >= 0.5 ? -1 : 1) *
// 			debugObj.randomness;
// 		const randomY =
// 			(Math.sqrt(radius) / debugObj.spread) *
// 			Math.pow(Math.random(), debugObj.power) *
// 			(Math.random() >= 0.5 ? -1 : 1) *
// 			debugObj.randomness;
// 		const randomZ =
// 			(Math.sqrt(radius) / debugObj.spread) *
// 			Math.pow(Math.random(), debugObj.power) *
// 			(Math.random() >= 0.5 ? -1 : 1) *
// 			debugObj.randomness;
// 		const innerColor = new THREE.Color(debugObj.innerColor);
// 		const outerColor = new THREE.Color(debugObj.outerColor);
// 		const mixColor = innerColor.lerp(outerColor, radius / debugObj.radius);

// 		positionArray[i * 3] = Math.sin(branchingFactor) * radius + randomX;
// 		positionArray[i * 3 + 1] = randomY;
// 		positionArray[i * 3 + 2] = Math.cos(branchingFactor) * radius + randomZ;

// 		colorsArray[i * 3] = mixColor.r;
// 		colorsArray[i * 3 + 1] = mixColor.g;
// 		colorsArray[i * 3 + 2] = mixColor.b;

// 		scaleArray[i] = Math.random();
// 	}

// 	geometry = new THREE.BufferGeometry();
// 	const positionAttribute = new THREE.BufferAttribute(positionArray, 3);
// 	const colorsAttribute = new THREE.BufferAttribute(colorsArray, 3);
// 	const scaleAttribute = new THREE.BufferAttribute(scaleArray, 1);
// 	geometry.setAttribute("position", positionAttribute);
// 	geometry.setAttribute("color", colorsAttribute);
// 	geometry.setAttribute("aScale", scaleAttribute);
// 	material = new THREE.RawShaderMaterial({
// 		depthWrite: false,
// 		vertexShader,
// 		fragmentShader,
// 		blending: THREE.AdditiveBlending,
// 		vertexColors: true,
// 		uniforms: {
// 			uSize: { value: debugObj.uSize * renderer.getPixelRatio() },
// 			uTime: { value: 0 },
// 		},
// 	});
// 	points = new THREE.Points(geometry, material);
// 	scene.add(points);
// };

// const galaxy = gui.addFolder("Galaxy");
// galaxy
// 	.add(debugObj, "count")
// 	.min(1000)
// 	.max(50000)
// 	.step(50)
// 	.name("count")
// 	.onFinishChange(() => createGalaxy());
// galaxy
// 	.add(debugObj, "size")
// 	.min(0.001)
// 	.max(0.1)
// 	.step(0.01)
// 	.name("Particle Size")
// 	.onFinishChange(() => createGalaxy());
// galaxy
// 	.add(debugObj, "radius")
// 	.min(1)
// 	.max(10)
// 	.step(0.1)
// 	.name("Galaxy Radius")
// 	.onFinishChange(() => createGalaxy());
// galaxy
// 	.add(debugObj, "numOfBranches")
// 	.min(1)
// 	.max(5)
// 	.step(1)
// 	.name("Branches")
// 	.onFinishChange(() => createGalaxy());
// galaxy
// 	.add(debugObj, "randomness")
// 	.min(0)
// 	.max(5)
// 	.step(0.01)
// 	.name("Randomness")
// 	.onChange(() => createGalaxy());
// galaxy
// 	.add(debugObj, "power")
// 	.min(1)
// 	.max(5)
// 	.step(0.01)
// 	.name("Power")
// 	.onChange(() => createGalaxy());
// galaxy
// 	.add(debugObj, "spread")
// 	.min(1)
// 	.max(5)
// 	.step(0.01)
// 	.name("Spread")
// 	.onChange(() => createGalaxy());
// galaxy
// 	.add(debugObj, "uSize")
// 	.min(1)
// 	.max(50)
// 	.step(0.01)
// 	.name("uSize")
// 	.onChange(() => createGalaxy());
// galaxy
// 	.addColor(debugObj, "innerColor")
// 	.onFinishChange((e) => createGalaxy())
// 	.name("Inner Color");
// galaxy
// 	.addColor(debugObj, "outerColor")
// 	.onFinishChange(() => createGalaxy())
// 	.name("Outer Color");

// const ambientLight = new THREE.AmbientLight("#fff", 1.0);
// scene.add(ambientLight);

// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
// camera.position.z = 4;
// camera.position.y = 2;
// scene.add(camera);

// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;

// controls.update();
// const renderer = new THREE.WebGLRenderer({
// 	canvas,
// });
// renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene, camera);
// createGalaxy();

// const timer = new Timer();

// const tick = () => {
// 	controls.update();
// 	const elapsedTime = timer.getElapsed();
// 	material.uniforms.uTime.value = elapsedTime;
// 	timer.update();
// 	renderer.render(scene, camera);
// 	window.requestAnimationFrame(tick);
// };

// tick();

// ==========================

// import * as THREE from "three";
// import GUI from "lil-gui";

// const canvas = document.querySelector("canvas.webgl");
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import { Timer } from "three/addons/misc/Timer.js";
// import vertexShader from "./shaders/galaxy/vertexShader.glsl";
// import fragmentShader from "./shaders/galaxy/fragmentShader.glsl";

// const sizes = {
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// };

// const debugObj = {
// 	count: 100000,
// 	radius: 3,
// 	size: 0.03,
// 	branches: 3,
// 	random: 0.35,
// 	power: 4,
// 	insideColor: "#c91d1d",
// 	outsideColor: "#090085",
// 	uSize: 30.0,
// };

// const scene = new THREE.Scene();
// const gui = new GUI();

// let geometry = null;
// let material = null;
// let points = null;

// const createGalaxy = () => {
// 	if (geometry) {
// 		geometry.dispose();
// 		material.dispose();
// 		scene.remove(points);
// 	}
// 	const count = debugObj.count;
// 	const positionArray = new Float32Array(count * 3);
// 	const colorsArray = new Float32Array(count * 3);
// 	const scaleArray = new Float32Array(count);
// 	for (let i = 0; i < count; i++) {
// 		const radius = Math.random() * debugObj.radius;
// 		const branchAngle = ((i % debugObj.branches) / debugObj.branches) * 2 * Math.PI;

// 		const randomX = Math.pow(Math.random(), debugObj.power) * (Math.random() <= 0.5 ? -1 : 1) * debugObj.random;
// 		const randomY = Math.pow(Math.random(), debugObj.power) * (Math.random() <= 0.5 ? -1 : 1) * debugObj.random;
// 		const randomZ = Math.pow(Math.random(), debugObj.power) * (Math.random() <= 0.5 ? -1 : 1) * debugObj.random;

// 		positionArray[i * 3 + 0] = Math.sin(branchAngle) * radius + randomX;
// 		positionArray[i * 3 + 1] = randomY;
// 		positionArray[i * 3 + 2] = Math.cos(branchAngle) * radius + randomZ;
// 		const insideColor = new THREE.Color(debugObj.insideColor);
// 		const outsideColor = new THREE.Color(debugObj.outsideColor);
// 		const mixColor = insideColor.lerp(outsideColor, radius / debugObj.radius);

// 		colorsArray[i * 3 + 0] = mixColor.r;
// 		colorsArray[i * 3 + 1] = mixColor.g;
// 		colorsArray[i * 3 + 2] = mixColor.b;

// 		scaleArray[i * 3 + 0] = Math.random();
// 		scaleArray[i * 3 + 1] = Math.random();
// 		scaleArray[i * 3 + 2] = Math.random();
// 	}
// 	const positionAttribute = new THREE.BufferAttribute(positionArray, 3);
// 	const colorsAttribute = new THREE.BufferAttribute(colorsArray, 3);
// 	const scaleAttribute = new THREE.BufferAttribute(scaleArray, 1);
// 	geometry = new THREE.BufferGeometry();
// 	geometry.setAttribute("position", positionAttribute);
// 	geometry.setAttribute("color", colorsAttribute);
// 	geometry.setAttribute("aScale", scaleAttribute);
// 	material = new THREE.RawShaderMaterial({
// 		// size: debugObj.size,
// 		depthWrite: false,
// 		// sizeAttenuation: true,
// 		vertexShader,
// 		fragmentShader,
// 		vertexColors: true,
// 		blending: THREE.AdditiveBlending,
// 		transparent: true,
// 		uniforms: {
// 			uSize: { value: debugObj.uSize },
// 			uTime: { value: 0.0 },
// 		},
// 	});

// 	points = new THREE.Points(geometry, material);
// 	scene.add(points);
// };
// const galaxyGui = gui.addFolder("Galaxy");
// galaxyGui.add(debugObj, "count").min(20000).max(800000).step(100).name("Count").onFinishChange(createGalaxy);
// galaxyGui.add(debugObj, "radius").min(1).max(8).step(0.1).name("Radius").onFinishChange(createGalaxy);
// galaxyGui.add(debugObj, "size").min(0.001).max(0.1).step(0.01).name("Point Size").onFinishChange(createGalaxy);
// galaxyGui.add(debugObj, "branches").min(1).max(6).step(1).name("Branches").onFinishChange(createGalaxy);
// galaxyGui.add(debugObj, "random").min(0.01).max(0.5).step(0.01).name("Random").onFinishChange(createGalaxy);
// galaxyGui.add(debugObj, "power").min(1).max(5).step(0.01).name("Power").onFinishChange(createGalaxy);
// galaxyGui.add(debugObj, "uSize").min(1).max(10).step(1.0).name("uSize").onFinishChange(createGalaxy);
// galaxyGui.addColor(debugObj, "insideColor").onChange(createGalaxy);
// galaxyGui.addColor(debugObj, "outsideColor").onChange(createGalaxy);

// const ambientLight = new THREE.AmbientLight("#fff", 2);
// scene.add(ambientLight);

// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
// scene.add(camera);
// camera.position.z = 5;

// const renderer = new THREE.WebGLRenderer({
// 	canvas,
// });

// renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene, camera);
// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;
// controls.update();

// createGalaxy();

// const timer = new Timer();

// const tick = () => {
// 	renderer.render(scene, camera);
// 	controls.enableDamping = true;
// 	const deltaTime = timer.getElapsed();
// 	points.material.uniforms.uTime.value = deltaTime;
// 	timer.update();
// 	controls.update();
// 	window.requestAnimationFrame(tick);
// };

// tick();

//  ======================

// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import vertexShader from "./shaders/water/vertex.glsl";
// import fragmentShader from "./shaders/water/fragment.glsl";
// import GUI from "lil-gui";
// import { Timer } from "three/addons/misc/Timer.js";

// const canvas = document.querySelector("canvas.webgl");

// const gui = new GUI();

// const debugObj = {
// 	uFrequencyX: 7.0,
// 	uElevationX: 0.06,
// 	uFrequencyZ: 4.2,
// 	uElevationZ: 0.03,
// 	uTimeFrequency: 0.8,
// 	uColorHigh: "#847cf8",
// 	uColorLow: "#8828d7",
// 	uColorMultiplier: 10.0,
// 	uColorOffset: 0.9,
// 	uSmallFrequency: 3.0,
// 	uSmallElevation: 0.2,
// };

// const sizes = {
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// };

// const scene = new THREE.Scene();

// const mesh = new THREE.Mesh(
// 	new THREE.PlaneGeometry(2, 2, 512, 512),
// 	new THREE.RawShaderMaterial({
// 		vertexShader,
// 		fragmentShader,
// 		transparent: true,
// 		uniforms: {
// 			uTime: { value: 0.0 },
// 			uTimeFrequency: { value: debugObj.uTimeFrequency },
// 			uFrequencyX: { value: debugObj.uFrequencyX },
// 			uElevationX: { value: debugObj.uElevationX },
// 			uFrequencyZ: { value: debugObj.uFrequencyZ },
// 			uElevationZ: { value: debugObj.uElevationZ },
// 			uColorHigh: { value: new THREE.Color(debugObj.uColorHigh) },
// 			uColorLow: { value: new THREE.Color(debugObj.uColorLow) },
// 			uColorMultiplier: { value: debugObj.uColorMultiplier },
// 			uColorOffset: { value: debugObj.uColorOffset },
// 			uSmallFrequency: { value: debugObj.uSmallFrequency },
// 			uSmallElevation: { value: debugObj.uSmallElevation },
// 		},
// 	})
// );

// gui.add(debugObj, "uFrequencyX")
// 	.min(1.0)
// 	.max(10.0)
// 	.step(0.1)
// 	.name("uFrequencyX")
// 	.onChange((e) => {
// 		mesh.material.uniforms.uFrequencyX.value = e;
// 	});
// gui.add(debugObj, "uElevationX")
// 	.min(0.0)
// 	.max(1.0)
// 	.step(0.01)
// 	.name("uElevationX")
// 	.onChange((e) => {
// 		mesh.material.uniforms.uElevationX.value = e;
// 	});

// gui.add(debugObj, "uFrequencyZ")
// 	.min(1.0)
// 	.max(10.0)
// 	.step(0.1)
// 	.name("uFrequencyZ")
// 	.onChange((e) => {
// 		mesh.material.uniforms.uFrequencyZ.value = e;
// 	});
// gui.add(debugObj, "uElevationZ")
// 	.min(0.0)
// 	.max(1.0)
// 	.step(0.01)
// 	.name("uElevationZ")
// 	.onChange((e) => {
// 		mesh.material.uniforms.uElevationZ.value = e;
// 	});
// gui.add(debugObj, "uTimeFrequency")
// 	.min(0.0)
// 	.max(5.0)
// 	.step(0.01)
// 	.name("uTimeFrequency")
// 	.onChange((e) => {
// 		mesh.material.uniforms.uTimeFrequency.value = e;
// 	});

// gui.addColor(debugObj, "uColorHigh")
// 	.name("uColorHigh")
// 	.onChange((e) => {
// 		mesh.material.uniforms.uColorHigh.value = new THREE.Color(e);
// 	});
// gui.addColor(debugObj, "uColorLow")
// 	.name("uColorLow")
// 	.onChange((e) => {
// 		mesh.material.uniforms.uColorLow.value = new THREE.Color(e);
// 	});

// gui.add(debugObj, "uColorMultiplier")
// 	.min(0.0)
// 	.max(10.0)
// 	.step(0.01)
// 	.name("uColorMultiplier")
// 	.onChange((e) => {
// 		mesh.material.uniforms.uColorMultiplier.value = e;
// 	});
// gui.add(debugObj, "uColorOffset")
// 	.min(0.0)
// 	.max(1.0)
// 	.step(0.01)
// 	.name("uColorOffset")
// 	.onChange((e) => {
// 		mesh.material.uniforms.uColorOffset.value = e;
// 	});
// gui.add(debugObj, "uSmallElevation")
// 	.min(0.0)
// 	.max(1.0)
// 	.step(0.01)
// 	.name("uSmallElevation")
// 	.onChange((e) => {
// 		mesh.material.uniforms.uSmallElevation.value = e;
// 	});
// gui.add(debugObj, "uSmallFrequency")
// 	.min(0.0)
// 	.max(10.0)
// 	.step(0.01)
// 	.name("uSmallFrequency")
// 	.onChange((e) => {
// 		mesh.material.uniforms.uSmallFrequency.value = e;
// 	});

// mesh.rotation.x = -Math.PI * 0.5;
// scene.add(mesh);

// const ambientLight = new THREE.AmbientLight("#fff", 3.0);
// scene.add(ambientLight);

// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
// camera.position.z = 3;
// camera.position.y = 1;
// scene.add(camera);

// const renderer = new THREE.WebGLRenderer({
// 	canvas,
// });
// renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene, camera);

// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;
// controls.update();

// const timer = new Timer();

// const tick = () => {
// 	controls.enableDamping = true;
// 	controls.update();
// 	const elapsed = timer.getElapsed();
// 	mesh.material.uniforms.uTime.value = elapsed;
// 	timer.update();

// 	renderer.render(scene, camera);
// 	window.requestAnimationFrame(tick);
// };
// tick();

// ==================1

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import GUI from "lil-gui";
import vertexShader from "./shaders/galaxy/vertexShader.glsl";
import fragmentShader from "./shaders/galaxy/fragmentShader.glsl";
import { Timer } from "three/addons/misc/Timer.js";

const gui = new GUI();

const galaxy = gui.addFolder("Galaxy");

const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

const debugObj = {
	count: 200000,
	radius: 4,
	size: 30.0,
	numOfBranches: 3,
	randomness: 0.5,
	power: 3.0,
	// innerColor: "#276ca0",
	// outerColor: "#8047ae",
	innerColor: "#ff6030",
	outerColor: "#1b3984",
	scale: 1.8,
};

const canvas = document.querySelector("canvas.webgl");

const scene = new THREE.Scene();

let geometry = null;
let material = null;
let points = null;

const generateGalaxy = () => {
	if (geometry !== null) {
		geometry.dispose();
		material.dispose();
		scene.remove(points);
	}
	const positionArray = new Float32Array(debugObj.count * 3);
	const colorArray = new Float32Array(debugObj.count * 3);
	const scaleArray = new Float32Array(debugObj.count);
	for (let i = 0; i < debugObj.count; i++) {
		// position
		const angle = ((i % debugObj.numOfBranches) / debugObj.numOfBranches) * Math.PI * 2.0;
		const radius = Math.random() * debugObj.radius;
		const randomX =
			Math.pow(Math.random(), debugObj.power) * (Math.random() < 0.5 ? -1 : 1) * debugObj.randomness * radius;
		const randomY =
			Math.pow(Math.random(), debugObj.power) * (Math.random() < 0.5 ? -1 : 1) * debugObj.randomness * radius;
		const randomZ =
			Math.pow(Math.random(), debugObj.power) * (Math.random() < 0.5 ? -1 : 1) * debugObj.randomness * radius;
		positionArray[i * 3 + 0] = Math.sin(angle) * radius + randomX;
		positionArray[i * 3 + 1] = randomY;
		positionArray[i * 3 + 2] = Math.cos(angle) * radius + randomZ;
		// Color
		const innerColor = new THREE.Color(debugObj.innerColor);
		const outerColor = new THREE.Color(debugObj.outerColor);
		const mixColor = innerColor.lerp(outerColor, radius / debugObj.radius);
		colorArray[i * 3 + 0] = mixColor.r;
		colorArray[i * 3 + 1] = mixColor.g;
		colorArray[i * 3 + 2] = mixColor.b;
		// Scale
		scaleArray[i] = Math.random() * debugObj.scale;
	}
	geometry = new THREE.BufferGeometry();
	const positionAttribute = new THREE.BufferAttribute(positionArray, 3);
	const colorAttribute = new THREE.BufferAttribute(colorArray, 3);
	const scaleAttribute = new THREE.BufferAttribute(scaleArray, 3);
	geometry.setAttribute("position", positionAttribute);
	geometry.setAttribute("color", colorAttribute);
	geometry.setAttribute("aScale", scaleAttribute);

	// material = new THREE.PointsMaterial({
	// 	vertexColors: true,
	// 	size: debugObj.size,
	// 	sizeAttenuation: true,
	// 	depthWrite: true,
	// 	blending: THREE.AdditiveBlending,
	// });

	material = new THREE.RawShaderMaterial({
		vertexShader,
		fragmentShader,
		vertexColors: true,
		depthWrite: false,
		transparent: true,
		blending: THREE.AdditiveBlending,
		uniforms: {
			uTime: { value: 0.0 },
			uSize: { value: debugObj.size },
		},
	});
	points = new THREE.Points(geometry, material);
	scene.add(points);
};

generateGalaxy();

galaxy
	.add(debugObj, "count")
	.min(10000)
	.max(1000000)
	.step(100)
	.name("Count")
	.onChange(() => generateGalaxy());

galaxy
	.add(debugObj, "radius")
	.min(1)
	.max(10)
	.step(1)
	.name("Radius")
	.onChange(() => generateGalaxy());
galaxy
	.add(debugObj, "size")
	.min(0)
	.max(100)
	.step(0.1)
	.name("Size")
	.onChange(() => generateGalaxy());

galaxy
	.add(debugObj, "numOfBranches")
	.min(1)
	.max(6)
	.step(1)
	.name("numOfBranches")
	.onChange(() => generateGalaxy());

galaxy
	.add(debugObj, "randomness")
	.min(0)
	.max(1)
	.step(0.001)
	.name("randomness")
	.onChange(() => generateGalaxy());
galaxy
	.add(debugObj, "power")
	.min(1)
	.max(6)
	.step(1)
	.name("power")
	.onChange(() => generateGalaxy());
galaxy
	.addColor(debugObj, "innerColor")
	.name("innerColor")
	.onChange(() => generateGalaxy());
galaxy
	.addColor(debugObj, "outerColor")
	.name("outerColor")
	.onChange(() => generateGalaxy());

galaxy
	.add(debugObj, "scale")
	.min(1)
	.max(6)
	.step(0.1)
	.name("scale")
	.onChange(() => generateGalaxy());

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 5;
camera.position.y = 1;

scene.add(camera);

const renderer = new THREE.WebGLRenderer({
	canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

controls.update();
const timer = new Timer();

const tick = () => {
	renderer.render(scene, camera);
	controls.update();
	material.uniforms.uTime.value = timer.getElapsed();
	timer.update();
	window.requestAnimationFrame(tick);
};

tick();
