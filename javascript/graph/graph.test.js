'use strict';

const graph = require('./graph');


describe('Testing graph methods', () => {

  it('Vertex can be successfully added to the graph', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    test.addVertex(one);

 
    expect(test.adjacencyList).toBeTruthy();
    expect(test.adjacencyList.get(one)).toEqual([]);
  });

  it('An edge can be successfully added to the graph', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    const two = new graph.Vertex('two');
    test.addVertex(one);
    test.addVertex(two);
    test.addEdge(one, two);
    const testValue = test.adjacencyList.get(one);
    const expectedValue = [{ 'vertex': { 'value': 'two' }, 'weight': 0 }];

  
    expect(testValue).toEqual(expectedValue);
  });

  it('A collection of all vertices can be properly retrieved from the graph', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    const two = new graph.Vertex('two');
    test.addVertex(one);
    test.addVertex(two);
    test.addEdge(one, two);
    test.addEdge(two, one);
    const testValue = test.adjacencyList.get(one);
    const testValueTwo = test.adjacencyList.get(two);
    const expectedValue = [{ 'vertex': { 'value': 'two' }, 'weight': 0 }];
    const expectedValueTwo = [{ 'vertex': { 'value': 'one' }, 'weight': 0 }];


    expect(testValue).toEqual(expectedValue);
    expect(testValueTwo).toEqual(expectedValueTwo);
  });

  it('All appropriate neighbors can be retrieved from the graph', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    const two = new graph.Vertex('two');
    const three = new graph.Vertex('three');
    test.addVertex(one);
    test.addVertex(two);
    test.addVertex(three);
    test.addEdge(one, two);
    test.addEdge(one, three);

    const testValue = test.getNeighbors(one);
    const expectedValue = [{ 'vertex': { 'value': 'two' }, 'weight': 0 }, { 'vertex': { 'value': 'three' }, 'weight': 0 }];
  

    expect(testValue).toEqual(expectedValue);
  });

  it('Neighbors are returned with the weight between nodes included', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    const two = new graph.Vertex('two');
    const three = new graph.Vertex('three');
    test.addVertex(one);
    test.addVertex(two);
    test.addVertex(three);
    test.addEdge(one, two);
    test.addEdge(one, three);
    const testValue = test.getNeighbors(one);
    const testWeight = testValue[0]['weight'];
    const testWeightTwo = testValue[1]['weight'];
  

    expect(testWeight).toEqual(0);
    expect(testWeightTwo).toEqual(0);
  });

  it('The proper size is returned, representing the number of nodes in the graph', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    const two = new graph.Vertex('two');
    test.addVertex(one);
    test.addVertex(two);
    test.addEdge(one, two);

    expect(test.size(one)).toEqual(2);
  });

  it('A graph with only one node and edge can be properly returned', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    test.addVertex(one);
    test.addEdge(one);
    const testValue = test.adjacencyList.get(one);
    const expectedValue = [{ 'vertex': undefined, 'weight': 0 }];


    expect(testValue).toEqual(expectedValue);
  });

  it('An empty graph properly returns null', () => {
    let test = new graph.Graph();
    let testValue = test.adjacencyList.values();
    expect(testValue).not.toBeUndefined();
  });
});