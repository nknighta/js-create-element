const graph = document.getElementById('grah-container');

let graphcontent = {
    "nodes": [
        "1", "2", "3", , "5", "6", "7", "8", "9", "10", "11"
    ],
    "links": [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    ]
};

console.log(graphcontent);

for (let i = 0; i < graphcontent.nodes.length; i++) {
    graph.innerHTML += `<div class="node">
        <div class="incontent-1">
            ${graphcontent.nodes[i] === undefined ? "&nbsp" : graphcontent.nodes[i]}
        </div>
        <div class="incontent-1">
            ${graphcontent.nodes[i] === undefined ? "&nbsp" : graphcontent.nodes[i]}
         </div>
    </div>`;
}