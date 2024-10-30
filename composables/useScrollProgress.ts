// composables/useScrollProgress.ts
import { ref, onMounted, onUnmounted } from "vue";

export const useScrollProgress = () => {
  const scrollY = ref(0);

  const handleScroll = () => {
    scrollY.value = window.scrollY;
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return { scrollY };
};
