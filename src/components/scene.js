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

const CreateScene = () => {

    useEffect(() => {

        const canvas = document.getElementById('renderCanvas');
        const engine = new BABYLON.Engine(canvas, true);
        const scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color3(0.25, 0.25, 0.25);
        //scene.useRightHandedSystem = true
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 16, new BABYLON.Vector3(0, 0, 0), scene);
        camera.maxZ = 20
        camera.minZ = 3
        camera.attachControl(canvas, true);

        //const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

        /*const saturn = createPlanet(BABYLON, "saturn", 2, saturnTexture)
        const saturnRings = createPlanetRing(BABYLON, 5, 3, 0, saturnRingTexture)
        saturnRings.parent = saturn
        saturn.position.x = -3*/

        const { star, starLight} = createStar(BABYLON, "sun", 4, sunTexture)
        const sun = star
        const light = starLight

        const mercury = createPlanet(BABYLON, 'mercury', 1.5, mercuryTexture)
        mercury.position. x = 6

        const shadowGenerator = new BABYLON.ShadowGenerator(1024, light)
        shadowGenerator.addShadowCaster(mercury, true)

        mercury.receiveShadows = true

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