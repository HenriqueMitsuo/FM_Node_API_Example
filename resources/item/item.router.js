import express from 'express'

const router = express.Router();

const mock = (req, res) => {

    res.send({ message: 'hello' })
}

router.route('/')
    .get(mock)
    .post(mock);

router.route('/:id')
    .get(mock)
    .put(mock)
    .delete(mock);

export default router;

