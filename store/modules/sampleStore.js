const useSampleStore = defineStore("sample", () => {
  const sampleState = ref("");

  function setSampleState(checkoutUser) {
    sampleState.value = checkoutUser;
  }

  return {
    sampleState,
    setSampleState,
  };
});

export default useSampleStore;
