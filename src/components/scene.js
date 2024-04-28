import react, { useEffect, useRef } from 'react';
import * as BABYLON from '@babylonjs/core';

const CreateScene = () => {

    useEffect(() => {
        const canvas = document.getElementById('renderCanvas');
        const engine = new BABYLON.Engine(canvas);
        const scene = new BABYLON.Scene(engine, true);
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0), scene);
        camera.attachControl(canvas, true);

        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

        const box = BABYLON.MeshBuilder.CreateBox("box", {}, scene);

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