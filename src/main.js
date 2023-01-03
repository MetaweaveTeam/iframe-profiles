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
          nameEL.innerText = name;

          const bioEL = document.getElementById("bio");
          bioEL.innerText = bio;

          const handleEL = document.getElementById("handle");
          handleEL.innerText = handle;

          const avatarEL = document.getElementById("avatar");
          avatarEL.src = avatarURL;

          const profileEL = document.getElementById("profile");
          profileEL.classList.remove("hidden");
        }, 1000);
      })
      .catch((err) => {
        const errorEL = document.getElementById("error");
        errorEL.classList.remove("hidden");

        const errorTextEL = document.getElementById("error-message");
        errorTextEL.innerText = err.message;
      })
      .finally(() => {
        const loadingEL = document.getElementById("loading");
        loadingEL.classList.add("hidden");
      });
  }
};
