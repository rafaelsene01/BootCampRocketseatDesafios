import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '../../services/api';

import {
  Loading,
  Owner,
  IssueList,
  SelectStateIssues,
  PageButtons,
} from './styles';
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
    page: 1,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { issuesState, page } = this.setState;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: issuesState,
          per_page: 5,
          page,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  // async componentDidUpdat(_, prevStatus) {}

  hendleSelectState = async e => {
    e.preventDefault();
    const newState = e.target.value;

    const { repository, page } = this.state;

    this.setState({
      loading: true,
    });

    const newIssues = await api.get(`/repos/${repository.full_name}/issues`, {
      params: {
        state: newState,
        per_page: 5,
        page,
      },
    });

    this.setState({
      issues: newIssues.data,
      loading: false,
      issuesState: newState,
    });
  };

  hendleChangePage = async e => {
    e.preventDefault();

    const button = e.target.value;

    const { page } = this.state;

    if (button === 'next') {
      this.setState({ page: page + 1 });
    } else if (button === 'before' && page !== 1) {
      this.setState({ page: page - 1 });
    }

    this.setState({
      loading: true,
    });

    const { repository, issuesState } = this.state;
    const newIssues = await api.get(`/repos/${repository.full_name}/issues`, {
      params: {
        state: issuesState,
        per_page: 5,
        page,
      },
    });

    this.setState({
      issues: newIssues.data,
      loading: false,
      issuesState,
    });
  };

  render() {
    const { repository, issues, loading, issuesState, page } = this.state;

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

        <PageButtons page={page}>
          <button
            type="button"
            className="before"
            onClick={this.hendleChangePage}
            value="before"
          >
            Anterios
          </button>
          {page}
          <button type="button" onClick={this.hendleChangePage} value="next">
            Proximo
          </button>
        </PageButtons>
      </Container>
    );
  }
}
