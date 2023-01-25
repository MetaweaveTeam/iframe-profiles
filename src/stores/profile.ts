import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useErrorStore } from "./error";
import { useLoadingStore } from "./loading";
import Account from "arweave-account";

export const useProfileStore = defineStore("rofile", () => {
  const account = new Account();
  const profile = ref({
    handle: "",
    avatarURL:
      "https://arweave.net/OrG-ZG2WN3wdcwvpjz1ihPe4MI24QBJUpsJGIdL85wA",
    bannerURL:
      "https://arweave.net/VhpcVNAAnurFlYm78sNIWujv9CDMxter1OW28WRHDHU",
    name: "",
    bio: "",
    links: ref([] as any[]),
  });
  const errorStore = useErrorStore();
  const loadingStore = useLoadingStore();
  const { setLoading } = loadingStore;
  const { setError } = errorStore;

  const getHref = (identify: string, handle: string) => {
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

  const getLinks = (links: any) => {
    const result: any = [];

    Object.entries(links).forEach((linkObj) => {
      const [identify, handle] = linkObj;
      const link = getHref(identify, handle as string);
      if (!link) {
        return;
      }
      result.push({
        identify: identify,
        href: link,
      });
    });

    return result;
  };

  const addAccount = (account: any) => {
    const handle = account.handle,
      arProfile = account.profile,
      avatarURL = arProfile.avatarURL,
      bannerURL = arProfile.bannerURL,
      name = arProfile.name,
      bio = arProfile.bio,
      links = getLinks(arProfile.links);

    profile.value = {
      handle: handle,
      avatarURL: avatarURL,
      bannerURL: bannerURL,
      name: name,
      bio: bio,
      links: links,
    };
  };

  const setProfile = (type: any, profile: string) => {
    switch (type) {
      case "address":
        account
          .get(profile)
          .then((account: any) => {
            addAccount(account);
          })
          .catch((err: any) => {
            setError(err.message, err.code, err.title);
          })
          .finally(() => {
            setLoading(false);
          });
        break;
      case "handle":
        account
          .find(profile)
          .then((account: any) => {
            addAccount(account);
          })
          .catch((err: any) => {
            setError(err.message, err.code, err.title);
          })
          .finally(() => {
            setLoading(false);
          });
        break;
      default:
        setError("Invalid Profile Type", 500, "Invalid Profile Type");
        break;
    }
  };

  const clearProfile = () => {
    profile.value = {
      handle: "",
      avatarURL:
        "https://arweave.net/OrG-ZG2WN3wdcwvpjz1ihPe4MI24QBJUpsJGIdL85wA",
      bannerURL:
        "https://arweave.net/VhpcVNAAnurFlYm78sNIWujv9CDMxter1OW28WRHDHU",
      name: "",
      bio: "",
      links: [],
    };
  };

  const getProfile = () => {
    return profile.value;
  };

  return { setProfile, clearProfile, getProfile };
});
