import * as Yup from 'yup';
import Project from '../models/Project';

class UserController {
  async store(req, res) {
    if (req.params.id) {
      const project = await Project.findOne({
        where: { id: req.params.id },
      });

      if (!req.body.tasks) {
        return res.status(400).json({ error: 'Validation fails' });
      }

      const { id, title, tasks } = await project.update({
        tasks: project.tasks.concat(req.body.tasks),
      });

      return res.json({ id, title, tasks });
    }
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      tasks: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id, title, tasks } = await Project.create(req.body);

    return res.json({ id, title, tasks });
  }

  async index(req, res) {
    const project = await Project.findAll();

    return res.json(project);
  }

  async update(req, res) {
    const project = await Project.findOne({
      where: { id: req.params.id },
    });

    const { id, title, tasks } = await project.update({
      title: req.body.title,
    });

    return res.json({ id, title, tasks });
  }

  async delete(req, res) {
    const project = await Project.findOne({
      where: { id: req.params.id },
    });

    await project.destroy(req.params.id);

    return res.json(project);
  }
}

export default new UserController();
