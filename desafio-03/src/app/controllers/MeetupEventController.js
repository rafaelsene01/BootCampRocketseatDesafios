import { Op } from 'sequelize';
import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class MeetupEventController {
  async index(req, res) {
    const meetup = await Meetup.findAll({
      where: {
        user_id: { [Op.ne]: req.userId },
        data: { [Op.gt]: new Date() },
      },
      order: [['data', 'DESC']],
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
          attributes: ['url', 'name', 'path'],
        },
      ],
    });

    return res.json(meetup);
  }
}

export default new MeetupEventController();
