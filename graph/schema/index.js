const repositoriesList = (org) => {
    return { "query": `query { organization(login: "${ org }") { repositories(last: 100) { nodes { id name } } } }` }
}

module.exports = { repositoriesList }