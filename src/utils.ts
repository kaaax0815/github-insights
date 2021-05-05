/**
 * @param epoch Unix Timestamp
 */
function EpochToDate(epoch: number): Date {
  const date = new Date(epoch * 1000);
  return date;
}

export { EpochToDate };
