import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://www.linkedin.com/in/alexmantello',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://github.com/Jamaalx',
    label: 'GitHub',
    icon: faGithub,
  },
  {
    link: 'https://wa.me/40742230442',
    label: 'WhatsApp',
    icon: faWhatsapp,
  },
  {
    link: 'https://instagram.com/mantelloalexandru',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'mailto:alex@zed-zen.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
