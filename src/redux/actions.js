export const addFishAction = (fish) => ({
  type: 'ADD_FISH',
  fish,
});

export const removeFishAction = (id) => ({
  type: 'REMOVE_FISH',
  id,
});
