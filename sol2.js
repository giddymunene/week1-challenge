function speedLimit(speed){
    let points = Math.floor((speed - 70) / 5)

    if(speed <70)
    {return "OK";

    }else if (speed >70 && points> 12)
    {
        return "license suspended";
    }
}

console.log(speedLimit(71))