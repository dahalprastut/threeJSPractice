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

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import GUI from "lil-gui";

const canvas = document.querySelector("canvas.webgl");
const gui = new GUI();

const sphereGUI = gui.addFolder("Sphere");
const lightHelperGUI = gui.addFolder("Light Helper");
const pointLightHelperGUI = lightHelperGUI.addFolder("Point Light");
const directionalLightHelperGUI = lightHelperGUI.addFolder("Directional Light");

const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

window.addEventListener("resize", () => {
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();
	renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
	renderer.setSize(sizes.width, sizes.height);
});

window.addEventListener("dblclick", () => {
	console.log("doc", document);
	if (!document.fullscreenElement) {
		canvas.requestFullscreen();
	} else {
		document.exitFullscreen();
	}
});

const scene = new THREE.Scene();

const material = new THREE.MeshStandardMaterial();
material.side = THREE.DoubleSide;

const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.7, 64, 64), material);
sphere.castShadow = true;
sphereGUI.add(sphere.position, "x").min(-2).max(2).step(0.2);
sphereGUI.add(sphere.position, "y").min(-2).max(2).step(0.2);
sphereGUI.add(sphere.position, "z").min(-2).max(2).step(0.2);

const plane = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), material);
plane.receiveShadow = true;
plane.rotation.x = -Math.PI * 0.5;
plane.position.y = -1;
scene.add(sphere, plane);

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100);
camera.position.z = 5;
scene.add(camera);

const ambientLight = new THREE.AmbientLight("#fff", 1);
const pointLight = new THREE.PointLight("#fff", 2);
pointLight.position.y = 1.4;
const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.5);
pointLightHelperGUI.add(pointLightHelper, "visible");
pointLightHelperGUI.add(pointLight.position, "x").min(-2).max(2).step(0.2);
pointLightHelperGUI.add(pointLight.position, "y").min(-2).max(2).step(0.2);
pointLightHelperGUI.add(pointLight.position, "z").min(-2).max(2).step(0.2);
// console.log("dire", directionalLight);

const directionalLight = new THREE.DirectionalLight("#f7f6d5", 1);
directionalLight.position.y = 3;
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;
directionalLight.shadow.camera.far = 5;
directionalLight.shadow.radius = 10;

const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 0.5);
directionalLightHelperGUI.add(directionalLightHelper, "visible");
directionalLightHelperGUI.add(directionalLight.position, "x").min(-8).max(8).step(0.2);
directionalLightHelperGUI.add(directionalLight.position, "y").min(-8).max(8).step(0.2);
directionalLightHelperGUI.add(directionalLight.position, "z").min(-8).max(8).step(0.2);
scene.add(ambientLight, pointLight, directionalLight);
scene.add(pointLightHelper, directionalLightHelper);

// const directinalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
// const pointLightCameraHelper = new THREE.CameraHelper(pointLight.shadow.camera);
// scene.add(directinalLightCameraHelper);
// scene.add(pointLightCameraHelper);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.update();

const renderer = new THREE.WebGLRenderer({
	canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
renderer.shadowMap.enabled = true;
renderer.render(scene, camera);

const tick = () => {
	renderer.render(scene, camera);
	controls.enableDamping = true;
	controls.update();
	window.requestAnimationFrame(tick);
};

tick();
