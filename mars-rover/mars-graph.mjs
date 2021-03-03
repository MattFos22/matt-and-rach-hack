class MarsGraph {

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    getSize(){
        return this.x.toString() + ' ' + this.y.toString();
    }

    getRoverPositions(){
        if(this.rover1)
            return this.rover1.xPosition.toString() + ' ' + this.rover1.yPosition.toString() + ' ' + this.rover1.facing;
        else
            return "No rovers are on the grid";
    }

    addRover(xPosition, yPosition, facing){
        if(xPosition <= 5 || yPosition <= 5)
            this.rover1 = {"xPosition":xPosition, "yPosition":yPosition, "facing":facing}
    }


}

export default MarsGraph;