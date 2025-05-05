document.getElementById("authButton").addEventListener("click", function () {
  const confirmed = confirm("ルールをすべて読みましたか？");
  if (confirmed) {
    window.open("https://discord.com/invite/YourInviteCodeHere", "_blank");
  }
});
