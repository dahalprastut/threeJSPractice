// import * as THREE from "three";
// import gsap from "gsap";

// const canvas = document.querySelector("canvas.webgl");
// // // we need 4 things to create something:
// // // 1. Scene
// // const scene = new THREE.Scene();

// // // 2. Object
// // const geometry = new THREE.BoxGeometry(1, 1, 1);
// // const material = new THREE.MeshBasicMaterial({
// // 	color: "red",
// // });
// // const mesh = new THREE.Mesh(geometry, material);
// // // mesh.position.z = -5;
// // mesh.position.x = 4;
// // mesh.position.y = 3;
// // // mesh.position.normalize();

// // // scale
// // mesh.scale.z = 2;
// // console.log(mesh.position.length()); // mesh distance from the center of the screen
// // // Rotation
// // mesh.rotation.reorder("YXZ");
// // mesh.rotation.x = 0.5;
// // mesh.rotation.y = 0.5;

// // scene.add(mesh);

// // // 3. Camera
// // const sizes = {
// // 	width: 800,
// // 	height: 600,
// // };
// // const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// // camera.position.z = 5;
// // // camera.position.x = 5;
// // // camera.position.y = 2;
// // scene.add(camera);
// // console.log(mesh.position.distanceTo(camera.position));
// // camera.lookAt(new THREE.Vector3(0, 0, 0));
// // // camera.lookAt(mesh.position);

// // const positionHelper = new THREE.AxesHelper(1);
// // scene.add(positionHelper);

// // // 4. Renderer
// // const renderer = new THREE.WebGLRenderer({
// // 	canvas: canvas,
// // });
// // renderer.setSize(sizes.width, sizes.height);
// // renderer.render(scene, camera);

// // Grouping

// const scene = new THREE.Scene();

// const group = new THREE.Group();
// scene.add(group);

// const cube1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: "red" }));
// cube1.position.x = -2;
// group.add(cube1);

// const cube2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: "blue" }));
// // cube2.position.x = 2;
// // cube2.position.y = 2;
// // cube2.rotation.reorder("YXZ");
// // cube2.rotation.x = 1;

// group.add(cube2);

// // group.position.y = 2;

// const sizes = {
// 	width: 800,
// 	height: 600,
// };
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// camera.position.z = 5;
// // camera.position.x = 2;
// // camera.position.y = 2;
// // camera.lookAt(new THREE.Vector3(0, 0, 0));
// // camera.lookAt(cube2.position);

// scene.add(camera);

// const renderer = new THREE.WebGLRenderer({
// 	canvas: canvas,
// });
// renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene, camera);

// // let time = Date.now();

// // const tick = () => {
// // 	console.log("tick");
// // 	const currentTime = Date.now();
// // 	const deltaTime = currentTime - time;
// // 	time = currentTime;
// // 	cube2.position.x += 0.001 * deltaTime;
// // 	renderer.render(scene, camera);
// // 	window.requestAnimationFrame(tick);
// // };

// const clock = new THREE.Clock();

// // camera.position.y = 4;
// // camera.lookAt(new THREE.Vector3(0, 2, 0));
// gsap.to(cube2.position, {
// 	duration: 2,
// 	delay: 1,
// 	x: 3,
// });
// gsap.to(cube2.position, {
// 	duration: 2,
// 	delay: 2,
// 	x: 0,
// });

// const tick = () => {
// 	// const elapsedTime = clock.getElapsedTime();
// 	// console.log("ela", elapsedTime);
// 	// cube2.position.y = Math.sin(elapsedTime);
// 	// cube2.position.x = Math.cos(elapsedTime);
// 	// camera.position.x = Math.cos(elapsedTime);
// 	renderer.render(scene, camera);
// 	window.requestAnimationFrame(tick);
// };

// tick();

// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// const canvas = document.querySelector("canvas.webgl");
// const width = window.innerWidth;
// const height = window.innerHeight;

// const cursor = {
// 	x: 0,
// 	y: 0,
// };

// const sizes = {
// 	width,
// 	height,
// };

// window.addEventListener("mousemove", (e) => {
// 	cursor.x = e.clientX / sizes.width - 0.5;
// 	cursor.y = -(e.clientY / sizes.height - 0.5);
// });

// window.addEventListener("resize", () => {
// 	sizes.width = window.innerWidth;
// 	sizes.height = window.innerHeight;
// 	camera.aspect = sizes.width / sizes.height;
// 	camera.updateProjectionMatrix();
// 	renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
// 	renderer.setSize(sizes.width, sizes.height);
// });

// window.addEventListener("dblclick", () => {
// 	console.log("do", document.fullscreenElement);
// 	if (!document.fullscreenElement) {
// 		canvas.requestFullscreen();
// 	} else {
// 		document.exitFullscreen();
// 	}
// });

// const scene = new THREE.Scene();

// const box1 = new THREE.Mesh(
// 	new THREE.BoxGeometry(3, 3, 3),
// 	new THREE.MeshBasicMaterial({
// 		color: "red",
// 	})
// );

// scene.add(box1);

// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);

// // orthographic camera
// // const aspectRatio = sizes.width / sizes.height;
// // const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100);
// // const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 100);

// camera.position.z = 5;

// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;
// controls.update();
// // camera.position.y = 1;
// // camera.lookAt(box1.position);
// console.log(camera.position.length());

// scene.add(camera);

// const axesHelper = new THREE.AxesHelper(3);
// scene.add(axesHelper);

// const renderer = new THREE.WebGLRenderer({
// 	canvas: canvas,
// });

// renderer.setSize(sizes.width, sizes.height);
// renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
// renderer.render(scene, camera);

// const clock = new THREE.Clock();
// const tick = () => {
// 	const elapsedTime = clock.getElapsedTime();
// 	controls.update();
// 	// box1.rotation.y = elapsedTime;

// 	// camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
// 	// camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
// 	// camera.position.y = cursor.y * Math.PI * 2;
// 	// console.log("m", Math.sin(elapsedTime));
// 	// box1.position.x = Math.cos(elapsedTime) * 10;
// 	// box1.position.y = Math.sin(elapsedTime) * 10;
// 	// camera.position.x = box1.position.x;
// 	// camera.position.y += 0.01 * Math.PI;
// 	// camera.position.z = Math.cos(elapsedTime);
// 	// console.log("camera", camera.position.length());
// 	// camera.position.x = Math.sin(elapsedTime) * 4;
// 	// camera.position.z = Math.cos(elapsedTime) * 4;
// 	// camera.position.y = 5;
// 	// camera.lookAt(box1.position);
// 	// console.log(camera.position.distanceTo(box1.position));
// 	renderer.render(scene, camera);
// 	window.requestAnimationFrame(tick);
// };

// tick();

// Again

// import * as THREE from "three";
// import GUI from "lil-gui";
// import gsap from "gsap";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// const gui = new GUI({ width: 300, title: "First GUI", closeFolders: true });
// const cubeTweaks = gui.addFolder("Cube");

// const canvas = document.querySelector("canvas.webgl");

// const sizes = {
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// };

// const cursor = {
// 	x: 0,
// 	y: 0,
// };
// const debugObject = {};
// debugObject.color = "#f00000";
// // 1. Resize
// // 2. Fullwidth

// window.addEventListener("resize", () => {
// 	sizes.width = window.innerWidth;
// 	sizes.height = window.innerHeight;

// 	camera.aspect = sizes.width / sizes.height;
// 	camera.updateProjectionMatrix();
// 	renderer.setSize(sizes.width, sizes.height);
// 	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// 	renderer.render(scene, camera);
// });

// window.addEventListener("dblclick", () => {
// 	if (!document.fullscreenElement) {
// 		canvas.requestFullscreen();
// 	} else {
// 		document.exitFullscreen();
// 	}
// });

// window.addEventListener("mousemove", (e) => {
// 	cursor.x = e.clientX / sizes.width - 0.5;
// 	cursor.y = -(e.clientY / sizes.height - 0.5);
// });

// const scene = new THREE.Scene();

// const positionArray = new Float32Array(3 * 3);
// positionArray[0] = 0;
// positionArray[1] = 0;
// positionArray[2] = 0;
// positionArray[3] = 0;
// positionArray[4] = 1;
// positionArray[5] = 0;
// positionArray[6] = 1;
// positionArray[7] = 0;
// positionArray[8] = 0;
// positionArray[9] = 1;
// positionArray[10] = 0;
// positionArray[11] = 0;
// positionArray[12] = 1;
// positionArray[13] = 1;
// positionArray[14] = 0;
// positionArray[15] = 0;
// positionArray[16] = 1;
// positionArray[17] = 0;

// const postitionAttribute = new THREE.BufferAttribute(positionArray, 3);

// const geometry = new THREE.BufferGeometry();

// geometry.setAttribute("position", postitionAttribute);
// const geometry = new THREE.BoxGeometry(1, 1, 1);

// const count = 2000;

// const positionArray = new Float32Array(count * 3 * 3);
// for (let i = 0; i < count * 3 * 3; i++) {
// 	positionArray[i] = (Math.random() - 0.5) * 4;
// }

// const positionAttribute = new THREE.BufferAttribute(positionArray, 3);
// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute("position", positionAttribute);

// const material = new THREE.MeshBasicMaterial({
// 	color: "red",
// 	wireframe: true,
// });
// const box1 = new THREE.Mesh(geometry, material);

// const box1 = new THREE.Mesh(
// 	new THREE.BoxGeometry(1, 1, 1, 3, 3, 3),
// 	new THREE.MeshBasicMaterial({ color: "red", wireframe: true })
// );

// debugObject.subdivision = 1;
// const geometry = new THREE.BoxGeometry(
// 	1,
// 	1,
// 	1,
// 	debugObject.subdivision,
// 	debugObject.subdivision,
// 	debugObject.subdivision
// );

// const material = new THREE.MeshBasicMaterial({
// 	color: debugObject.color,
// 	wireframe: true,
// });

// cubeTweaks.addColor(debugObject, "color").onChange((val) => {
// 	// console.log("asd", val);
// 	material.color.set(debugObject.color);
// });

// const box1 = new THREE.Mesh(geometry, material);
// cubeTweaks.add(box1.position, "y").min(0).max(2).step(0.1).name("Elevation");
// cubeTweaks.add(box1, "visible");
// debugObject.spin = () => {
// 	gsap.to(box1.rotation, { y: box1.rotation.y + Math.PI * 2, duration: 4 });
// };
// console.log("mat", box1);

// cubeTweaks.add(debugObject, "spin").name("spin y direction");
// cubeTweaks
// 	.add(debugObject, "subdivision")
// 	.onFinishChange(() => {
// 		box1.geometry.dispose();
// 		box1.geometry = new THREE.BoxGeometry(
// 			1,
// 			1,
// 			1,
// 			debugObject.subdivision,
// 			debugObject.subdivision,
// 			debugObject.subdivision
// 		);
// 	})
// 	.min(1)
// 	.max(3)
// 	.step(1);

