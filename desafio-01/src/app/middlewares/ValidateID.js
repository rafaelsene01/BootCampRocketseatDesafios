import Project from '../models/Project';

export default async (req, res, next) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ error: 'invalid ID' });
  }

  const project = await Project.findByPk(id);

  if (!project) {
    return res.status(400).json({ error: 'Project not exists.' });
  }

  return next();
};
