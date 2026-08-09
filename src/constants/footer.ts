import { FaInstagram, FaTwitter, FaLinkedinIn, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FooterLinks, SocialLink } from '../types/footer';

export const footerLinks: FooterLinks = {
   Platform: [
    { label: "Jelajahi UMKM", href: "#" },
    { label: "Kategori UMKM", href: "#" },
    { label: "Peta UMKM", href: "#" },
    { label: "Artikel UMKM", href: "#" },
    { label: "Daftarkan UMKM", href: "#" },
  ],

  Company: [
    { label: "Tentang Kami", href: "#" },
    { label: "Visi & Misi", href: "#" },
    { label: "Tim Kami", href: "#" },
    { label: "Partner", href: "#" },
    { label: "Karier", href: "#" },
  ],

  Resources: [
    { label: "Pusat Bantuan", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Kontak", href: "#" },
    { label: "Panduan UMKM", href: "#" },
    { label: "Blog", href: "#" },
  ],

  Legal: [
    { label: "Kebijakan Privasi", href: "#" },
    { label: "Syarat & Ketentuan", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Hak Data Pengguna", href: "#" },
  ],
};

export const socials: SocialLink[] = [
  { icon: FaInstagram, label: 'Instagram', href: '#' },
  { icon: FaTwitter, label: 'Twitter', href: '#' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: '#' },
  { icon: FaTiktok, label: 'TikTok', href: '#' },
  { icon: FaYoutube, label: 'YouTube', href: '#' },
];
