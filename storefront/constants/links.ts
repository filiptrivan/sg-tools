export interface NavLinkChild {
  label: string;
  slug: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: readonly NavLinkChild[];
}

export const NAV_LINKS: readonly NavLink[] = [
  {
    label: "Proizvodi",
    href: "/proizvodi/kategorije",
    children: [
      { label: "Električni alati", slug: "elektricni-alati" },
      { label: "Ručni alati", slug: "rucni-alati" },
      { label: "Brusilice", slug: "brusilice" },
      { label: "Dijamantski alati", slug: "dijamantske-ploce-za-keramiku" },
    ],
  },
  { label: "O nama", href: "/o-nama" },
  { label: "Česta pitanja", href: "/cesta-pitanja" },
  { label: "Gde kupiti", href: "/gde-kupiti" },
];

export const PRODUCT_LINKS = [
  { label: "O nama", href: "/o-nama" },
  { label: "Česta pitanja", href: "/cesta-pitanja" },
  { label: "Demo", href: "/kontakt" },
] as const;

export const RESOURCES_LINKS = [
  { label: "Centar za pomoć", href: "/pomoc" },
  { label: "API dokumentacija", href: "/dokumentacija" },
  { label: "Kontaktiraj nas", href: "/kontakt" },
] as const;
