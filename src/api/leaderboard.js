const url = "http://localhost:3001/leaderboard";

export async function fetchLeaderboard() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function postToLeaderboard(newScore, lastScoreId) {
  console.log(newScore);
  try {
    const deleted = await fetch(`${url}/${lastScoreId}`, {
      method: "DELETE",
    });
    console.log("deleted", deleted);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newScore),
    });
    const data = await response.json();
    console.log("data", data);

    return data;
  } catch (err) {
    console.log(err);
  }
}
