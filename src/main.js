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
        var handle = account.handle,
          profile = account.profile;
        setTimeout(() => {
          var avatarURL = profile.avatarURL,
            bannerURL = profile.bannerURL,
            name = profile.name,
            bio = profile.bio;

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

          const profileEL = document.getElementById("profile");
          if (profileEL) {
            profileEL.classList.remove("hidden");
          }
        }, 1000);
      })
      .catch((err) => {
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
        const loadingEL = document.getElementById("loading");
        if (loadingEL) {
          loadingEL.remove();
        }
      });
  }
};
