const postsService = require('./postsService');

class PostsController {
    async create(req, res, next) {
        try {
            const {title, body} = req.body;
            const data = await postsService.create(title, body);
            res.json(data);
        } catch (e) {
            next(e);
        }
    }

    async get(req, res, next) {
        try {
            const data = await postsService.get();
            res.json(data);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new PostsController();