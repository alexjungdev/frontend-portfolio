"use client";

import "./globals.css"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from './page.module.scss';
import GoToScroll from "@/components/scroll";
import { ShinyButton, Badge } from "@/components/pageStyle";

import Link from 'next/link'
import Router from "next/router";
import { motion, useAnimation, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';//AnimatePresence는 언마운트할때의 anim을 추가할 수 있음(exit에서)
import { wrap } from "popmotion";



export default function Portfolio() {

  const { scrollY } = useScroll();

  const scroll_page1_img = useAnimation();
  const scroll_page1_text = useAnimation();

  const scroll_page2_title = useAnimation();

  const scroll_page3_title = useAnimation();

  const scroll_page4_title = useAnimation();


  //=====================Page1 - About======================================

  const images = [
    {
      id: 1,
      src: "/about1.png",
      srcSet: "/about1.webp",
    },
    {
      id: 2,
      src: "/about2.jpg",
      srcSet: "/about2.webp",
    },
    {
      id: 3,
      src: "/about3.jpg",
      srcSet: "/about3.webp",
    },
    {
      id: 4,
      src: "/about4.jpg",
      srcSet: "/about4.webp",
    },
  ]

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 500 : -500,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 500 : -500,
        opacity: 0,
      };
    },
  };

  const swipeConfidenceThreshold = 50000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  //====================Page3 - Project=====================================
  const [isHovered, setIsHovered] = useState(0);

  const projects = [
    {
      id: 1,
      imgUrl: '/PF1.png',
      webimgUrl: '/PF1.webp',
      title: '포트폴리오 사이트',
      type: 'Website',
      date: '2024-01'
    },
    {
      id: 2,
      imgUrl: '/PG1.png',
      webimgUrl: '/PG1.webp',
      title: '게임월드',
      type: 'Website',
      date: '2023-12~2024-01'
    },
    {
      id: 3,
      imgUrl: '/WG1.png',
      webimgUrl: '/WG1.webp',
      title: '글 생성기',
      type: 'APP',
      date: '2022-06~2022-08'
    },
  ];

  const handleHoverStart = (num) => {
    setIsHovered(num);
  };

  const handleHoverEnd = () => {

    setIsHovered(0);
  };


  //=====================Media Query======================================
  useMotionValueEvent(scrollY, "change", (latest) => {

    const about_top = document.getElementById("about").offsetTop;
    const about_height = document.getElementById("about").offsetHeight;
    const skill_height = document.getElementById("skill").offsetHeight;
    const project_height = document.getElementById("project").offsetHeight;

    if (latest >= about_top / 2) {
      scroll_page1_text.start({ opacity: 1, y: 0 })
      scroll_page1_img.start({ opacity: 1, y: 0 })
    }

    if (latest >= (about_height + skill_height)) {
      scroll_page2_title.start({ opacity: 1, y: 0 })
    }


    if (latest >= (about_height + skill_height + project_height)) {
      scroll_page3_title.start({ opacity: 1, y: 0 })
    }


    if (latest >= 2500) {
      scroll_page4_title.start({ opacity: 1, y: 0 })
    }
  })

  const CategoryText = (text,text_size,animation) => {
    return (
      <motion.div className={`${styles.text} ${text_size}`} style={{ color: 'white' }}
        animate={animation}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.75 }}
      >
        {text}
      </motion.div>
    );
  }

  const Shiny_But = (text, onClick_Method) => {
    return (
      <ShinyButton variant="custom"
        size="lg"
        className={styles.button}
        style={{ backgroundColor: 'black', color: 'white' }}
        onClick={onClick_Method}
      >{text}
      </ShinyButton>
    );
  }


  const Skill_Item = (img_url, img_srcurl, alt_name) => {
    return (
      <motion.img width={200} height={200} src={img_url} srcSet={img_srcurl} alt={alt_name} className={styles.category_grid_item}
        loading="lazy"
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }} />
    );
  }


  return (
    <div id="top" className={styles.container}>
      <div className={styles.main_start_container}>
        <div className={`${styles.text} ${styles.large}`} style={{ color: 'white' }}
        >
          FrontEnd Developer Portfolio
        </div>
        <div className={`${styles.text} ${styles.medium}`} style={{ color: 'white', marginBottom: '1em' }}
        >
          정성헌 | Alex Jung
        </div>
        <div className={styles.button_container}>
          {Shiny_But("Start", () => GoToScroll("about", 0))}
        </div>
      </div>
      <div id="about" className={styles.main_container} style={{ minHeight: '75vh', maxHeight: '100vh', flexDirection: 'column', marginTop: '15%' }}>
        <motion.div className={styles.section_line} style={{ width: '90%' }}
          animate={scroll_page1_text}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.75 }}
        />
        {CategoryText("About",styles.large,scroll_page1_text)}
        {CategoryText(`안녕하세요.
        신입 프론트엔드 개발자를 지원하는 정성헌입니다.
        휴식을 취할때도 개발을 하며 휴식을 할 정도로 개발에 푹 빠져있습니다.
        개발을 공부하는게 가장 재미있으며 문제를 해결하였을때의 성취감이 동기부여의 원천이 됩니다.
        단순한 개발을 넘어서 최적화된 사용자 경험, 원활한 서비스를 위한 운영까지 고려하는 개발자가 되고 싶습니다.`,styles.small,scroll_page1_text)}
        <div className={styles.main_gallery_container}>
          <motion.div className={styles.img_container}
            animate={scroll_page1_img}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <>
              <motion.img
                width={1000}
                height={1000}
                key={page}
                src={images[imageIndex].src}
                srcSet={images[imageIndex].srcSet}
                alt="Image Gallery"
                loading="lazy"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.25 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              />
              <div className={styles.next_but} onClick={() => paginate(1)}>
                {'‣'}
              </div>
              <div className={styles.prev_but} onClick={() => paginate(-1)}>
                {'‣'}
              </div>
            </>

          </motion.div>
        </div>
      </div>
      <div id="skill" className={styles.main_container} style={{ flexDirection: 'column', marginTop: '15%' }}>
        <div className={styles.section_line} style={{ width: '90%' }} />
        {CategoryText("Skills",styles.large,scroll_page2_title)}
        <motion.div
          animate={scroll_page2_title}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          <div className={styles.main_grid_container} style={{ marginTop: '5%' }}>
            <div className={styles.category_container}>
              <Badge className={styles.badge} style={{ color: 'white' }}>
                <div className={styles.badge_text}>
                  Front-End
                </div>
              </Badge>
              <div className={styles.category_grid_container}>
                {Skill_Item("/HTML.png", "/HTML.webp", "HTML")}
                {Skill_Item("/CSS.png", "/CSS.webp", "CSS")}
                {Skill_Item("/JS.png", "/JS.webp", "JS")}
                {Skill_Item("/React.png", "/React.webp", "React.js")}
                {Skill_Item("/React_Native.png", "/React_Native.webp", "React_Native")}
                {Skill_Item("/NextJS.png", "/NextJS.webp", "Next.jS")}
                {Skill_Item("/StyledComponent.png", "/StyledComponent.webp", "Styled Component")}
              </div>
            </div>
            <div className={styles.category_container}>
              <Badge className={styles.badge} style={{ color: 'white' }}>
                <div className={styles.badge_text}>
                  Cloud-Service
                </div>
              </Badge>
              <div className={styles.category_grid_container}>
                {Skill_Item("/Cloudflare.png", "/Cloudflare.webp", "Cloudflare")}
                {Skill_Item("/Azure.png", "/Azure.webp", "Azure")}
              </div>
            </div>
            <div className={styles.category_container}>
              <Badge className={styles.badge} style={{ color: 'white' }}>
                <div className={styles.badge_text}>
                  Deployment
                </div>
              </Badge>
              <div className={styles.category_grid_container}>
                {Skill_Item("/Cloudflare.png", "/Cloudflare.webp", "Cloudflare")}
                {Skill_Item("/Vercel.png", "/Vercel.webp", "Vercel")}
              </div>
            </div>
            <div className={styles.category_container}>
              <Badge className={styles.badge} style={{ color: 'white' }}>
                <div className={styles.badge_text}>
                  Tool
                </div>
              </Badge>
              <div className={styles.category_grid_container}>
                {Skill_Item("/Git.png", "/Git.webp", "Git")}
                {Skill_Item("/Github.png", "/Github.webp", "Git")}
                {Skill_Item("/VisualStudioCode.png", "/VisualStudioCode.webp", "Visual Studio Code")}
                {Skill_Item("/VisualStudioCommunity.png", "/VisualStudioCommunity.webp", "Visual Studio Community")}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div id="project" className={styles.main_container} style={{ flexDirection: 'column', top: '6%', marginTop: '15%' }}>
        <div className={styles.section_line} style={{ width: '90%' }} />
        {CategoryText("Projects",styles.large,scroll_page3_title)}
        {CategoryText("Touch the projects!",styles.medium,scroll_page3_title)}
        <div className={styles.main_project_container} style={{ marginTop: '10%' }}>
          <div className={styles.category_container}>
            <div className={styles.project_grid_container}>
              {projects.map((item) => (
                <motion.div key={item.id} className={styles.project_grid_item_container}
                  animate={scroll_page3_title}
                  initial={{ opacity: 0, y: 100 }}
                  transition={{ duration: 1, delay: 0.25 }}
                >
                  <Link href={`project${item.id}`}>
                    <motion.img width={500} height={1000} src={item.imgUrl} srcSet={item.webimgUrl} alt="project img" style={{ width: '100%', height: '100%' }} className={styles.project_grid_item}
                      loading="lazy"
                      whileHover={{ scale: [null, 1.1, 1.1], filter: 'blur(10px) brightness(0.4)', backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
                      transition={{ duration: 0.5 }}
                      onHoverStart={() => handleHoverStart(item.id)}
                      onHoverEnd={handleHoverEnd}
                    />
                  </Link>
                  <motion.div
                    className={styles.project_overlay_text} style={{ color: 'white' }}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isHovered == item.id ? 1 : 0
                      , transition: { delay: 0.1 }
                    }}
                    exit={{ opacity: 0 }}
                  >
                    <div className={`${styles.text} ${styles.medium}`} style={{ fontWeight: 'bold' }}>{item.title}</div>
                    <p />
                    <div className={`${styles.text} ${styles.small}`}>{item.type}</div>
                    <p />
                    <div className={`${styles.text} ${styles.small}`}>{item.date}</div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="career" className={styles.main_container} style={{ flexDirection: 'column', top: '12%' }}>

      </div>
    </div>
  );
}


