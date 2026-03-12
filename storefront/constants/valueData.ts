import { ValueItem } from "@/types/values";
import {
  BadgeDollarSign,
  CheckCircle,
  Hand,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";

export const valueItems: ValueItem[] = [
  {
    id: "Durability",
    title: "Izdržljivost",
    description:
      "Izrađeni od pažljivo odabranih materijala koji mogu izdržati stvarne radne uslove i dugotrajnu profesionalnu upotrebu.",
    icon: ShieldCheck,
  },
  {
    id: "Ergonomics",
    title: "Ergonomija",
    description:
      "Alati dizajnirani da prirodno leže u ruci, pružajući udobnost, kontrolu i smanjenje zamora tokom dugotrajnog rada.",
    icon: Hand,
  },
  {
    id: "Functional Design",
    title: "Funkcionalni dizajn",
    description:
      "Svaki izbor u dizajnu ima jasnu svrhu, obezbeđujući praktičnost, efikasnost i pouzdanost u svakodnevnim zadacima.",
    icon: Wrench,
  },
  {
    id: "Fair Pricing",
    title: "Pravedne cene",
    description:
      "Profesionalni alati po cenama koje ostaju pristupačne, bez kompromisa po pitanju kvaliteta i performansi.",
    icon: BadgeDollarSign,
  },
  {
    id: "Customer Driven",
    title: "Vođeni potrebama kupaca",
    description:
      "Naši proizvodi se razvijaju kroz stvarne povratne informacije majstora, instalatera i korisnika koji svakodnevno koriste alate.",
    icon: Users,
  },
  {
    id: "Reliability",
    title: "Pouzdanost",
    description:
      "Alati na koje možete računati svakog dana, projektovani da pružaju konstantne performanse u zahtevnim okruženjima.",
    icon: CheckCircle,
  },
];
