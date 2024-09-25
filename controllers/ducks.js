// controllers/ducks.js
// Import our Duck model
import Duck from '../models/Duck.js';
import User from '../models/User.js';

const getDucks = async (req, res) => {
    try {
        const ducks = await Duck.findAll({ include: User });
        res.json(ducks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createDuck = async (req, res) => {
    try {
        const {
            body: { userId, name, imgUrl, quote },
        } = req;

        if (!userId || !name || !imgUrl)
            return res
                .status(400)
                .json({ error: 'userId, name, and imgUrl are required' });

        const duck = await Duck.create(req.body);

        res.json(duck);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getDuckById = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;
        const duck = await Duck.findByPk(id);
        if (!duck) return res.status(404).json({ error: 'Duck not found' });
        res.json(duck);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateDuck = async (req, res) => {
    try {
        const { name, imgUrl, quote } = req.body;
        const { id } = req.params;

        if (!name || !imgUrl || !quote)
            return res
                .status(400)
                .json({ error: 'name, quote, and imgUrl are required' });

        const duck = await Duck.findByPk(id);

        if (!duck) return res.status(404).json({ error: 'Duck not found' });

        await duck.update({ name, imgUrl, quote });
        res.json(duck);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteDuck = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;

        const duck = await Duck.findByPk(id);

        if (!duck) return res.status(404).json({ error: 'Duck not found' });

        await duck.destroy();
        res.json({ message: 'Duck deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { getDucks, createDuck, getDuckById, updateDuck, deleteDuck };
