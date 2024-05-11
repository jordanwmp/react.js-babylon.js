import SolarSystemInfo from "./solarSystemInfo";
import createStar from "./createStar"

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
    
    const { star, starLight } = createStar(BABYLON, "sun", SolarSystemInfo.sun.diameter, sunTexture)
    const sun  = star
    
    const mercury = createPlanet(BABYLON, "mercury", 4, mercuryTexture)  
    mercury.position.x = mercuryDistance

    const venus = createPlanet(BABYLON, "venus", 6, venusTexture)
    venus.position.x = venusDistance

    const earth = createPlanet(BABYLON, "earth", 8, earthTexture)
    earth.position.x = earthDistance

    const mars = createPlanet(BABYLON, "mars", 7, marsTexture)
    mars.position.x  = marsDistance

    const jupiter = createPlanet(BABYLON, "jupiter", 20, jupiterTexture)
    jupiter.position.x = jupiterDistance

    const saturn = createPlanet(BABYLON, "saturn", 17, saturnTexture)
    saturn.position.x = saturnDistance

    const uranus = createPlanet(BABYLON, "uranus", 12, uranusTexture)
    uranus.position.x = uranusDistance

    const neptune = createPlanet(BABYLON, "neptune", 11, neptuneTexture)
    neptune.position.x = neptuneDistance

    const space = createSpaceSkybox(BABYLON, scene, 1000)
}

export default SolarSystem