<script>
  let crLogo = "assets/img/cr-logo.png";
  let gavLogo = "assets/img/gav-logo.png";

  import ClanItem from "./components/ClanItem.svelte";

  let clanInfo = {
    name: "Clan really big big big name",
    members: "20",
    clanScore: "55403",
    clanWarTrophies: "22300",
    avgWarWinRate: "64",
    avgWinRate: "54",
    avgDonations: "209"
  };

  import { onMount } from "svelte";

  function getClan(tag) {
    fetch("https://royale-clans.herokuapp.com/api/clan/" + tag, {
      method: "GET",
      headers: {}
    })
      .then(response => {
        if (response.status === 429) throw new Error(response.statusText);
        return response.json();
      })
      .then(data => {
        clanInfo = { ...data };
        console.info("clanInfo", clanInfo);
        console.info("----------------");
      })
      .catch(err => {
        console.log(err);
      });
  }

  onMount(async () => {
    getClan("8VLRRC28");
  });
</script>

<style>

</style>

<main>
  <img height="80" src={crLogo} alt="background image" />
  <img height="80" src={gavLogo} alt="background image" />

  <ClanItem {...clanInfo} />
</main>
