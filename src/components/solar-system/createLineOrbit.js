const createLineOrbit = (BABYLON, radius, orbitRadius, name) =>{
    
    let orbitPath = [];
    let theta = 0;
    const deltaTheta = 0.1;

    for (let i = 0; i < 70; i++) {
        orbitPath.push(new BABYLON.Vector3(radius * Math.cos(theta), 0, radius * Math.sin(theta)));
        theta += deltaTheta;
    }

    return BABYLON.MeshBuilder.CreateTube(name, { path: orbitPath, radius: orbitRadius});

}

export default createLineOrbit
