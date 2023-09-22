import { facebook, instagram, twetter, whatsaap } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-8 bg-footer-bg flex max-sm:flex-col max-sm:text-center text-white">
      <div className="flex flex-col gap-2 mt-10">
        <Link href="#">About us</Link>
        <Link href="#">News</Link>
        <Link href="#">Galley</Link>
        <Link href="#">Community</Link>
      </div>
      <div className="flex flex-col mt-10">
        <h4 className="text-center text-light-2 uppercase">Social Medias</h4>
        <p className="mt-2">
          Follow us on our social medias for up to date informations BME HUB
        </p>
        <div className="mt-4 flex gap-4 mx-auto mb-10">
          <Link href="#">
            <Image src={whatsaap} alt="whatsaap icons" width={24} height={24} />
          </Link>
          <Link href="#">
            <Image src={facebook} alt="whatsaap icons" width={24} height={24} />
          </Link>
          <Link href="#">
            <Image
              src={instagram}
              alt="whatsaap icons"
              width={24}
              height={24}
            />
          </Link>
          <Link href="#">
            <Image src={twetter} alt="whatsaap icons" width={24} height={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
