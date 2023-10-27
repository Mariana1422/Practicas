export const validateSchema = (Shema) => (req, res, next) => {
    try{
        Shema.parse(req.body);
        next();
    } catch (error) {
        return res
        .status(400)
        .json(error.errors.map((error) => error.message));
    }
}