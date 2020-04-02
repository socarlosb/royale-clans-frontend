<script>
  let crLogo = "assets/img/cr-logo.png";
  let gavLogo = "assets/img/gav-logo.png";

  import ClanItem from "./components/ClanItem.svelte";
  const clansList = [
    "2QG8V2C9",
    "8VLRRC28",
    "9C9VCRUQ",
    "9CL90JVJ",
    "9LU2Y8LU",
    "9CGQ29LR"
  ];

  async function getClansData(tag) {
    try {
      const res = await fetch(
        "https://royale-clans.herokuapp.com/api/clan/" + tag,
        {
          method: "GET",
          headers: {}
        }
      );
      if (res.status === 429) {
        throw new Error("Try again");
      }
      const clanData = await res.json();
      return clanData;
    } catch (error) {
      return setTimeout(() => {
        getClansData(tag);
      }, 5000);
    }
  }
</script>

<style>

</style>

<main>
  <img height="80" src={crLogo} alt="background image" />
  <img height="80" src={gavLogo} alt="background image" />

  <div style="padding:10px 5px;">
    {#each clansList as i}
      {#await getClansData(i)}
        <p>...fetching data</p>
      {:then clanInfo}
        {#if clanInfo.name}
          <ClanItem {...clanInfo} />
        {/if}
      {:catch error}
        <p style="color: red">{error.message}</p>
      {/await}
    {/each}

  </div>
</main>
