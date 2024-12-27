import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const canvas = document.querySelector("canvas.webgl");

const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

const scene = new THREE.Scene();

const plane = new THREE.Mesh(
	new THREE.PlaneGeometry(4, 4),
	new THREE.MeshStandardMaterial({
		color: "#ccc",
	})
);
plane.rotation.x = -Math.PI * 0.5;
scene.add(plane);

const sphere = new THREE.Mesh(
	new THREE.SphereGeometry(0.5),
	new THREE.MeshStandardMaterial({
		color: "red",
	})
);
sphere.position.y = 2;

scene.add(sphere);

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

const tick = () => {
	renderer.render(scene, camera);
	controls.update();
	window.requestAnimationFrame(tick);
};

tick();
