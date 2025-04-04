import * as THREE from "three";
import GUI from "lil-gui";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

const canvas = document.querySelector("canvas.webgl");

const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

const scene = new THREE.Scene();
const gui = new GUI();

const updateAllMaterials = () => {
	scene.traverse((child) => {
		if (child.isMesh && child.material.isMeshStandardMaterial) {
			child.castShadow = true;
			child.receiveShadow = true;
		}
	});
};

/* Environment map */

const rgbeLoader = new RGBELoader();
rgbeLoader.load("./static/textures/environmentMap/0/2k.hdr", (env) => {
	env.mapping = THREE.EquirectangularReflectionMapping;
	scene.environment = env;
	scene.background = env;
	scene.environmentIntensity = 1;
	scene.environmentIntensity = 1;
});

gui.add(scene, "environmentIntensity").min(0).max(10).step(0.001);
gui.add(scene, "backgroundIntensity").min(0).max(10).step(0.001);

const gltfLoader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("./static/draco/");
gltfLoader.setDRACOLoader(dracoLoader);
gltfLoader.load("./static/models/hamburger.glb", (gltf) => {
	gltf.scene.scale.set(0.22, 0.22, 0.22);
	scene.add(gltf.scene);
	updateAllMaterials();
});

const textureLoader = new THREE.TextureLoader();
const floorColorTexture = textureLoader.load(
	"./static/textures/house/floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_diff_1k.jpg"
);
const floorARMTexture = textureLoader.load(
	"./static/textures/house/floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_arm_1k.jpg"
);
const floorDispTexture = textureLoader.load(
	"./static/textures/house/floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_disp_1k.jpg"
);
const floorNormTexture = textureLoader.load(
	"./static/textures/house/floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_nor_gl_1k.jpg.jpg"
);

const wallColorTexture = textureLoader.load(
	"./static/textures/house/wall/castle_brick_broken_06_1k/castle_brick_broken_06_diff_1k.jpg"
);
const wallARMTexture = textureLoader.load(
	"./static/textures/house/wall/castle_brick_broken_06_1k/castle_brick_broken_06_arm_1k.jpg"
);
const wallNormTexture = textureLoader.load("./static/textures/house/wall/castle_brick_broken_06_nor_gl_1k.jpg/");

floorColorTexture.colorSpace = THREE.SRGBColorSpace;
wallColorTexture.colorSpace = THREE.SRGBColorSpace;

// Floor

const floor = new THREE.Mesh(
	new THREE.PlaneGeometry(5, 5, 100, 100),
	new THREE.MeshStandardMaterial({
		map: floorColorTexture,
		aoMap: floorARMTexture,
		roughnessMap: floorARMTexture,
		metalnessMap: floorARMTexture,
		normalMap: floorNormTexture,
		displacementMap: floorDispTexture,
		displacementBias: -0.18,
		displacementScale: 0.19,
	})
);

floor.rotation.x = -0.5 * Math.PI;
scene.add(floor);

// Wall

const wall = new THREE.Mesh(
	new THREE.PlaneGeometry(5, 5),
	new THREE.MeshStandardMaterial({
		map: wallColorTexture,
		aoMap: wallARMTexture,
		metalnessMap: wallARMTexture,
		roughnessMap: wallARMTexture,
		normalMap: wallNormTexture,
	})
);

wall.position.z = -2.5;
wall.position.y = 2.46;

scene.add(wall);

const ambientLight = new THREE.AmbientLight("#fff", 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight("#fff", 5);
directionalLight.castShadow = true;
directionalLight.shadow.camera.far = 20;
directionalLight.position.set(-10, 5, 6.07);
scene.add(directionalLight);
directionalLight.target.position.set(0, 4, 0);
directionalLight.shadow.bias = 0.02;
directionalLight.shadow.normalBias = -0.01;
directionalLight.shadow.mapSize.set(256, 256);
directionalLight.target.updateWorldMatrix();
// const directinalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
// scene.add(directinalLightCameraHelper);
gui.add(directionalLight.position, "x").min(-10).max(10).step(0.01);
gui.add(directionalLight.position, "z").min(-10).max(10).step(0.01);

gui.add(directionalLight.shadow, "bias").min(-0.05).max(0.05).step(0.01);
gui.add(directionalLight.shadow, "normalBias").min(-0.05).max(0.05).step(0.01);

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 5;
camera.position.y = 1;
scene.add(camera);

const controls = new OrbitControls(camera, canvas);
controls.update();

const renderer = new THREE.WebGLRenderer({
	canvas,
	antialias: true,
});
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;

gui.add(renderer, "toneMapping", {
	NO: THREE.NoToneMapping,
	Linear: THREE.LinearToneMapping,
	Rein: THREE.ReinhardToneMapping,
	Cine: THREE.CineonToneMapping,
	aces: THREE.ACESFilmicToneMapping,
});
gui.add(renderer, "toneMappingExposure").min(0).max(10).step(0.001);

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const tick = () => {
	renderer.render(scene, camera);
	controls.update();
	window.requestAnimationFrame(tick);
};

tick();
