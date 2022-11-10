import User from '../models/Users';

export const renderIndex = (req, res) => {
  res.render("index", {layout:'main-prin', title: "Agencia | Coral Publicity"});
};

export const renderNews = (req, res) => {
  res.render("news", {layout:'main_dash', title: "Noticiero | Coral Publicity"});
};
  
export const renderPrivacy = (req, res) => {
  res.render("privacy", {layout:'main-prin', title: "Políticas de Privacidad"});
};
  
export const renderLegal = (req, res) => {
  res.render("legal", {layout:'main-prin', title: "Aviso Legal"});
};

export const renderCookies = (req, res) => {
  res.render("cookies", {layout:'main-prin', title: "Políticas de Cookies"});
};