// scene.add(box1);

// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
// camera.position.z = 5;
// scene.add(camera);
// const axesHelper = new THREE.AxesHelper(1);
// // scene.add(axesHelper);

// const renderer = new THREE.WebGLRenderer({
// 	canvas: canvas,
// });
// renderer.setSize(sizes.width, sizes.height);

// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// renderer.render(scene, camera);

// const clock = new THREE.Clock();

// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;
// controls.update();

// const tick = () => {
// 	// const elapsedTime = clock.getElapsedTime();
// 	// camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
// 	// camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
// 	// camera.position.y = cursor.y * 5;
// 	// camera.position.x = Math.cos(elapsedTime) * 2;
// 	// camera.position.z = Math.sin(elapsedTime) * 2;
// 	// camera.position.y = 5;
// 	// camera.lookAt(box1.position);
// 	controls.enableDamping = true;
// 	controls.update();
// 	renderer.render(scene, camera);
// 	// console.log("el", elapsedTime);
// 	window.requestAnimationFrame(tick);
// };

// tick();

//// **********AGAIN****

// import * as THREE from "three";
// import GUI from "lil-gui";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import gsap from "gsap";

// const gui = new GUI();

// const boxFolder = gui.addFolder("Box");

// const canvas = document.querySelector("canvas.webgl");
// const sizes = {
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// };
// const debugObj = {};
// debugObj.spin = () => {
// 	gsap.to(box1.rotation, { y: box1.rotation.y + Math.PI * 2 });
// };
// debugObj.color = "#f00000";
// debugObj.segments = 1;

// const cursor = {
// 	x: 0,
// 	y: 0,
// };
// window.addEventListener("mousemove", (e) => {
// 	cursor.x = e.clientX / sizes.width - 0.5;
// 	cursor.y = e.clientY / sizes.height - 0.5;
// });
// window.addEventListener("resize", () => {
// 	sizes.width = window.innerWidth;
// 	sizes.height = window.innerHeight;
// 	camera.aspect = sizes.width / sizes.height;
// 	camera.updateProjectionMatrix();
// 	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// 	renderer.setSize(sizes.width, sizes.height);
// 	renderer.render(scene, camera);
// });

// window.addEventListener("dblclick", () => {
// 	if (!document.fullscreenElement) {
// 		canvas.requestFullscreen();
// 	} else {
// 		document.exitFullscreen();
// 	}
// });

// // Add scene
// const scene = new THREE.Scene();

// // add mesh
// const geometry = new THREE.BoxGeometry(1, 1, 1, debugObj.segments, debugObj.segments, debugObj.segments);
// const textureLoader = new THREE.TextureLoader();
// const texture = textureLoader.load("static/textures/checkerboard-8x8.png");
// texture.repeat.x = 2;
// texture.repeat.y = 3;
// texture.wrapS = THREE.RepeatWrapping;
// texture.wrapT = THREE.RepeatWrapping;
// texture.offset.x = 0.4;
// texture.offset.y = 0.4;
// texture.rotation = Math.PI * 0.2;
// texture.center.x = 0.5;
// texture.center.y = 0.5;
// texture.colorSpace = THREE.SRGBColorSpace;
// texture.magFilter = THREE.NearestFilter;

// const material = new THREE.MeshBasicMaterial({ map: texture });
// const box1 = new THREE.Mesh(geometry, material);
// scene.add(box1);
// boxFolder.add(box1.position, "y").min(0).max(1).step(0.1);
// boxFolder.addColor(debugObj, "color").onChange((value) => {
// 	material.color.set(value);
// });
// boxFolder.add(debugObj, "spin");
// boxFolder.add(material, "wireframe");
// boxFolder
// 	.add(debugObj, "segments")
// 	.min(1)
// 	.max(3)
// 	.step(1)
// 	.onFinishChange(() => {
// 		box1.geometry.dispose();
// 		box1.geometry = new THREE.BoxGeometry(1, 1, 1, debugObj.segments, debugObj.segments, debugObj.segments);
// 	});

// // add camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
// camera.position.z = 5;
// scene.add(camera);

// // add renderer
// const renderer = new THREE.WebGLRenderer({
// 	canvas: canvas,
// });
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene, camera);

// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;
// controls.update();

// const tick = () => {
// 	// camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2;
// 	// camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2;
// 	// camera.position.y = cursor.y * 3;
// 	controls.enableDamping = true;
// 	controls.update();
// 	camera.lookAt(box1.position);
// 	renderer.render(scene, camera);
// 	window.requestAnimationFrame(tick);
// };

// tick();

// Eighth lesson

// Create scene

// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import GUI from "lil-gui";

// const gui = new GUI();

// const box = gui.addFolder("box");

// const canvas = document.querySelector("canvas.webgl");

// const sizes = {
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// };

// const guiObj = {
// 	color: "#f42f2f",
// 	segments: 1,
// };

// window.addEventListener("dblclick", () => {
// 	if (!document.fullscreenElement) {
// 		canvas.requestFullscreen();
// 	} else {
// 		document.exitFullscreen();
// 	}
// });

// window.addEventListener("resize", () => {
// 	sizes.width = window.innerWidth;
// 	sizes.height = window.innerHeight;
// 	camera.aspect = sizes.width / sizes.height;
// 	camera.updateProjectionMatrix();
// 	renderer.setSize(sizes.width, sizes.height);
// 	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// 	renderer.render(scene, camera);
// });

// // scene
// const scene = new THREE.Scene();

// // geometry
// const geometry = new THREE.BoxGeometry(1, 1, 1, guiObj.segments, guiObj.segments, guiObj.segments);

// // mesh
// // textures

// const loadingManager = new THREE.LoadingManager();
// const textureLoader = new THREE.TextureLoader(loadingManager);
// const texture = textureLoader.load("./static/textures/checkerboard-8x8.png");
// // const texture = textureLoader.load("./static/textures/door/normal.jpg");
// texture.colorSpace = THREE.SRGBColorSpace;
// texture.magFilter = THREE.NearestFilter;
// // texture.repeat.x = 2;
// // texture.repeat.y = 2;
// // texture.wrapS = THREE.RepeatWrapping;
// // texture.wrapT = THREE.RepeatWrapping;

// const material = new THREE.MeshBasicMaterial({
// 	color: guiObj.color,
// 	wireframe: false,
// 	map: texture,
// });

// const mesh = new THREE.Mesh(geometry, material);
// box.add(mesh.position, "y", 0, 1, 0.1);
// box.addColor(guiObj, "color").onChange(() => material.color.set(guiObj.color));
// box.add(material, "wireframe");
// box.add(guiObj, "segments")
// 	.min(1)
// 	.max(3)
// 	.step(1)
// 	.onFinishChange(() => {
// 		mesh.geometry.dispose();
// 		mesh.geometry = new THREE.BoxGeometry(1, 1, 1, guiObj.segments, guiObj.segments, guiObj.segments);
// 	});
// // mesh.position.y = 0.0;
// scene.add(mesh);

// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100);
// scene.add(camera);
// camera.position.z = 5;

// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;
// controls.update();

// const renderer = new THREE.WebGLRenderer({
// 	canvas,
// });

// renderer.setSize(sizes.width, sizes.height);

// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// renderer.render(scene, camera);

// function tick() {
// 	window.requestAnimationFrame(tick);
// 	controls.enableDamping = true;
// 	controls.update();
// 	renderer.render(scene, camera);
// }

// tick();

// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
// import GUI from "lil-gui";

// const gui = new GUI();

// const sizes = {
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// };

// const canvas = document.querySelector("canvas.webgl");

// const scene = new THREE.Scene();

// const textureLoader = new THREE.TextureLoader();
// const doorColorTexture = textureLoader.load("/static/textures/door/color.jpg");
// const doorAlphaTexture = textureLoader.load("/static/textures/door/alpha.jpg");
// const doorAmbientOcclusionTexture = textureLoader.load("/static/textures/door/ambientOcclusion.jpg");
// const doorHeightTexture = textureLoader.load("/static/textures/door/height.jpg");
// const doorMetalnessTexture = textureLoader.load("/static/textures/door/metalness.jpg");
// const doorNormalTexture = textureLoader.load("/static/textures/door/normal.jpg");
// const doorRoughnessTexture = textureLoader.load("/static/textures/door/roughness.jpg");
// const matcapTexture = textureLoader.load("/static/textures/matcaps/3.png");
// const gradientTexture = textureLoader.load("/static/textures/gradients/5.jpg");
// doorColorTexture.colorSpace = THREE.SRGBColorSpace;
// doorAlphaTexture.colorSpace = THREE.SRGBColorSpace;
// doorAmbientOcclusionTexture.colorSpace = THREE.SRGBColorSpace;
// doorHeightTexture.colorSpace = THREE.SRGBColorSpace;
// doorMetalnessTexture.colorSpace = THREE.SRGBColorSpace;
// doorNormalTexture.colorSpace = THREE.SRGBColorSpace;
// doorRoughnessTexture.colorSpace = THREE.SRGBColorSpace;
// matcapTexture.colorSpace = THREE.SRGBColorSpace;
// gradientTexture.colorSpace = THREE.SRGBColorSpace;

// // const material = new THREE.MeshBasicMaterial({
// // 	wireframe: false,
// // 	map: gradientTexture,
// // 	side: THREE.DoubleSide,
// // });
// // const material = new THREE.MeshNormalMaterial({
// // 	side: THREE.DoubleSide,
// // 	flatShading: true,
// // });

// // const material = new THREE.MeshMatcapMaterial();
// // material.side = THREE.DoubleSide;
// // material.matcap = matcapTexture;

// // const material = new THREE.MeshLambertMaterial({
// // 	// map: doorColorTexture,
// // 	side: THREE.DoubleSide,
// // });

// // gradientTexture.minFilter = THREE.NearestFilter;
// // gradientTexture.magFilter = THREE.NearestFilter;
// // gradientTexture.generateMipmaps = false;
// // const material = new THREE.MeshToonMaterial({
// // 	side: THREE.DoubleSide,
// // 	gradientMap: gradientTexture,
// // });

// // const material = new THREE.MeshStandardMaterial({
// // 	side: THREE.DoubleSide,
// // 	// wireframe: true,
// // });

// // material.roughness = 1;
// // material.metalness = 1;

