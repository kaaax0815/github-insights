import { CommitActivity, PunchCard, Repos, Traffic } from './api';
import { EpochToDate } from './utils';

/** Api */
const repos = Repos;
const traffic = new Traffic();
const commitActivity = CommitActivity;
const punchCard = PunchCard;

/** Utils */
const epochToDate = EpochToDate;

export { repos, traffic, commitActivity, punchCard, epochToDate };
