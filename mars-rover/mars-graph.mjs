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
            if(!this.rover2){
                return this.rover1.xPosition.toString() + ' ' + this.rover1.yPosition.toString() + ' ' + this.rover1.facing;
            } else{
                return this.rover1.xPosition.toString() + ' ' + this.rover1.yPosition.toString() + ' ' + this.rover1.facing
                    + ', ' + this.rover2.xPosition.toString() + ' ' + this.rover2.yPosition.toString() + ' ' + this.rover2.facing;
            }
            
        else
            return "No rovers are on the grid";
    }

    addRover(xPosition, yPosition, facing){
        if(xPosition <= 5 || yPosition <= 5){
            if(!this.rover1){
                this.rover1 = {"xPosition":xPosition, "yPosition":yPosition, "facing":facing}
            } else{
                this.rover2= {"xPosition":xPosition, "yPosition":yPosition, "facing":facing}
            }
            
            
        }
    }




}

export default MarsGraph;