// // material.map = doorColorTexture;
// // material.aoMap = doorAmbientOcclusionTexture;
// // material.aoMapIntensity = 1;
// // material.displacementMap = doorHeightTexture;
// // material.displacementScale = 0.1;
// // material.metalnessMap = doorMetalnessTexture;
// // material.roughnessMap = doorRoughnessTexture;
// // material.normalMap = doorNormalTexture;
// // material.alphaMap = doorAlphaTexture;
// // material.transparent = true;

// const material = new THREE.MeshLambertMaterial({
// 	side: THREE.DoubleSide,
// 	// wireframe: true,
// });
// // material.map = doorColorTexture;

// // material.roughness = 0;
// // material.metalness = 0;

// // material.map = doorColorTexture;
// // material.aoMap = doorAmbientOcclusionTexture;
// // material.aoMapIntensity = 1;
// // material.displacementMap = doorHeightTexture;
// // material.displacementScale = 0.1;
// // material.metalnessMap = doorMetalnessTexture;
// // material.roughnessMap = doorRoughnessTexture;
// // material.normalMap = doorNormalTexture;
// // material.alphaMap = doorAlphaTexture;
// // material.transparent = true;

// // material.transmission = 1;
// // material.ior = 1.6;
// // material.thickness = 0.5;

// // gui.add(material, "transmission").min(0).max(10).step(0.1);
// // gui.add(material, "ior").min(0).max(2.33).step(0.1);
// // gui.add(material, "thickness").min(0).max(10).step(0.1);

// // gui.add(material, "metalness").min(0).max(1).step(0.1);
// // gui.add(material, "roughness").min(0).max(1).step(0.1);

// const ambientLight = new THREE.AmbientLight("#fff", 1);
// scene.add(ambientLight);

// const pointLight = new THREE.PointLight("#fff", 40);
// pointLight.position.x = 2;
// pointLight.position.y = 3;
// pointLight.position.z = 4;

// // gui.add(pointLight.position, "x").min(-10).max(10).step(1);
// // gui.add(pointLight.position, "y").min(-10).max(10).step(1);
// // gui.add(pointLight.position, "z").min(-10).max(10).step(1);

// // material.shininess = 100;
// // material.specular = new THREE.Color("blue");

// scene.add(pointLight);

// const torus = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.2, 16, 32), material);
// const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 64, 128), material);
// const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1, 100, 100), material);

// sphere.position.x = -1.5;
// torus.position.x = 1.5;

// scene.add(torus, sphere, plane);

// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100);
// camera.position.z = 5;

// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;
// controls.update();
// scene.add(camera);

// const renderer = new THREE.WebGLRenderer({
// 	canvas,
// });

// const rgbeLoader = new RGBELoader();
// rgbeLoader.load("./static/textures/environmentMap/cobblestone_street_night_4k.hdr", (environmentMap) => {
// 	environmentMap.mapping = THREE.EquirectangularReflectionMapping;
// 	scene.background = environmentMap;
// 	scene.environment = environmentMap;
// });

// renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene, camera);

// const clock = new THREE.Clock();

// const tick = () => {
// 	const elapsedTime = clock.getElapsedTime();
// 	sphere.rotation.y = 0.1 * elapsedTime;
// 	plane.rotation.y = 0.1 * elapsedTime;
// 	torus.rotation.y = 0.1 * elapsedTime;

// 	sphere.rotation.x = -0.15 * elapsedTime;
// 	plane.rotation.x = -0.15 * elapsedTime;
// 	torus.rotation.x = -0.15 * elapsedTime;

// 	controls.update();
// 	renderer.render(scene, camera);

// 	requestAnimationFrame(tick);
// };

// tick();

// ====================================
// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
// import GUI from "lil-gui";
// import { FontLoader } from "three/examples/jsm/Addons.js";
// import { TextGeometry } from "three/addons/geometries/TextGeometry.js";

// /*

// 	DOM ELEMENT

// */

// const canvas = document.querySelector("canvas.webgl");

// /*

// 	SIZE OBJECT

// */

// const sizes = {
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// };

// /*

// 	SCENE & GUI INSTANCE

// */

// const gui = new GUI();
// const scene = new THREE.Scene();

// /*

// 	TEXTURES

// */

// const textureLoader = new THREE.TextureLoader();
// const coffeeColorTexture = textureLoader.load("./static/textures/coffee/Coffee_Grains_001_BaseColor.jpg");
// const coffeeAmbientTexture = textureLoader.load("./static/textures/coffee/Coffee_Grains_001_AmbientOcclusion.jpg");
// const coffeeNormalTexture = textureLoader.load("./static/textures/coffee/Coffee_Grains_001_Normal.jpg");
// const coffeeDisplacementTexture = textureLoader.load("./static/textures/coffee/Coffee_Grains_001_Height.png");
// const coffeeRoughnessTexture = textureLoader.load("./static/textures/coffee/Coffee_Grains_001_Roughness.jpg");
// const matcapTexture = textureLoader.load("./static/textures/matcaps/1.png");
// matcapTexture.colorSpace = THREE.SRGBColorSpace;
// coffeeColorTexture.colorSpace = THREE.SRGBColorSpace;

// /*

// 	MESH

// */

// const materialSphere = new THREE.MeshStandardMaterial({
// 	map: coffeeColorTexture,
// });

// materialSphere.aoMap = coffeeAmbientTexture;
// materialSphere.aoMapIntensity = 2.4;

// materialSphere.normalMap = coffeeNormalTexture;
// materialSphere.displacementMap = coffeeDisplacementTexture;
// materialSphere.displacementScale = 0.1;

// materialSphere.roughnessMap = coffeeRoughnessTexture;

// // materialSphere.metalness = 0.75;
// // materialSphere.roughness = 0.65;

// gui.add(materialSphere, "aoMapIntensity").min(0).max(10).step(0.1);
// // gui.add(materialSphere, "metalness").min(0).max(10).step(0.1);
// // gui.add(materialSphere, "roughness").min(0).max(10).step(0.1);

// const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), materialSphere);
// scene.add(sphere);

// /*

// 	3D TEXTS

// */
// const loader = new FontLoader();
// loader.load("./static/fonts/helvetiker_regular.typeface.json", (font) => {
// 	const textGeometry = new TextGeometry("Prastut Dahal", {
// 		font,
// 		size: 0.5,
// 		depth: 0.2,
// 		curveSegments: 5,
// 		bevelEnabled: true,
// 		bevelThickness: 0.03,
// 		bevelSize: 0.02,
// 		bevelOffset: 0,
// 		bevelSegments: 1,
// 	});
// 	const torusGeometry = new THREE.TorusGeometry(0.6, 0.3, 18, 30);
// 	const material = new THREE.MeshMatcapMaterial();
// 	material.matcap = matcapTexture;
// 	const textMesh = new THREE.Mesh(textGeometry, material);
// 	for (let i = 0; i < 30; i++) {
// 		const torusMesh = new THREE.Mesh(torusGeometry, material);
// 		const number = Math.random() - 0.5;
// 		torusMesh.position.x = (Math.random() - 0.5) * 10;
// 		torusMesh.position.y = (Math.random() - 0.5) * 10;
// 		torusMesh.position.z = (Math.random() - 0.5) * 10;
// 		torusMesh.rotation.x = Math.PI * (Math.random() - 0.5) * 10;
// 		torusMesh.rotation.y = Math.PI * (Math.random() - 0.5) * 10;
// 		torusMesh.rotation.z = Math.PI * (Math.random() - 0.5) * 10;
// 		torusMesh.scale.set(number, number, number);
// 		scene.add(torusMesh);
// 	}
// 	textGeometry.computeBoundingBox();
// 	console.log("tesx", textGeometry.boundingBox);
// 	textGeometry.center();
// 	textGeometry.translate(0, textGeometry.boundingBox.max.y + 1, 0);
// 	scene.add(textMesh);
// });

// /*

// 	CAMERA

// */

// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100);
// camera.position.z = 5;
// scene.add(camera);

// /*

// 	ORBIT CONTROL

// */

// const controls = new OrbitControls(camera, canvas);
// controls.update();

// /*

// 	LIGHTS

// */

// // const ambientLight = new THREE.AmbientLight("#fff");
// // const pointLight = new THREE.PointLight("#fff", 30);
// // pointLight.position.x = 2;
// // pointLight.position.y = 3;
// // pointLight.position.z = 4;
// // scene.add(ambientLight);
// // scene.add(pointLight);

// /*

// 	ENVIRONMENT LOADER

// */

// const rgbeLoader = new RGBELoader();
// rgbeLoader.load("/static/textures/environmentMap/satara_night_4k.hdr", (envMap) => {
// 	envMap.mapping = THREE.EquirectangularReflectionMapping;
// 	scene.background = envMap;
// 	scene.environment = envMap;
// });

// /*

// 	RENDERER

// */

// const renderer = new THREE.WebGLRenderer({ canvas });
// renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene, camera);
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// const tick = () => {
// 	renderer.render(scene, camera);
// 	controls.enableDamping = true;
// 	controls.update();
// 	window.requestAnimationFrame(tick);
// };

// tick();

// =================================

// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
// import { FontLoader } from "three/addons/loaders/FontLoader.js";
// import { TextGeometry } from "three/addons/geometries/TextGeometry.js";

// const canvas = document.querySelector("canvas.webgl");

// const scene = new THREE.Scene();

// const sizes = {
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// };

// window.addEventListener("dblclick", () => {
// 	if (!document.fullscreenElement) {
// 		canvas.requestFullscreen();
// 	} else {
// 		document.exitFullscreen();
// 	}
// });

// const textureLoader = new THREE.TextureLoader();
// const textureColor = textureLoader.load("./static/textures/door/color.jpg");
// const textureAlpha = textureLoader.load("./static/textures/door/alpha.jpg");
// const textureAmbient = textureLoader.load("./static/textures/door/ambientOcclusion.jpg");
// const textureHeight = textureLoader.load("./static/textures/door/height.jpg");
// const textureMetalness = textureLoader.load("./static/textures/door/metalness.jpg");
// const textureNormal = textureLoader.load("./static/textures/door/normal.jpg");
// const textureRoughness = textureLoader.load("./static/textures/door/roughness.jpg");
// const matcapTexture = textureLoader.load("./static/textures/matcaps/2.png");
// const coffeeTexture = textureLoader.load("./static/textures/gradients/3.jpg");
// textureColor.colorSpace = THREE.SRGBColorSpace;
// // texture.minFilter = THREE.NearestFilter;
// // texture.magFilter = THREE.NearestFilter;

// const boxMaterial = new THREE.MeshPhysicalMaterial();
// // boxMaterial.color = "red";
// // boxMaterial.map = textureColor;
// boxMaterial.side = THREE.DoubleSide;
// // boxMaterial.aoMap = textureAmbient;
// // boxMaterial.aoMapIntensity = 1.5;
// // boxMaterial.displacementMap = textureHeight;
// // boxMaterial.displacementScale = 0.1;
// // boxMaterial.metalnessMap = textureMetalness;
// // boxMaterial.normalMap = textureNormal;
// // boxMaterial.alphaMap = textureAlpha;
// // boxMaterial.roughnessMap = textureRoughness;
// boxMaterial.metalness = 0;
// boxMaterial.roughness = 0;

