type RoomDataType = {
  adults: number;
  children: Array<number | string>;
};

const roomSerializer = (arr: Array<RoomDataType>) => {
  const result = arr
    .map(({ adults, children }) => {
      const serializedChildren = children.length
        ? `:${children.filter((child) => child !== "").join(",")}`
        : "";
      return `${adults}${serializedChildren}`;
    })
    .join("|");
  return result;
};

const roomParser = (str: string) => {
  return str.split("|").map((room) => {
    const [adults, children] = room.split(":");
    return { adults: +adults, children: children?.split(",").map(Number) };
  });
};

export { roomSerializer, roomParser };
