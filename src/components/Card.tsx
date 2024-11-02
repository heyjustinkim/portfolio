import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";
import { Image } from "astro:assets";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, description, cover, coverAlt } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    // className: "text-lg font-medium decoration-dashed hover:underline",
    className: "text-lg font-medium",
  };

  return (
    <li className="my-6 flex items-start rounded border-2 border-solid border-skin-muted max-sm:flex-col sm:items-center">
      <div className="flex-1 p-6">
        <a
          href={href}
          // className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
          className="inline-block text-lg font-medium underline decoration-solid underline-offset-4 hover:rounded-md hover:bg-gradient-to-r hover:from-[rgba(233,60,172,75%)] hover:to-[rgba(30,30,232,75%)] hover:text-skin-inverted hover:decoration-transparent active:rounded-md active:bg-gradient-to-r active:from-[#E93CAC] active:to-[#1E1EE8] active:text-skin-inverted active:decoration-transparent"
        >
          {secHeading ? (
            <h2 {...headerProps}>{title}</h2>
          ) : (
            <h3 {...headerProps}>{title}</h3>
          )}
        </a>
        <Datetime datetime={pubDatetime} className="my-3" />
        <p>{description}</p>
      </div>
      <div className="flex-1 p-3">
        <img src={cover} alt={coverAlt} className="rounded-md" />
      </div>
    </li>
  );
}
