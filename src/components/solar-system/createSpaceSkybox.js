import skybox_px from '../../assets/solar-system-material/skybox/skybox_px.jpg';
import skybox_py from '../../assets/solar-system-material/skybox/skybox_py.jpg';
import skybox_pz from '../../assets/solar-system-material/skybox/skybox_pz.jpg';
import skybox_nx from '../../assets/solar-system-material/skybox/skybox_nx.jpg';
import skybox_ny from '../../assets/solar-system-material/skybox/skybox_ny.jpg';
import skybox_nz from '../../assets/solar-system-material/skybox/skybox_nz.jpg';


const createSpaceSkybox = (BABYLON, scene, size) => {

    let extensions = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"];
    //var files = [skybox_px, skybox_py, skybox_pz, skybox_nx, skybox_ny, skybox_nz];
    let texture = new BABYLON.CubeTexture("../../assets/solar-system-material/skybox/space", scene, extensions, true, 
        [skybox_px, skybox_py, skybox_pz, skybox_nx, skybox_ny, skybox_nz]
    );

    const skybox = BABYLON.MeshBuilder.CreateBox("spaceSkyBox", { size: size })
    const skyboxMaterial = new BABYLON.StandardMaterial("spaceSkyboxMaterial")
    skyboxMaterial.backFaceCulling = false
    skyboxMaterial.disableLighting = true //remove all light reflections
    skyboxMaterial.reflectionTexture = texture //new BABYLON.CubeTexture('../../assets/solar-system-material/skybox/space')
    skyboxMaterial.reflectionTexture.coordinateMode = BABYLON.Texture.SKYBOX_MODE
    skybox.material = skyboxMaterial
    skybox.infinityDistance = true //follow the camera position

    return skybox

}

export default createSpaceSkybox