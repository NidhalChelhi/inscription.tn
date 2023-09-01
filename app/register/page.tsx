"use client";
import Link from "next/link";
import styles from "../../styles/Form.module.css";
import Image from "next/image";
import {
    HiOutlineUser,
    HiAtSymbol,
    HiOutlineDeviceMobile,
    HiOutlineQrcode,
} from "react-icons/hi";
import { useEffect, useState } from "react";

export default function Home() {
    const [show, setShow] = useState(false);
    const [randomWord, setRandomWord] = useState("");

    useEffect(() => {
        const generateRandomWord = () => {
            const characters =
                "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            let word = "";
            for (let i = 0; i < 5; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                word += characters[randomIndex];
            }
            setRandomWord(word);
        };
        generateRandomWord();
    }, []);

    return (
        <section className="w-3/4 mx-auto flex flex-col gap-10">
            <div className="title">
                <h1 className="text-gray-800 text-4xl font-bold py-4">
                    Création de compte
                </h1>
                <p className="w-auto mx-auto text-gray-400">
                    Pour créer votre compte sur inscription.tn, veuillez remplir le
                    formulaire ci-dessous. Vous receverez un email d'activation et votre
                    mot de passe par email. Veuillez utiliser votre numéro de carte
                    d'identité nationale (CIN) ou, pour les étudiants étrangers,
                    l'identifiant DGCI délivré par la Direction Générale de la Coopération
                    Internationale du MESRS.
                </p>
            </div>

            {/* form */}
            <form className="flex flex-col gap-5">
                <div className={styles.input_group}>
                    <input
                        type="number"
                        name="cin"
                        placeholder="CIN ou Identifiant DGCI"
                        className={styles.input_text}
                    />
                    <span className="icon flex items-center sm:pr-4 pr-2">
                        <HiOutlineUser size={25} />
                    </span>
                </div>
                <div className={styles.input_group}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className={styles.input_text}
                    />
                    <span className="icon flex items-center sm:pr-4 pr-2">
                        <HiAtSymbol size={25} />
                    </span>
                </div>
                <div className={styles.input_group}>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Telephone mobile"
                        className={styles.input_text}
                    />
                    <span className="icon flex items-center sm:pr-4 pr-2">
                        <HiOutlineDeviceMobile size={25} />
                    </span>
                </div>
                <div className="flex sm:flex-row flex-col gap-4 items-center justify-between">
                    <div className={`${styles.input_group} flex-grow`}>
                        <input
                            type="text"
                            name="code"
                            placeholder="Code de Securité"
                            className={styles.input_text}
                        />
                        <span className="icon flex items-center sm:pr-4 pr-2">
                            <HiOutlineQrcode size={25} />
                        </span>
                    </div>
                    <div className="flex  rounded-2xl">
                        <span className="w-full px-6 py-4 border rounded-2xl bg-slate-50 line-through select-none font-bold">
                            {randomWord}
                        </span>
                    </div>
                </div>
                <span className="text-blue-700 text-end flex justify-end items-center gap-2">
                    <label htmlFor="checkbox-1 cursor-pointer">
                        J'accepte{" "}
                        <a
                            href="https://www2.inscription.tn/ORegMx/mentionslegales.jsp"
                            className="underline"
                        >
                            les termes de confidentialité
                        </a>
                    </label>
                    <input id="checkbox-1" type="checkbox"></input>
                </span>
                {/* login buttons */}
                <div className="input-button">
                    <button type="submit" className={styles.button}>
                        Valider
                    </button>
                </div>

                <div className="input-button">
                    <a
                        href="mailto:inscription@mesrs.tn"
                        className={styles.button_custom}
                    >
                        <Image
                            src={"/assets/email.png"}
                            alt="mail"
                            width="20"
                            height={20}
                        ></Image>
                        inscription@mesrs.tn
                    </a>
                </div>
                <div className="input-button">
                    <a href="tel:+216 71 834 746" className={styles.button_custom}>
                        <Image
                            src={"/assets/mobile.png"}
                            alt="mobile"
                            width={25}
                            height={25}
                        ></Image>
                        (+216) 71 834 746
                    </a>
                </div>
            </form>

            {/* bottom */}
            <p className="text-center text-gray-400 ">
                Vous avez déjà un compte?{" "}
                <Link className="text-blue-700" href={"/"}>
                    Se Connecter
                </Link>
            </p>
        </section>
    );
}
