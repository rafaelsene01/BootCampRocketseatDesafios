import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name1, filename: path1 } = req.file;

    const { id, url, name, path } = await File.create({
      name: name1,
      path: path1,
      user_id: req.userId,
    });

    return res.json({ id, url, name, path });
  }

  async index(req, res) {
    const file = await File.findAll({
      where: { user_id: req.userId },
      attributes: ['id', 'url', 'name', 'path'],
    });

    return res.json(file);
  }
}

export default new FileController();