// boxMaterial.transmission = 1;
// boxMaterial.ior = 2;
// boxMaterial.thickness = 0.6;
// const box = new THREE.Mesh(new THREE.SphereGeometry(0.5, 100, 100), boxMaterial);

// scene.add(box);

// // const ambientLight = new THREE.AmbientLight("#fff", 2);
// // const pointLight = new THREE.PointLight("#fff", 30);
// // pointLight.position.z = 4;
// // pointLight.position.y = 4;
// // pointLight.position.x = -1;
// // scene.add(ambientLight);
// // scene.add(pointLight);

// const rgbeLoader = new RGBELoader();
// rgbeLoader.load("./static/textures/environmentMap/2k.hdr", (environmentMap) => {
// 	environmentMap.mapping = THREE.EquirectangularReflectionMapping;
// 	scene.background = environmentMap;
// 	scene.environment = environmentMap;
// });

// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100);
// camera.position.z = 5;
// scene.add(camera);

// const loader = new FontLoader();
// loader.load("./static/fonts/helvetiker_regular.typeface.json", (font) => {
// 	const textGeometry = new TextGeometry("Prastut!", {
// 		font: font,
// 		size: 1,
// 		depth: 0.2,
// 		curveSegments: 12,
// 		bevelEnabled: true,
// 		bevelThickness: 0.001,
// 		bevelSize: 0.02,
// 		bevelOffset: 0,
// 		bevelSegments: 5,
// 	});
// 	textGeometry.center();
// 	const textMaterial = new THREE.MeshPhysicalMaterial({
// 		// wireframe: true,
// 	});
// 	textMaterial.metalness = 1;
// 	textMaterial.roughness = 0;
// 	textMaterial.transmission = 1;
// 	// textMaterial.ior = 2.2;
// 	// textMaterial.thickness = 5;
// 	textMaterial.clearcoat = 0.8;
// 	textMaterial.iridescence = 0.8;
// 	textMaterial.iridescenceIOR = 2;

// 	const text = new THREE.Mesh(textGeometry, textMaterial);
// 	text.position.y = 1;
// 	scene.add(text);
// });

// const renderer = new THREE.WebGLRenderer({
// 	canvas,
// });
// renderer.setSize(sizes.width, sizes.height);
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// renderer.render(scene, camera);

// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;
// controls.update();

// const tick = () => {
// 	renderer.render(scene, camera);
// 	controls.update();
// 	window.requestAnimationFrame(tick);
// };

// tick();

// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// const canvas = document.querySelector("canvas.webgl");
// const sizes = {
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// };

// const scene = new THREE.Scene();

// const axesHelper = new THREE.AxesHelper(1);
// scene.add(axesHelper);

// const material = new THREE.MeshStandardMaterial();
// material.side = THREE.DoubleSide;

// const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
// box.castShadow = true;
// const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 16), material);
// // sphere.receiveShadow = true;
// sphere.castShadow = true;
// sphere.position.x = 2;
// const torus = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.2, 54, 80), material);
// torus.position.x = -2;
// torus.castShadow = true;
// const plane = new THREE.Mesh(new THREE.PlaneGeometry(8, 4), material);
// plane.receiveShadow = true;
// plane.position.y = -1;
// plane.rotation.x = -Math.PI * 0.5;

// scene.add(box, sphere, torus, plane);

// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100);
// camera.position.z = 5;
// scene.add(camera);

// const ambientLight = new THREE.AmbientLight(0xffffff, 1);
// const pointLight = new THREE.PointLight("#fff", 2);

// pointLight.position.x = -0.8;
// pointLight.position.y = 0.8;
// // scene.add(pointLight);
// scene.add(ambientLight, pointLight);
// const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.5);
// scene.add(pointLightHelper);
// const directionalLight = new THREE.DirectionalLight("#F3BD20", 1.2);

// directionalLight.position.y = 5;
// directionalLight.position.x = -5;

// directionalLight.castShadow = true;
// directionalLight.shadow.mapSize.width = 1024;
// directionalLight.shadow.mapSize.height = 1024;
// directionalLight.shadow.camera.near = 3;
// directionalLight.shadow.camera.far = 15;
// directionalLight.shadow.camera.top = 3;
// directionalLight.shadow.camera.bottom = -2;
// directionalLight.shadow.camera.left = -2;
// directionalLight.shadow.camera.right = 2;
// directionalLight.shadow.radius = 10;

// const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 0.5);
// scene.add(directionalLight, directionalLightHelper);

// const directionalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
// scene.add(directionalLightCameraHelper);

// console.log(directionalLight);

// // const hemisphereLight = new THREE.HemisphereLight("blue", "green", 2);
// // hemisphereLight.position.x = 3;
// // const HemisphereLightHelper = new THREE.HemisphereLightHelper(hemisphereLight, 0.5);
// // scene.add(hemisphereLight, HemisphereLightHelper);

// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;
// controls.update();

// const renderer = new THREE.WebGLRenderer({
// 	canvas,
// });
// renderer.shadowMap.enabled = true;
// // renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene, camera);

// const tick = () => {
// 	renderer.render(scene, camera);
// 	controls.enableDamping = true;

// 	controls.update();
// 	window.requestAnimationFrame(tick);
// };

// tick();

// ======================================

// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import GUI from "lil-gui";

// const canvas = document.querySelector("canvas.webgl");
// const gui = new GUI();

// const sphereGUI = gui.addFolder("Sphere");
// const lightHelperGUI = gui.addFolder("Light Helper");
// const pointLightHelperGUI = lightHelperGUI.addFolder("Point Light");
// const directionalLightHelperGUI = lightHelperGUI.addFolder("Directional Light");

// const sizes = {
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// };

// window.addEventListener("resize", () => {
// 	sizes.width = window.innerWidth;
// 	sizes.height = window.innerHeight;
// 	camera.aspect = sizes.width / sizes.height;
// 	camera.updateProjectionMatrix();
// 	renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
// 	renderer.setSize(sizes.width, sizes.height);
// });

// window.addEventListener("dblclick", () => {
// 	console.log("doc", document);
// 	if (!document.fullscreenElement) {
// 		canvas.requestFullscreen();
// 	} else {
// 		document.exitFullscreen();
// 	}
// });

// const scene = new THREE.Scene();

// const material = new THREE.MeshStandardMaterial();
// material.side = THREE.DoubleSide;

// const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.7, 64, 64), material);
// sphere.castShadow = true;
// sphereGUI.add(sphere.position, "x").min(-2).max(2).step(0.2);
// sphereGUI.add(sphere.position, "y").min(-2).max(2).step(0.2);
// sphereGUI.add(sphere.position, "z").min(-2).max(2).step(0.2);

// const plane = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), material);
// plane.receiveShadow = true;
// plane.rotation.x = -Math.PI * 0.5;
// plane.position.y = -1;
// scene.add(sphere, plane);

// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100);
// camera.position.z = 5;
// scene.add(camera);

// const ambientLight = new THREE.AmbientLight("#fff", 1);
// const pointLight = new THREE.PointLight("#fff", 2);
// pointLight.position.y = 1.4;
// const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.5);
// pointLightHelperGUI.add(pointLightHelper, "visible");
// pointLightHelperGUI.add(pointLight.position, "x").min(-2).max(2).step(0.2);
// pointLightHelperGUI.add(pointLight.position, "y").min(-2).max(2).step(0.2);
// pointLightHelperGUI.add(pointLight.position, "z").min(-2).max(2).step(0.2);
// // console.log("dire", directionalLight);

// const directionalLight = new THREE.DirectionalLight("#f7f6d5", 1);
// directionalLight.position.y = 3;
// directionalLight.castShadow = true;
// directionalLight.shadow.mapSize.width = 1024;
// directionalLight.shadow.mapSize.height = 1024;
// directionalLight.shadow.camera.far = 5;
// directionalLight.shadow.radius = 10;

// const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 0.5);
// directionalLightHelperGUI.add(directionalLightHelper, "visible");
// directionalLightHelperGUI.add(directionalLight.position, "x").min(-8).max(8).step(0.2);
// directionalLightHelperGUI.add(directionalLight.position, "y").min(-8).max(8).step(0.2);
// directionalLightHelperGUI.add(directionalLight.position, "z").min(-8).max(8).step(0.2);
// scene.add(ambientLight, pointLight, directionalLight);
// scene.add(pointLightHelper, directionalLightHelper);

// // const directinalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
// // const pointLightCameraHelper = new THREE.CameraHelper(pointLight.shadow.camera);
// // scene.add(directinalLightCameraHelper);
// // scene.add(pointLightCameraHelper);

// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;
// controls.update();

// const renderer = new THREE.WebGLRenderer({
// 	canvas,
// });
// renderer.setSize(sizes.width, sizes.height);
// renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
// renderer.shadowMap.enabled = true;
// renderer.render(scene, camera);

// const tick = () => {
// 	renderer.render(scene, camera);
// 	controls.enableDamping = true;
// 	controls.update();
// 	window.requestAnimationFrame(tick);
// };

// tick();

// =====================================

// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import { Timer } from "three/addons/misc/Timer.js";
// import { Sky } from "three/addons/objects/Sky.js";
// import GUI from "lil-gui";

// const gui = new GUI();

// const canvas = document.querySelector("canvas.webgl");

// const sizes = {
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// };

// window.addEventListener("dblclick", () => {
// 	if (!document.fullscreenElement) {
// 		canvas.requestFullscreen();
// 	} else {
// 		document.exitFullscreen();
// 	}
// });

// window.addEventListener("resize", () => {
// 	sizes.width = window.innerWidth;
// 	sizes.height = window.innerHeight;
// 	camera.aspect = sizes.width / sizes.height;
// 	camera.updateProjectionMatrix();
// 	renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
// 	renderer.setSize(sizes.width, sizes.height);
// });

// const scene = new THREE.Scene();

// // ********** Textures **********
// // floor
// const textureLoader = new THREE.TextureLoader();
// const floorAlphaTexture = textureLoader.load("./static/textures/house/floor/alpha.jpg");
// const floorColorTexture = textureLoader.load(
// 	"./static/textures/house/floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_diff_1k.jpg"
// );
// const floorNormalTexture = textureLoader.load(
// 	"./static/textures/house/floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_nor_gl_1k.jpg"
// );
// const floorDisplacementTexture = textureLoader.load(
// 	"./static/textures/house/floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_disp_1k.jpg"
// );
// const floorARMTexture = textureLoader.load(
// 	"./static/textures/house/floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_arm_1k.jpg"
// );

