import * as THREE from 'three'
import woodTexture from './texture1/hexagon-pavers1_normal-ogl.png' // your chosen texture

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1e3a5f); // deep blue background

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(woodTexture);

// Optional: repeat the texture on the torus
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(2, 4);

const material = new THREE.MeshBasicMaterial({
    map: texture
});

// Torus geometry
const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.7, 0.2, 16, 100),
    material
);
scene.add(torus);

function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
