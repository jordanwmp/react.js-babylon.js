import react, { useEffect, useRef } from 'react';
import * as BABYLON from '@babylonjs/core';
import SolarSystem from './solar-system/solarSystem';


const CreateScene = () => {

    useEffect(() => {

        const canvas = document.getElementById('renderCanvas');
        const engine = new BABYLON.Engine(canvas, true);
        const scene = new BABYLON.Scene(engine);
        //scene.clearColor = new BABYLON.Color3(0.25, 0.25, 0.25);
        //scene.useRightHandedSystem = true
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 380, new BABYLON.Vector3(0, 0, 0), scene);
        camera.maxZ = 1500
        camera.minZ = 3
        camera.attachControl(canvas, true);

        const solarSystem = SolarSystem(BABYLON, scene)


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