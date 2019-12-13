export const hasContentPref = (contentPrefs: Array<any>, prefKey: string) => {
  return !!contentPrefs.find(x => x.key === prefKey).value;
};
