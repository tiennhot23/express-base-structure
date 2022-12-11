const baseController = (req, res, next) => {
  try {
    res.json({
      message: 'OK',
      data: [],
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { baseController };
