"use client";

import styles from "./header.module.scss"
import GoToScroll from "@/components/scroll";

import { useEffect } from 'react';
import { motion, useAnimation, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from "next/link";
import { usePathname } from 'next/navigation'; // => app 폴더를 사용하는 next13에서는 use client와 next/router 사용시 NextRouter was not mounted 에러 발생. next/navigation 이용.

export default function Header() {
    const { scrollY } = useScroll();
    const header_color = useAnimation();
    const text_color = useAnimation();

    const pathname = usePathname();

    useEffect(() => {
        header_color.start({ backgroundColor: 'rgba(52, 52, 52, 0.75)' })
        text_color.start({ color: 'rgba(255, 255, 255, 1)' })
    }, [pathname])


    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest < 500) {
            header_color.start({ backgroundColor: 'rgba(52, 52, 52, 0.75)' })
            text_color.start({ color: 'rgba(255, 255, 255, 1)' })
        }
        else {
            header_color.start({ backgroundColor: 'rgba(255, 255, 255, 0.75)' })
            text_color.start({ color: 'rgba(0, 0, 0, 1)' })
        }

    })

    const Navigate_URL = (target_url) => {
        window.open(target_url, "_blank");
    }

    const HeaderBut_Home = (text, click_function) => {
        return (
            <motion.div className={styles.text_sub}
                animate={text_color} onClick={click_function}
            >
                {text}
            </motion.div>
        );
    }

    const HeaderBut_Project = (text, click_function) => {
        return (
            <Link href="/" style={{ textDecoration: 'none' }}>
                <motion.div className={styles.text_sub}
                    animate={text_color} onClick={click_function}
                >
                    {text}
                </motion.div>
            </Link>
        );
    }

    return (
        <motion.div className={styles.header}
            animate={header_color}
        >
            <div className={styles.container}>
                <div className={styles.sub_container}>
                    {pathname == "/" ?
                        (
                            <motion.div className={styles.text_main}
                                animate={text_color} onClick={() => GoToScroll("top")}
                            >
                                FrontEnd Portfolio
                            </motion.div>
                        )
                        :
                        (
                            <Link href="/" style={{ textDecoration: 'none' }}>
                                <motion.div className={styles.text_main}
                                    animate={text_color} onClick={() => GoToScroll("top")}
                                >
                                    FrontEnd Portfolio
                                </motion.div>
                            </Link>
                        )
                    }

                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.sub_container_grid}>
                    {pathname == "/" ?
                        (
                            <>
                                {HeaderBut_Home("About", () => GoToScroll("about", 0))}
                                {HeaderBut_Home("Skills", () => GoToScroll("skill", 0))}
                                {HeaderBut_Home("Projects", () => GoToScroll("project", 0))}
                                {HeaderBut_Home("Blog", () => Navigate_URL("https://alexjungdev.github.io/"))}
                            </>
                        )
                        :
                        (
                            <>
                                {HeaderBut_Project("About", () => GoToScroll("about", 100))}
                                {HeaderBut_Project("Skills", () => GoToScroll("skill", 100))}
                                {HeaderBut_Project("Projects", () => GoToScroll("project", 100))}
                                {HeaderBut_Project("Blog", () => Navigate_URL("https://alexjungdev.github.io/"))}
                            </>

                        )
                    }

                </div>
            </div>
        </motion.div>
    );
}