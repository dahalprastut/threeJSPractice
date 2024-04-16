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

import * as THREE from "three";
import GUI from "lil-gui";
import gsap from "gsap";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const gui = new GUI({ width: 300, title: "First GUI", closeFolders: true });
const cubeTweaks = gui.addFolder("Cube");

const canvas = document.querySelector("canvas.webgl");

const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

const cursor = {
	x: 0,
	y: 0,
};
const debugObject = {};
debugObject.color = "#f00000";
// 1. Resize
// 2. Fullwidth

window.addEventListener("resize", () => {
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;

	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();
	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	renderer.render(scene, camera);
});

window.addEventListener("dblclick", () => {
	if (!document.fullscreenElement) {
		canvas.requestFullscreen();
	} else {
		document.exitFullscreen();
	}
});

window.addEventListener("mousemove", (e) => {
	cursor.x = e.clientX / sizes.width - 0.5;
	cursor.y = -(e.clientY / sizes.height - 0.5);
});

const scene = new THREE.Scene();

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

debugObject.subdivision = 1;
const geometry = new THREE.BoxGeometry(
	1,
	1,
	1,
	debugObject.subdivision,
	debugObject.subdivision,
	debugObject.subdivision
);

const material = new THREE.MeshBasicMaterial({
	color: debugObject.color,
	wireframe: true,
});

cubeTweaks.addColor(debugObject, "color").onChange((val) => {
	// console.log("asd", val);
	material.color.set(debugObject.color);
});

const box1 = new THREE.Mesh(geometry, material);
cubeTweaks.add(box1.position, "y").min(0).max(2).step(0.1).name("Elevation");
cubeTweaks.add(box1, "visible");
debugObject.spin = () => {
	gsap.to(box1.rotation, { y: box1.rotation.y + Math.PI * 2, duration: 4 });
};
console.log("mat", box1);

cubeTweaks.add(debugObject, "spin").name("spin y direction");
cubeTweaks
	.add(debugObject, "subdivision")
	.onFinishChange(() => {
		box1.geometry.dispose();
		box1.geometry = new THREE.BoxGeometry(
			1,
			1,
			1,
			debugObject.subdivision,
			debugObject.subdivision,
			debugObject.subdivision
		);
	})
	.min(1)
	.max(3)
	.step(1);

scene.add(box1);

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 5;
scene.add(camera);
const axesHelper = new THREE.AxesHelper(1);
// scene.add(axesHelper);

const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.render(scene, camera);

const clock = new THREE.Clock();

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.update();

const tick = () => {
	// const elapsedTime = clock.getElapsedTime();
	// camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
	// camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
	// camera.position.y = cursor.y * 5;
	// camera.position.x = Math.cos(elapsedTime) * 2;
	// camera.position.z = Math.sin(elapsedTime) * 2;
	// camera.position.y = 5;
	// camera.lookAt(box1.position);
	controls.enableDamping = true;
	controls.update();
	renderer.render(scene, camera);
	// console.log("el", elapsedTime);
	window.requestAnimationFrame(tick);
};

tick();
