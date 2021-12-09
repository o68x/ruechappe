<script>
  import { onMount } from "svelte";
  import Cookies from 'js-cookie';

  let systemDarkMode;
  let cookieDarkMode;
  let currentTheme;
  let button = "light";
  let bodyClasses;

  const ICON = { dark: "dark", light: "light" };
  const THEME = { dark: "dark-theme", light: "light-theme" };
  const SCHEME = "(prefers-color-scheme: dark)";

  onMount(() => {
    cookieDarkMode = Cookies.get("colorScheme");
    systemDarkMode = matchMedia(SCHEME).matches;
    bodyClasses = document.body.classList;
    setCurrentTheme();
  });

  function purgeBodyClasses() {
    bodyClasses.remove(THEME.light);
    bodyClasses.remove(THEME.dark);
  };

  function setCurrentTheme() {
    // check if cookie
    if (cookieDarkMode != undefined) {
      currentTheme = cookieDarkMode;
    } else {
      systemDarkMode ? currentTheme = THEME.dark : currentTheme = THEME.light;
      console.log('UNDEFINED!');
    };
    purgeBodyClasses();
    bodyClasses.add(currentTheme);
    Cookies.set("colorScheme", currentTheme);
    console.log("set theme to: " + currentTheme);
    }

  function handleChange(e) {
    // console.log(systemDarkMode);
    currentTheme == THEME.dark ? currentTheme = THEME.light : currentTheme = THEME.dark;
    purgeBodyClasses();
    bodyClasses.add(currentTheme);
    Cookies.set("colorScheme", currentTheme);
    console.log("switch theme to: " + currentTheme);
  };
</script>

<!-- The svg symbols are hidden in the default.astro layout file -->
<div on:click={handleChange}>
  {#if button === 'dark' }
    <svg class="icon"><use xlink:href="#rise" /></svg>
  {:else}
    <svg class="icon"><use xlink:href="#sleep" /></svg>
  {/if}
</div>

<style>
  div {
    cursor: pointer;
  }

  .icon {
    height: 32px;
    width: 32px;
  }
</style>
