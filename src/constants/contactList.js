import { WhatsApp, Instagram, MailOutline } from "@material-ui/icons";

const contactList = [
  {
    label: "(48) 998067264",
    icon: <WhatsApp />,
    action: () => {
      window.open(`https://wa.me/5548998067264`);
    },
  },
  {
    label: "@chocolateriaratones",
    icon: <Instagram />,
    action: () => {
      window.open(`https://www.instagram.com/chocolateriaratones/`);
    },
  },
  {
    label: "chocolateriaratones@gmail.com",
    icon: <MailOutline />,
    action: () => {
      window.open(`mailto:chocolateriaratones@gmail.com`);
    },
  },
];

export default contactList;
