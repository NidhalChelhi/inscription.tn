"use client";
import Link from "next/link";
import styles from "../../styles/Buttons.module.css";
import Image from "next/image";

const CustomEmailButton = () => {
  return (
    <Link
      href="mailto:inscription@mesrs.tn"
      className={styles.navigation_button}
    >
      <Image
        src={"/assets/email.png"}
        alt="mail"
        width={24}
        height={24}
        className="object-contain"
      ></Image>
      <p 
        className="flex-grow text-base md:text-sm"
      >
        inscription@mesrs.tn
      </p>
    </Link>
  );
};

export default CustomEmailButton;
