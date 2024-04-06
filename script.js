import * as THREE from "three";
import gsap from "gsap";

const canvas = document.querySelector("canvas.webgl");
// // we need 4 things to create something:
// // 1. Scene
// const scene = new THREE.Scene();

// // 2. Object
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({
// 	color: "red",
// });
// const mesh = new THREE.Mesh(geometry, material);
// // mesh.position.z = -5;
// mesh.position.x = 4;
// mesh.position.y = 3;
// // mesh.position.normalize();

// // scale
// mesh.scale.z = 2;
// console.log(mesh.position.length()); // mesh distance from the center of the screen
// // Rotation
// mesh.rotation.reorder("YXZ");
// mesh.rotation.x = 0.5;
// mesh.rotation.y = 0.5;

// scene.add(mesh);

// // 3. Camera
// const sizes = {
// 	width: 800,
// 	height: 600,
// };
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// camera.position.z = 5;
// // camera.position.x = 5;
// // camera.position.y = 2;
// scene.add(camera);
// console.log(mesh.position.distanceTo(camera.position));
// camera.lookAt(new THREE.Vector3(0, 0, 0));
// // camera.lookAt(mesh.position);

// const positionHelper = new THREE.AxesHelper(1);
// scene.add(positionHelper);

// // 4. Renderer
// const renderer = new THREE.WebGLRenderer({
// 	canvas: canvas,
// });
// renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene, camera);

// Grouping

const scene = new THREE.Scene();

const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: "red" }));
cube1.position.x = -2;
group.add(cube1);

const cube2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: "blue" }));
// cube2.position.x = 2;
// cube2.position.y = 2;
// cube2.rotation.reorder("YXZ");
// cube2.rotation.x = 1;

group.add(cube2);

// group.position.y = 2;

const sizes = {
	width: 800,
	height: 600,
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 5;
// camera.position.x = 2;
// camera.position.y = 2;
// camera.lookAt(new THREE.Vector3(0, 0, 0));
// camera.lookAt(cube2.position);

scene.add(camera);

const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// let time = Date.now();

// const tick = () => {
// 	console.log("tick");
// 	const currentTime = Date.now();
// 	const deltaTime = currentTime - time;
// 	time = currentTime;
// 	cube2.position.x += 0.001 * deltaTime;
// 	renderer.render(scene, camera);
// 	window.requestAnimationFrame(tick);
// };

const clock = new THREE.Clock();

// camera.position.y = 4;
// camera.lookAt(new THREE.Vector3(0, 2, 0));
gsap.to(cube2.position, {
	duration: 2,
	delay: 1,
	x: 3,
});
gsap.to(cube2.position, {
	duration: 2,
	delay: 2,
	x: 0,
});

const tick = () => {
	// const elapsedTime = clock.getElapsedTime();
	// console.log("ela", elapsedTime);
	// cube2.position.y = Math.sin(elapsedTime);
	// cube2.position.x = Math.cos(elapsedTime);
	// camera.position.x = Math.cos(elapsedTime);
	renderer.render(scene, camera);
	window.requestAnimationFrame(tick);
};

tick();
