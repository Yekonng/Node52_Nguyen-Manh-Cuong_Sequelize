import demoService from "../services/demo.service.js";

const demoController = {
  checkServer: (req, res, next) => {
    const checkServer = demoService.checkServer()
    res.json("Hello World!");
  },
};

export default demoController;
