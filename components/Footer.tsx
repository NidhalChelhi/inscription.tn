"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";

import { footerVariants } from "../utils/motions";

const Footer = () => (
    <motion.footer
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        className="w-full sm:px-24 px-12 pt-16 pb-8"
    >
        <div className="w-full mx-auto flex flex-col sm:flex-row items-center justify-between  gap-8">
            <img src="/logo_footer.png" />
            <p className="font-normal text-[14px] text-grey-800 opacity-50">
                Copyright © 2023 Ministère de l'Enseignement Supérieur et de la
                Recherche Scientifique - Tunisie
            </p>
            <img src="/tunisia.png" width={50} />
        </div>
    </motion.footer>
);

export default Footer;
