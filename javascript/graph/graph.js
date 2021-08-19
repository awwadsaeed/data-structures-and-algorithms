'use strict';

class Vertex {
    constructor(value) {
        this.value = value;
    }
}
//--------------------------------------------------------------//
class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex,
            this.weight = weight;
    }
}
//-----------------------------------------------------------//
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    //-----------------------------------------------------------//
    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }
    //-----------------------------------------------------------//
    getNeighbors(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            throw new Error('no neighbors for that vertex');
        }
        return [...this.adjacencyList.get(vertex)];
    }
    //---------------------------------------------------------//
    size(vertex) {
        const queue = [];
        const visited = new Set();

        queue.unshift(vertex);
        visited.add(vertex);

        while (queue.length) {
            const currentVertex = queue.pop();
            const neighbors = this.getNeighbors(currentVertex);

            for (let neighbor of neighbors) {
                const neighborVertex = neighbor.vertex;

                if (visited.has(neighborVertex)) {
                    continue;
                } else {
                    visited.add(neighborVertex);
                    queue.unshift(neighborVertex);
                }
            }
        }
        return visited.size;
    }
    //-----------------------------------------------------------//
    addEdge(startVertex, endVertex, weight = 0) {
        if (!this.adjacencyList.has(startVertex)) {
            throw new Error('Invalid start vertex');
        }
        const adjacencies = this.adjacencyList.get(startVertex);
        adjacencies.push(new Edge(endVertex, weight));
    }
    //------------------------------------------------------------//
    getAll() {
        let result = [];
        for (const [vertex] of this._adjacencyList.entries()) {
         result.push(vertex);
        }
        return result;
    }

}

module.exports={Graph,Vertex,Edge}