// Grab the container from the HTML
const container = document.getElementById('car-viewer');

// 1. Setup Scene, Camera, and Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// 2. Add Basic Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(10, 20, 10);
scene.add(directionalLight);

// 3. Add a Placeholder Geometry (Until you load your car model)
const geometry = new THREE.BoxGeometry(2, 1, 4);
const material = new THREE.MeshStandardMaterial({ 
    color: 0x00ffcc, 
    wireframe: true 
});
const carPlaceholder = new THREE.Mesh(geometry, material);
scene.add(carPlaceholder);

camera.position.z = 5;
camera.position.y = 2;
camera.lookAt(0, 0, 0);

// 4. The Rendering Loop (Handles rotation and updates)
function animate() {
    requestAnimationFrame(animate);
    
    // Slowly rotate the placeholder
    carPlaceholder.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}

// Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
});

// Start the loop
animate();
