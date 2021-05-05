import { encode } from 'base-64';
import fetch from 'node-fetch';

class Traffic {
  /**
   * @param user - The User of "repo"
   * @param repo - The name of the Repo
   * @param repo - The Username with Push Access to "repo"
   * @param password - The Access Token of "username"
   * @returns the total number of clones and breakdown per day for the last 14 days as JSON object
   */
  clones(user: string, repo: string, username: string, password: string): Promise<ClonesType> {
    return fetch(`https://api.github.com/repos/${user}/${repo}/traffic/clones`, {
      method: 'GET',
      headers: { Authorization: 'Basic ' + encode(`${username}:${password}`) }
    })
      .then((value) => value.json())
      .catch((err) => Error(err));
  }
  /**
   * @param user - The User of "repo"
   * @param repo - The name of the Repo
   * @param repo - The Username with Push Access to "repo"
   * @param password - The Access Token of "username"
   * @returns top 10 popular contents over the last 14 days as JSON object
   */
  popularPaths(
    user: string,
    repo: string,
    username: string,
    password: string
  ): Promise<PathsType[]> {
    return fetch(`https://api.github.com/repos/${user}/${repo}/traffic/popular/paths`, {
      method: 'GET',
      headers: { Authorization: 'Basic ' + encode(`${username}:${password}`) }
    })
      .then((value) => value.json())
      .catch((err) => Error(err));
  }
  /**
   * @param user - The User of "repo"
   * @param repo - The name of the Repo
   * @param repo - The Username with Push Access to "repo"
   * @param password - The Access Token of "username"
   * @returns the top 10 referrers over the last 14 days as JSON object
   */
  popularReferrers(
    user: string,
    repo: string,
    username: string,
    password: string
  ): Promise<ReferrerType[]> {
    return fetch(`https://api.github.com/repos/${user}/${repo}/traffic/popular/referrers`, {
      method: 'GET',
      headers: { Authorization: 'Basic ' + encode(`${username}:${password}`) }
    })
      .then((value) => value.json())
      .catch((err) => Error(err));
  }
  /**
   * @param user - The User of "repo"
   * @param repo - The name of the Repo
   * @param repo - The Username with Push Access to "repo"
   * @param password - The Access Token of "username"
   * @returns  total number of views and breakdown per day for the last 14 days as JSON object
   */
  views(user: string, repo: string, username: string, password: string): Promise<ViewsType> {
    return fetch(`https://api.github.com/repos/${user}/${repo}/traffic/views`, {
      method: 'GET',
      headers: { Authorization: 'Basic ' + encode(`${username}:${password}`) }
    })
      .then((value) => value.json())
      .catch((err) => Error(err));
  }
}
/**
 * @param user - The User
 * @returns public repositories for the specified user as JSON object
 */
async function Repos(user: string): Promise<ReposType[]> {
  return fetch(`https://api.github.com/users/${user}/repos?page=1&type=all&per_page=100`)
    .then((value) => value.json())
    .catch((err) => Error(err));
}

/**
 * @param user - The User of "repo"
 * @param repo - The name of the Repo
 * @returns the last year of commit activity grouped by week as JSON object
 */
async function CommitActivity(user: string, repo: string): Promise<CommitActivityType[]> {
  return fetch(`https://api.github.com/repos/${user}/${repo}/stats/commit_activity`)
    .then((value) => value.json())
    .catch((err) => Error(err));
}

/**
 * @param user - The User of "repo"
 * @param repo - The name of the Repo
 * @returns the hourly commit count for each day as JSON object
 */
async function PunchCard(user: string, repo: string): Promise<PunchCardType[]> {
  return fetch(`https://api.github.com/repos/${user}/${repo}/stats/punch_card`)
    .then((value) => value.json())
    .catch((err) => Error(err));
}

export { Traffic, Repos, CommitActivity, PunchCard };

export interface ClonesType {
  count: number;
  uniques: number;
  clones?: ClonesEntity[] | null;
}
export interface ClonesEntity {
  timestamp: string;
  count: number;
  uniques: number;
}

export interface PathsType {
  path: string;
  title: string;
  count: number;
  uniques: number;
}

export interface ReferrerType {
  referrer: string;
  count: number;
  uniques: number;
}

export interface ReposType {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description?: string | null;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage?: string | null;
  /** size in kb */
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language?: string | null;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url?: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license?: License | null;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}
export interface Owner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
export interface License {
  key: string;
  name: string;
  spdx_id: string;
  url?: string | null;
  node_id: string;
}

export interface ViewsType {
  count: number;
  uniques: number;
  views?: ViewsEntity[] | null;
}
export interface ViewsEntity {
  timestamp: string;
  count: number;
  uniques: number;
}

export interface CommitActivityType {
  total: number;
  week: number;
  /** days array is a group of commits per day, starting on Sunday */
  days: number[];
}

interface PunchCardType {
  /** 0-6: Sunday - Saturday */
  0: number;
  /** 0-23: Hour of day */
  1: number;
  /** Number of commits */
  2: number;
}
