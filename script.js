async function send() {
  const prompt = document.getElementById("prompt").value;

  const res = await fetch("/.netlify/functions/gemini", {
    method: "POST",
    body: JSON.stringify({ prompt })
  });

  const data = await res.json();
  document.getElementById("result").textContent = data.text;
}
