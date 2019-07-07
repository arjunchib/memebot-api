module.exports = async function({ name, alias }, db) {
  const memes = db.collection('memes')
  return await memes
    .updateOne({ name }, { $pull: { commands: alias } })
    .then(result => result.ops[0])
}