function getId() {
  const parksObjects = JSON.parse(sessionStorage.getItem("parksValues"));
  const maxId = parksObjects.reduce((max, obj) => {
    return obj.id > max ? obj.id : max;
  }, 0);

  return maxId + 1;
}

export { getId };
