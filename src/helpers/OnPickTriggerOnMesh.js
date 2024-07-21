const OnPickTriggerOnMesh = (BABYLON, scene, camera, mesh, flag, distance) =>{

    mesh.actionManager = new BABYLON.ActionManager(scene)
    mesh.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickTrigger, ()=>{
                flag = !flag
                if(flag){
                    camera.setTarget(mesh.position)
                    camera.radius = distance + 8
                }else{
                    camera.setTarget(new BABYLON.Vector3(0,0,0))
                    camera.radius = 380
                }
            }
        )
    )
}

export default OnPickTriggerOnMesh