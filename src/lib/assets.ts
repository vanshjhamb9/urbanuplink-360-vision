const base = "/assets";

export const assets = {
  hero: {
    outdoorDesktop: `${base}/hero/outdoor-desktop.webp`,
    outdoorMobile: `${base}/hero/outdoor-mobile.webp`,
    studioDesktop: `${base}/hero/studio-desktop.webp`,
    studioMobile: `${base}/hero/studio-mobile.webp`,
  },
  beforeAfter: {
    beforeDesktop: `${base}/before-after/before-desktop.webp`,
    afterDesktop: `${base}/before-after/after-desktop.webp`,
    beforeMobile: `${base}/before-after/before-mobile.webp`,
    afterMobile: `${base}/before-after/after-mobile.webp`,
  },
  banners: {
    marketplace: {
      desktop: `${base}/banners/marketplace/Marketplace Use Case Hero Banner desktop 2880 x 1200.webp`,
      mobile: `${base}/banners/marketplace/Marketplace Use Case Hero Banner mobile 1080 x 1350 (4 isto 5).webp`,
    },
    insurance: {
      desktop: `${base}/banners/insurance/insurance Use Case Hero Banner desktop 2880 x 1200.webp`,
      mobile: `${base}/banners/insurance/Insurance Use Case Hero Banner mobile 1080 x 1350 (4 isto 5).webp`,
    },
    fleet: {
      desktop: `${base}/banners/fleet/Fleet Management Use Case Hero Banner desktop 2880 x 1200.webp`,
      mobile: `${base}/banners/fleet/Fleet Management Use Case Hero Banner mobile 1080 x 1350 (4 isto 5).webp`,
    },
    detailing: {
      desktop: `${base}/banners/detailing/car detailing Use Case Hero Banner desktop 2880 x 1200.webp`,
      mobile: `${base}/banners/detailing/car detailing Use Case Hero Banner mobile 1080 x 1350 (4 isto 5).webp`,
    },
  },
  useCases: {
    marketplace: {
      desktop: `${base}/banners/marketplace/Marketplace Use Case Hero Banner mobile 1080 x 1350 (4 isto 5).webp`,
      mobile: `${base}/banners/marketplace/Marketplace Use Case Hero Banner mobile 1080 x 1350 (4 isto 5).webp`,
      process: [
        `${base}/use-cases/marketplace/1. Main Feature Image (Card Style) marketplace mobile 930x 570.webp`,
        `${base}/use-cases/marketplace/2. Main Feature Image (Card Style) marketplace mobile 930x 570.webp`,
        `${base}/use-cases/marketplace/3. Main Feature Image (Card Style) marketplace mobile 930x 570.webp`,
        `${base}/use-cases/marketplace/4. Main Feature Image (Card Style) marketplace mobile 930x 570.webp`,
        `${base}/use-cases/marketplace/5. Main Feature Image (Card Style) marketplace mobile 930x 570.webp`,
      ],
    },
    insurance: {
      desktop: `${base}/use-cases/insurance/1. Main Feature Image (Card Style) insurance desktop 1318 x 808.webp`,
      mobile: `${base}/use-cases/insurance/mobile/1. Main Feature Image (Card Style) insurance mobile 930x 570.webp`,
    },
    fleet: {
      desktop: `${base}/use-cases/fleet/1. Main Feature Image (Card Style) fleet management desktop 1240 x 760.webp`,
      mobile: `${base}/use-cases/fleet/mobile/1. Main Feature Image (Card Style) fleet management mobile 930 x 570..webp`,
    },
    detailing: {
      desktop: `${base}/use-cases/detailing/1. Main Feature Image (Card Style) car detailing desktop 1318x 808.webp`,
      mobile: `${base}/use-cases/detailing/mobile/1. Main Feature Image (Card Style) car detailing mobile 930x 570.webp`,
    },
  },
  cta: {
    desktop: `${base}/cta/background.webp`,
    mobile: `${base}/cta/background-mobile.webp`,
  },
  icons: {
    camera: `${base}/icons/camera.svg`,
    car: `${base}/icons/car.svg`,
    clock: `${base}/icons/clock.svg`,
    document: `${base}/icons/document.svg`,
    star: `${base}/icons/star.svg`,
    threeSixty: `${base}/icons/360.svg`,
    tick: `${base}/icons/tick.svg`,
    lock: `${base}/icons/lock.svg`,
  },
  testimonials: [
    `${base}/testimonials/Testimonial profile image 1.webp`,
    `${base}/testimonials/Testimonial profile image 2.webp`,
    `${base}/testimonials/Testimonial profile image 3.webp`,
  ],
} as const;
