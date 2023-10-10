function signup(req, res) {
  try {
    const { email, fullName, company, role } = req.body;
  } catch (e) {
    res.status(400).json({ status: "error", })
  }
}