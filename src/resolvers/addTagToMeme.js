module.exports = async function({ name, tag }, { ip, db }) {
  if (ip !== process.env.MEMEBOT_IP && process.env.NODE_ENV !== "development") {
    throw new Error("You are not authenticated to mutation data!");
  }
  const memes = db.collection("memes");
  return await memes
    .findOneAndUpdate({ name }, { $addToSet: { tags: tag } })
    .then(result => result.value);
};
