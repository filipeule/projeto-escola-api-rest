class HomeController {
  async index(req, res) {
    return res.status(201).json('Home index');
  }
}

export default new HomeController();