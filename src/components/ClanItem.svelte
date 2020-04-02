<script>
  let gavLogo = "assets/img/gav-logo.png";
  let imgBattle = "assets/img/ui/battle.png";
  let imgDeck = "assets/img/ui/deck.png";
  let imgTournament = "assets/img/ui/tournament.png";
  let imgWar = "assets/img/ui/leaderboard.png";
  let imgSocial = "assets/img/ui/social.png";
  let imgTrophy = "assets/img/trophy.png";
  let imgWTrophy = "assets/img/cw-trophy.png";

  export let name = "";
  export let members = "";
  export let clanScore = "";
  export let clanWarTrophies = "";
  export let avgWarWinRate = "";
  export let avgWinRate = "";
  export let avgDonations = "";
</script>

<style>
  section {
    display: flex;
    justify-content: space-between;
    padding: 0.6em;
  }
</style>

<section class="box-light">
  <div class="flex-colum space-between" style="flex:1; margin:0 10px">
    <p>{name}</p>
    <div class="flex space-between">
      <div class="flex">
        <img
          class="mr"
          height="20"
          width="20"
          src={imgBattle}
          alt="background image" />
        <p>{avgWinRate}%</p>
      </div>
      <div class="flex">
        <img
          class="mr"
          height="20"
          width="20"
          src={imgDeck}
          alt="background image" />
        <p>{avgDonations}</p>
      </div>
      <div class="flex">
        <img
          class="mr"
          height="20"
          width="20"
          src={imgWar}
          alt="background image" />
        <p>{avgWarWinRate}%</p>
      </div>
    </div>

  </div>
  <div class="flex-colum space-around" style="margin:0 30px">
    <p class="grey">Members</p>
    <p class="box-dark center">{members}/50</p>
  </div>
  <div class="box-dark" style="margin:0 10px">
    <div class="flex flex-end">
      <p class="">{clanScore}</p>
      <img
        class="ml"
        height="20"
        width="20"
        src={imgTrophy}
        alt="background image" />
    </div>
    <div class="flex flex-end">
      <p class="">{clanWarTrophies}</p>
      <img
        class="ml"
        height="20"
        width="20"
        src={imgWTrophy}
        alt="background image" />
    </div>
  </div>
</section>
