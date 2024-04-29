import '../../assets/solar-system-material/sun.jpg';

const createPlanet = (babylon, name, diameter, textureName) =>{
    const planet = babylon.MeshBuilder.CreateSphere(name, {segments: 32, diameter: diameter});

    const material = new babylon.StandardMaterial(name)
    const texture = new babylon.Texture(textureName)
    texture.uScale = -1;
    texture.vScale = -1;
    material.diffuseTexture = texture

    planet.material = material
   
    return planet
}

export default createPlanet;