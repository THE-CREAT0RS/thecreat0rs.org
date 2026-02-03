<script>
  import { getI18n } from "$lib/i18n.svelte";
  import { getTheme } from "$lib/theme.svelte";
  const i18n = getI18n();
  const theme = getTheme();
</script>

<nav
  class="fixed top-0 left-0 w-full z-50 bg-black py-4 px-6 md:px-14 flex justify-between items-center transition-colors duration-500"
>
  <div class="flex items-center h-2 w-2 bg-white rounded-full"></div>

  <div class="flex flex-row gap-4 md:gap-6 items-center">
    <!-- <button
      onclick={() => i18n.setLang("en")}
      class="dm-mono text-lg md:text-xs font-light uppercase tracking-widest cursor-pointer transition-all text-white {i18n.currentLang ===
      'en'
        ? 'opacity-100'
        : 'opacity-30 hover:opacity-100'}"
    >
      EN
    </button>
    <div class="w-[1px] h-3 bg-white/20 self-center"></div>
    <button
      onclick={() => i18n.setLang("es")}
      class="dm-mono text-lg md:text-xs font-light uppercase tracking-widest cursor-pointer transition-all text-white {i18n.currentLang ===
      'es'
        ? 'opacity-100'
        : 'opacity-30 hover:opacity-100'}"
    >
      ES
    </button> -->
  </div>
</nav>
