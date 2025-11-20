import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto px-6 sm:px-8 lg:px-10 bg-[#2B4F4F]">
      <div className="max-w-7xl w-full mx-auto py-8 md:py-10 lg:py-16">
        <div className="flex flex-col md:flex-row gap-20 md:gap-10 items-center justify-between mx-auto max-w-3xl">
          <div>
            <img
              data-sizes="auto"
              data-src="https://dynamicmedia.audemarspiguet.com/is/content/audemarspiguet/ap%20chronicles?dpr=off"
              className="lazyautosizes lazyloaded"
              alt="Logo of the AP Chronicles website"
              //   sizes="164px"
              src="https://dynamicmedia.audemarspiguet.com/is/content/audemarspiguet/ap%20chronicles?dpr=off"
            ></img>
          </div>

          <div>
            <img
              data-sizes="auto"
              data-src="https://dynamicmedia.audemarspiguet.com/is/content/audemarspiguet/maap.%20logos?dpr=off"
              className="lazyautosizes lazyloaded"
              alt="Logo of the Musée Atelier Audemars Piguet website"
              //   sizes="103px"
              src="https://dynamicmedia.audemarspiguet.com/is/content/audemarspiguet/maap.%20logos?dpr=off"
            ></img>
          </div>

          <div>
            <img
              data-sizes="auto"
              data-src="https://dynamicmedia.audemarspiguet.com/is/content/audemarspiguet/AP%20Foundations%20White?dpr=off"
              className="lazyautosizes lazyloaded"
              alt="Logo of the Audemars Piguet Foundation website"
              //   sizes="165px"
              src="https://dynamicmedia.audemarspiguet.com/is/content/audemarspiguet/AP%20Foundations%20White?dpr=off"
            ></img>
          </div>
        </div>
        <hr className="bg-[#8B8C8C] w-full my-20" />

        <div className="text-[#FFF9EE] grid grid-cols-4">
          <div className="">
            <h3 className="uppercase">Watches</h3>
            <ul>
              <li>
                <Link href={"#"}>All Watches</Link>
              </li>

              <li>
                <Link href={"#"}>All Watches</Link>
              </li>
              <li>
                <Link href={"#"}>All Watches</Link>
              </li>
              <li>
                <Link href={"#"}>All Watches</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase">Our world</h3>
            <ul>
              <li>
                <Link href={"#"}>All Watches</Link>
              </li>

              <li>
                <Link href={"#"}>All Watches</Link>
              </li>
              <li>
                <Link href={"#"}>All Watches</Link>
              </li>
              <li>
                <Link href={"#"}>All Watches</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase">Services </h3>
            <ul>
              <li>
                <Link href={"#"}>All Watches</Link>
              </li>

              <li>
                <Link href={"#"}>All Watches</Link>
              </li>
              <li>
                <Link href={"#"}>All Watches</Link>
              </li>
              <li>
                <Link href={"#"}>All Watches</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase">Company</h3>
            <ul>
              <li>
                <Link href={"#"}>All Watches</Link>
              </li>

              <li>
                <Link href={"#"}>All Watches</Link>
              </li>
              <li>
                <Link href={"#"}>All Watches</Link>
              </li>
              <li>
                <Link href={"#"}>All Watches</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
