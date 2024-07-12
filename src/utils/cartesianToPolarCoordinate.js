const CartesianToPolarCoordinate = (distance, angle) =>{

    return {
        x: distance * Math.cos(angle),
        z: distance * Math.sin(angle)
    }

}

export default CartesianToPolarCoordinate