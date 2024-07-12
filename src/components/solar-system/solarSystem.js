import SolarSystemInfo from "./solarSystemInfo";
import createStar from "./createStar"
import TranslationMovimenteAnimation from "../../animations/TranslationMovimenteAnimation";
import CartesianToPolarCoordinate  from '../../utils/cartesianToPolarCoordinate'

import sunTexture from '../../assets/solar-system-material/sun.jpg';
import mercuryTexture from '../../assets/solar-system-material/mercury.jpg';
import venusTexture from '../../assets/solar-system-material/venus.jpg';
import earthTexture from '../../assets/solar-system-material/earth.jpg';
import marsTexture from '../../assets/solar-system-material/mars.jpg';
import jupiterTexture from '../../assets/solar-system-material/jupiter.jpg';
import saturnTexture from '../../assets/solar-system-material/saturn.jpg';
import saturnRingTexture from '../../assets/solar-system-material/saturn_ring_alpha.png';
import uranusTexture from '../../assets/solar-system-material/uranus.jpg';
import neptuneTexture from '../../assets/solar-system-material/neptune.jpg';
import createPlanet from "./createPlanet";
import createSpaceSkybox from "./createSpaceSkybox";

const mercuryDistance = (SolarSystemInfo.sun.diameter/2) + 10
const venusDistance = mercuryDistance + 2 + 14
const earthDistance = venusDistance + 3 + 14
const marsDistance = earthDistance + 4 + 14
const jupiterDistance = marsDistance + 10 + 14
const saturnDistance = jupiterDistance + 17 + 14
const uranusDistance = saturnDistance + 12 + 14
const neptuneDistance = uranusDistance + 11 + 14

const SolarSystem = (BABYLON, scene) =>{
    
    const velocity  = 5
    const pivot = new BABYLON.TransformNode('pivot');
    pivot.position.x = 0

    const { star, starLight } = createStar(BABYLON, "sun", SolarSystemInfo.sun.diameter, sunTexture)
    const sun  = star
    
    const mercury = createPlanet(BABYLON, "mercury", 4, mercuryTexture)  
    const mercuryPosition = CartesianToPolarCoordinate(mercuryDistance, BABYLON.Tools.ToRadians(0))
    mercury.position.x = mercuryPosition.x
    mercury.position.z = mercuryPosition.z
    TranslationMovimenteAnimation(scene, BABYLON, pivot, mercury, "mercuryOrbit", velocity)

    const venus = createPlanet(BABYLON, "venus", 6, venusTexture)
    const venusPosition = CartesianToPolarCoordinate(venusDistance, BABYLON.Tools.ToRadians(180))
    venus.position.x = venusPosition.x 
    venus.position.z = venusPosition.z
    TranslationMovimenteAnimation(scene, BABYLON, pivot, venus, "venusOrbit", velocity)
    

    const earth = createPlanet(BABYLON, "earth", 8, earthTexture)
    const earthPosition = CartesianToPolarCoordinate(earthDistance, BABYLON.Tools.ToRadians(45))
    earth.position.x = earthPosition.x
    earth.position.z = earthPosition.z
    TranslationMovimenteAnimation(scene, BABYLON, pivot, earth, "earthOrbit", velocity)

    const mars = createPlanet(BABYLON, "mars", 7, marsTexture)
    const marsPosition = CartesianToPolarCoordinate(marsDistance, BABYLON.Tools.ToRadians(135))
    mars.position.x  = marsPosition.x
    mars.position.z = marsPosition.z
    TranslationMovimenteAnimation(scene, BABYLON, pivot, mars, "marsOrbit", velocity)

    const jupiter = createPlanet(BABYLON, "jupiter", 20, jupiterTexture)
    const jupiterPosition = CartesianToPolarCoordinate(jupiterDistance, BABYLON.Tools.ToRadians(225))
    jupiter.position.x = jupiterPosition.x
    jupiter.position.z = jupiterPosition.z
    TranslationMovimenteAnimation(scene, BABYLON, pivot, jupiter, "jupiterOrbit", velocity)

    const saturn = createPlanet(BABYLON, "saturn", 17, saturnTexture)
    const saturnPosition = CartesianToPolarCoordinate(saturnDistance, BABYLON.Tools.ToRadians(315))
    saturn.position.x = saturnPosition.x
    saturn.position.z = saturnPosition.z
    TranslationMovimenteAnimation(scene, BABYLON, pivot, saturn, "saturnOrbit", velocity)

    const uranus = createPlanet(BABYLON, "uranus", 12, uranusTexture)
    const uranusPosition = CartesianToPolarCoordinate(uranusDistance, BABYLON.Tools.ToRadians(90))
    uranus.position.x = uranusPosition.x
    uranus.position.z = uranusPosition.z
    TranslationMovimenteAnimation(scene, BABYLON, pivot, uranus, "uranusOrbit", velocity)

    const neptune = createPlanet(BABYLON, "neptune", 11, neptuneTexture)
    const neptunePosition = CartesianToPolarCoordinate(neptuneDistance, BABYLON.Tools.ToRadians(270))
    neptune.position.x = neptunePosition.x
    neptune.position.z = neptunePosition.z
    TranslationMovimenteAnimation(scene, BABYLON, pivot, neptune, "neptuneOrbit", velocity)

    console.log('pivot animation ', pivot)
    scene.beginAnimation(pivot, 0, 100, true);

    const space = createSpaceSkybox(BABYLON, scene, 1000)
}

export default SolarSystem