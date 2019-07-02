import Mail from '../../lib/Mail';

class ToParticipate {
  get key() {
    return 'ToParticipate';
  }

  async handle({ data }) {
    const { meetup, user } = data;

    console.log(user);

    await Mail.sendMail({
      to: `${meetup.user.name} <${meetup.user.email}>`,
      subject: 'Inscrição',
      template: 'toParticipate',
      context: {
        user_event: meetup.user.name,
        user_name: user.name,
        title: meetup.title,
        descricao: meetup.descricao,
        localizacao: meetup.localizacao,
        data: meetup.data,
      },
    });
  }
}

export default new ToParticipate();
