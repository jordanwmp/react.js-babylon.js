import react, { useEffect, useRef } from 'react';
import * as BABYLON from '@babylonjs/core';

import SolarSystemInfo from './solar-system/solarSystemInfo';
import createPlanet from './solar-system/createPlanet';

import sunTexture from '../assets/solar-system-material/sun.jpg';
import earthTexture from '../assets/solar-system-material/earth.jpg';

const CreateScene = () => {

    useEffect(() => {

        const canvas = document.getElementById('renderCanvas');
        const engine = new BABYLON.Engine(canvas);
        const scene = new BABYLON.Scene(engine, true);
        //scene.useRightHandedSystem = true
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 20, new BABYLON.Vector3(0, 0, 0), scene);
        camera.attachControl(canvas, true);

        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

        //SolarSystemInfo.sun.diameter
        //const sun = createPlanet(BABYLON, "sun", 6, sunTexture)
        const earth = createPlanet(BABYLON, "earth", 6, earthTexture)
        //earth.position.x = 5

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