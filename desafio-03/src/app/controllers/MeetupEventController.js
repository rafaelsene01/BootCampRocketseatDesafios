import { Op } from 'sequelize';
import { isBefore, startOfDay, endOfDay, parseISO } from 'date-fns';
import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class MeetupEventController {
  async index(req, res) {
    const page = req.query.page || 1;

    const where = {
      data: { [Op.gt]: new Date() },
    };

    if (req.query.date) {
      const searchDate = parseISO(req.query.date);

      where.data = {
        [Op.between]: [startOfDay(searchDate), endOfDay(searchDate)],
      };
    }

    const meetup = await Meetup.findAll({
      where,
      limit: 10,
      offset: (page - 1) * 10,
      order: [['data', 'ASC']],
      attributes: ['id', 'title', 'descricao', 'localizacao', 'data'],
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name', 'email'],
          include: [
            { model: File, as: 'avatar', attributes: ['url', 'name', 'path'] },
          ],
        },
        {
          model: File,
          as: 'imagem',
          attributes: ['id', 'url', 'name', 'path'],
        },
      ],
    });

    return res.json(meetup);
  }
}

export default new MeetupEventController();
