module.exports = (req, res) => {
  res.status(200).json({ ok: true, runtime: 'node', path: req.url });
};