const Post = require('../models').Post;

module.exports = class PostsRepository {

    async getAll() {
      return await new Promise((resolve, reject) => {
        Post.findAll({order: [['createdAt', 'DESC']]}).then((posts) => 
          {
            resolve(posts);
          })
          .catch((err) => 
          { 
            reject(err);
          });
      });
    }

    async getOne(id) {
      return await new Promise((resolve, reject) => {
          Post.findByPk(id).then((post) => 
          {
            resolve(post);
          })
          .catch((err) => 
          { 
            reject(err);
          });
      });
    }

    async create(object) {
      return await new Promise((resolve, reject) => {
          Post.create(object).then((post) => 
          {
            resolve(post);
          })
          .catch((err) => 
          { 
            reject(err);
          });
      });
    }

    async update(id, attributes){
      return await new Promise((resolve, reject) => {
          this.getOne(id).then((classroom) => 
          {
            resolve(
                classroom.update(attributes)
            );
          })
          .catch((err) => 
          { 
            reject(err);
          });
      });
    }

    async delete(id){
      return await new Promise((resolve, reject) => {
          this.getOne(id).then((classroom) => 
          {
            resolve(
                classroom.destroy()
            );
          })
          .catch((err) => 
          { 
            reject(err);
          });
      });
    }


}