'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Directory() {
  const pathname = usePathname();
  const pathArray = pathname.split("/").filter((path) => path);
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
  const arr = ">";
  return (
    <div className="directory">
  <nav aria-label="breadcrumb">
    <ol style={{ display: "flex", listStyle: "none", padding: 0 }}>
      {pathArray.map((path, index) => {
        const href = "/" + pathArray.slice(0, index + 1).join("/");
        const isLast = index === pathArray.length - 1;
        
        return (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <li style={{ marginRight: "7px" }}>
              {!isLast ? (
                <Link href={href}>
                  <p style={{ textDecoration: "none"}}>{capitalize(path)}</p>
                </Link>
              ) : (
                <span style={{cursor:"default"}}>{capitalize(path)}</span>
              )}
            </li>
            {!isLast && <span style={{ marginRight: "7px", cursor:"default" }}>{arr}</span>}
          </div>
        );
      })}
    </ol>
  </nav>
</div>
  );
}