// floorColorTexture.colorSpace = THREE.SRGBColorSpace;

// floorColorTexture.repeat.set(8, 8);
// floorNormalTexture.repeat.set(8, 8);
// floorDisplacementTexture.repeat.set(8, 8);
// floorARMTexture.repeat.set(8, 8);

// floorColorTexture.wrapS = THREE.RepeatWrapping;
// floorColorTexture.wrapT = THREE.RepeatWrapping;
// floorNormalTexture.wrapS = THREE.RepeatWrapping;
// floorNormalTexture.wrapT = THREE.RepeatWrapping;
// floorDisplacementTexture.wrapS = THREE.RepeatWrapping;
// floorDisplacementTexture.wrapT = THREE.RepeatWrapping;
// floorARMTexture.wrapS = THREE.RepeatWrapping;
// floorARMTexture.wrapT = THREE.RepeatWrapping;

// // roof
// const roofColorTexture = textureLoader.load(
// 	"./static/textures/house/roof/roof_slates_02_1k/roof_slates_02_diff_1k.jpg"
// );
// const roofARMTexture = textureLoader.load("./static/textures/house/roof/roof_slates_02_1k/roof_slates_02_arm_1k.jpg");
// const roofNormalTexture = textureLoader.load(
// 	"./static/textures/house/roof/roof_slates_02_1k/roof_slates_02_nor_gl_1k.jpg"
// );

// roofColorTexture.colorSpace = THREE.SRGBColorSpace;
// roofColorTexture.repeat.set(3, 1);
// roofARMTexture.repeat.set(3, 1);
// roofNormalTexture.repeat.set(3, 1);

// roofColorTexture.wrapS = THREE.RepeatWrapping;
// roofColorTexture.wrapT = THREE.RepeatWrapping;
// roofARMTexture.wrapS = THREE.RepeatWrapping;
// roofARMTexture.wrapT = THREE.RepeatWrapping;
// roofNormalTexture.wrapS = THREE.RepeatWrapping;
// roofNormalTexture.wrapT = THREE.RepeatWrapping;

// // walls
// const wallColorTexture = textureLoader.load(
// 	"./static/textures/house/wall/castle_brick_broken_06_1k/castle_brick_broken_06_diff_1k.jpg"
// );
// const wallARMTexture = textureLoader.load(
// 	"./static/textures/house/wall/castle_brick_broken_06_1k/castle_brick_broken_06_arm_1k.jpg"
// );
// const wallNormalTexture = textureLoader.load(
// 	"./static/textures/house/wall/castle_brick_broken_06_1k/castle_brick_broken_06_nor_gl_1k.jpg"
// );
// wallColorTexture.colorSpace = THREE.SRGBColorSpace;

// // door
// const doorColorTexture = textureLoader.load("./static/textures/house/door/color.jpg");
// const doorAlphaTexture = textureLoader.load("./static/textures/house/door/alpha.jpg");
// const doorAOTexture = textureLoader.load("./static/textures/house/door/ambientOcclusion.jpg");
// const doorHeightTexture = textureLoader.load("./static/textures/house/door/height.jpg");
// const doorMetalnessTexture = textureLoader.load("./static/textures/house/door/metalness.jpg");
// const doorRoughnessTexture = textureLoader.load("./static/textures/house/door/roughness.jpg");
// const doorNormalTexture = textureLoader.load("./static/textures/house/door/normal.jpg");
// doorColorTexture.colorSpace = THREE.SRGBColorSpace;

// // bush
// const bushColorTexture = textureLoader.load(
// 	"./static/textures/house/bush/leaves_forest_ground_1k/leaves_forest_ground_diff_1k.jpg"
// );
// const bushARMTexture = textureLoader.load(
// 	"./static/textures/house/bush/leaves_forest_ground_1k/leaves_forest_ground_arm_1k.jpg"
// );
// const bushNormalTexture = textureLoader.load(
// 	"./static/textures/house/bush/leaves_forest_ground_1k/leaves_forest_ground_nor_gl_1k.jpg"
// );
// bushColorTexture.colorSpace = THREE.SRGBColorSpace;

// // grave
// const graveColorTexture = textureLoader.load(
// 	"./static/textures/house/grave/plastered_stone_wall_1k/plastered_stone_wall_diff_1k.jpg"
// );
// const graveARMTexture = textureLoader.load(
// 	"./static/textures/house/grave/plastered_stone_wall_1k/plastered_stone_wall_arm_1k.jpg"
// );
// const graveNormalTexture = textureLoader.load(
// 	"./static/textures/house/grave/plastered_stone_wall_1k/plastered_stone_wall_nor_gl_1k.jpg"
// );

// graveColorTexture.colorSpace = THREE.SRGBColorSpace;
// // ********** Floor **********

// const floor = new THREE.Mesh(
// 	new THREE.PlaneGeometry(20, 20, 100, 100),
// 	new THREE.MeshStandardMaterial({
// 		map: floorColorTexture,
// 		metalnessMap: floorARMTexture,
// 		roughnessMap: floorARMTexture,
// 		aoMap: floorARMTexture,
// 		normalMap: floorNormalTexture,
// 		displacementMap: floorDisplacementTexture,
// 		displacementScale: 0.3,
// 		displacementBias: -0.2,
// 		alphaMap: floorAlphaTexture,
// 		transparent: true,
// 	})
// );

// gui.add(floor.material, "displacementScale").min(0).max(1).step(0.1);
// gui.add(floor.material, "displacementBias").min(-1).max(1).step(0.1);
// floor.rotation.x = -Math.PI * 0.5;
// scene.add(floor);

// // ********** House **********
// const house = new THREE.Group();
// scene.add(house);

// // walls
// const walls = new THREE.Mesh(
// 	new THREE.BoxGeometry(4, 2.5, 4),
// 	new THREE.MeshStandardMaterial({
// 		map: wallColorTexture,
// 		normalMap: wallNormalTexture,
// 		aoMap: wallARMTexture,
// 		roughnessMap: wallARMTexture,
// 		metalnessMap: wallARMTexture,
// 	})
// );
// walls.position.y = 1.25;
// house.add(walls);

// // roof

// const roof = new THREE.Mesh(
// 	new THREE.ConeGeometry(3.5, 1.5, 4),
// 	new THREE.MeshStandardMaterial({
// 		map: roofColorTexture,
// 		normalMap: roofNormalTexture,
// 		aoMap: roofARMTexture,
// 		roughnessMap: roofARMTexture,
// 		metalnessMap: roofARMTexture,
// 	})
// );
// roof.position.y = 2.5 + 0.75;
// roof.rotation.y = Math.PI * 0.25;
// house.add(roof);

// // door
// const door = new THREE.Mesh(
// 	new THREE.PlaneGeometry(2.2, 2, 100, 100),
// 	new THREE.MeshStandardMaterial({
// 		map: doorColorTexture,
// 		aoMap: doorAOTexture,
// 		transparent: true,
// 		normalMap: doorNormalTexture,
// 		displacementMap: doorHeightTexture,
// 		displacementScale: 0.23,
// 		displacementBias: -0.1,
// 		metalnessMap: doorMetalnessTexture,
// 		roughnessMap: doorRoughnessTexture,
// 		alphaMap: doorAlphaTexture,
// 	})
// );

// gui.add(door.material, "displacementScale").min(0).max(1).step(0.1);
// gui.add(door.material, "displacementBias").min(-1).max(1).step(0.1);
// door.position.y = 1;
// door.position.z = 2 + 0.0001;
// house.add(door);

// // bushes
// const bushMaterial = new THREE.MeshStandardMaterial({
// 	map: bushColorTexture,
// 	normalMap: bushNormalTexture,
// 	aoMap: bushARMTexture,
// 	roughnessMap: bushARMTexture,
// 	metalnessMap: bushARMTexture,
// });
// const bush1 = new THREE.Mesh(new THREE.SphereGeometry(0.4, 32, 32), bushMaterial);
// bush1.position.y = 0.4;
// bush1.position.x = 0.8;
// bush1.position.z = 2 + 0.4;
// bush1.rotation.x = 2;
// const bush2 = new THREE.Mesh(new THREE.SphereGeometry(0.3, 32, 32), bushMaterial);
// bush2.position.y = 0.3;
// bush2.position.x = 0.3;
// bush2.position.z = 2 + 0.3;
// bush2.rotation.x = 2;

// const bush3 = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), bushMaterial);
// bush3.position.y = 0.5;
// bush3.position.x = -1;
// bush3.position.z = 2 + 0.5;
// bush3.rotation.x = 2;

// house.add(bush1, bush2, bush3);

// // ********** Graves **********

// const graves = new THREE.Group();
// scene.add(graves);

// const graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2);
// const graveMaterial = new THREE.MeshStandardMaterial({
// 	map: graveColorTexture,
// 	normalMap: graveNormalTexture,
// 	aoMap: graveARMTexture,
// 	roughnessMap: graveARMTexture,
// 	metalnessMap: graveARMTexture,
// });

// for (let i = 0; i < 30; i++) {
// 	const angle = Math.random() * Math.PI * 2;
// 	const radius = 3 + Math.random() * 4;
// 	const x = Math.sin(angle) * radius;
// 	const z = Math.cos(angle) * radius;

// 	const grave = new THREE.Mesh(graveGeometry, graveMaterial);
// 	grave.position.x = x;
// 	grave.position.y = Math.random() * 0.4;
// 	grave.position.z = z;
// 	grave.rotation.x = Math.random();
// 	graves.add(grave);
// }

// // Camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100);
// camera.position.z = 15;
// camera.position.x = 5;
// camera.position.y = 5;
// scene.add(camera);

// // Lights
// const ambientLight = new THREE.AmbientLight("#86cdff", 0.275);
// const directionalLight = new THREE.DirectionalLight("#86cdff", 1);
// directionalLight.position.x = 3;
// directionalLight.position.y = 2;
// directionalLight.position.z = -8;
// const bulb = new THREE.PointLight("#fcf36f", 3);
// bulb.position.z = 2.2;
// bulb.position.y = 2.5;

// scene.add(ambientLight, directionalLight, bulb);
// // ghost lights

// const ghost1 = new THREE.PointLight("#8800ff", 4);
// const ghost2 = new THREE.PointLight("#ff0088", 4);
// const ghost3 = new THREE.PointLight("#ff0000", 4);

// scene.add(ghost1, ghost2, ghost3);

// // const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 1);
// // scene.add(directionalLightHelper);

// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;
// controls.update();

// // Shadows

