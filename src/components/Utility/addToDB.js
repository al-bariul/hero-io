const getStoredApps = () => {
  const storedAppsString = localStorage.getItem("readList");

  if (storedAppsString) {
    const parsed = JSON.parse(storedAppsString);
    const num = parsed.map((id) => Number(id));
    return num.filter((id) => !isNaN(id));
  } else {
    return [];
  }
};

const addToStoreDB = (id) => {
  const storedAppData = getStoredApps();

  if (storedAppData.includes(id)) {
    alert("Bhai ei id already exist.");
  } else {
    storedAppData.push(id);
    console.log(storedAppData);
    const data = JSON.stringify(storedAppData);
    localStorage.setItem("readList", data);
  }
};

const removeFromDB = (id) => {
  const storedApps = getStoredApps();
  const remainingApps = storedApps.filter((storedId) => storedId !== id);
  localStorage.setItem("readList", JSON.stringify(remainingApps));
};

export { addToStoreDB, getStoredApps, removeFromDB };
