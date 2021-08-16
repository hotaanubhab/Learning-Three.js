

// Scene
const scene = new THREE.Scene()


// Red cube
const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 ,2 ,69);
const materialsLib = [
    new THREE.MeshStandardMaterial( { color: 0xff4400, metalness: 0.9, roughness: 0.2, name: 'orange' } ),
    new THREE.MeshStandardMaterial( { color: 0x001166, metalness: 0.9, roughness: 0.2, name: 'blue' } ),
    new THREE.MeshStandardMaterial( { color: 0x990000, metalness: 0.9, roughness: 0.2, name: 'red' } ),
    new THREE.MeshStandardMaterial( { color: 0x000000, metalness: 0.9, roughness: 0.5, name: 'black' } ),
    new THREE.MeshStandardMaterial( { color: 0xffffff, metalness: 0.9, roughness: 0.5, name: 'white' } ),
    new THREE.MeshStandardMaterial( { color: 0x555555, metalness: 1.0, roughness: 0.2, name: 'metallic' } )
];
//const material = new THREE.MeshStandardMaterial({color: 0xff000cc,wireframe:false})
const material = materialsLib[1]
const torus = new THREE.Mesh( geometry, material );
scene.add( torus );

const pointlight = new THREE.PointLight(0x001166,20 ,100);
pointlight.position.set(0,0,1);
scene.add(pointlight);

//scene.add(lighthelper)


//Sizes 
const sizes = {
    width:(window.innerWidth-10),
    height:(window.innerHeight-25)
}

//Camera
const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height,0.1,1000)
camera.position.z = 30

scene.add(camera)

//Renderer
const canvas = document.querySelector('.webgl')

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width,sizes.height)



function animate()
{
    
    requestAnimationFrame( animate )
    torus.rotation.x += 0.01;
    torus.rotation.y -= 0.01;
   

    renderer.render(scene,camera)
}

animate()
