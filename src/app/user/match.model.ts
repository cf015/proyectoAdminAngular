export class MatchModel{

    dateMatch: string;
    scoreLocal: number;
    scoreVisitor: number;
    teamLocal: number;
    teamVisitor: number;
    state_id: number

    constructor(){
    	this.dateMatch='';
    	this.scoreLocal=0;
    	this.scoreVisitor=0;
    	this.teamLocal=0;
    	this.teamVisitor=0;
        this.state_id=0
    }
}