"use client"

import {FC, PropsWithChildren} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {clsx} from "clsx";

type Props = {
  href: string;
} & PropsWithChildren;

export const NavLink: FC<Props> = ({href, children}) => {
  const pathname = usePathname();
  const commonLinkClassNames = "rounded-md px-3 py-2 text-sm font-medium"
  const activatedLinkClassNames = " bg-gray-900  text-white";
  const notActivatedLinkClassNames = "text-gray-300 hover:bg-gray-700 hover:text-white";
  const linkClassNames = clsx(commonLinkClassNames, pathname === href ? activatedLinkClassNames : notActivatedLinkClassNames);

  return (
    <Link
      href={href}
      className={linkClassNames}
      {...(pathname === href && {"aria-current": "page"})}
    >{children}</Link>
  )
}