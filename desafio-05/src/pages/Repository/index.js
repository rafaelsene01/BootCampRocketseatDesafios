import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '../../services/api';

import { Loading, Owner, IssueList, SelectStateIssues } from './styles';
import Container from '../../components/Container';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    issuesState: 'all',
  };

  async componentDidMount() {
    const { match } = this.props;
    const { issuesState } = this.setState;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: issuesState,
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  hendleSelectState = async e => {
    e.preventDefault();
    const newState = e.target.value;

    const { repository } = this.state;

    this.setState({
      loading: true,
    });

    const newIssues = await api.get(`/repos/${repository.full_name}/issues`, {
      params: {
        state: newState,
        per_page: 5,
      },
    });

    this.setState({
      issues: newIssues.data,
      loading: false,
      issuesState: newState,
    });
  };

  render() {
    const { repository, issues, loading, issuesState } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositorios</Link>
          <SelectStateIssues
            value={issuesState}
            onChange={this.hendleSelectState}
          >
            <option value="all">ALL</option>
            <option value="open">OPEN</option>
            <option value="closed">CLOSED</option>
          </SelectStateIssues>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
      </Container>
    );
  }
}
