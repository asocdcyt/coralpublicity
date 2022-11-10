import User from "../models/Users";

export const dashboard = async (req, res) => {
    try {
        const users = await User.find({ _id: req.user.id }).lean();
        res.render("dashboard/dashboard", { users, title: "Tablero"});
    } catch (error) {
        console.log(error);
    }
};

export const invoice = async (req, res) => {
    try {
        const users = await User.find({ _id: req.user.id }).lean();
        res.render("dashboard/invoice", { users, title: "Facturación" });
    } catch (error) {
        console.log(error);
    }
};

export const faq = async (req, res) => {
    try {
        const users = await User.find({ _id: req.user.id }).lean();
        res.render("dashboard/faq", { users, title: "FAQ" });
    } catch (error) {
        console.log(error);
    }
};

export const profile = async (req, res) => {
    try {
        const users = await User.find({ _id: req.user.id }).lean();
        res.render("dashboard/profile", { users, title: "Perfil" });
    } catch (error) {
        console.log(error);
    }
};

export const profileUpdate = async (req, res) => {
    const { phone, firstname, lastname, address, city, country, postalcode, business, morebusiness, position } = req.body;
    await User.findByIdAndUpdate(req.params.id, {phone, firstname, lastname, address, city, country, postalcode, business, morebusiness, position});
    req.flash("success_msg", "Se ha actualizado su perfil correctamente.");
    res.redirect("/profile");
};