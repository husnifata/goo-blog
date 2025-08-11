import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-5HBZ2X7HE9"); // ganti dengan GA Measurement ID kamu
};

export const logPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
