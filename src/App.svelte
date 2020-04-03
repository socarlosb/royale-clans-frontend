<script>
  import { onMount } from "svelte";
  export let clanList;
  import ClanItem from "./components/ClanItem.svelte";
  import Loading from "./components/Loading.svelte";

  let crLogo = "assets/img/cr-logo.png";
  let gavLogo = "assets/img/gav-logo.png";
  let imgCover = "assets/img/cover.png";

  let clansData = [];

  async function fetchClanData(tag) {
    const res = await fetch(
      `https://royale-clans.herokuapp.com/api/clan/${tag}`
    );
    return await res.json();
  }

  function updateData() {
    clansData = [];
    localStorage.removeItem("royale");
    clanList.forEach(async (clanTag, index) => {
      if (index === 0) {
        let resData = await fetchClanData(clanTag);
        clansData = [...clansData, { ...resData }];
      } else {
        setTimeout(async () => {
          let resData = await fetchClanData(clanTag);
          clansData = [...clansData, { ...resData }];
          if (clansData.length === clanList.length) {
            localStorage.setItem("royale", JSON.stringify(clansData));
          }
        }, 5000 * index);
      }
    });
  }

  onMount(() => {
    const localData = localStorage.getItem("royale");
    if (localData) return (clansData = JSON.parse(localData));
    updateData();
  });
</script>

<style>
  main {
    margin: 0;
    padding: 0;
    height: 100vh;
  }
  .top {
    display: flex;
    justify-content: space-between;
  }
</style>

<main>
  {#if clansData.length < clanList.length}
    <img
      style="object-fit: cover;"
      height="100%"
      width="100%"
      src={imgCover}
      alt="background image" />
    <Loading max={clanList.length} value={clansData.length} />
  {:else}
    <div class="top">
      <img height="80" src={crLogo} alt="background image" />
      <img height="80" src={gavLogo} alt="background image" />
    </div>
    <div style="padding:10px 5px;" />
    {#each clansData as clanInfo}
      <ClanItem {...clanInfo} />
    {/each}
    <div style="padding:10px 5px;" />
    <footer>
      <p>Footer</p>
      <button on:click={updateData}>Refresh</button>
    </footer>
  {/if}

</main>
