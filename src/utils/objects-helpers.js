export const updateObjectInArray = (items, itemId, propName, newObjProps) => {
  return items.map((item) => {
    if ((item[propName] = itemId)) {
      return { ...item, ...newObjProps };
    }
    return item;
  });
};
