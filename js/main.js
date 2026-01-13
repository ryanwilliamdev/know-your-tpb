document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const characterName = document.querySelector("#characterName").value.toLowerCase();
  const res = await fetch(`/api?character=${characterName}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#personName").textContent = data.name
  document.querySelector("#personStatus").textContent = data.status
  document.querySelector("#personOccupation").textContent = data.currentOccupation
  document.querySelector("#coinFlip").textContent = data.flip
}