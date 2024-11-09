<template>
  <section id="hero">
    <h1 class="tagline">
      <span class="accent">Data Mining Project</span>
      <br />Documentation
    </h1>
    <p class="description"> Analysis for animation_movies data set </p>
    <p class="actions">
      <a class="get-started" href="phase-1/part-1">
        Go To Analysis
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
          <path
            d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
          />
        </svg>
      </a>
    </p>
  </section>
</template>

<style scoped>
  section {
    padding: 42px 32px;
  }

  #hero {
    padding: 96px 32px 0 32px;
    text-align: center;
  }

  .tagline {
    font-size: 76px;
    line-height: 1.25;
    font-weight: 900;
    letter-spacing: -1.5px;
    max-width: 960px;
    margin: 0px auto;
  }

  html:not(.dark) .accent,
  .dark .tagline {
    background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .description {
    max-width: 960px;
    line-height: 1.5;
    color: var(--vt-c-text-2);
    transition: color 0.5s;
    font-size: 22px;
    margin: 24px auto 40px;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .actions a {
    font-size: 16px;
    display: inline-block;
    background-color: var(--vt-c-bg-mute);
    padding: 8px 18px;
    font-weight: 500;
    border-radius: 8px;
    transition: background-color 0.5s, color 0.5s;
  }

  .actions .get-started {
    background: linear-gradient(var(--vt-c-bg-mute), var(--vt-c-bg-mute)) padding-box,
      linear-gradient(45deg, #42d392, #647eff) border-box;
    border: 2px solid transparent;
  }

  .actions .get-started:hover {
    background: linear-gradient(var(--vt-c-gray-light-4), var(--vt-c-gray-light-4)) padding-box,
      linear-gradient(45deg, #42d392, #647eff) border-box;
  }

  .dark .actions .get-started:hover {
    background: linear-gradient(var(--vt-c-gray-dark-3), var(--vt-c-gray-dark-3)) padding-box,
      linear-gradient(45deg, #42d392, #647eff) border-box;
  }

  .actions .get-started .icon {
    width: 12px;
    height: 12px;
    margin-left: 4px;
  }

  .actions .icon {
    display: inline;
    position: relative;
    top: -1px;
    margin-left: 2px;
    fill: currentColor;
    transition: transform 0.2s;
  }

  .actions .get-started:hover {
    transition-duration: 0.2s;
  }

  .actions .get-started:hover .icon {
    transform: translateX(2px);
  }

  .actions .get-started,
  .actions .setup {
    color: var(--vt-c-text-code);
  }

  .actions .get-started:hover,
  .actions .setup:hover {
    background-color: var(--vt-c-gray-light-4);
    transition-duration: 0.2s;
  }

  .dark .actions .get-started:hover,
  .dark .actions .setup:hover {
    background-color: var(--vt-c-gray-dark-3);
  }

  #highlights {
    max-width: 1200px;
    margin: 0px auto;
    color: var(--vt-c-text-2);
  }

  #highlights h2 {
    font-weight: 600;
    font-size: 20px;
    letter-spacing: -0.4px;
    color: var(--vt-c-text-1);
    transition: color 0.5s;
    margin-bottom: 0.75em;
  }

  #highlights p {
    font-weight: 400;
    font-size: 15px;
  }

  @media (max-width: 960px) {
    .tagline {
      font-size: 64px;
      letter-spacing: -0.5px;
    }
    .description {
      font-size: 18px;
      margin-bottom: 48px;
    }
  }

  @media (max-width: 794px) {
    .tagline {
      font-size: 48px;
      letter-spacing: -0.5px;
    }
  }

  @media (max-width: 576px) {
    #hero {
      padding: 56px 32px;
    }
    #highlights h3 {
      margin-bottom: 0.6em;
    }
    #highlights .vt-box {
      padding: 20px 36px;
    }
    .description {
      font-size: 16px;
      margin: 18px 0 30px;
    }
  }

  @media (max-width: 370px) {
    .tagline {
      font-size: 36px;
    }
  }

  #uwu {
    display: none;
  }

  .uwu #uwu {
    display: block;
    width: 100%;
    max-width: 720px;
    margin: -120px auto -20px;
    aspect-ratio: 192 / 108;
    content: url(/logo-uwu.png);
  }

  @media (max-width: 576px) {
    .uwu #uwu {
      margin: -60px auto -10px;
    }
  }
</style>
