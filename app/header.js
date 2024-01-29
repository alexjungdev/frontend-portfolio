"use client";

import styles from "./header.module.css"
import GoToScroll from "@/components/scroll";

import { useEffect } from 'react';
import { motion, useAnimation, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import Link from "next/link";
import { usePathname} from 'next/navigation'; // => app 폴더를 사용하는 next13에서는 use client와 next/router 사용시 NextRouter was not mounted 에러 발생. next/navigation 이용.

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

    const Navigate_URL = (target_url)=>{
        window.open(target_url,"_blank");
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
                            <Link href="/" style={{textDecoration:'none'}}>
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
                                <motion.div className={styles.text_sub}
                                    animate={text_color} onClick={() => GoToScroll("about",0)}
                                >
                                    About
                                </motion.div>

                                <motion.div className={styles.text_sub}
                                    animate={text_color} onClick={() => GoToScroll("skill",0)}
                                >
                                    Skills
                                </motion.div>
                                <motion.div className={styles.text_sub}
                                    animate={text_color} onClick={() => GoToScroll("project",0)}
                                >
                                    Projects
                                </motion.div>
                                <motion.div className={styles.text_sub}
                                    animate={text_color} onClick={() => Navigate_URL("https://alexjungdev.github.io/")}
                                >
                                    Blog
                                </motion.div>
                            </>
                        )
                        :     
                        (
                            <>
                                <Link href="/" style={{textDecoration:'none'}}>
                                    <motion.div className={styles.text_sub}
                                        animate={text_color} onClick={() => GoToScroll("about",100)}
                                    >
                                        About
                                    </motion.div>
                                </Link>
                                <Link href="/" style={{textDecoration:'none'}}>
                                    <motion.div className={styles.text_sub}
                                        animate={text_color} onClick={() => GoToScroll("skill",100)}
                                    >
                                        Skills
                                    </motion.div>
                                </Link>
                                <Link href="/" style={{textDecoration:'none'}}>
                                    <motion.div className={styles.text_sub}
                                        animate={text_color} onClick={() => GoToScroll("project",100)}
                                    >
                                        Projects
                                    </motion.div>
                                </Link>
                                <Link href="/" style={{textDecoration:'none'}}>
                                    <motion.div className={styles.text_sub}
                                        animate={text_color} onClick={() => Navigate_URL("https://alexjungdev.github.io/")}
                                    >
                                        Blog
                                    </motion.div>
                                </Link>
                            </>

                        )
                    }

                </div>
            </div>
        </motion.div>
    );
}