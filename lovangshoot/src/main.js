const artists = [
  "bravo-le-roux",
  "twenty5k",
  "tony-dayimane",
  "emtee",
  "ORISH",
  "SimulationRxps",
  "USIMAMANE",
  "inkosi-ndebele",
  "k-keed",
  "maglera-doe-boy"
];

const root = document.getElementById("gallery");

artists.forEach(artist => {
  const title = document.createElement("h2");
  title.textContent = artist;
  title.className = "artist-title";
  root.appendChild(title);

  const gallery = document.createElement("div");
  gallery.className = "gallery";
  root.appendChild(gallery);

  for (let i = 1; i <= 40; i++) {
    const num = String(i).padStart(2, "0");

    const img = document.createElement("img");
    img.src = `/assets/artists/${artist}/${artist}-${num}.jpg`;

    img.onerror = () => {
      img.src = `/assets/artists/${artist}/${artist}-${num}.jpeg`;
      img.onerror = () => img.remove();
    };

    gallery.appendChild(img);
  }
});
