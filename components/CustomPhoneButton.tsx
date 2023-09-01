"use client";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";

const CustomPhoneButton = () => {
    return (
        <Link href="tel:+216 71 834 746" className={styles.button_custom}>
            <Image
                src={"/assets/mobile.png"}
                alt="mobile"
                width={24}
                height={24}
                className="object-cover"
            ></Image>
            <p style={{ direction: "ltr" }}>(+216) 71 834 746</p>
        </Link>
    )
}

export default CustomPhoneButton