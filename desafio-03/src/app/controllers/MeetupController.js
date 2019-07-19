import * as Yup from 'yup';
import { isBefore, format, startOfHour } from 'date-fns';
import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class MeetupController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      descricao: Yup.string().required(),
      localizacao: Yup.string().required(),
      data: Yup.number().required(),
      imagem_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { data, title, descricao, localizacao, imagem_id } = req.body;

    const hourStart = startOfHour(data);

    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Datas antigas nao e permitido' });
    }

    const formatedDate = format(data, "yyyy-MM-dd'T'HH:mm:ssxxx");

    const meetup = await Meetup.create({
      title,
      descricao,
      localizacao,
      user_id: req.userId,
      data: formatedDate,
      imagem_id,
    });

    return res.json(meetup);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      descricao: Yup.string().required(),
      localizacao: Yup.string().required(),
      data: Yup.number().required(),
      imagem_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const checkMeetup = await Meetup.findOne({
      where: {
        id: req.params.id,
        user_id: req.userId,
      },
    });

    if (!checkMeetup) {
      return res
        .status(401)
        .json({ error: 'Você não tem permissão para edição' });
    }

    if (isBefore(checkMeetup.data, new Date())) {
      return res
        .status(400)
        .json({ error: 'Não e permitido modificar eventos que a aconteceram' });
    }

    const { data, title, descricao, localizacao, imagem_id } = req.body;

    const hourStart = startOfHour(data);

    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Datas antigas nao e permitido' });
    }

    const formatedDate = format(data, "yyyy-MM-dd'T'HH:mm:ssxxx");

    const update = await checkMeetup.update({
      title,
      descricao,
      localizacao,
      user_id: req.userId,
      data: formatedDate,
      imagem_id,
    });

    return res.json(update);
  }

  async index(req, res) {
    const page = req.query.page || 1;

    const meetup = await Meetup.findAll({
      where: { user_id: req.userId },
      limit: 10,
      offset: (page - 1) * 10,
      order: [['data', 'DESC']],
      attributes: ['id', 'title', 'descricao', 'localizacao', 'data'],
      include: [
        {
          model: File,
          as: 'imagem',
          attributes: ['url', 'name', 'path'],
        },
      ],
    });
    return res.json(meetup);
  }

  async delete(req, res) {
    const checkMeetup = await Meetup.findOne({
      where: {
        id: req.params.id,
        user_id: req.userId,
      },
      attributes: ['id', 'title', 'descricao', 'localizacao', 'data'],
      include: [
        {
          model: File,
          as: 'imagem',
          attributes: ['url', 'name', 'path'],
        },
      ],
    });

    if (!checkMeetup) {
      return res
        .status(401)
        .json({ error: 'Você não tem permissão para deletar' });
    }
    await checkMeetup.destroy();
    return res.json(checkMeetup);
  }
}

export default new MeetupController();
