'use strict'

var gProjects = []
_createProjects()


function getProjects() {
    return gProjects
}

function _createProjects() {
    gProjects.push(_createProject(1, 'Mine Sweeper', 'Mine Sweeper', 'First spirt project', 'images/Mine-sweeper.jpeg', 'publishedAt', 'labels'))
    gProjects.push(_createProject(2, 'Todos', 'Todos list', 'desc', 'images/Mine-sweeper.jpeg', 'publishedAt', 'labels'))
    gProjects.push(_createProject(3, 'Todos', 'Todos list', 'desc', 'images/Mine-sweeper.jpeg', 'publishedAt', 'labels'))
    gProjects.push(_createProject(4, 'Todos', 'Todos list', 'desc', 'images/Mine-sweeper.jpeg', 'publishedAt', 'labels'))
    gProjects.push(_createProject(5, 'Todos', 'Todos list', 'desc', 'images/Mine-sweeper.jpeg', 'publishedAt', 'labels'))
    gProjects.push(_createProject(6, 'Todos', 'Todos list', 'desc', 'images/Mine-sweeper.jpeg', 'publishedAt', 'labels'))
    return gProjects
}

function _createProject(id, nameOfProj, title, desc, url, publishedAt, labels) {
    return {
        id: id,
        name:nameOfProj,
        title: title,
        desc: desc,
        url: url,
        publishedAt: publishedAt,
        labels: ["Matrixes", "keyboard events"]
    }
}



        // _createProject(2, 'Todos', 'Todos list', desc, url, publishedAt, labels),
        // _createProject(2, 'Todos', 'Todos list', desc, url, publishedAt, labels),
        // _createProject(id, nameOfProj, title, desc, url, publishedAt, labels),
        // _createProject(id, nameOfProj, title, desc, url, publishedAt, labels),
        // _createProject(id, nameOfProj, title, desc, url, publishedAt, labels)



// function _createProject(id, nameOfProj, title, desc, url, publishedAt, labels) {
//     // return {
//     //     id: "sokoban",
//     //     name: "Sokoban",
//     //     title: "Better push those boxes",
//     //     desc: "lorem ipsum lorem ipsum lorem ipsum",
//     //     url: "projs/sokoban",
//     //     publishedAt: 1448693940000,
//     //     labels: ["Matrixes", "keyboard events"]
//     // }
//     return 'hi'
// }
