const express = require('express')
const router = express.Router()
const Request = require('../graph/request')

router.get('/orgs/:org/repos', async (req, res, next) => {
    try {
        const repos = await Request.getRepositories(req.headers.authorization, req.params.org)
        res.status(200).json(repos)
    }
    catch(e) {
        res.status(500).send(e)
    }
})

router.patch('/repos/:user/:oldName', async (req, res, next) => {
    const info = {
        'user': req.params.user,
        'oldName': req.params.oldName,
        'newName': req.body.newName
    }
    try {
        const response = await Request.patchRepositories(req.headers.authorization, info)
        res.status(201).send(response)
    }
    catch(e) {
        res.status(500).send(e)
    }
})

module.exports = router