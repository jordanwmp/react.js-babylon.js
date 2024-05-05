
const createStar = (
    BABYLON, name, diameter, 
    textureName, 
    emissiveColor = "#FF8000", glowLayerIntensity = 0.35, starLightIntensity = 0.7,
    uScale = -1, vScale = -1
) =>{

    const star = BABYLON.MeshBuilder.CreateSphere(name, {segments: 32, diameter: diameter});

    const material = new BABYLON.StandardMaterial(name)
    const texture = new BABYLON.Texture(textureName)
    texture.uScale = uScale;
    texture.vScale = vScale;
    material.diffuseTexture = texture
    material.emissiveColor = BABYLON.Color3.FromHexString(emissiveColor)
    star.material = material

    const glowLayer = new BABYLON.GlowLayer("glowLayer")
    glowLayer.addIncludedOnlyMesh(star)
    glowLayer.intensity = glowLayerIntensity

    const starLight = new BABYLON.PointLight("starLight", new BABYLON.Vector3(0, 0, 0))
    starLight.intensity = starLightIntensity
    starLight.parent = star
   
    return { star, starLight}
}

export default createStar;