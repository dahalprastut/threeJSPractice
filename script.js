import * as THREE from "three";

const canvas = document.querySelector("canvas.webgl");
// we need 4 things to create something:
// 1. Scene
const scene = new THREE.Scene();

// 2. Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
	color: "red",
});
const mesh = new THREE.Mesh(geometry, material);
console.log("mes", mesh);

scene.add(mesh);

// 3. Camera
const sizes = {
	width: 800,
	height: 600,
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 5;
camera.position.x = 2;
camera.position.y = 2;
scene.add(camera);

// 4. Renderer
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
