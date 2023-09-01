"use client";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";


const CustomEmailButton = () => {
    return (
        <Link
            href="mailto:inscription@mesrs.tn"
            className={styles.button_custom}
        >
            <Image
                src={"/assets/email.png"}
                alt="mail"
                width={24}
                height={24}
            ></Image>
            <p>inscription@mesrs.tn</p>
        </Link>
    )
}

export default CustomEmailButton