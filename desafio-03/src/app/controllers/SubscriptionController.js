import { Op } from 'sequelize';
import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';
import Subscription from '../models/Subscription';

import Queue from '../../lib/Queue';
import ToParticipate from '../jobs/ToParticipate';

class SubscriptionController {
  async store(req, res) {
    const meetup = await Meetup.findOne({
      where: {
        id: req.params.id,
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

    if (!meetup) {
      return res.status(400).json({ error: 'Sem permissao para se inscrever' });
    }

    const checkSubscription = await Subscription.findOne({
      where: { user_id: req.userId, meetup_id: req.params.id },
    });

    if (checkSubscription) {
      return res
        .status(400)
        .json({ error: 'Voce ja esta inscrito neste evento' });
    }

    const subscription = await Subscription.create({
      user_id: req.userId,
      meetup_id: req.params.id,
    });

    const user = await User.findByPk(req.userId);

    await Queue.add(ToParticipate.key, { meetup, user });

    return res.json(subscription);
  }

  async index(req, res) {
    const subscription = await Subscription.findAll({
      where: { user_id: req.userId },
      attributes: ['id'],
      include: [
        {
          model: Meetup,
          as: 'meetup',
          where: { data: { [Op.gt]: new Date() } },
          attributes: ['id', 'title', 'descricao', 'localizacao', 'data'],
          include: [
            {
              model: User,
              as: 'user',
              attributes: ['name', 'email'],
              include: [
                {
                  model: File,
                  as: 'avatar',
                  attributes: ['url', 'name', 'path'],
                },
              ],
            },
            {
              model: File,
              as: 'imagem',
              attributes: ['url', 'name', 'path'],
            },
          ],
        },
      ],
      order: [['meetup', 'data', 'ASC']],
    });

    return res.json(subscription);
  }
}

export default new SubscriptionController();
