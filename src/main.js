import Account from "arweave-account";

window.onload = () => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  var address = params.address;
  if (address) {
    const account = new Account();
    account
      .get(address)
      .then((account) => {
        console.log(account);
        const handle = account.handle,
          profile = account.profile,
          avatarURL = profile.avatarURL,
          bannerURL = profile.bannerURL,
          name = profile.name,
          bio = profile.bio,
          links = profile.links;

        const nameEL = document.getElementById("name");
        if (name && nameEL) {
          nameEL.innerText = name;
        }

        const bioEL = document.getElementById("bio");
        if (bio && bioEL) {
          bioEL.innerText = bio;
        }

        const handleEL = document.getElementById("handle");
        if (handle && handleEL) {
          handleEL.innerText = handle;
        }

        const avatarEL = document.getElementById("avatar");
        if (avatarURL && avatarEL) {
          avatarEL.src = avatarURL;
        }

        const linksEl = document.getElementById("links");
        if (links && linksEl) {
          const getLink = (identify, handle) => {
            if (
              handle.startsWith("http") ||
              handle.startsWith("https") ||
              handle.startsWith("www")
            ) {
              return handle;
            }

            switch (identify.toLowerCase()) {
              case "twitter":
                return `https://twitter.com/${handle}`;
              case "github":
                return `https://github.com/${handle}`;
              case "instagram":
                return `https://instagram.com/${handle}`;
              case "facebook":
                return `https://facebook.com/${handle}`;
              default:
                return false;
            }
          };
          const getIcon = (identify) => {
            switch (identify.toLowerCase()) {
              case "twitter":
                return `<svg class="w-7 h-7 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>`;
              case "github":
                return `<svg class="w-7 h-7 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>`;
              case "instagram":
                return `<svg class="w-7 h-7 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>`;
              case "facebook":
                return `<svg class="w-7 h-7 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>`;
              default:
                return "";
            }
          };

          Object.entries(links).forEach((linkObj) => {
            const [identify, handle] = linkObj;
            const link = getLink(identify, handle);
            const icon = getIcon(identify);
            if (!link || !icon) {
              return;
            }
            const linkEl = document.createElement("a");
            linkEl.href = link;
            linkEl.target = "_blank";
            linkEl.classList.add(
              "text-gray-500",
              "hover:text-gray-200",
              "hover:scale-110",
              "ease-in",
              "duration-150",
              "p-1",
              "sm:p-2",
              "inline-flex",
              "items-center"
            );
            linkEl.innerHTML = icon;
            linksEl.appendChild(linkEl);
          });
        }

        const profileEL = document.getElementById("profile");
        if (profileEL) {
          setInterval(() => {
            profileEL.classList.remove("hidden");
          }, 3000);
        }
      })
      .catch((err) => {
        const profileEL = document.getElementById("profile");
        if (profileEL) {
          profileEL.remove();
        }

        const errorEL = document.getElementById("error");
        if (errorEL) {
          errorEL.classList.remove("hidden");
        }

        const errorTextEL = document.getElementById("error-message");
        if (errorTextEL) {
          errorTextEL.innerText = err.message;
        }
      })
      .finally(() => {
        setTimeout(() => {
          const loadingEL = document.getElementById("loading");
          if (loadingEL) {
            loadingEL.remove();
          }
        }, 3000);
      });
  }
};
