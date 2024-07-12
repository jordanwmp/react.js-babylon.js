
const TranslationMovimenteAnimation = (
    scene, BABYLON, pivot, planet, 
    animationName, frameRate = 10) => {
    
    // Cria um pivô para o planeta girar em torno do sol
    planet.parent = pivot;
    //pivot.position.x = 0; // Coloca o pivô na posição do sol

    // Cria uma animação para girar o pivô em torno do eixo Y (sol)
    let pivotAnimation = new BABYLON.Animation(
        animationName, 'rotation.y', frameRate, 
        BABYLON.Animation.ANIMATIONTYPE_FLOAT, 
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
    );
    
    let pivotKeys = [];
    pivotKeys.push({
        frame: 0,
        value: 0
    });
    pivotKeys.push({
        frame: 100,
        value: 2 * Math.PI
    });

    pivotAnimation.setKeys(pivotKeys);
    pivot.animations.push(pivotAnimation) // = [pivotAnimation];

    // Animação do pivô (planeta girando em torno do sol)

    //scene.beginAnimation(pivot, 0, 100, true);
    
    /*let planetAnimation = new BABYLON.Animation(
        animationName, 'rotation.y',
        30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

    let keys = [];
    keys.push({
        frame: 0,
        value: 0
    });
    keys.push({
        frame: 100,
        value: 2 * Math.PI
    });
    planetAnimation.setKeys(keys);
    object.animations = [planetAnimation];

    scene.beginAnimation(object, 0, 100, true)*/

}

export default TranslationMovimenteAnimation