// directionalLight.castShadow = true;
// floor.receiveShadow = true;
// roof.castShadow = true;
// walls.receiveShadow = true;
// walls.castShadow = true;
// ghost1.castShadow = true;
// ghost2.castShadow = true;
// ghost3.castShadow = true;
// for (const grave of graves.children) {
// 	grave.castShadow = true;
// 	grave.receiveShadow = true;
// }

// // Shadows optimization

// directionalLight.shadow.mapSize.width = 256;
// directionalLight.shadow.mapSize.height = 256;
// directionalLight.shadow.camera.left = -10;
// directionalLight.shadow.camera.right = 10;
// directionalLight.shadow.camera.far = 25;
// ghost1.shadow.mapSize.width = 256;
// ghost1.shadow.mapSize.height = 256;
// ghost1.shadow.camera.far = 5;
// ghost2.shadow.mapSize.width = 256;
// ghost2.shadow.mapSize.height = 256;
// ghost2.shadow.camera.far = 5;
// ghost3.shadow.mapSize.width = 256;
// ghost3.shadow.mapSize.height = 256;
// ghost3.shadow.camera.far = 5;

// // const directionalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
// // scene.add(directionalLightCameraHelper);
// // const ghostLightCameraHelper = new THREE.CameraHelper(ghost1.shadow.camera);
// // scene.add(ghostLightCameraHelper);

// // Sky

// const sky = new Sky();
// sky.material.uniforms["turbidity"].value = 10;
// sky.material.uniforms["rayleigh"].value = 3;
// sky.material.uniforms["mieCoefficient"].value = 0.1;
// sky.material.uniforms["mieDirectionalG"].value = 0.95;
// sky.material.uniforms["sunPosition"].value.set(0.3, -0.038, -0.95);
// sky.scale.set(100, 100, 100);
// scene.add(sky);

// // Fog
// console.log("sc", scene);
// // 0f343f
// scene.fog = new THREE.FogExp2("#04343f", 0.1);

// // Renderer
// const renderer = new THREE.WebGLRenderer({
// 	canvas,
// });

// renderer.setSize(sizes.width, sizes.height);
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
// renderer.render(scene, camera);

// const timer = new Timer();
// const tick = () => {
// 	timer.update();
// 	const elapsedTime = timer.getElapsed();
// 	ghost1.position.x = Math.sin(elapsedTime * 0.5) * 5;
// 	ghost1.position.z = Math.cos(elapsedTime * 0.5) * 5;
// 	ghost1.position.y = Math.sin(elapsedTime * 0.5) + Math.sin(elapsedTime * 2);
// 	ghost2.position.x = Math.sin(-elapsedTime * 1.5) * 4;
// 	ghost2.position.z = Math.cos(-elapsedTime * 1.5) * 4;
// 	ghost2.position.y = Math.cos(elapsedTime * 0.3) + Math.sin(elapsedTime);
// 	ghost3.position.x = Math.sin(elapsedTime + 3) * 6.6;
// 	ghost3.position.z = Math.cos(elapsedTime + 3) * 6.6;
// 	ghost3.position.y = Math.sin(elapsedTime * 0.3) + Math.cos(elapsedTime);
// 	controls.update();
// 	renderer.render(scene, camera);
// 	window.requestAnimationFrame(tick);
// };

// tick();

// ==================================================
// ====================== PARTICLES =================

// import * as THREE from "three";
// import { Timer } from "three/addons/misc/Timer.js";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// const canvas = document.querySelector("canvas.webgl");

// const sizes = {
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// };

// const scene = new THREE.Scene();

// const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: "red" }));
// scene.add(box);

// const particlesGeometry = new THREE.SphereGeometry(1, 32, 32);
// Creating own geometry

// const textureLoader = new THREE.TextureLoader();
// const ringTexture = textureLoader.load("./static/textures/particles/2.png");

// const count = 300;
// const positionsArray = new Float32Array(count * 3 * 3);
// for (let i = 0; i < count * 3 * 3; i++) {
// 	positionsArray[i] = (Math.random() - 0.5) * 10;
// }

// const positionAttribute = new THREE.BufferAttribute(positionsArray, 3);
// const particlesGeometry = new THREE.BufferGeometry();
// particlesGeometry.setAttribute("position", positionAttribute);

// const particlesMaterial = new THREE.PointsMaterial({
// 	// color: "red",
// 	// map: ringTexture,
// 	alphaMap: ringTexture,
// 	transparent: true,
// 	size: 1,
// 	sizeAttenuation: true,
// });

// // particlesMaterial.alphaTest = 0.001;
// // particlesMaterial.depthTest = false;
// particlesMaterial.depthWrite = false;
// particlesMaterial.blending = THREE.AdditiveBlending;

// const points = new THREE.Points(particlesGeometry, particlesMaterial);
// scene.add(points);

// const particleGeometry = new THREE.SphereGeometry(1, 32, 32);

// const particleGeometry = new THREE.CircleGeometry(1.5, 32, 32);
// const particleMaterial = new THREE.PointsMaterial({
// 	color: "purple",
// 	size: 0.06,
// 	sizeAttenuation: true,
// });

// const particle = new THREE.Points(particleGeometry, particleMaterial);
// scene.add(particle);

// const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({ color: "orange" }));
// scene.add(sphere);

// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100);
// camera.position.z = 5;
// scene.add(camera);

// const renderer = new THREE.WebGLRenderer({
// 	canvas,
// });

// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;
// controls.update();
// renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene, camera);

// const timer = new Timer();
// console.log(timer);
// console.log("par", particleGeometry);
// const numberOfParticlesPosition = particleGeometry.attributes.position.array.length;
// const tick = () => {
// 	timer.update();
// 	const elapsedTime = timer.getElapsed();
// 	// particle.rotation.y = elapsedTime;
// 	let xCordinate = 0;
// 	let yCordinate = 1;
// 	let zCordinate = 2;
// 	for (let i = 0; i < numberOfParticlesPosition; i++) {
// 		const x = particleGeometry.attributes.position.array[xCordinate];
// 		const z = particleGeometry.attributes.position.array[zCordinate];
// 		particleGeometry.attributes.position.array[yCordinate] = Math.sin(elapsedTime + x * 2 + z * 2) * 2;
// 		yCordinate += 2;
// 		xCordinate += 2;
// 		zCordinate += 2;
// 	}
// 	particleGeometry.attributes.position.needsUpdate = true;
// 	controls.enableDamping = true;
// 	controls.update();
// 	renderer.render(scene, camera);
// 	window.requestAnimationFrame(tick);
// };

// tick();

// ----------
// Galaxy generator
// -----------

// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import GUI from "lil-gui";

// const gui = new GUI();

// const canvas = document.querySelector("canvas.webgl");

// const sizes = {
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// };

// const scene = new THREE.Scene();

// const galaxyParameters = {};

// galaxyParameters.count = 100000;
// galaxyParameters.size = 0.002;
// galaxyParameters.radius = 4;
// galaxyParameters.lines = 3;
// galaxyParameters.spin = 1;
// galaxyParameters.randomValue = 0.2;
// galaxyParameters.power = 3;
// galaxyParameters.innerColor = "#ff6030";
// galaxyParameters.outerColor = "#0000FF";

// // const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: "red" }));
// // scene.add(box);

// let starsGeometry = null;
// let starsMaterial = null;
// let stars = null;

// const generateGalaxy = () => {
// 	if (starsMaterial !== null) {
// 		starsGeometry.dispose();
// 		starsMaterial.dispose();
// 		scene.remove(stars);
// 	}
// 	starsGeometry = new THREE.BufferGeometry();
// 	const position = new Float32Array(galaxyParameters.count * 3);
// 	const colors = new Float32Array(galaxyParameters.count * 3);

// 	const colorInside = new THREE.Color(galaxyParameters.innerColor);
// 	console.log("col", colorInside);
// 	const colorOutside = new THREE.Color(galaxyParameters.outerColor);

// 	for (let i = 0; i < galaxyParameters.count; i++) {
// 		const i3 = i * 3;
// 		const radius = Math.random() * galaxyParameters.radius;
// 		const spinAngle = radius * galaxyParameters.spin;
// 		const branchAngle = ((i % galaxyParameters.lines) / galaxyParameters.lines) * Math.PI * 2;

// 		const randomX =
// 			Math.pow(Math.random(), galaxyParameters.power) *
// 			(Math.random() < 0.5 ? 1 : -1) *
// 			galaxyParameters.randomValue;
// 		const randomY =
// 			Math.pow(Math.random(), galaxyParameters.power) *
// 			(Math.random() < 0.5 ? 1 : -1) *
// 			galaxyParameters.randomValue;
// 		const randomZ =
// 			Math.pow(Math.random(), galaxyParameters.power) *
// 			(Math.random() < 0.5 ? 1 : -1) *
// 			galaxyParameters.randomValue;

// 		position[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
// 		position[i3 + 1] = 0 + randomY;
// 		position[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

// 		const mixColor = colorInside.clone();
// 		mixColor.lerp(colorOutside, radius / galaxyParameters.radius);
// 		colors[i3] = mixColor.r;
// 		colors[i3 + 1] = mixColor.g;
// 		colors[i3 + 2] = mixColor.b;
// 	}
// 	const positionAttribute = new THREE.BufferAttribute(position, 3);
// 	const colorAttribute = new THREE.BufferAttribute(colors, 3);
// 	starsGeometry.setAttribute("position", positionAttribute);
// 	starsGeometry.setAttribute("color", colorAttribute);
// 	starsMaterial = new THREE.PointsMaterial({
// 		size: galaxyParameters.size,
// 		sizeAttenuation: true,
// 		depthWrite: false,
// 		blending: THREE.AdditiveBlending,
// 		color: "#ff5588",
// 		vertexColors: true,
// 	});

// 	stars = new THREE.Points(starsGeometry, starsMaterial);
// 	scene.add(stars);
// };

// generateGalaxy();

// gui.add(galaxyParameters, "count")
// 	.min(100000)
// 	.max(500000)
// 	.step(10000)
// 	.onFinishChange(() => generateGalaxy());
// gui.add(galaxyParameters, "size")
// 	.min(0.001)
// 	.max(0.1)
// 	.step(0.001)
// 	.onFinishChange(() => generateGalaxy());
// gui.add(galaxyParameters, "radius")
// 	.min(1)
// 	.max(5)
// 	.step(1)
// 	.onFinishChange(() => generateGalaxy());
// gui.add(galaxyParameters, "lines")
// 	.min(1)
// 	.max(10)
// 	.step(1)
// 	.onFinishChange(() => generateGalaxy());
// gui.add(galaxyParameters, "spin")
// 	.min(-5)
// 	.max(5)
// 	.step(0.1)
// 	.onFinishChange(() => generateGalaxy());
// gui.add(galaxyParameters, "randomValue")
// 	.min(0.001)
// 	.max(0.3)
// 	.step(0.1)
// 	.onFinishChange(() => generateGalaxy());
// gui.add(galaxyParameters, "power")
// 	.min(1)
// 	.max(10)
// 	.step(0.1)
// 	.onFinishChange(() => generateGalaxy());
// gui.addColor(galaxyParameters, "innerColor").onFinishChange(() => generateGalaxy());
// gui.addColor(galaxyParameters, "outerColor").onFinishChange(() => generateGalaxy());

// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100);
// camera.position.z = 5;
// scene.add(camera);

// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;

// controls.update();

// const renderer = new THREE.WebGLRenderer({ canvas });
// renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene, camera);

// const tick = () => {
// 	controls.enableDamping = true;
// 	controls.update();
// 	renderer.render(scene, camera);
// 	window.requestAnimationFrame(tick);
// };
// tick();

// =============================================

// import * as THREE from "three";
// import GUI from "lil-gui";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// const gui = new GUI();

// const canvas = document.querySelector("canvas.webgl");

// const sizes = {
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// };

// const scene = new THREE.Scene();

// // const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: "red" }));
// // scene.add(box);

// const particleObj = {};
// particleObj.count = 10000;
// particleObj.size = 0.002;
// particleObj.radius = 4;
// particleObj.galaxyCurves = 3;
// particleObj.bendingAngle = 1;
// particleObj.randomValue = 0.1;
// particleObj.pow = 3;
// particleObj.innerColor = "#1aed7d";
// particleObj.outerColor = "#d10f0f";
// let particleGeometry = null;
// let particleMaterial = null;
// let points = null;

// const createGalaxy = () => {
// 	if (particleGeometry !== null) {
// 		particleGeometry.dispose();
// 		particleMaterial.dispose();
// 		scene.remove(points);
// 	}
// 	particleGeometry = new THREE.BufferGeometry();
// 	const position = new Float32Array(particleObj.count * 3);
// 	const colors = new Float32Array(particleObj.count * 3);
// 	const innerColor = new THREE.Color(particleObj.innerColor);
// 	const outerColor = new THREE.Color(particleObj.outerColor);
// 	for (let i = 0; i < particleObj.count; i++) {
// 		const coordinate = i * 3;
// 		// if i = 0:0, i = 1 : 33, i = 2: 66
// 		const angle = ((i % particleObj.galaxyCurves) / particleObj.galaxyCurves) * Math.PI * 2;
// 		const radius = particleObj.radius * Math.random();
// 		const bendingAngle = radius * particleObj.bendingAngle;

// 		const randomX =
// 			Math.pow(Math.random(), particleObj.pow) * (Math.random() < 0.5 ? -1 : 1) * particleObj.randomValue;
// 		const randomY =
// 			Math.pow(Math.random(), particleObj.pow) * (Math.random() < 0.5 ? -1 : 1) * particleObj.randomValue;
// 		const randomZ =
// 			Math.pow(Math.random(), particleObj.pow) * (Math.random() < 0.5 ? -1 : 1) * particleObj.randomValue;
// 		position[coordinate] = Math.sin(angle + bendingAngle) * radius + randomX;
// 		position[coordinate + 1] = 0 + randomY;
// 		position[coordinate + 2] = Math.cos(angle + bendingAngle) * radius + randomZ;
// 		const mixedColor = innerColor.clone();
// 		mixedColor.lerp(outerColor, 0.5);
// 		colors[coordinate] = mixedColor.r;
// 		colors[coordinate + 1] = mixedColor.g;
// 		colors[coordinate + 2] = mixedColor.b;
// 	}
// 	const positionAttribute = new THREE.BufferAttribute(position, 3);
// 	const colorAttribute = new THREE.BufferAttribute(colors, 3);
// 	particleGeometry.setAttribute("position", positionAttribute);
// 	particleGeometry.setAttribute("color", colorAttribute);
// 	particleMaterial = new THREE.PointsMaterial({
// 		size: particleObj.size,
// 		sizeAttenuation: true,
// 		depthWrite: false,
// 		vertexColors: true,
// 		blending: THREE.AdditiveBlending,
// 	});
// 	points = new THREE.Points(particleGeometry, particleMaterial);
// 	scene.add(points);
// };

// createGalaxy();

// gui.add(particleObj, "count")
// 	.min(10000)
// 	.max(50000)
// 	.step(5000)
// 	.onFinishChange(() => createGalaxy());
// gui.add(particleObj, "size")
// 	.min(0.001)
// 	.max(0.5)
// 	.step(0.001)
// 	.onFinishChange(() => createGalaxy());
// gui.add(particleObj, "radius")
// 	.min(1)
// 	.max(8)
// 	.step(0.5)
// 	.onFinishChange(() => createGalaxy());
// gui.add(particleObj, "galaxyCurves")
// 	.min(1)
// 	.max(8)
// 	.step(1)
// 	.onFinishChange(() => createGalaxy());
// gui.add(particleObj, "bendingAngle")
// 	.min(-8)
// 	.max(8)
// 	.step(1)
// 	.onFinishChange(() => createGalaxy());
// gui.add(particleObj, "randomValue")
// 	.min(0.01)
// 	.max(0.5)
// 	.step(0.01)
// 	.onFinishChange(() => createGalaxy());
// gui.add(particleObj, "pow")
// 	.min(1)
// 	.max(5)
// 	.step(0.5)
// 	.onFinishChange(() => createGalaxy());
// gui.addColor(particleObj, "innerColor").onFinishChange(() => createGalaxy());
// gui.addColor(particleObj, "outerColor").onFinishChange(() => createGalaxy());

// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100);
// camera.position.z = 5;
// scene.add(camera);

// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;
// controls.update();

// const renderer = new THREE.WebGLRenderer({
// 	canvas,
// });
// renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene, camera);

// const tick = () => {
// 	controls.enableDamping = true;
// 	controls.update();
// 	renderer.render(scene, camera);
// 	window.requestAnimationFrame(tick);
// };

// tick();

// ====================================

/* 
	PORTFOLIO
*/

// ======================================

// import * as THREE from "three";
// import { Timer } from "three/addons/misc/Timer.js";
// import GUI from "lil-gui";

// const gui = new GUI();

// const sizes = {
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// };

// const cursor = {
// 	x: 0,
// 	y: 0,
// };

// const guiObj = {};
// guiObj.materialColor = "#fff";

// let scrollY = 0;

// window.addEventListener("scroll", () => {
// 	scrollY = window.scrollY;
// });

// window.addEventListener("mousemove", (e) => {
// 	(cursor.x = e.x), (cursor.y = e.y);
// });

// const dist = 4;

// const canvas = document.querySelector("canvas.webgl");

// const scene = new THREE.Scene();

// // Textures

// const textureLoader = new THREE.TextureLoader();
// const gradientTexture = textureLoader.load("./static/textures/gradients/3.jpg");
// gradientTexture.magFilter = THREE.NearestFilter;

// const material = new THREE.MeshToonMaterial({ color: guiObj.materialColor, gradientMap: gradientTexture });

// gui.addColor(guiObj, "materialColor").onFinishChange((el) => {
// 	material.color.set(el);
// });

// const cone = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1, 32), material);
// const torus = new THREE.Mesh(new THREE.TorusKnotGeometry(0.5, 0.1), material);
// const cylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 1), material);

// const coneDist = dist * 0;
// const torusDist = dist * 1;
// const cylinderDist = dist * 2;

// cone.position.y = coneDist;
// cone.position.x = 2;
// torus.position.y = -torusDist;
// torus.position.x = -2;
// cylinder.position.y = -cylinderDist;
// cylinder.position.x = 2;

// const meshes = [cone, torus, cylinder];

// scene.add(cone, torus, cylinder);

// // Particles

// const particlesGeometry = new THREE.BufferGeometry();
// const count = 200;
// const positions = new Float32Array(count * 3);
// for (let i = 0; i < count; i++) {
// 	positions[i * 3] = (Math.random() - 0.5) * 10;
// 	positions[i * 3 + 1] = dist * 0.5 - Math.random() * meshes.length * dist;
// 	positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
// }

// const positionAttribute = new THREE.BufferAttribute(positions, 3);
// particlesGeometry.setAttribute("position", positionAttribute);

// const particleMaterial = new THREE.PointsMaterial({
// 	size: 0.03,
// 	color: "#fff",
// 	sizeAttenuation: true,
// });

// const points = new THREE.Points(particlesGeometry, particleMaterial);
// scene.add(points);

// // Light

// const directionalLight = new THREE.DirectionalLight("#fff", 1.5);
// // const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 0.5);
// // directionalLight.position.x = 2;
// directionalLight.position.y = 1;
// scene.add(directionalLight);

// const cameraGroup = new THREE.Group();

// const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 1, 100);
// camera.position.z = 5;
// cameraGroup.add(camera);
// scene.add(cameraGroup);

// const renderer = new THREE.WebGLRenderer({
// 	canvas,
// 	alpha: true,
// });

// renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene, camera);

// const timer = new Timer();
// const tick = () => {
// 	timer.update();
// 	meshes.forEach((el) => {
// 		el.rotation.x = timer.getElapsed() * 0.1;
// 		el.rotation.y = timer.getElapsed() * 0.1;
// 	});

// 	// cone.rotation.z = timer.getElapsed() * 0.1;
// 	camera.position.y = -(scrollY / sizes.height) * dist;
// 	cameraGroup.position.x += (cursor.x / sizes.width - 0.5 - cameraGroup.position.x) * 0.1 * 5 * timer.getDelta();
// 	cameraGroup.position.y += (-(cursor.y / sizes.height - 0.5) - cameraGroup.position.y) * 0.1 * 5 * timer.getDelta();

// 	renderer.render(scene, camera);
// 	window.requestAnimationFrame(tick);
// };

// tick();

// PORTFOLIO Completed

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

window.addEventListener("dblclick", () => {
	if (!document.fullscreenElement) {
		canvas.requestFullscreen();
	} else {
		document.exitFullscreen();
	}
});

window.addEventListener("resize", () => {
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	renderer.setSize(sizes.width, sizes.height);
});

const canvas = document.querySelector("canvas.webgl");

const scene = new THREE.Scene();

/* 
	TEXTURES STARTS
*/

const textureLoader = new THREE.TextureLoader();

const wallColorTexture = textureLoader.load(
	"./static/textures/house/wall/castle_brick_broken_06_1k/castle_brick_broken_06_diff_1k.webp"
);
const wallARMTexture = textureLoader.load(
	"./static/textures/house/wall/castle_brick_broken_06_1k/castle_brick_broken_06_arm_1k.webp"
);
const wallNormalTexture = textureLoader.load(
	"./static/textures/house/wall/castle_brick_broken_06_1k/castle_brick_broken_06_nor_gl_1k.webp"
);

