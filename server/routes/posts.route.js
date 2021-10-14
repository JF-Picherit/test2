module.exports = (express, controller) => {
    const router = express.Router();
    //const auth = require("../middleware/auth.js");
    //var cors = require('cors');

    router.get('/', controller.getAll);

    router.get('/:id', controller.getOne);

    router.post('/', controller.create);

    router.put('/:id', controller.update);

    router.delete('/:id', controller.delete);

    // router.post('/', auth,  controller.createPost);

    // router.patch('/:id', auth, controller.updatePost);

    // router.delete('/:id', auth, controller.deletePost);

    return router;
};


