const request = require('request')
const Schema = require('../schema')

const getRepositories = async (token, org) => {
    return await new Promise((resolve, reject) => {
        request({
            headers: {
                'content-type': 'application/json',
                'user-agent': 'node.js',
                'Authorization': `${ token }`
            },
            uri: 'https://api.github.com/graphql',
            body: Schema.repositoriesList(org),
            json: true,
            method: 'POST'
        },(err, response, body) => {
            if(err) {
                reject(err)
            }
            else {
                resolve(body)
            }
        })
    })
}

const patchRepositories = async (token, info) => {
    return await new Promise((resolve, reject) => {
        request({
            headers: {
                'content-type': 'application/json',
                'user-agent': 'node.js',
                'Authorization': `${ token }`                
            },
            uri: `https://api.github.com/repos/${ info.user }/${ info.oldName }`,
            body: { "name": `${ info.newName }` },
            json: true,
            method: 'PATCH'
        },(err, response, body) => {
            if(err) {
                reject(err)
            }
            else {
                resolve(body)
            }
        })
    })
}
    

module.exports = { getRepositories, patchRepositories }