export class ListMatchModel{
    id: number;
    dateMatch: string;
    scoreLocal: number;
    scoreVisitor: number;
    teamLocal: number;
    teamvisitor: number;
    stateMatch: string;
    state_id: number;

    constructor(){
    	this.dateMatch='';
    	this.scoreLocal=0;
    	this.scoreVisitor=0;
    	this.teamLocal=0;
    	this.teamvisitor=0;
        this.stateMatch='';
        this.state_id=0;
    }
}