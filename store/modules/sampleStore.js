const useSampleStore = defineStore("sample", () => {
  const sampleState = ref("");

  function setSampleState(newValue) {
    sampleState.value = newValue;
  }

  return {
    sampleState,
    setSampleState,
  };
});

export default useSampleStore;

