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

<section class="box-light flex space-between">
  <div
    class="flex-colum space-around"
    style="flex:3; width:100%; margin-right: 5px;">
    <p>{name}</p>
    <div class="flex space-between">
      <div class="flex" style="align-items: center;">
        <img
          class="mr"
          height="20"
          width="20"
          src={imgBattle}
          alt="background image" />
        <p>{avgWinRate}%</p>
      </div>
      <div class="flex" style="align-items: center;">
        <img
          class="mr"
          height="20"
          width="20"
          src={imgDeck}
          alt="background image" />
        <p>{avgDonations}</p>
      </div>
      <div class="flex" style="align-items: center;">
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
  <div class="flex space-between" style="flex:1; width:100%; margin-left: 5px;">
    <div
      class="flex-colum space-around"
      style="font-size: 0.8em; margin-right: 10px">
      <p class="grey">Members</p>
      <p class="box-dark center">{members}/50</p>
    </div>
    <div
      class="box-dark flex-colum space-around"
      style="min-width:100px; align-items: center;">
      <div class="flex flex-end" style="align-items: center;">
        <p class="">{clanScore}</p>
        <img
          class="ml"
          height="20"
          width="20"
          src={imgTrophy}
          alt="background image" />
      </div>
      <div class="flex flex-end" style="align-items: center;">
        <p class="">{clanWarTrophies}</p>
        <img
          class="ml"
          height="20"
          width="20"
          src={imgWTrophy}
          alt="background image" />
      </div>
    </div>
  </div>
</section>
