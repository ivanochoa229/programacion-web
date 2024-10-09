const Careers = require("../models/careers");
const Levels = require("../models/levels");
const { getSeqInstance } = require("./setupDb");

const setupModel = async () => {
  const instanceDb = await getSeqInstance();
  const careers = Careers.init(instanceDb);
  const levels = Levels.init(instanceDb);

  careers.associate({ Levels: levels });
  Levels.associate({ Careers: careers });
};
setupModel();
