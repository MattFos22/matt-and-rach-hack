import chai from 'chai';
import MarsGraph from '../mars-graph.mjs'
const { expect } = chai;


describe('A mars rover graph', () => {

  it('should create correctly sized graph', () => {
    const graph = new MarsGraph(5, 5);
    expect(graph.getSize()).to.be.equal("5 5");
  })

  it('should be able to add a rover at position 0 0', () => {
    const graph = new MarsGraph(5, 5);
    graph.addRover(0, 0, "N");
    expect(graph.getRoverPositions()).to.be.equal("0 0 N");
  })

  it('not allow you to insert rovers outside of the grid', () => {
    const graph = new MarsGraph(5, 5);
    graph.addRover(6, 6, "N");
    expect(graph.getRoverPositions()).to.be.equal("No rovers are on the grid");
  })


  it('should be able to add multiple rovers in different positions', () => {
    const graph = new MarsGraph(5, 5);
    graph.addRover(0, 0, "N");
    graph.addRover(1, 1, "N");
    expect(graph.getRoverPositions()).to.be.equal("0 0 N, 1 1 N");
  })

})