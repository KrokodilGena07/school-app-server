const {Post} = require('../../models');
const uuid = require('uuid');

class PostsService {
    async get() {
        return Post.findAll();
    }

    async create(title, body) {
        const id = uuid.v4();
        return await Post.create({id, title, body});
    }
}

module.exports = new PostsService();