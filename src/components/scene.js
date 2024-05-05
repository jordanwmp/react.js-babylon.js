import react, { useEffect, useRef } from 'react';
import * as BABYLON from '@babylonjs/core';

import SolarSystemInfo from './solar-system/solarSystemInfo';
import createPlanet from './solar-system/createPlanet';

import sunTexture from '../assets/solar-system-material/sun.jpg';
import mercuryTexture from '../assets/solar-system-material/mercury.jpg';
import earthTexture from '../assets/solar-system-material/earth.jpg';
import createLineOrbit from './solar-system/createLineOrbit';
import saturnTexture from '../assets/solar-system-material/saturn.jpg';
import saturnRingTexture from '../assets/solar-system-material/saturn_ring_alpha.png';
import createPlanetRing from './solar-system/createRing';
import createStar from './solar-system/createStar';
import createSpaceSkybox from './solar-system/createSpaceSkybox';

const CreateScene = () => {

    useEffect(() => {

        const canvas = document.getElementById('renderCanvas');
        const engine = new BABYLON.Engine(canvas, true);
        const scene = new BABYLON.Scene(engine);
        //scene.clearColor = new BABYLON.Color3(0.25, 0.25, 0.25);
        //scene.useRightHandedSystem = true
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 16, new BABYLON.Vector3(0, 0, 0), scene);
        camera.maxZ = 130
        camera.minZ = 3
        camera.attachControl(canvas, true);

        //const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

        /*const saturn = createPlanet(BABYLON, "saturn", 2, saturnTexture)
        const saturnRings = createPlanetRing(BABYLON, 5, 3, 0, saturnRingTexture)
        saturnRings.parent = saturn
        saturn.position.x = -3*/

        /*

        const mercury = createPlanet(BABYLON, 'mercury', 1.5, mercuryTexture)
        mercury.position. x = 6

        const shadowGenerator = new BABYLON.ShadowGenerator(1024, light)
        shadowGenerator.addShadowCaster(mercury, true)

        mercury.receiveShadows = true*/

        /*var extensions = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"];
        var files = [skybox_px, skybox_py, skybox_pz, skybox_nx, skybox_ny, skybox_nz];

        var texture = new BABYLON.CubeTexture("", scene, extensions);

        for (var i = 0; i < 6; i++) {
            texture._texture  //_textures[i] = new BABYLON.Texture(files[i], scene);
        }*/

        const { star, starLight} = createStar(BABYLON, "sun", 4, sunTexture)
        const sun = star
        const light = starLight
        //sun.position.x = -6
        const skybox = createSpaceSkybox(BABYLON, scene, 80)

        const defaultPipeline = new BABYLON.DefaultRenderingPipeline("default", true, scene, [scene.activeCamera]);
        defaultPipeline.samples = 2;

        engine.runRenderLoop(() => {
            scene.render()
        })

        onResize(scene)

    }, [])

    return <canvas id='renderCanvas'></canvas>

    //return scene;
}

const onResize = (scene) => {
    window.addEventListener('resize', () => {
        console.log('resize event trigger')
        scene.getEngine().resize()
    })
}

export default CreateScene;