const createPlanetRing = (BABYLON, outerDiameter, innerDiameter, xRotation, texture) =>{

    let ringsOuter = BABYLON.MeshBuilder.CreateCylinder('ringsOuter', { diameter: outerDiameter, height: 0.01, tessellation: 100 });
    ringsOuter.rotation.x = Math.PI / 2; // Roda o cilindro para que a abertura fique para cima.

    let ringsInner = BABYLON.MeshBuilder.CreateCylinder('ringsInner', { diameter: innerDiameter, height: 0.01, tessellation: 100 });
    ringsInner.rotation.x = Math.PI / 2;

    let outerCSG = BABYLON.CSG.FromMesh(ringsOuter);
    let innerCSG = BABYLON.CSG.FromMesh(ringsInner);

    let ringsCSG = outerCSG.subtract(innerCSG);

    let saturnRings = ringsCSG.toMesh("rings", new BABYLON.StandardMaterial("texture1"));
    saturnRings.rotation.x = xRotation

    let ringsMaterial = new BABYLON.StandardMaterial("ringsMaterial");
    ringsMaterial.diffuseTexture = new BABYLON.Texture(texture);
    //ringsMaterial.backFaceCulling = false;
    saturnRings.material = ringsMaterial;

    ringsInner.isVisible = false
    ringsOuter.isVisible = false

    return saturnRings
}

export default createPlanetRing