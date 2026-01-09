export function getFavorites() {
  try {
    const raw = localStorage.getItem("favorites");
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function setFavorites(ids) {
  try {
    localStorage.setItem("favorites", JSON.stringify(ids));
    window.dispatchEvent(
      new CustomEvent("favoritesUpdated", { detail: { favorites: ids } })
    );
  } catch (e) {
    // ignore ahhhh
  } 
}

export function isFavorite(id) {
  const favs = getFavorites();
  return favs.includes(id);
}

export function toggleFavorite(id) {
  const favs = getFavorites();
  const idx = favs.indexOf(id);
  if (idx === -1) {
    favs.push(id);
  } else {
    favs.splice(idx, 1);
  }
  setFavorites(favs);
  return favs;
}

export function subscribeFavorites(cb) {
  const handler = (e) => cb(e.detail.favorites);
  window.addEventListener("favoritesUpdated", handler);
  return () => window.removeEventListener("favoritesUpdated", handler);
}