const doorColorTexture = textureLoader.load("./static/textures/house/door/color.webp");
const doorAlphaTexture = textureLoader.load("./static/textures/house/door/alpha.webp");
const doorAmbientOcclusionTexture = textureLoader.load("./static/textures/house/door/ambientOcclusion.webp");
const doorHeightTexture = textureLoader.load("./static/textures/house/door/height.webp");
const doorMetalnessTexture = textureLoader.load("./static/textures/house/door/metalness.webp");
const doorRoughnessTexture = textureLoader.load("./static/textures/house/door/roughness.webp");
const doorNormalTexture = textureLoader.load("./static/textures/house/door/normal.webp");

const roofColorTexture = textureLoader.load(
	"./static/textures/house/roof/roof_slates_02_1k/roof_slates_02_diff_1k.webp"
);
const roofARMTexture = textureLoader.load("./static/textures/house/roof/roof_slates_02_1k/roof_slates_02_arm_1k.webp");
const roofNormalTexture = textureLoader.load(
	"./static/textures/house/roof/roof_slates_02_1k/roof_slates_02_nor_gl_1k.webp"
);

const floorColorTexture = textureLoader.load(
	"./static/textures/house/floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_diff_1k.webp"
);
const floorAlphaTexture = textureLoader.load("./static/textures/house/floor/alpha.webp");
const floorARMTexture = textureLoader.load(
	"./static/textures/house/floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_arm_1k.webp"
);
const floorHeightTexture = textureLoader.load(
	"./static/textures/house/floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_disp_1k.webp"
);
const floorNormalTexture = textureLoader.load(
	"./static/textures/house/floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_nor_gl_1k.webp"
);

const graveColorTexture = textureLoader.load(
	"./static/textures/house/grave/plastered_stone_wall_1k/plastered_stone_wall_diff_1k.webp"
);
const graveARMTexture = textureLoader.load(
	"./static/textures/house/grave/plastered_stone_wall_1k/plastered_stone_wall_arm_1k.webp"
);
const graveNormalTexture = textureLoader.load(
	"./static/textures/house/grave/plastered_stone_wall_1k/plastered_stone_wall_nor_gl_1k.webp"
);

wallColorTexture.colorSpace = THREE.SRGBColorSpace;
doorColorTexture.colorSpace = THREE.SRGBColorSpace;
roofColorTexture.colorSpace = THREE.SRGBColorSpace;
floorColorTexture.colorSpace = THREE.SRGBColorSpace;
graveColorTexture.colorSpace = THREE.SRGBColorSpace;

roofColorTexture.repeat.set(3, 1);
roofARMTexture.repeat.set(3, 1);
roofNormalTexture.repeat.set(3, 1);
roofColorTexture.wrapS = THREE.RepeatWrapping;
roofColorTexture.wrapT = THREE.RepeatWrapping;
roofARMTexture.wrapS = THREE.RepeatWrapping;
roofARMTexture.wrapT = THREE.RepeatWrapping;
roofNormalTexture.wrapS = THREE.RepeatWrapping;
roofNormalTexture.wrapT = THREE.RepeatWrapping;

floorColorTexture.repeat.set(8, 8);
floorARMTexture.repeat.set(8, 8);
floorNormalTexture.repeat.set(8, 8);
floorHeightTexture.repeat.set(8, 8);

floorColorTexture.wrapS = THREE.RepeatWrapping;
floorColorTexture.wrapT = THREE.RepeatWrapping;
floorARMTexture.wrapS = THREE.RepeatWrapping;
floorARMTexture.wrapT = THREE.RepeatWrapping;
floorNormalTexture.wrapS = THREE.RepeatWrapping;
floorNormalTexture.wrapT = THREE.RepeatWrapping;
floorHeightTexture.wrapS = THREE.RepeatWrapping;
floorHeightTexture.wrapT = THREE.RepeatWrapping;

/* 
	TEXTURES ENDS
*/

/* 
	FLOOR STARTS
*/
const floor = new THREE.Mesh(
	new THREE.PlaneGeometry(14, 14, 100, 100),
	new THREE.MeshStandardMaterial({
		map: floorColorTexture,
		aoMap: floorARMTexture,
		metalnessMap: floorARMTexture,
		alphaMap: floorAlphaTexture,
		transparent: true,
		roughnessMap: floorARMTexture,
		normalMap: floorNormalTexture,
		displacementMap: floorHeightTexture,
		displacementBias: -0.1,
		displacementScale: 0.25,
	})
);
floor.rotation.x = -Math.PI * 0.5;
scene.add(floor);

/* 
	FLOOR ENDS
*/

/* 
	HOUSE STARTS
*/
const house = new THREE.Group();
scene.add(house);

// walls
const walls = new THREE.Mesh(
	new THREE.BoxGeometry(2, 2, 2),
	new THREE.MeshStandardMaterial({
		map: wallColorTexture,
		aoMap: wallARMTexture,
		roughnessMap: wallARMTexture,
		metalnessMap: wallARMTexture,
		normalMap: wallNormalTexture,
	})
);
walls.position.y = 1;
house.add(walls);

// door
const door = new THREE.Mesh(
	new THREE.PlaneGeometry(1, 1.2, 100, 100),
	new THREE.MeshStandardMaterial({
		map: doorColorTexture,
		alphaMap: doorAlphaTexture,
		transparent: true,
		metalnessMap: doorMetalnessTexture,
		roughnessMap: doorRoughnessTexture,
		aoMap: doorAmbientOcclusionTexture,
		normalMap: doorNormalTexture,
		displacementMap: doorHeightTexture,
		displacementScale: 0.23,
		displacementBias: -0.1,
	})
);
door.position.y = 0.6;
door.position.z = 1.001;
house.add(door);

// roof
const roof = new THREE.Mesh(
	new THREE.ConeGeometry(2, 1, 4),
	new THREE.MeshStandardMaterial({
		map: roofColorTexture,
		aoMap: roofARMTexture,
		roughnessMap: roofARMTexture,
		metalnessMap: roofARMTexture,
		normalMap: roofNormalTexture,
	})
);
roof.position.y = 2 + 0.5;
roof.rotation.y = Math.PI * 0.25;
house.add(roof);

/* 
	HOUSE ENDS
*/

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100);
camera.position.z = 15;
scene.add(camera);

/* 
	GRAVES STARTS
*/
const graveMaterial = new THREE.MeshStandardMaterial({
	map: graveColorTexture,
	aoMap: graveARMTexture,
	metalnessMap: graveARMTexture,
	roughnessMap: graveARMTexture,
	normalMap: graveNormalTexture,
});
const graves = new THREE.Group();
scene.add(graves);
for (let i = 0; i < 20; i++) {
	const grave = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.6, 0.2), graveMaterial);
	grave.position.y = Math.random() * 0.3;
	const angle = Math.random() * Math.PI * 2;
	const random = 2 + Math.random() * 3;
	grave.position.x = Math.sin(angle) * random;
	grave.position.z = Math.cos(angle) * random;
	grave.rotation.x = Math.random() * 1.2;
	graves.add(grave);
}

/* 
	GRAVES ENDS
*/

/* 
	GALAXY STARTS
*/

const galaxyGenerater = () => {
	const particlesCount = 10000;
	const galaxyGeometry = new THREE.BufferGeometry();
	const galaxyPosition = new Float32Array(particlesCount * 3);
	const galaxyColors = new Float32Array(particlesCount * 3);
	const totalLines = 3;
	const colorOutside = new THREE.Color("purple");
	const colorInside = new THREE.Color("red");
	for (let i = 0; i < particlesCount; i++) {
		const spreadPosition = Math.random() * 3;
		const angle = ((i % totalLines) / totalLines) * Math.PI * 2;
		const curve = spreadPosition * 2;

		galaxyPosition[i * 3] =
			Math.sin(angle + curve) * spreadPosition +
			Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.4; //x
		galaxyPosition[i * 3 + 1] = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.4; //y
		galaxyPosition[i * 3 + 2] =
			Math.cos(angle + curve) * spreadPosition +
			Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.4; //z
		const mixColor = colorInside.clone();
		mixColor.lerp(colorOutside, spreadPosition / 3);
		galaxyColors[i * 3] = mixColor.r;
		galaxyColors[i * 3 + 1] = mixColor.g;
		galaxyColors[i * 3 + 2] = mixColor.b;
	}
	const positionAttribute = new THREE.BufferAttribute(galaxyPosition, 3);
	const colorAttribute = new THREE.BufferAttribute(galaxyColors, 3);
	galaxyGeometry.setAttribute("position", positionAttribute);
	galaxyGeometry.setAttribute("color", colorAttribute);
	const galaxyMaterial = new THREE.PointsMaterial({
		size: 0.03,
		sizeAttenuation: true,
		depthWrite: false,
		blending: THREE.AdditiveBlending,
		vertexColors: true,
	});
	const galaxyParticles = new THREE.Points(galaxyGeometry, galaxyMaterial);
	galaxyParticles.rotation.x = 2;
	galaxyParticles.rotation.z = 2.5;
	galaxyParticles.position.y = 10;
	galaxyParticles.position.x = -5;
	galaxyParticles.position.z = -10;
	scene.add(galaxyParticles);
};

galaxyGenerater();

/* 
	GALAXY EMDS
*/

/* 
	LIGHTS STARTS
*/

const ambientLight = new THREE.AmbientLight("#86cdff", 0.275);
const directionalLight = new THREE.DirectionalLight("#86cdff", 1);
directionalLight.position.x = 3;
directionalLight.position.y = 2;
directionalLight.position.z = -8;
scene.add(ambientLight, directionalLight);

const pointLight = new THREE.PointLight("yellow", 2);
pointLight.position.z = 1.2;
pointLight.position.y = 2;
scene.add(pointLight);

// const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 2);
// scene.add(directionalLightHelper);

/* 
	LIGHTS ENDS	
*/

/* 
	SHADOW STARTS	
*/
directionalLight.castShadow = true;

roof.castShadow = true;
walls.castShadow = true;
walls.receiveShadow = true;
floor.receiveShadow = true;
for (const grave of graves.children) {
	grave.castShadow = true;
	grave.receiveShadow = true;
}

directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;

directionalLight.shadow.camera.near = 1;
directionalLight.shadow.camera.far = 15;

// const directionalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
// scene.add(directionalLightCameraHelper);
// console.log("di", directionalLight);

/* 
	SHADOW ENDS	
*/

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.update();

const renderer = new THREE.WebGLRenderer({
	canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.render(scene, camera);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const tick = () => {
	renderer.render(scene, camera);
	controls.enableDamping = true;
	controls.update();
	window.requestAnimationFrame(tick);
};

tick();
