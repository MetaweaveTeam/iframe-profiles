<template>
  <div class="splash__container">
    <div class="splash">
      <img src="https://arweave.net/aKIwse_933T-oQpxJnyj-DP0pG03k_88Iw04EbHoolk" alt="ArProfile Logo" />
      <div class="splash__text">
        <h1>ArProfile.org</h1>
        <h2>
          Your identity on the <span class="highlight__sub">permaweb</span>
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
body {
  background: #151515;
}

.splash__container {
  overflow: hidden;
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #151515;
}

.splash {
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: receiptor;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

.highlight__sub {
  color: rgb(238, 22, 173);
}

.splash img {
  width: 15vh;
  max-width: 216px;
  height: auto;
  animation: pulse 2s 2s infinite;
}

.splash__text {
  font-family: "Poppins", sans-serif;
  color: #fff;
  align-items: center;
}

.splash__text h1 {
  color: #fff;
  text-transform: uppercase;
  font-size: 3rem;
  margin: 0;
}

.splash__text h2 {
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  margin: 0;
  animation-name: text;
  animation-duration: 1s;
  animation-delay: 0.7s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@media screen and (prefers-color-scheme: light) {
  body {
    background: #fff;
  }

  .splash__text {
    color: #151515;
  }

  .splash__text h1 {
    color: #151515;
  }

  .splash__text h2 {
    color: #151515;
  }
}

@keyframes text {
  from {
    letter-spacing: 0px;
  }

  to {
    letter-spacing: 4px;
  }
}

@keyframes receiptor {
  from {
    transform: scale(0);
    opacity: 0.25;
  }

  50% {
    transform: scale(1);
    opacity: 0.5;
  }

  to {
    margin-bottom: 100px;
    opacity: 1;
  }
}

@keyframes pulse {
  from {
    transform: scale(1);
    opacity: 1;
  }

  10% {
    transform: scale(0.95);
    opacity: 0.25;
  }

  60% {
    transform: scale(1);
    opacity: 1;
  }
}

@media screen and (max-width: 650px) {
  .splash {
    flex-direction: column;
  }

  .splash__text h2 {
    display: none;
  }
}
</style>
