import '../../assets/solar-system-material/sun.jpg';

const createPlanet = (BABYLON, name, diameter, textureName, uScale = -1, vScale = -1) =>{
    const planet = BABYLON.MeshBuilder.CreateSphere(name, {segments: 32, diameter: diameter});

    const material = new BABYLON.StandardMaterial(name)
    const texture = new BABYLON.Texture(textureName)
    texture.uScale = uScale;
    texture.vScale = vScale;
    material.diffuseTexture = texture

    planet.material = material
   
    return planet
}

export default createPlanet;