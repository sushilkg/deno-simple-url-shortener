import { nanoid } from "../deps.ts";

interface Link {
  longLink: string;
  shortCode: string;
}

const links: Link[] = [];

export function addLink(longLink: string) {
  const shortCode = nanoid(4);
  const newLink: Link = {
    shortCode,
    longLink,
  };

  links.push(newLink);
}

export function getLink(shortCode: string): Link | null {
  const link = links.find((link) => link.shortCode === shortCode) ?? null;
  return link;
}

export function getLinks(): Link[] {
  return links;
}
